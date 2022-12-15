import HeroImage from '../assets/valtin.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {

    return (
        <div name="Home" className="flex h-screen max-md:h-auto w-full bg-gradient-to-b from-black via-black to-gray-900">

            <div className='w-10/12 m-auto flex items-center justify-between h-full px-4 max-lg:mt-24 max-md:flex-col'>

                <div className='flex flex-col justify-center h-full'>
                    <p className='text-gray-200 text-xl sm:text-3xl py-4'>
                        Olá, meu nome é <span className='text-green-500 text-2xl sm:text-4xl'>Valter Nunes</span>
                    </p>
                    <h2 className='text-4xl sm:text-7xl pb-4 max-md:w-full w-5/6 text-gray-200'>
                        Desenvolvedor web
                    </h2>
                    <div>
                    
                        <Link to="Projetos" smooth duration={500} className='group text-white w-fit px-6 py-3 mb-16 my-2 flex items-center rounded-md hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='flex items-center mx-auto max-sm:mt-16 h-3/6'>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl border-2 max-w-full max-lg:max-h-96 max-h-80 border-gray-800' />
                </div>
            </div>
        </div>
    )
};

export default Home;