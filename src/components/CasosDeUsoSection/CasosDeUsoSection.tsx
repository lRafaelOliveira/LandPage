import React, { useState } from 'react';

interface CasoDeUso {
    title: string;
    imageUrl: string;
    description: string;
}

const casosDeUso: CasoDeUso[] = [
    {
        title: "Geração de leads",
        imageUrl: "https://images.unsplash.com/photo-1560209617-059c0bd661ba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Capte leads diretamente pelo WhatsApp, expandindo sua base de clientes potenciais."
    },
    {
        title: "Recomendação de produto",
        imageUrl: "https://images.unsplash.com/photo-1560617544-b4f287789e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Forneça recomendações personalizadas de produtos para seus clientes, aumentando as vendas."
    },
    {
        title: "Coleta de feedback",
        imageUrl: "https://plus.unsplash.com/premium_photo-1664110690660-14bae0f188de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Colete feedback instantâneo dos clientes para melhorar seus produtos e serviços."
    },
    {
        title: "Recuperação de carrinhos abandonados",
        imageUrl: "https://images.unsplash.com/photo-1549187805-6079facea88d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Colete feedback instantâneo dos clientes para melhorar seus produtos e serviços."
    },
];

const CasosDeUsoSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? casosDeUso.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === casosDeUso.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-500 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-8">
                    Casos de uso mais populares do Chat Com Bot para negócios
                </h2>
                <div className="relative">
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full"
                        onClick={handlePrev}
                    >
                        &#9664;
                    </button>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {casosDeUso.map((caso, index) => (
                                <div key={index} className="min-w-full p-6 bg-green-tertiary rounded-lg shadow-md text-green-text">
                                    <img alt={caso.title} src={caso.imageUrl} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                    <h3 className="text-lg font-semibold mb-2">{caso.title}</h3>
                                    <p className="text-sm">{caso.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full"
                        onClick={handleNext}
                    >
                        &#9654;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CasosDeUsoSection;
