import React from 'react';
import HeaderHome from '../../components/Home/headerHome'; 
import InfoHome from '../../components/Home/InfoHome';

const Home = () => {
    return (
        <>
        <div className="bg-[#100537]">
            <div className="pt-24"> {/* Espacio para separar del Nav */}
                <HeaderHome /> 

            </div>
            
        </div>
        <div className="bg-[#100537]">
            <div className="pt-1"> {/* Espacio para separar del Nav */}
            <InfoHome />
            </div>
            
        </div>

                 
</>
    );
};

export default Home;