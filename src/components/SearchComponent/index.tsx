'use client'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import { userContext } from '@/src/Helpers/ContextAPI/usercontext';
import { ISBProducts } from '@/src/Helpers/types';
interface SearchResult {
    id: string;
    title: string;
}

const SearchComponent = ({ search, items }: { items: ISBProducts[], search: boolean }) => {
    const { push } = useRouter()

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleSearch = (selectedTerm: string) => {
        setSearchTerm(selectedTerm);
        push(`/search?item=${encodeURIComponent(selectedTerm)}`);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(items)
    }

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const filteredResults = items.filter(
                result =>
                    result.title.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(result => ({ id: result.id, title: result.title }));
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, items]);
    const submitSearchTerm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        push(`/search?item=${encodeURIComponent(searchTerm)}`);
    }
    return (
        <motion.div
            initial={{ x: search ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'anticipate' }}
            className='hidden w-fit md:flex items-center mx-auto relative'
        >
            <form onSubmit={e => submitSearchTerm(e)} className="w-full h-full">
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder='Search for products' type="search" className='text-sm min-w-[300px] h-full rounded-tl-lg rounded-bl-lg outline-none px-4 bg-transparent border-[1px] py-2' name="" id="" />
                <button><i className='fa-solid fa-magnifying-glass bg-[#171D28] text-white px-5 py-[9px] rounded-tr-md rounded-br-md'></i></button>
                {searchResults.length > 0 && (
                    <div className='w-full px-4 shadow-xl py-4 rounded-lg' style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000000000, backgroundColor: 'white' }}>
                        <ul>
                            {searchResults.map(result => (
                                <li key={result.id} >
                                    <button onClick={() => handleSearch(result.title)}>
                                        {result.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>

        </motion.div>
    )
}

export default SearchComponent