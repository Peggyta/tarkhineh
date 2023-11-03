import React from 'react';
import connectDB from '@/utils/connectDB';
import TProduct from '@/models/TProduct';
import MainMenu from '@/components/template/MainMenu';
import FoodDetail from '@/components/template/FoodDetail';

async function MenuPage({searchParams}) {
    
    await connectDB();
    let products = await TProduct.find();
    if(searchParams.category) {
        products = products.filter((i)=> i.category === searchParams.category)
    };
    const showModal = searchParams?.modal;
    return (
        <div>
            <MainMenu foodData={products} />
            {showModal && <FoodDetail />}
        </div>
    );
};

export default MenuPage;