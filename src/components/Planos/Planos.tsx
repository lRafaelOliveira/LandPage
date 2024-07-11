import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from "../Section/Section";

interface PlanoDisponivel {
    id: number;
    name: string;
    description: string;
    vantagens: string[];
    priceId: string;
    price: number;
    quantity: number;
    trial_end: string;
    collection_method: string;
    days_until_due: number;
    trial_period_days: number;
    period: number;
    beta_testing: boolean;
}

export const PlanosSection = () => {
    const [planos, setPlanos] = useState<PlanoDisponivel[]>([]);

    useEffect(() => {
        fetchPlanosDisponiveis();
    }, []);

    async function fetchPlanosDisponiveis() {
        const url = `${import.meta.env.VITE_URL_BACKEND}/stripe/info/planos-disponiveis`;
        const headers = {
            Authorization: `api_key ${import.meta.env.VITE_API_KEY}`
        };

        try {
            const response = await axios.get(url, { headers });
            setPlanos(response.data);
        } catch (error) {
            console.error('Erro ao buscar os planos disponíveis:', error);
        }
    }
    let gridCols = 'grid-cols-3'; // Padrão para 3 colunas
    if (planos.length === 1) {
        gridCols = 'grid-cols-1';
    } else if (planos.length === 2) {
        gridCols = 'grid-cols-2';
    }


    return (
        <Section id="planos" title="Planos">
            <section className="px-8 py-24 mt-[2rem]">
                <div className="container mx-auto text-center">
                    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Planos</h2>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500 text-[1.3rem]">Nosso Sistema está em fase de desenvolvimento ainda, por esse motivo, nossos preços são os  mais baixos do mercado. Precisamos de testadores, e por isso, em troca de um simbólico, disponibilizamos acesso a 100% das funcionalidades do nosso sistema por um preço acessivel a todos.</p>
                    <p className='text-bold text-[1.5rem] bg-gray-100 bord'>Em seu primeiro BOT, Voce pode contar com 7 Dias gratuitos para testar!</p>
                </div>

                <div className="mt-24">
                    <div className={`mt-24 grid gap-8 md:${gridCols} justify-center`}>
                        {planos.map((plano) => (
                            <div key={plano.id} className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100 text-center">
                                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                    <h5 className="block antialiased tracking-normal font-sans font-semibold leading-snug text-blue-gray-900 capitalize text-[1.9rem]">{plano.name}</h5>
                                    <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500  text-[1rem]">{plano.description}</p>
                                    <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">R$ {(plano.price).toFixed(2).replace('.', ',')}<span className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
                                </div>
                                <div className="p-6 border-t border-blue-gray-50">
                                    <ul className="flex flex-col gap-3">
                                        {plano.vantagens.map((vantagem, index) => (
                                            <li key={index} className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">{vantagem}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://app.chatcombot.com.br" target="_blank" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6">
                                        Iniciar Agora
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </Section>
    );
};
