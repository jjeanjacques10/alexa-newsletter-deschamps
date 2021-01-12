<p align="center">
    <img src="https://raw.githubusercontent.com/jjeanjacques10/alexa-newsletter/main/screenshots/appAlexa.jpeg" width="290">
</p>

## 💻 Projeto

Skill de conversação da Alexa para consumir a newsletter desenvolvida pelo [Filipe Deschamps](https://github.com/filipedeschamps).  

Está Skill consome os dados de um google sheets que extrai diretamente as informações do e-mail que recebo às 11h30 da equipe do Deschamps. É gerado um arquivo JSON que será enviado para o S3 da Amazon e pós isso lido pela Alexa para ser apresentado no Flash Briefing (Resumo de notícias) do usuário.


<p align="center">
    <img src="https://raw.githubusercontent.com/jjeanjacques10/alexa-newsletter/main/screenshots/newsletter_sheets.jpg" width="750">
</p>

---
A Skill de Flash Briefing tem o limite, ela apenas lê as 5 primeiras notícias salvas no arquivo JSON, caso queira ler mais, você pode encontrar o código na pasta `custom skill newsletter` (É a versão que está online no link abaixo).

## Ativar Skill

- [Aplicativo na Alexa](https://skills-store.amazon.com.br/deeplink/dp/B08RG61BPD?deviceType=app&share&refSuffix=ss_copy)

## :sparkles: Tecnologias

Este projeto foi desenvolvido utilizando:

- [Alexa Developer Console](https://developer.amazon.com/)
- [NodeJS](https://dart.dev/)
- [Zappier](https://zapier.com/)
- [Google Sheets](https://theoephraim.github.io/node-google-spreadsheet)
- [Docker](https://www.docker.com/)
- [AWS S3](https://aws.amazon.com/s3/)

## Rodar o projeto

Adicione suas credenciais no arquivo: `client_secret_example.json`, você pode encontrar estes dados no console do [Google Cloud Platform](console.developers.google.com).

Atualizei o arquivo `.env` com as suas credenciais do Amazon SDK.

Há dois modos de rodar o script para ler as notícias e gerar um JSON que será lido pela Alexa:

#### Docker Compose

> docker-compose -f "docker-compose.yml" up -d --build

#### Docker

> docker build -t docker-newsletter .

> docker run -it --name docker-newsletter docker-newsletter

#### Rodar uma única vez
```
### Para instalar os pacotes

npm install

### Rodar o script

yarn start

ou

npm run start
```

## Contribuidores

| [<img src="https://avatars3.githubusercontent.com/u/4182816?s=460&v=4" width=115><br><sub>@alvarofelipems</sub>](https://github.com/alvarofelipems) |
| :---: |

## Autor

| [<img src="https://avatars3.githubusercontent.com/u/32225403?s=460&v=4" width=115><br><sub>@jjeanjacques10</sub>](https://github.com/jjeanjacques10) |
| :---: |