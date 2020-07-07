<br />
<div align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/brainydigital/intima.ai-sdk-node/master/docs/images/logo.png" alt="Logo" width="120" height="120">
  </a>
  
  [![Npm - Downloads](https://img.shields.io/npm/dt/@brainy-digital/intima.ai-sdk-node.svg?style=flat&color=97ca00)](https://www.npmjs.com/package/@brainy-digital/intima.ai-sdk-node "View this project on npm")
  [![Node - Version](https://img.shields.io/badge/node-%3E=_6.4.0-blue.svg?style=flat)](https://www.npmjs.com/package/@brainy-digital/intima.ai-sdk-node "View this project on npm")
  [![Contributors](https://img.shields.io/badge/contributors-2-yellow.svg)](https://github.com/brainydigital/intima.ai-sdk-node/graphs/contributors)
  [![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
</div>

# **Intima.ai - SDK NodeJS**

Este repositório é a implementação da API do [Intima.ai](https://app.intima.ai) em forma de SDK Client para NodeJS. Este SDK cobre todas as ações disponíveis dentro da plataforma do `Intima.ai` e as disponibilizam como métodos, que podem ser integrados e utilizados por outros serviços ou aplicações, bastando somente possuir o `Token de acesso da API (api_token)`.

- Versão da API: 2.0.0

- Documentação da API: [Referência completa da API](https://documenter.getpostman.com/view/11707205/T17GgoJW?version=latest)

## **Instalação**

### [Node.js](https://nodejs.org/)

#### npm

Intale via npm:

```shell
npm install @brainy-digital/intima.ai-sdk-node --save
```

## Començando

Os passos necessários para começar a solicitar novas ações dentro do `Intima.ai` (solicitar cópias processuais, ativar escutas de processos, protocolar e etc) são os seguintes:

1. Importe um Certificado do tipo A1 para sua conta (você advogado pode solicitar um certificado A1 em qualquer certificadora autorizada) 
ou utilize login e senha, caso o tribunal dê suporte;

2. Crie uma Autenticação (serviço de autenticação) para cada Tribunal que você deseja executar Ações;

3. Agora é só solicitar qualquer tipo de ação que o `Intima.ai` dê suporte, seguindo as documentações específicas para cada tipo de ação.

Após seguir os passos da [instalação](#Instalação) e possuir uma autenticação válida para um Tribunal. Por exemplo, para realizar uma cópia processual:

```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';


try
{
    const intimaai = new Intimaai('api_secret_token');

    //Get a new process copy
    const copia = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 1 };
    const resultado = await intimaai.copiasProcessuaisResources.cadastrarNovaCopia(copia);

    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

## Paginando recursos

A maioria dos recursos do SDK possuem paginação, que pode ser acessada atravez da classe 
[**Paginator**](./docs/models/api/Paginator.md). A utilização da paginação de um recurso é bem simples:

```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';


try
{
    const intimaai = new Intimaai('api_secret_token');

    const paginacao = intimaai.acoes.paginar();

    await paginacao.obterPagina(1);
    await paginacao.proximaPagina();
    await paginacao.paginaAnterior();
    await paginacao.existeProximaPagina();
    await paginacao.carregarTudo();

    const resultados = paginacao.obterColecao();

    console.log(resultados);
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
[**autenticacoes**](docs/resources/autenticacoesResources.md#autenticacoesResources) | Contém todos os endpoints/métodos para os auths
[**tribunais**](docs/resources/tribunaisResources.md#tribunaisResources) | Contém todos os endpoints/métodos para os tribunais
[**certificados**](docs/resources/certificadosResources.md#certificadosResources) | Contém todos os endpoints/métodos para os seus certificados
[**intimacoes**](docs/resources/intimacoesResources.md#intimacoesResources) | Contém todos os endpoints/métodos para intimações capturadas
[**usuarios**](docs/resources/user/usuariosResources.md#usuariosResources) | Contém todos os endpoints/métodos para seu usuário
[**notificacoes**](docs/resources/user/notificacoesResources.md#notificacoesResources) | Contém todos os endpoints/métodos para seu os dependentes do usuário (que irão receber notificações)
[**webhooks**](docs/resources/user/webhooksResources.md#webhooksResources) | Contém todos os endpoints/métodos para os webhooks do usuário
[**acoes**](docs/resources/acoesResources.md#acoesResources) | Contém todos os endpoints/métodos para ações
[**copiasProcessuais**](docs/resources/copiasProcessuaisResources.md#copiasProcessuaisResources) | Contém todos os endpoints/métodos para as cópias processuais
[**escutasProcessuais**](docs/resources/escutasProcessuaisResources.md#escutasProcessuaisResources) | Contém todos os endpoints/métodos para as escutas processuais
[**protocolosDeHabilitacao**](docs/resources/protocolosDeHabilitacaoResources.md#protocolosDeHabilitacaoResources) | Contém todos os endpoints/métodos para os protocolos de habilitação
[**informacoesProcessuais**](docs/resources/informacoesProcessuaisResources.md#informacoesProcessuaisResources) | Contém todos os endpoints/métodos para as informações processuais
[**andamentosProcessuais**](docs/resources/andamentosProcessuaisResources.md#andamentosProcessuaisResources) | Contém todos os endpoints/métodos para os andamentos processuais
[**protocolosProcessuais**](docs/resources/protocolosProcessuaisResources.md#protocolosProcessuaisResources) | Contém todos os endpoints/métodos para os protocolos
[**consultasProcessuais**](docs/resources/consultasProcessuaisResources.md#consultasProcessuaisResources) | Contém todos os endpoints/métodos para consultas processuais e pré-análises


## Documentação para Autenticação


### API Token

- **Tipo**: API Key
- **Parametro da API**: api_token
- **Localização**: URL query string