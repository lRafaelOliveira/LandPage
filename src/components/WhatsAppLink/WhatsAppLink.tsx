import React from 'react';

const WhatsAppLink: React.FC = () => {
    // Número de telefone para o qual o usuário será redirecionado ao clicar no link
    const phoneNumber = '11911089977';

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-500 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Fale conosco agora mesmo no WhatsApp!
                </h2>
                <p className="mt-4 text-lg text-gray-900">
                    Clique no botão abaixo para iniciar uma conversa.
                </p>
                <div className="mt-8">
                    <a
                        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20CHATTE`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold uppercase tracking-wide transition duration-300"
                    >
                        Iniciar conversa no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppLink;
