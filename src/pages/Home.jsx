import React from 'react';
import HeroSlider from '../components/HeroSlider';
import BrandLogos from '../components/BrandLogos';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <BrandLogos />
      <CategoryGrid />
      <ProductGrid />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default Home;
