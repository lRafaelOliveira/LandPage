import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
                <p>&copy; {new Date().getFullYear()} CHATTE - chat com Bot. Todos os direitos reservados.</p>
                <p>Entre em contato: chattechatcombot@gmail.com.com | Telefone: (11) 91108-9977</p>
            </div>
        </footer>
    );
};

export default Footer;
