import { Section } from "../Section/Section";

export const Apresentacao = () => {
    return (
        <Section id="inicio" title="Inicio">
            <div className="min-h-screen w-full flex flex-col lg:flex-row mt-28 lg:mt-0">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-8 lg:p-24">
                    <h1 className="text-2xl lg:text-5xl font-bold">
                        A Ferramenta que vai simplificar seu Atendimento
                    </h1>
                    <p className="text-lg lg:text-xl mt-4 text-center lg:text-justify">
                        Agora é possível automatizar seu atendimento via WhatsApp, separando os contatos e interesses de seus clientes. Em apenas uma tarde, você consegue criar um fluxo complexo, capaz de triplicar o seu atendimento, e melhorar em 80% a qualidade dos seus leads.
                    </p>
                    <a
                        href="https://app.chatcombot.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-4 py-2 bg-yellow-300 text-yellow-900 font-bold rounded inline-block"
                    >
                        Teste grátis por 7 Dias!
                    </a>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                    <iframe
                        className="w-full lg:w-3/4 h-56 lg:h-96"
                        src="https://www.youtube.com/embed/eNCyEopsTMo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </Section>
    );
};
