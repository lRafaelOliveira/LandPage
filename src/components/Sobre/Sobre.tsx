import { Section } from "../Section/Section";

const porQueChatte = [{
    number: "01",
    text: "Integração simplificada com WhatsApp e seu site, proporcionando facilidade de uso."
},
{
    number: "02",
    text: "Planos acessíveis a partir de R$12,90 por bot, tornando a inovação acessível a todos."
},
{
    number: "03",
    text: "Sistema em constante evolução para garantir excelência no atendimento ao cliente."
},
{
    number: "04",
    text: "Recursos principais incluem integração com Instagram, Facebook e Telegram."
},
{
    number: "05",
    text: "Desenvolvimento de sistema de fluxograma para uma abordagem não-IA."
},
{
    number: "06",
    text: "Controle financeiro inteligente com integração com OpenAI e Gemini."
}];

export const Sobre = () => {
    return (
        <Section id="sobre" title="Sobre">
            <section className="w-full mt-20 text-black h-full pt-20">
                <div className="max-w-[70%] mx-auto">
                    <h2 className="text-3xl font-extrabold text-center">
                        O que é o CHATTE?
                    </h2>
                    <p className="mt-4 text-lg text-justify lg:text-center">
                        O CHATTE é uma solução avançada de atendimento automatizado que utiliza inteligência artificial para transformar a forma como as empresas interagem com seus clientes. Nossa plataforma oferece um bot de autoatendimento altamente eficiente, integrado ao WhatsApp e ao seu site, proporcionando respostas rápidas e precisas. Com o CHATTE, você pode automatizar o marketing, a geração de leads, e o atendimento ao cliente, garantindo uma comunicação consistente e de alta qualidade. Nosso sistema está em constante evolução, sempre incorporando as mais recentes tecnologias para oferecer uma experiência de atendimento superior e inovadora.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto mt-28">
                    <h2 className="text-3xl font-extrabold text-center">
                        Por que escolher o CHATTE?
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {porQueChatte.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-5xl font-extrabold">{item.number}</span>
                                <p className="mt-4 text-lg text-center">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Section>
    );
};
