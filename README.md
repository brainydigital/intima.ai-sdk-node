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

- Documentação da API: [API de Integração](https://documenter.getpostman.com/view/2116715/SzmmVuso?version=latest)

## **Instalação**

### [Node.js](https://nodejs.org/)

#### npm

Intale via npm:

```shell
npm install @brainy-digital/intima.ai-sdk-node --save
```

## Començando

Após seguir os passos da [instalação](#Instalação). Por exemplo, para realizar uma cópia processual:

```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';


try
{
    const intimaai = new Intimaai('api_secret_token');

    //Get a new process copy
    const copy = { process_number: '0000000-00.0000.0.00.0000', auth_id: 1 };
    const result = await intimaai.copiasProcessuaisResources.cadastrarNovaCopia(copy);

    console.log(result);
}
catch (error)
{
    console.error('error: ', error);
}
```

## Paginação

A maioria dos recursos do SDK (Resources) possuem paginação, que pode ser acessada atravez do 
[**Paginator**](./docs/models/api/Paginator.md). A utilização da paginação de um recurso é bem simples:

```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';


try
{
    const intimaai = new Intimaai('api_secret_token');

    //Resource paginated
    const paginator_actions = intimaai.acoesResources.paginate();
    await paginator_actions.getPage(1);
    await paginator_actions.nextPage();
    await paginator_actions.previousPage();
    await paginator_actions.hasNextPage();
    await paginator_actions.loadAll();

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
[**autenticacoesResources**](docs/resources/autenticacoesResources.md#autenticacoesResources) | Contém todos os endpoints/métodos para os auths
[**tribunaisResources**](docs/resources/tribunaisResources.md#tribunaisResources) | Contém todos os endpoints/métodos para os tribunais
[**certificadosResources**](docs/resources/certificadosResources.md#certificadosResources) | Contém todos os endpoints/métodos para os seus certificados
[**intimacoesResources**](docs/resources/intimacoesResources.md#intimacoesResources) | Contém todos os endpoints/métodos para intimações capturadas
[**usuariosResources**](docs/resources/user/usuariosResources.md#usuariosResources) | Contém todos os endpoints/métodos para seu usuário
[**notificacoesResources**](docs/resources/user/notificacoesResources.md#notificacoesResources) | Contém todos os endpoints/métodos para seu os dependentes do usuário (que irão receber notificações)
[**webhooksResources**](docs/resources/user/webhooksResources.md#webhooksResources) | Contém todos os endpoints/métodos para os webhooks do usuário
[**acoesResources**](docs/resources/acoesResources.md#acoesResources) | Contém todos os endpoints/métodos para ações
[**copiasProcessuaisResources**](docs/resources/copiasProcessuaisResources.md#copiasProcessuaisResources) | Contém todos os endpoints/métodos para as cópias processuais
[**escutasProcessuaisResources**](docs/resources/escutasProcessuaisResources.md#escutasProcessuaisResources) | Contém todos os endpoints/métodos para as escutas processuais
[**protocolosDeHabilitacaoResources**](docs/resources/protocolosDeHabilitacaoResources.md#protocolosDeHabilitacaoResources) | Contém todos os endpoints/métodos para os protocolos de habilitação
[**informacoesProcessuaisResources**](docs/resources/informacoesProcessuaisResources.md#informacoesProcessuaisResources) | Contém todos os endpoints/métodos para as informações processuais
[**andamentosProcessuaisResources**](docs/resources/andamentosProcessuaisResources.md#andamentosProcessuaisResources) | Contém todos os endpoints/métodos para os andamentos processuais
[**protocolosProcessuaisResources**](docs/resources/protocolosProcessuaisResources.md#protocolosProcessuaisResources) | Contém todos os endpoints/métodos para os protocolos no PJE
[**protocolosProcessuaisEsajResources**](docs/resources/protocolosProcessuaisEsajResources.md#protocolosProcessuaisEsajResources) | Contém todos os endpoints/métodos para os protocolos no ESAJ
[**consultasProcessuaisResources**](docs/resources/consultasProcessuaisResources.md#consultasProcessuaisResources) | Contém todos os endpoints/métodos para consultas processuais e pré-análises


## Documentação para Autenticação


### api_token

- **Tipo**: API Key
- **Parametro da API**: api_token
- **Localização**: URL query string