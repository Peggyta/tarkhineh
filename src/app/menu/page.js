import React from 'react';
import connectDB from '@/utils/connectDB';
import TProduct from '@/models/TProduct';
import MainMenu from '@/components/template/MainMenu';

async function MenuPage({searchParams}) {
    
    await connectDB();
    let products = await TProduct.find();
    if(searchParams.category) {
        products = products.filter((i)=> i.category === searchParams.category)
    };
    return (
        <div>
            <MainMenu foodData={products} />
        </div>
    );
};

export default MenuPage;