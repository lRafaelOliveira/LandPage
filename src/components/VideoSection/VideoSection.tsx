import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-500 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Assista a uma demonstração do CHATTE em ação!
                </h2>
                <div className="mt-8">
                    <div className="aspect-w-16 aspect-h-11">
                        <iframe className="w-full h-80 rounded-lg" width="1088" height="612" src="https://www.youtube.com/embed/eNCyEopsTMo" title="CHATTE - Revolucione o Atendimento ao Cliente" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
