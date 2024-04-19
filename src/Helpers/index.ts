import { ChangeEvent, FormEvent } from "react";
import { Countries, ISBProducts, addressType, cartItem, loremPicsum, productType, reviewType, wishList } from "./types";
import axios from "axios";
import { createSupabaseServerClient, readUserSession, readUserSessionCLient } from "./supabase";
import { createSupabaseServerClientCSR } from "./supabase/superbaseCSR";


export class Helpers {
    static toBase64 = (file: File) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    static couponCodes = [
        "5yZO4",
        "usDLR",
        "OEE0Ll",
        "37UVgk",
        "JH628a",
        "9XKjGI",
        "BRe1CK"
    ]
    static async checkUserExists(email_address: string) {
        const supabase = await createSupabaseServerClient()
        const userExists = await supabase.rpc('email_exists', { email_address });
        return userExists.data
    }
    static filterCategory = (category: string, items: ISBProducts[]) => {
        return category === 'all' ? items : items.filter(item => item.category === category)
    }
    static applyCouponCode = (cartTotalPrice: number, code: string, setStatus: any,
        enqueueSnackbar: any): number => {
        let discount: number = 0
        const coupnValues = [0.30, 0.15, 0.10]
        setStatus('validating coupon code')

        if (!this.couponCodes.includes(code)) {
            setStatus("Coupon code is invalid or expired")
            enqueueSnackbar(`Invalid coupon code!!`, {
                variant: "error"
            })
            discount = 0
        } else {
            let randomDiscountIndex = Math.floor(Math.random() * coupnValues.length);
            enqueueSnackbar(`Applying ${coupnValues[randomDiscountIndex] * 100}% discount`, {
                variant: "success"
            })
            setStatus("Coupon code applied")
            discount = cartTotalPrice - (cartTotalPrice * coupnValues[randomDiscountIndex])
        }
        setTimeout(() => {
            setStatus("")
        }, 3000);
        return discount
    }
    static async formatProducts() {
        const insta = await this.getProducts('https://picsum.photos/v2/list').then(item => item).catch(() => []) as loremPicsum[]
        console.log(insta)
        if (!insta) {
            return []
        }
        return insta.map(prod => prod.download_url)
    }
    static isBrowser = () => typeof window !== "undefined";
    static getSingle = async (slug: string) => {
        const data = await this.getProducts('https://fakestoreapi.com/products') as productType[]
        if (!data) return;
        const single = data.find((x) => {
            return x.id == slug;
        });
        return single;
    }
    static formatPlaceHolder = (item: productType): ISBProducts => {
        const items = {
            ...item,
            price: item.price + 10000,
            images: [(item.image)],
            slug: item.title.match(/\b(\w+)\b/g)?.join('-') ?? "new-arival",
            sizes: ["M", "L", "XL"],
            colors: ["black,white", 'brown'],
            in_Stock: true,
            count: 3,
            dimensions: {
                width: 200,
                height: 300
            },
            rating: item.rating.rate,
            reviews: {
                reviews: []
            }
        }
        return items
    }
    static fetchSupabaseProducts = async () => {
        const supabase = await createSupabaseServerClient()
        const { data: products } = await supabase.from("products").select();
        return products
    }
    static fetchSupabaseUsers = async () => {
        const supabase = await createSupabaseServerClient()
        const user = await readUserSession()
        const userID = user.data.user?.id
        const { data: users } = await supabase.from("users").select();
        const foundUser = users?.find(user => user.userID == userID)

        return foundUser
    }
    static fetchSupabaseUsersClient = async () => {
        const supabase = await createSupabaseServerClientCSR()
        const user = await readUserSessionCLient()
        const userID = user.data.user?.id
        const { data: users } = await supabase.from("users").select();
        const foundUser = users?.find(user => user.userID == userID)

        return foundUser
    }
    static updateAddress = async (
        toast: any,
        data: addressType,
        setModal: (stat: boolean) => void
    ) => {
        const data2 = {
            address: data
        }

        setModal(true)
        await fetch(('/api/update/address'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
            .then(async res => {

                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null
                setModal(false)
                if (!res.ok) {

                    const error = (data && data.message) || res.status;
                    toast.error(
                        error
                    )
                    toast.error("Error. " + error);

                } else if (res.ok) {
                    toast.success("Your address has been updated successfully");
                }
            })
            .catch(err => {
                setModal(false)
                console.log(err)
            })


    };
    static CalculateTotal = (cart: cartItem[]) => {
        return cart.map((x) => x.item.price * x.quantity).reduce((a, b) => { return a + b }, 0);
    };

    static updateWishList = async (e: FormEvent, wishList: wishList, setDidReview: (bool: boolean) => void, toast: any) => {
        setDidReview(true)
        // const oldItems = await this.fetchSupabaseUsersClient().then(x => x.wishlist.items) as wishList[]
        e.preventDefault()
        const data2 = {
            oldItems: [],
            wishList
        }

        await fetch(('/api/update/wishlist'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(JSON.parse(JSON.stringify(data2)))
        })
            .then(async res => {

                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null
                setDidReview(false)
                if (!res.ok) {

                    const error = (data && data.message) || res.status;
                    toast.error(
                        error
                    )
                    toast.error("Error. " + error);

                } else if (res.ok) {
                    toast.success("Product has been added to wishlist");
                }
            })
            .catch(err => {
                setDidReview(false)
                console.log(err)
            })
        setDidReview(false)

    }
    static updateReviews = async (slug: string, e: FormEvent, item: ISBProducts, id: string, review: reviewType, enqueueSnackbar: any, setDidReview: (review: boolean) => void) => {
        const itemToUpdate = item.reviews?.reviews
        const reviewData = {
            review,
            itemToUpdate,
            id,
            slug
        }

        setDidReview(true);
        try {
            const url = "/api/review";
            const res = await axios.post(url, reviewData);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("Review submitted successfully", {
                    variant: "success",
                });
            setTimeout(() => {
                const resetForm = e.target as HTMLFormElement;
                resetForm.reset();
                // location.reload()
            }, 3000);
        } catch (error) {
            enqueueSnackbar(
                "There was an error submitting review, try again: " + error,
                {
                    variant: "error",
                }
            );

        }

        setDidReview(false)

    }
    static getSingleProduct = async (id: string) => {
        const data = await this.fetchSupabaseProducts() as ISBProducts[]
        if (!data) {
            return
        }
        const single = data.find((x) => {
            return x.slug == id;
        });
        return single;

    }
    static isValidUrl = (urlString: string) => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }
    static async getProducts(url: string) {
        const products = await fetch(url)
            .then(async (res) => {
                const isJson = res.headers
                    .get("content-type")
                    ?.includes("application/json");
                const data = isJson ? await res.json() : null;
                if (res.ok || res.status === 200) {
                    return data;
                }
                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch((err) => {
                return [];
            });
        return products;
    }

    static validateSignUpForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        toast: any,
        push: any
    ) => {
        e.preventDefault();
        const data = {
            fullName: (
                e.target[0 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
            ).value,
            userName: (
                e.target[
                1 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            email: (
                e.target[
                2 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            password: (
                e.target[
                3 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            CPassword: (
                e.target[
                4 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };

        if (data.fullName.trim() === "") {
            toast.error("Full name cannot be empty");
            return;
        } else if (data.userName === "") {
            toast.error("Specify a username please");
            return;
        } else if (data.password !== data.CPassword) {
            toast.error("Password does not match");
            return;
        }

        setStatus("Sending credentials....");

        await fetch(('/api/signup'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async res => {
                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null

                if (!res.ok) {
                    setStatus("...Error creating user");
                    const error = (data && data.message) || res.status;
                    toast.error(error)
                    return Promise.reject(error)

                } else if (res.ok) {
                    toast.success("User profile created successfully");
                    setStatus("User created successfully");
                    setTimeout(() => {
                        const resetForm = e.target as HTMLFormElement;
                        resetForm.reset();
                        push('/login?verify=true');
                    }, 3000);
                    return res.json()
                }
            })
            .catch(err => {
                console.log(err)
            })

        setStatus("Sign up");
    };
    static validateLoginForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        toast: any,
    ) => {
        e.preventDefault();
        const data = {
            email: (
                e.target[
                0 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            password: (
                e.target[
                1 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };

        if (data.email.trim() === "") {
            toast.error("Email cannot be empty");
            return;
        } else if (data.password === '') {
            toast.error("Oga enter your password");
            return;
        }

        setStatus("Sending credentials....");

        await fetch(('/api/login'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async res => {
                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null

                if (!res.ok) {
                    setStatus("...Error signin in user");
                    const error = (data && data.message) || res.status;
                    toast.error(error)
                    return Promise.reject(error)

                } else if (res.ok) {
                    toast.success("Login success")
                    setStatus("Welcome.");
                    setTimeout(() => {
                        const resetForm = e.target as HTMLFormElement;
                        location.href = ('/?newlogin=true')
                        // push('/?newlogin=true')
                        resetForm.reset();
                    }, 3000);
                    return res.json()
                }
            })
            .catch(err => {
                console.log(err)
            })
        setStatus("Log in");
    };

    static handleFileSelected = async (
        e: ChangeEvent<HTMLInputElement>,
        enqueueSnackbar: any,
        setSize: any,
        setUserFile: any,
        setCurrFile: any,
        size: string
    ) => {
        const files = (e.target as HTMLInputElement).files;

        if (!files) return;
        const fileType = files[0].type;
        console.log(fileType);
        const acceptedFileTypes: string[] = [
            "application/pdf",
            "image/png",
            "image/jpeg",
            "image/png",
        ];
        if (!acceptedFileTypes.includes(fileType)) {
            enqueueSnackbar(
                "File type not supported. Kindly upload a valid pdf, jpeg or jpg",
                {
                    variant: "error",
                }
            );
            return;
        }

        const sizes = parseFloat(String(files[0].size / (1024 * 1024))).toFixed(2);
        console.log(sizes);
        setSize(this.formatBytes(files[0].size));
        setCurrFile(files[0].name + `, ${size}`);
        if (Number(sizes) > 2) {
            enqueueSnackbar("Max file size is 2MB", {
                variant: "error",
            });
            return;
        }

        setUserFile(files[0]);
    };
    static handleImageChange = (userFile: File | null, setCurrProfile: (file: string | ArrayBuffer | null) => void) => {

        if (userFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setCurrProfile(reader.result);
            };
            reader.readAsDataURL(userFile);
        }
    };
    static formatBytes(bytes: number, decimals = 2) {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
    static uploadProfile = async (
        toast: any,
        data: string
    ) => {
        const data2 = {
            avatar_URI: data
        }
        console.log("awaitinf..")
        await fetch(('/api/update/profile'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
            .then(async res => {
                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null

                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    toast.error(
                        error
                    );
                    return Promise.reject(error)

                } else if (res.ok) {
                    toast.success("Your profile image has been uploaded successfully");
                    return data
                }
            })
            .catch(err => {
                toast.error(err)
                console.log(err)
            })
    };
    static async getCountries(url: string) {
        const products = await fetch(url)
            .then(async (res) => {
                const isJson = res.headers
                    .get("content-type")
                    ?.includes("application/json");
                const data = isJson ? await res.json() : null;
                if (res.ok || res.status === 200) {
                    let formattedCountries = this.formatCountries(data)
                    return this.sortAlphabetically(formattedCountries)
                }
                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch((_err) => {
                return []
            });
        return products;
    }
    static formatCountries(countries: Countries[]) {
        return countries.map((country) =>
        ({
            name: `${country.name.common}`,
            nameAndSymbol: `${country.name.common} ${country.flag}`,
            idd: {
                root: `${country.idd.root}`,
                suffixes: `${country.idd.suffixes}`
            },
            population: country.population
        }))
    }
    static sortAlphabetically(countries: {
        nameAndSymbol: string;
        population: number;
    }[]) {
        return countries.sort(function (a, b) {
            if (a.nameAndSymbol < b.nameAndSymbol) {
                return -1;
            }
            if (a.nameAndSymbol > b.nameAndSymbol) {
                return 1;
            }
            return 0;
        });
    }
    static filterProductsByPrice(products: ISBProducts[],
        minPrice: number,
        maxPrice: number): ISBProducts[] {
        return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }
}