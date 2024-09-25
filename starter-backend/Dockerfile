# Use uma imagem base adequada para compilar o projeto
FROM node:14 as builder

# Define o diretório de trabalho dentro do contêiner de compilação
WORKDIR /usr/src

# Copie os arquivos de configuração do package.json e yarn.lock (se existir)
COPY package*.json yarn.lock ./

# Instale as dependências de compilação
RUN yarn install

# Copie o restante do código-fonte
COPY . .

RUN yarn add ttypescript

# Realize o processo de compilação
RUN yarn build

# Cria as pastas necessárias dentro de dist
RUN mkdir -p dist/tmp/resources

# Exponha a porta do servidor
EXPOSE 6327

# Comando para iniciar o servidor
CMD yarn typeorm && yarn seed:school && node dist/shared/infra/http/server.js
