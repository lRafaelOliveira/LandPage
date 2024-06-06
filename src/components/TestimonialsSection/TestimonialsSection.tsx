import React from 'react';

interface Testimonial {
    name: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        name: "João Silva",
        text: "O CHATTE mudou completamente a forma como lidamos com o atendimento ao cliente. É incrível!"
    },
    {
        name: "Maria Souza",
        text: "Estou impressionada com a eficiência do CHATTE. Ele resolve problemas antes mesmo deles surgirem."
    },
    {
        name: "Rafael Souza",
        text: "Nunca Imaginei que poderia atender aos meus clientes da forma que estou atendendo agora, meu chatbot utilizando inteligencia artifical consegue ser muito mais assertivo que meus vendedores..."
    },
    // Adicione mais depoimentos aqui conforme necessário
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-500 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center">
                    O que nossos clientes estão dizendo
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md text-gray-800">
                            <p className="text-lg mb-4">{testimonial.text}</p>
                            <p className="font-semibold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
