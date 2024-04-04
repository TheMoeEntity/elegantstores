import { FormEvent } from "react";
import { fakeProductType, productType } from "./types";
import axios from "axios";

export class Helpers {
    static async formatProducts() {
        const insta = await this.getProducts('https://api.escuelajs.co/api/v1/products/?categoryId=3') as fakeProductType[]
        return insta.map(prod => prod.images[0])
    }
    static getSingle = async (slug: string) => {
        const data = await this.getProducts('https://fakestoreapi.com/products') as productType[]
        if (!data) return;
        const single = data.find((x) => {
            return x.id == slug;
        });
        return single;
    }
    static  isValidUrl = (urlString:string) => {
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
                return JSON.stringify(err);
            });
        return products;
    }

    static validateSignUpForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus:any,
        enqueueSnackbar: any,
        push:any
    ) => {
        e.preventDefault();
        const data = {
            fullName: (
                e.target[
                0 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
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
            enqueueSnackbar("Full name cannot be empty", {
                variant: "error",
            });
            return;
        } else if (data.userName === "") {
            enqueueSnackbar("Specify a username please", {
                variant: "error",
            });
            return;
        } else if (data.password !== data.CPassword) {
            enqueueSnackbar("Password does not match", {
                variant: "error",
            });
            return;
        }

        setStatus("Sending credentials....");
        try {
            const url = "/api/signup";
            const res = await axios.post(url, data);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("User profile created successfully", {
                    variant: "success",
                });
    
            setStatus("User created successfully");
            setTimeout(() => {
                const resetForm = e.target as HTMLFormElement;
                resetForm.reset();
                push('/login?verify=true');
            }, 3000);
        } catch (error) {
            setStatus("...Error creating user");
            enqueueSnackbar(
                "There was an error creating user, try again: " + error,
                {
                    variant: "error",
                }
            );
            console.log(error);
        }
        setStatus("Sign up");
    };
    static validateLoginForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        enqueueSnackbar: any,
        push:any
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
            enqueueSnackbar("Email cannot be empty", {
                variant: "error",
            });
            return;
        } else if (data.password === '') {
            enqueueSnackbar("Oga enter your password", {
                variant: "error",
            });
            return;
        }

        setStatus("Sending credentials....");
        try {
            const url = "/api/login";
            const res = await axios.post(url, data);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("Login success", {
                    variant: "success",
                });
            console.log(res.status);
            console.log(res);
            setStatus("Login processed.");
            setTimeout(() => {
                const resetForm = e.target as HTMLFormElement;
                push('/?newlogin=true')
                resetForm.reset();
            }, 3000);
        } catch (error) {
            setStatus("...Error Loggin in user");
            enqueueSnackbar(
                "There was an error logging in user, try again: " + error,
                {
                    variant: "error",
                }
            );
            console.log(error);
        }
        setStatus("Log in");
    };
}