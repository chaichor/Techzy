import React from 'react';
import HeaderHome from '../../components/Home/headerHome';
import InfoHome from '../../components/Home/infoHome';
import ProductCarousel from '../../components/productCarousel';
import KeyboardCarousel from '../../components/keyboardCarousel';
import KeycapsCarousel from '../../components/keycapsCarousel';
import SwitchesCarousel from '../../components/switchesCarousel';

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
      <section className="bg-[#100537] py-20">
        <div className="flex justify-between items-end px-10 z-10">
          {/* Nuevo H1 agregado */}
          <h1 className="text-[#8252F7] text-xl lg:text-3xl font-semibold">
          MAS VENDIDOS
          </h1>
          
          <h2 className="text-[#41D7FC] text-xl lg:text-3xl font-light mb-4">
          VER MÁS
          </h2>
        </div>

        <ProductCarousel />
      </section>

      <section className="bg-[#100537] py-20">
        <div className="flex justify-between items-end px-10 z-10">
          {/* Nuevo H1 agregado */}
          <h1 className="text-[#8252F7] text-xl lg:text-3xl font-semibold">
          TECLADOS
          </h1>
          
          <h2 className="text-[#41D7FC] text-xl lg:text-3xl font-light mb-4">
          VER MÁS
          </h2>
        </div>

        <KeyboardCarousel/>
      </section>

      <section className="bg-[#100537] py-20">
        <div className="flex justify-between items-end px-10 z-10">
          {/* Nuevo H1 agregado */}
          <h1 className="text-[#8252F7] text-xl lg:text-3xl font-semibold">
          KEYCAPS
          </h1>
          
          <h2 className="text-[#41D7FC] text-xl lg:text-3xl font-light mb-4">
          VER MÁS
          </h2>
        </div>

        <KeycapsCarousel />
      </section>

      <section className="bg-[#100537] py-20">
        <div className="flex justify-between items-end px-10 z-10">
          {/* Nuevo H1 agregado */}
          <h1 className="text-[#8252F7] text-xl lg:text-3xl font-semibold">
          SWITCHES
          </h1>
          
          <h2 className="text-[#41D7FC] text-xl lg:text-3xl font-light mb-4">
          VER MÁS
          </h2>
        </div>

        <SwitchesCarousel />
      </section>
    </>
  );
};

export default Home;
