'use client';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import SearchList from './SearchList';

const SearchFilter = () => {
    const[showSearch, setShowSearch] = useState(false);
    const[search, setSearch] = useState('');
    const[searchTerm, setSearchTerm] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
       
    const searchHandler = e => {
        setSearch(e.target.value);
        if(e.target.value === '') {
            setShowSearch(false)
        } else if (e.target.value.lenght >=3) {
            setShowSearch(true)
        }
    }
    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('/api/tproduct')
            const data = await response.json()
            if(data)setIsLoading(false)
            setSearchTerm(data.data)
        };
        fetchData();
    },[]);
    const searchProduct = searchTerm.filter((i)=> i.title.includes(search));
    function searchList() {
        if(isLoading) return <h3>در حال جستجو</h3>
            if(showSearch && searchTerm.length) {
                return( 
                    <SearchList searchProduct={searchProduct} />
            )
        }; 
    }
    return (
        <>
        <div className='flex lg:flex-row flex-col justify-between pt-4 md:pl-12 md:gap-6 w-full px-4' >
           <FilterSlider />
            <div className='flex items-center border border-bordercolor px-2 md:w-3/4 w-full rounded-md md:items-center hidden lg:flex'>
                <input
                    type='text'
                    value={search}
                    onChange={searchHandler} 
                    className='w-full pb-2 pt-1 text-sm font-medium outline-none' placeholder='جستجو' />
                <SearchIcon />
            </div>
        </div>
        <div className='px-4'>
        <div className='flex items-center border border-bordercolor px-2 sm:w-500 w-full mt-4 mx-auto rounded-md justify-center  lg:hidden'>
                <input
                    type='text'
                    value={search}
                    onChange={searchHandler} 
                    className='w-full pb-2 pt-1 text-sm font-medium outline-none' placeholder='جستجو' />
                <SearchIcon />
            </div>
        </div>
        <div>{searchList()}</div> 
    </>
    );
};

export default SearchFilter;