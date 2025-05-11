## Documentação

Esse projeto foi feito utilizando Next.js, pelo fato de ser um SSR, o que ajuda no proposito da landing page, pois não precisa ser renderizada no servidor, e sim na cliente.

## Como executar

Para executar o projeto, basta seguir os passos abaixo:

1. Clone o repositório
2. Entre na pasta do projeto
3. Instale as dependências
4. Execute o projeto

```bash
git clone https://github.com/kelwin/UTeach.git
cd UTeach
npm install
npm run dev
```

Após a instalação das dependências, o projeto deve estar rodando na porta 3000.

## Como usar

Para utilizar o projeto, basta acessar o endereço http://localhost:3000 no seu navegador.

## Organização

O projeto está dividido em várias pastas, cada uma delas representa uma funcionalidade do projeto.

- /src: Contém o código-fonte do projeto, que é o que será renderizado no servidor.
- /app: Contém a página inicial do projeto, que é a landing page.
- /components: Contém os componentes do projeto, que são as partes que serão renderizadas no servidor.
- /public: Contém os arquivos estáticos do projeto, como imagens, fontes, etc.

## Padrão de Branches

O projeto utiliza o padrão de branches de Git Flow, que é um padrão de branching que segue o fluxo de trabalho de desenvolvimento de software. O padrão utiliza a seguinte estrutura de branches:

- main: A branch principal do projeto, onde o código está sendo desenvolvido.
- develop: A branch de desenvolvimento do projeto, onde as novas funcionalidades são criadas e testadas.
- feature/nome-da-funcionalidade: A branch para a implementação de uma nova funcionalidade do projeto.
- bugfix/nome-da-correção: A branch para a correção de um bug no projeto.
- hotfix/nome-da-correção: A branch para a correção de um bug crítico no projeto.

## Como contribuir

Caso queira contribuir com o projeto, basta seguir os passos abaixo:

1. Fork o repositório
2. Crie uma branch com o nome da sua funcionalidade
3. Faça o commit das suas alterações
4. Crie um pull request para o repositório original

## Licença

Esse projeto está sob a licença MIT.