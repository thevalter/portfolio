import { AttentionSeeker } from "react-awesome-reveal";

import yugipedia from '../assets/portfolio/yugipedia.png';
import puppeteer from '../assets/portfolio/puppeteer.png';
import moviesLib from '../assets/portfolio/moviesLib.png';
import sistem from '../assets/portfolio/sistem.jpg';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: yugipedia,
            name: "Yugipedia",
            code: "https://github.com/thevalter/yugipedia-react",
            hover: "From fan to fan, this is a web site for search cards the universe Yu-Gi-Oh!."
        },
        {
            id: 2,
            src: moviesLib,
            name: "MoviesLib",
            code: "https://github.com/thevalter/moviesLib",
            hover: "MoviesLib é um site para realizar busca sobre informações de filmes, feito com React."
        },
        {
            id: 3,
            src: puppeteer,
            name: "BotLyrics",
            code: "https://github.com/thevalter/bot_lyrics_music",
            hover: "bot para encontrar letras de musicas. Feito com puppeteer e readLine-sync rodando via nodejs."
        },
        {
            id: 4,
            src: sistem,
            name: "Product registration",
            code: "https://github.com/thevalter/Sistema_para_cadastro_de_produtos",
            hover: "Sistema para cadastro e controle de produtos com API Rest intermediando tudo."
        }
    ]

    return (
        <div name="Projetos" className='bg-black w-full pt-40 text-gray-200 h-auto'>
            <div className='glass w-9/12 mx-auto h-auto flex flex-col justify-center rounded-3xl'>
                <div className='mt-4 mb-8 flex flex-col'>
                    <p className='text-4xl pt-12 mx-auto font-bold font-signature text-green-500'>
                        Projetos
                    </p>
                    <p className='py-6 px-2 mx-auto text-center max-w-full'>
                        Confira um pouco do meu trabalho
                    </p>
                </div>

                <div className='flex flex-wrap w-11/12 mx-auto gap-8 justify-between mb-8'>
                    {
                        portfolios.map(({ id, src, name, code, hover }) => (

                            <AttentionSeeker effect="swing" key={id} className="m-auto">
                                <div className='group rounded-md p-2 mx-auto glass border-2 border-gray-900 max-w-xs duration-200 hover:scale-105 max-sm:w-10/12 flex flex-col'>
                                    <div className='shadow-md rounded-lg w-full flex flex-col'>
                                        <p className='mx-auto my-2 text-1xl text-gray-400 cursor-default font-signature'>{name}</p>
                                        <img src={src} alt="" className='rounded-md max-w-full max-h-full group-hover:opacity-10' />
                                        <p className='opacity-0 scale-110 group-hover:scale-100 transition-all duration-200 ease-out group-hover:opacity-100 absolute mx-2 text-center text-gray-100 mt-20 max-sm:mt-16 max-w-[280px] cursor-default'>{hover}</p>
                                    </div>
                                    <button className='text-green-500 w-1/2 px-4 py-2 mt-2 mx-auto duration-200 hover:scale-105'><a href={code} target="_blank">Code</a></button>
                                </div>
                            </AttentionSeeker>

                        ))
                    }
                </div>

            </div>
        </div>
    )
};

export default Portfolio;