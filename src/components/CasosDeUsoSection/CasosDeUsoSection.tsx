import React from 'react';

interface CasoDeUso {
    title: string;
    imageUrl: string;
    description: string;
}

const casosDeUso: CasoDeUso[] = [
    {
        title: "Geração de leads",
        imageUrl: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg.84f194e6.png&w=720&q=75",
        description: "Capte leads diretamente pelo WhatsApp, expandindo sua base de clientes potenciais."
    },
    {
        title: "Recomendação de produto",
        imageUrl: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.fb74f23a.png&w=720&q=75",
        description: "Forneça recomendações personalizadas de produtos para seus clientes, aumentando as vendas."
    },
    {
        title: "Coleta de feedback",
        imageUrl: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.b25affec.png&w=720&q=75",
        description: "Colete feedback instantâneo dos clientes para melhorar seus produtos e serviços."
    },
    // Adicione mais casos de uso conforme necessário
];

const CasosDeUsoSection: React.FC = () => {
    return (
        <section className="container py-4 sm:py-8 md:py-16">
            <div className="h2-accent lg:h1-accent mb-3 text-white md:mb-4 lg:mb-6">Casos de uso mais populares do WhatsApp para negócios</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {casosDeUso.map((caso, index) => (
                    <div key={index} className="rounded-lg bg-green-tertiary overflow-hidden shadow-md">
                        <img alt={caso.title} loading="lazy" width="100%" height="auto" decoding="async" src={caso.imageUrl} />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{caso.title}</h3>
                            <p className="text-sm text-gray-700">{caso.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CasosDeUsoSection;
