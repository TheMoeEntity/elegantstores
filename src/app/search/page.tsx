import { Helpers } from '@/src/Helpers'
import { ISBProducts } from '@/src/Helpers/types';
import Search_Section from '@/src/components/Cards/Search_Section';

const Search = async () => {
    const searchResult = 'Versace sweatshirt'
    const products = await Helpers.fetchSupabaseProducts() as ISBProducts[]
    
    return (
        <main className="max-w-7xl mx-auto">
            <div className='w-[95%] mx-auto py-10'>
                <div className="text-gray-500 flex gap-x-3 items-center my-7 mx-auto w-[95%]">
                    <span>Home</span><span className='fa-angle-right fa'></span><span className='text-[#377DFF]'>Search results</span>
                </div>
                <div className='text-xl mx-auto my-7 w-[90%] flex justify-between md:flex-row flex-col gap-y-8'>
                    <div className='text-3xl font-extrabold'>
                        Search Results - {searchResult}
                    </div>
                    <div>
                        Sort by
                        <i className='fa-solid fa-angle-down ml-3'></i>
                    </div>
                </div>
            </div>
            <Search_Section products={products} />
        </main>
    )
}

export default Search