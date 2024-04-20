'use client'
import React, { FormEvent, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import { userContext } from '@/src/Helpers/ContextAPI/usercontext';
import { ISBProducts } from '@/src/Helpers/types';
export interface SearchResult {
    id: string;
    title: string;
}

const SearchComponent = ({ search, items, sidebar }: { sidebar: boolean, items: ISBProducts[], search: boolean }) => {
    const { push } = useRouter()
    const ref = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, [])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleSearch = (selectedTerm: string) => {
        setSearchTerm(selectedTerm);
        push(`/search?item=${encodeURIComponent(selectedTerm)}`);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
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
        searchResults.length = 0
        push(`/search?item=${encodeURIComponent(searchTerm)}`);
    }
    return sidebar ? (
        <form onSubmit={e => submitSearchTerm(e)} className="w-full h-full relative">
            <input
                autoFocus
                value={searchTerm}
                onChange={handleInputChange}
                placeholder='Search for products' type="search" className='text-sm min-w-full h-full rounded-lg outline-none px-4 bg-transparent border-[1px] py-2' name="" id="" />
            {searchResults.length > 0 && (
                <div className='w-full shadow-sm trans text-left bg-white px-4 py-4 rounded-lg' style={{ top: '100%', left: 0, zIndex: 9999, backgroundColor: 'white' }}>
                    <ul>
                        {searchResults.map(result => (
                            <li className='w-full my-3' key={result.id} >
                                <button className='w-full text-left' onClick={() => handleSearch(result.title)}>
                                    {result.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    )
        :
        (
            <motion.div
                initial={{ x: search ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'anticipate' }}
                className='hidden w-fit z-[9999999999999999999999999999999] md:flex items-center mx-auto relative'
            >
                <form onSubmit={e => submitSearchTerm(e)} className="w-full h-full">
                    <input
                        autoFocus
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder='Search for products' type="search" className='text-sm min-w-[300px] h-full rounded-tl-lg rounded-bl-lg outline-none px-4 bg-transparent border-[1px] py-2' name="" id="" />
                    <button><i className='fa-solid fa-magnifying-glass bg-[#171D28] text-white px-5 py-[9px] rounded-tr-md rounded-br-md'></i></button>
                    {searchResults.length > 0 && (
                        <div className='w-full text-left bg-white px-4 shadow-xl py-4 rounded-lg' style={{ position: 'absolute', top: '100%', left: 0, zIndex: 9999, backgroundColor: 'white' }}>
                            <ul>
                                {searchResults.map(result => (
                                    <li className='w-full' key={result.id} >
                                        <button className='w-full text-left' onClick={() => handleSearch(result.title)}>
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