import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Importando ícone de marca de seleção

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: "Automatização do Atendimento",
        description: "O CHATTE automatiza o atendimento ao cliente, respondendo perguntas frequentes e encaminhando consultas complexas para os operadores humanos."
    },
    {
        title: "Personalização",
        description: "Ofereça uma experiência de atendimento personalizada aos seus clientes, adaptada às suas necessidades e preferências individuais."
    },
    {
        title: "Integrações",
        description: "Integre o CHATTE com outras ferramentas e plataformas, como CRM, sistemas de pagamento e muito mais, para uma experiência de atendimento perfeita."
    },
    // Adicione mais funcionalidades conforme necessário
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-500 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center">
                    Principais Funcionalidades do CHATTE
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-gray-800">
                            <FiCheckCircle className="text-green-500 w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-lg text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
