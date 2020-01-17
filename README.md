# Semana Omnistack 10.0 de 2020

## Backend – Node.js
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

## Frontend Web – React
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

## Frontend Mobile – React Native
Assim como no frontend web, o frontend mobile também é responsável por trazer
visualmente os dados contidos no backend. Como estamos falando de React Native,
podemos explicar melhor o desenvolvimento do frontend mobile com duas abordagens
principais.

### Abordagem Tradicional
Na abordagem tradicional, o aplicativo mobile é desenvolvido separadamente para
as plataformas que serão distribuídos. Ou seja, se for desenvolvê-lo para iOS,
terá de usar Objetive-C ou Swift, e para Android, usará Java ou Kotlin. Assim
o trabalho se torna repetido tanto para a criação como para as alterações no
projeto.

### Abordagem do React Native
Como todo o código é desenvolvido em JavaScript,
**ele não é convertido em código nativo**, melhor do que isso, o dispositivo
passa a entender o código JavaScript e a interface gerada **totalmente nativa**.

### Por que utilizaremos o Expo na Semana OmniStack 10.0?
O Expo é um framework, um conjunto de ferramentas para a aplicação React Native
usar a maioria das funcionalidades do dispositivo móvel.

Sem o Expo, precisamos instalar em nosso sistema tanto o Android Studio, para
obter o SDK (*Software Development Kit*) do Android, como o Xcode (apenas no
Mac), para obter o SDK do iOS. Nesse caso, a iniciação no desenvolvimento fica
mais penosa já que essas SDKs não são exatamente simples de instalar e livres
de erros.

Já com o Expo, basta instalarmos o aplicativo do Expo no celular, e dentro dele,
tudo o que precisamos para desenvolver no React Native já está instalado, como
as APIs de mapas, geolocalização, sensores, câmera, calendário, etc. Com isso,
não precisamos nos preocupar em gerar o aplicativo para Android (**.apk**) e iOS
(**.ipa**), já que o app do Expo instalado tem tudo que precisamos e assim
usamos apenas React.
