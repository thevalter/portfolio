import { keyframes } from "@emotion/react";
import { AttentionSeeker } from "react-awesome-reveal";

const About = () => {

    return (
        <div name="Sobre" className="flex w-full h-screen max-sm:h-auto bg-black text-gray-300">

            <AttentionSeeker effect="headShake">
                <div className="glass w-9/12 mx-auto mt-40 flex flex-col justify-center h-auto rounded-3xl">
                    <div className="mb-16 flex flex-col">
                        <p className="text-4xl font-bold mx-auto mt-20 font-signature text-green-500">
                            Sobre
                        </p>
                    </div>

                    <p className="text-xl w-10/12 mx-auto">
                        Sou apaixonado por tecnologia desde pequeno, aos 14 anos entrei em uma equipe de robótica da minha cidade, competimos em alguns campeonatos e esse período foi essencial para eu perceber que programação era a minha praia. Depois de um tempo, acabei descobrindo o desenvolvimento web e percebi que essa é a carreira que eu quero seguir.
                    </p>

                    <br />

                    <p className="text-xl w-10/12 mx-auto">
                        Atualmente estou focando no frontend, trabalho com React, Next e Tailwind, tenho uma boa noção de UI/UX design e sou bastante perfeccionista com responsividade de layouts. Amo criar e consumir APIs, tenho estudado bastante sobre arquitetura de dados e pretendo me especializar em alguma linguagem voltada para backend.
                    </p>
                </div>
            </AttentionSeeker>

        </div>
    )
}

export default About