````markdown
# Projeto NestJS com TypeScript e TypeORM

Este é um projeto NestJS utilizando TypeScript e TypeORM. Este guia irá cobrir os passos para criar e executar migrações, além de iniciar o projeto.

## Requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior) ou yarn
- PostgreSQL

## Configuração do Projeto

### 1. Instalação das Dependências

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
# ou
yarn install
```
````

### 2. Configuração do Banco de Dados

Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco
```

### 3. Configuração do TypeORM

No arquivo `src/config/database/database.providers.ts`, configure sua instância do DataSource do TypeORM:

```typescript
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { entities } from './database-entities';
import { MainSeeder } from './main-seeder';

export const typeormOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities,
  migrations: [__dirname + './migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(typeormOptions);
```

### 4. Criando Migrações

Para criar uma nova migração, utilize o seguinte comando:

```bash
npx typeorm-ts-node-commonjs migration:create src/config/database/migrations/NomeDaSuaMigration
```

Isso criará um novo arquivo de migração em `src/config/database/migrations`.

### 5. Executando Migrações

Para executar as migrações, utilize o comando abaixo:

```bash
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli migration:run -d src/config/database/database.providers.ts
```

Este comando irá aplicar todas as migrações pendentes ao seu banco de dados.

### 6. Iniciando o Projeto

Para iniciar o projeto, utilize o comando:

```bash
npm run start:dev
# ou
yarn start:dev
```

Isso iniciará o servidor NestJS em modo de desenvolvimento.

## Comandos Úteis

### Rodar o Projeto

```bash
npm run start
# ou
yarn start
```

### Rodar em Modo de Desenvolvimento

```bash
npm run start:dev
# ou
yarn start:dev
```

### Compilar o Projeto

```bash
npm run build
# ou
yarn build
```

## Estrutura do Projeto

```
src/
├── app.module.ts
├── main.ts
├── config/
│   ├── database/
│   │   ├── database.providers.ts
│   │   ├── database-entities.ts
│   │   └── migrations/
│   │       └── ...
│   └── ...
├── modules/
│   ├── company/
│   │   ├── company.entity.ts
│   │   ├── company.module.ts
│   │   ├── company.service.ts
│   │   └── company.controller.ts
│   └── ...
└── ...
```

```

```
