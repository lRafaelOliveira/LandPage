import React from 'react';

const DescriptionSection: React.FC = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center">
                    O que é o CHATTE?
                </h2>
                <p className="mt-4 text-lg text-center">
                    O CHATTE é um poderoso bot de autoatendimento que vai revolucionar
                    a forma como você interage com seus clientes.
                </p>
            </div>
        </section>
    );
};

export default DescriptionSection;
