import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Sobre'
        },
        {
            id: 3,
            link: 'Projetos'
        },
        {
            id: 4,
            link: 'Skills'
        },
        {
            id: 5,
            link: 'Contato'
        }
    ]

    return (
        <div className="flex justify-between items-center w-screen h-20 px-4 text-green-500 bg-black fixed">
            <div>
                <h1 className="text-3xl sm:text-5xl font-signature pl-8"><Link to="home" smooth duration={500}>&lt;Valter/&gt;</Link></h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer captalize font-medium text-gray-500 hover:scale-105 hover:text-green-500 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-start pt-24 items-center absolute top-20 right-0 w-52 h-screen bg-gradient-to-b from-black via-gray-900 to-gray-700 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 font-signature cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-green-500 duration-200">
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}


        </div>
    )
}

export default Navbar