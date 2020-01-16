# Semana Omnistack 10.0 de 2020

## Backend com Node
Backend é a parte que o usuário não vê da nossa aplicação, é nela onde se
encontram:

- As regras de negócio da aplicação;
- As conexões com o banco de dados;
- O envio de e-mail;
- A comunicação com webservices;
- A autenticação de usuários;
- A criptografia e segurança; e etc.

Toda a comunicação entre o backend e os frontends (um backend pode servir a
vários frontends) irá acontecer por meio do envio de uma estrutura de dados
escrita em JSON.

## Frontend
O frontend é o responsável pela parte visual da aplicação. Assim podemos falar
de backend e frontend trazendo duas abordagens principais.

### Abordagem Tradicional
Nesta abordagem, a cada requisição, o servidor retorna o conteúdo completo da
página, contendo todo HTML e CSS.

A abordagem tradicional limita o frontend ao browser, já que aplicativos mobile
e serviços externos não vão conseguir interpretar o HTML.

### Abordagem de SPA
Na abordagem de SPA (*Single-Page Application*), as requisições ao servidor
trazem apenas dados como respostas e, com esses dados, o frontend pode preencher
as informações em tela.

Assim, a página nunca recarrega, otimizando a performance e dando vida ao
conceito de SPA. Retornando apenas JSON, podemos ter vários frontends.

## Mobile
Desenvolvido com React Native
