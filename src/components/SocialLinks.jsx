import { Fade } from "react-awesome-reveal";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/valter-nunes',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/thevalter'
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:valternunes776@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resumo <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-tr-md',
            download: true
        },
    ]

    return (
        <Fade cascade={true} direction="up" className='hidden md:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black cursor-pointer ${style}`}>
                        <a href={href} className='flex justify-between items-center w-full text-green-500' download={download} target='_blank' rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </Fade>
    )
}

export default SocialLinks;