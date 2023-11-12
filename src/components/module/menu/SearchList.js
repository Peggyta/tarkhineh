import React from 'react';
import SearchCard from './SearchCard';

const SearchList = ({searchProduct}) => {
    return (
        <div>
             {searchProduct.length > 0 ? searchProduct.map((item) => (
            <SearchCard key={item._id} data={item} />
            )) : <div className='w-[560px]'>
                <p className='text-raven text-center'>نتیجه‌ای یافت نشد</p>
            </div> }
        </div>
    );
};

export default SearchList;