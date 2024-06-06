import React from 'react';

const ValuesSection: React.FC = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-500 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center">
                    Por que escolher o CHATTE?
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-extrabold">01</span>
                        <p className="mt-4 text-lg text-center">
                            Automatize o atendimento ao cliente e economize tempo e recursos.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-extrabold">02</span>
                        <p className="mt-4 text-lg text-center">
                            Ofereça uma experiência personalizada aos seus clientes 24/7.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-extrabold">03</span>
                        <p className="mt-4 text-lg text-center">
                            Aumente as conversões e o engajamento com automações inteligentes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
