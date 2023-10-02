import React from 'react';
import SliderPage from '../module/homepage/SliderPage';
import Categories from '../module/homepage/Categories';
import FeatureBanner from '../module/homepage/FeatureBanner';
import IndexBranchCards from '../module/homepage/IndexBranchCards';

const HomePage = () => {
    return (
        <div>
            <SliderPage />
            <Categories />
            <FeatureBanner />
            <IndexBranchCards />
        </div>
    );
};

export default HomePage;