import { useState } from "react";
import { Section } from "../Section/Section";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const FaqSection = () => {
    const faqs = [
        {
            question: "O que é a Chatte?",
            answer: "A Chatte é uma solução de atendimento automatizado com IA que ajuda empresas a melhorar a eficiência operacional e a satisfação do cliente. Nossa plataforma oferece integração com WhatsApp e sites, e em breve com Instagram, Facebook e Telegram."
        },
        {
            question: "Quais são os principais recursos da Chatte?",
            answer: "Os principais recursos da Chatte incluem integração com WhatsApp e sites, planos acessíveis a partir de R$49,90 por bot, desenvolvimento contínuo, integração futura com Instagram, Facebook e Telegram, sistema de Fluxograma para abordagens não-IA, e controle financeiro inteligente com OpenAI e Gemini."
        },
        {
            question: "Como funciona a Chatte?",
            answer: "A Chatte funciona através de uma integração simples com o WhatsApp ou seu site, configuração personalizada de acordo com suas necessidades específicas e oferece um atendimento eficiente com respostas rápidas e precisas."
        },
        {
            question: "Quais são os benefícios de usar a Chatte?",
            answer: "Os benefícios de usar a Chatte incluem excelência operacional com IA, acessibilidade financeira com planos flexíveis, e um compromisso contínuo com a inovação para atender às demandas do mercado."
        },
        {
            question: "Como a Chatte se destaca dos concorrentes?",
            answer: "A Chatte se destaca pela integração com WhatsApp e sites, planos acessíveis a partir de R$12,90 por bot (em fase Beta), e um compromisso com o desenvolvimento contínuo do sistema."
        },
        {
            question: "Quem é o público-alvo da Chatte?",
            answer: "Nosso público-alvo são empresas de diversos segmentos, incluindo varejo, serviços, saúde e educação, que buscam otimizar seu atendimento ao cliente e melhorar seus processos operacionais."
        },
        {
            question: "Quais são as tendências de mercado para soluções de atendimento automatizado?",
            answer: "A demanda por soluções de atendimento automatizado tem crescido à medida que as empresas buscam maneiras de melhorar a eficiência de seus processos e oferecer um atendimento mais ágil aos clientes."
        },
        {
            question: "Quais são os objetivos da Chatte?",
            answer: "Nosso objetivo a curto prazo é lançar o produto no mercado e adquirir os primeiros clientes, enquanto a longo prazo buscamos expandir nossa base de clientes e tornar a Chatte a principal escolha em soluções de atendimento automatizado."
        },
        {
            question: "Como posso entrar em contato com a Chatte?",
            answer: "Você pode entrar em contato conosco por e-mail: chattechatcombot@gmail.com, pelo WhatsApp: 01191108-9977, ou pelo Instagram: @chatcombot."
        },
        {
            question: "Quem somos nós?",
            answer: "Na Chatte, acreditamos que a tecnologia deve simplificar o atendimento ao cliente. Com nossa solução de chat com bot, estamos comprometidos em fornecer uma plataforma de atendimento inteligente que otimiza a comunicação, impulsiona a satisfação do cliente e promove o crescimento dos negócios."
        }
    ];



    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <Section id="faq" title="faq">
            <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
                <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-violet-800 font-semibold">FAQ's</h1>

                <div className="lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className="md:mb-0 mb-8 md:text-left text-center">
                            <h2 className="font-medium  text-xl leading-5 dark:text-gray-300  lg:mb-2 mb-4">Questions</h2>
                            <p className="font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">Caso não encontre sua resposta, entre em contato conosco ou deixe uma mensagem. Teremos o maior prazer em ajudá-lo.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-8/12 w-full mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full md:px-6">
                            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                            <div className="flex justify-between items-center w-full text-violet-800">
                                <div>
                                    <p className="flex justify-center items-center  font-medium text-base leading-6 md:leading-4 text-gray-800">
                                        <span className="lg:mr-6 mr-4  lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                            {index + 1}.
                                        </span>
                                        {faq.question}
                                    </p>
                                </div>
                                <button
                                    aria-label="toggler"
                                    className="text-violet-800 text-[2rem]"
                                    data-menu
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {activeIndex === index ? (<FiChevronUp />) : (<FiChevronDown />)}
                                </button>
                            </div>
                            <div id="menu" className={`${activeIndex === index ? '' : 'hidden'} mt-6 w-full`}>
                                <p className="text-base leading-6 font-normal">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
