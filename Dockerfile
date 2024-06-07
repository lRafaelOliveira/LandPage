# Define a imagem base
FROM node:18

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia todos os arquivos da pasta "src" para o diretório de trabalho no contêiner
COPY package*.json ./
RUN npm install
ENV PUBLIC_HTML=/var/www/public/
COPY .env* ./
COPY . .
# executa os comandos para build do sistema e alimentacao do banco de dados

EXPOSE 2000

# Comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "start"]