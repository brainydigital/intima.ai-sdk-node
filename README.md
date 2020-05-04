<br />
<div align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/brainydigital/intima.ai-sdk-node/master/docs/images/logo.png" alt="Logo" width="120" height="120">
  </a>
  
  [![Npm - Downloads](https://img.shields.io/npm/dt/@brainy-digital/intima.ai-sdk-node.svg?style=flat&color=97ca00)](https://www.npmjs.com/package/@brainy-digital/intima.ai-sdk-node "View this project on npm")
  [![Node - Version](https://img.shields.io/badge/node-%3E=_6.4.0-blue.svg?style=flat)](https://www.npmjs.com/package/@brainy-digital/intima.ai-sdk-node "View this project on npm")
  [![Contributors](https://img.shields.io/badge/contributors-1-yellow.svg)](https://github.com/brainydigital/intima.ai-sdk-node/graphs/contributors)
  [![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
</div>

# **Intima.ai - SDK NodeJS**

Este repositório é a implementação da API do [Intima.ai](https://app.intima.ai) em forma de SDK Client para NodeJS. Este SDK cobre todas as ações disponíveis dentro da plataforma do `Intima.ai` e as disponibilizam como métodos, que podem ser integrados e utilizados por outros serviços ou aplicações, bastando somente possuir o `Token de acesso da API (api_token)`.

- Versão da API: 2.0.0

## Instalação

### [Node.js](https://nodejs.org/)

#### npm

Intale via npm:

```shell
npm install @brainy-digital/intima.ai-sdk-node --save
```

## Començando

Após seguir a [instalação](#installation):

```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';


try
{
    const intimaai = new Intimaai('api_secret_token');

    //Get a new process copy
    const copy = { process_number: '0000000-00.0000.0.00.0000', auth_id: 1 };
    const result = await intimaai.copyResource.getNewCopy(copy);

    console.log(result);

    //Resource paginated
    const paginator_actions = intimaai.actionResource.paginate();
    await paginator_actions.getPage(1);
    // await paginator.nextPage();
    // await paginator.previousPage();
    // await paginator.hasNextPage();
    // await paginator.loadAll();

    const paginator_results = paginator_actions.getCollection();

    console.log(paginator_results);
}
catch (error)
{
    console.error('error: ', error);
}
```

## **Documentação para os Endpoints da API**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Resource | Descrição
------------ | -------------
[**authResource**](docs/resources/authResource.md#authResource) | Contém todos os endpoints/métodos para os auths
[**tribunalResource**](docs/resources/tribunalResource.md#tribunalResource) | Contém todos os endpoints/métodos para os tribunais
[**certificateResource**](docs/resources/certificateResource.md#certificateResource) | Contém todos os endpoints/métodos para os seus certificados
[**userResource**](docs/resources/user/userResource.md#userResource) | Contém todos os endpoints/métodos para seu usuário
[**userDependentResource**](docs/resources/user/userDependentResource.md#userDependentResource) | Contém todos os endpoints/métodos para seu os dependentes do usuário (que irão receber notificações)
[**userWebhookResource**](docs/resources/user/userWebhookResource.md#userWebhookResource) | Contém todos os endpoints/métodos para os webhooks do usuário
[**actionResource**](docs/resources/actionResource.md#actionResource) | Contém todos os endpoints/métodos para ações
[**qualificationProtocolResource**](docs/resources/qualificationProtocolResource.md#qualificationProtocolResource) | Contém todos os endpoints/métodos para os protocolos de habilitação
[**processInfoResource**](docs/resources/processInfoResource.md#processInfoResource) | Contém todos os endpoints/métodos para as informações processuais
[**processCourseResource**](docs/resources/processCourseResource.md#processCourseResource) | Contém todos os endpoints/métodos para os andamentos processuais
[**processSearchResource**](docs/resources/processSearchResource.md#processSearchResource) | Contém todos os endpoints/métodos para consultas processuais e pré-análises
[**copyResource**](docs/resources/copyResource.md#copyResource) | Contém todos os endpoints/métodos para as cópias processuais
[**listenerResource**](docs/resources/listenerResource.md#listenerResource) | Contém todos os endpoints/métodos para as escutas processuais
[**intimationResource**](docs/resources/intimationResource.md#intimationResource) | Contém todos os endpoints/métodos para intimações capturadas
[**processProtocolResource**](docs/resources/processProtocolResource.md#processProtocolResource) | Contém todos os endpoints/métodos para os protocolos


<!-- ## Documentação para os Models -->


## Documentação para Autenticação


### api_token

- **Tipo**: API Key
- **Parametro da API**: api_token
- **Localização**: URL query string