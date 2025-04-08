import React from 'react';
import HeaderHome from '../../components/Home/headerHome';
import InfoHome from '../../components/Home/infoHome';
import ProductCarousel from '../../components/productCarousel';

const Home = () => {
  return (
    <>
      <div className="bg-[#100537]">
        <div className="pt-24"> {/* Espacio para separar del Nav */}
          <HeaderHome />
        </div>
      </div>

      <div className="bg-[#100537]">
        <div className="pt-1">
          <InfoHome />
        </div>
      </div>

      {/* Sección de productos en modo Carousel */}
      <section className="bg-[#100537] py-20 ">
        <ProductCarousel />
      </section>
    </>
  );
};

export default Home;