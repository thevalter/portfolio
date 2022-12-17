import HeroImage from '../assets/valtin.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {

    const animationHeader = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

    const animationImg = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

    return (
        <div name="Home" className="flex h-screen max-md:h-auto w-full bg-black">

            <Reveal keyframes={animationHeader} className='w-10/12 m-auto'>
                <div className='w-full flex items-center mx-auto justify-between h-full px-4 max-lg:mt-24 max-md:flex-col'>

                    <div className='flex flex-col justify-center h-full'>
                        <div className='text-gray-200 text-xl sm:text-3xl py-4 flex items-center'>
                            Olá, meu nome é&nbsp;<span className='text-green-500 text-xl sm:text-3xl lg:text-4xl'>
                                <Typewriter
                                    options={{
                                        strings: ['Valter Nunes'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>

                        </div>
                        <h2 className='text-4xl sm:text-6xl pb-4 max-md:w-full w-5/6 text-gray-200'>
                            Desenvolvedor web
                        </h2>
                        <div>

                            <Link to="Projetos" smooth duration={500} className='group text-white w-fit px-6 py-3 mb-16 my-2 flex items-center rounded-md hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 cursor-pointer'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <Reveal keyframes={animationImg} className='flex items-center max-sm:mt-16 h-3/6 z-10'>
                        <img src={HeroImage} alt="my profile" className='rounded-2xl max-w-full max-lg:max-h-96 max-h-80' />
                    </Reveal>
                </div>
            </Reveal>
        </div>
    )
};

export default Home;