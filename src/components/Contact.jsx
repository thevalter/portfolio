
const Contact = () => {

    return (
        <div name="Contato" className="w-full h-auto bg-gradient-to-b from-black to-gray-900 p-4 text-gray-300">
            <div className="flex flex-col p-4 justify-center mt-40 mb-20 h-full w-9/12 mx-auto rounded-3xl shadow-sm bg-black">
                <div className="mt-4 mb-8 flex flex-col">
                    <p className="text-4xl mx-auto font-bold font-signature text-green-500">
                        Contato
                    </p>
                    <p className="py-6 px-2 mx-auto text-center max-w-full">
                        Envie o formulário abaixo para entrar em contato comigo
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/529e9105-38e6-4183-b220-7956b4911cdf" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" required className="clear p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray-300 focus:outline-none" />

                        <input type="email" name="email" placeholder="Enter your email" required className="clear p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray-300 focus:outline-none my-4" />

                        <textarea name="message" placeholder="Enter your message" required rows="10" className="clear p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray-300 focus:outline-none"></textarea>

                        <button type="submit" className="font-signature text-white bg-gradient-to-r from-green-400 to-green-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact