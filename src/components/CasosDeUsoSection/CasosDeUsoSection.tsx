import React, { useState } from 'react';
import { Section } from '../Section/Section';

interface CasoDeUso {
    title: string;
    imageUrl: string;
    description: string;
}

const casosDeUso: CasoDeUso[] = [
    {
        title: "Filtro de Clientes",
        imageUrl: "https://images.unsplash.com/photo-1560209617-059c0bd661ba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Melhore a eficiência do seu atendimento filtrando clientes de forma rápida e precisa. Identifique os interesses e necessidades dos seus clientes para fornecer respostas personalizadas e eficazes, otimizando assim o tempo de interação e aumentando a satisfação do cliente."
    },
    {
        title: "Geração de leads",
        imageUrl: "https://images.unsplash.com/photo-1560209617-059c0bd661ba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Aumente sua base de clientes potenciais captando leads diretamente pelo WhatsApp. Utilize nosso sistema avançado de geração de leads para atrair novos clientes de forma eficiente e escalável, garantindo assim um crescimento consistente e sustentável para o seu negócio."
    },
    {
        title: "Recomendação de produto",
        imageUrl: "https://images.unsplash.com/photo-1560617544-b4f287789e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Impulsione suas vendas fornecendo recomendações personalizadas de produtos para seus clientes. Utilize dados inteligentes para entender o comportamento do consumidor e oferecer sugestões que atendam às suas necessidades específicas, aumentando assim a taxa de conversão e a fidelidade do cliente."
    },
    {
        title: "Coleta de feedback",
        imageUrl: "https://plus.unsplash.com/premium_photo-1664110690660-14bae0f188de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Obtenha feedback instantâneo dos seus clientes para aprimorar continuamente seus produtos e serviços. Utilize nossa plataforma para coletar insights valiosos que ajudarão você a tomar decisões informadas e melhorar a experiência do cliente, fortalecendo assim o relacionamento e a lealdade com a sua marca."
    },
    {
        title: "Recuperação de carrinhos abandonados",
        imageUrl: "https://images.unsplash.com/photo-1549187805-6079facea88d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Recupere vendas perdidas identificando e interagindo com clientes que abandonaram carrinhos de compra. Utilize estratégias automatizadas para reengajar esses clientes, oferecendo incentivos personalizados e suporte instantâneo, aumentando assim a taxa de conversão e o retorno sobre o investimento."
    }
];

export const CasosDeUsoSection: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Section id="exemplos" title="Exemplos">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 bg-violet-50 p-4">
                    <div className="space-y-4">
                        {casosDeUso.map((caso, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 rounded-md ${selectedIndex === index ? 'bg-violet-500 text-white' : 'bg-white text-black'
                                    }`}
                                onClick={() => handleSelect(index)}
                            >
                                <h3 className="text-lg lg:text-xl font-bold">{caso.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-white p-4">
                    <div className="text-center">
                        <img
                            src={casosDeUso[selectedIndex].imageUrl}
                            alt={casosDeUso[selectedIndex].title}
                            className="h-80 lg:h-auto w-full object-cover mb-4 rounded-md"
                        />
                        <p className="text-base lg:text-lg">{casosDeUso[selectedIndex].description}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

