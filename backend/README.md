# config.js
O arquivo `config.js` deve ser criado no diretório **root** da aplicação. Este
arquivo deve conter as configurações do servidor que permanecem em sigilo, sem
ir para o repositório do código. Isso garante uma certa segurança e
flexibilidade maiores da aplicação.

Exemplo das configurações base da aplicação:

```javascript
module.exports = {
  port: 3333, //                        Porta do servidor

  connection: 'mongobd+srv://. . .', // String de conexão do MongoDB

  .
  .
  .
};
```
