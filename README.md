# Intima.ai - SDK NodeJS

Bem vindo a documentação da API do [Intima.ai](https://app.intima.ai). Está documentação cobre todas as ações disponíveis dentro do Intima.ai e as disponibilizam como `ENDPOINTS` que podem ser integrados e utilizados por outros serviços ou aplicações, bastando somente possuir o `Token de acesso da API`.

- Versão da API: 1.0.0

## Instalação

### [Node.js](https://nodejs.org/)

#### npm

Intale via npm:

```shell
npm install @brainy-digital/intimai-sdk-node --save
```

### Configuração com Webpack

Usando Webpack talvez você encontre o seguinte erro: "Module not found: Error:
Cannot resolve module", desative o AMD loader. Adicione a seguinte configuração no seu webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Començando

Após seguir a [instalação](#installation):

```javascript
var IntimaiApi = require('@brainy-digital/intimai-sdk-node');

var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = "YOUR API KEY"

var api = new IntimaiApi.AcoesApi()

var pjeActionId = 56; // {Number} é fornecido após se realizar a requisição de qualquer ação para o Intima.ai

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActionStatus(pjeActionId, callback);

```

## Documentação para os Endpoints da API

Todas as URIs são relativas a *https://app.intima.ai/api*

Classe | Metodo | Requisição HTTP | Descrição
------------ | ------------- | ------------- | -------------
*IntimaiApi.AcoesApi* | [**getActionStatus**](docs/AcoesApi.md#getActionStatus) | **GET** /actions/status/{pje_action_id} | Checa o resultado de uma ação
*IntimaiApi.CopiasApi* | [**createProcessCopy**](docs/CopiasApi.md#createProcessCopy) | **POST** /actions/processos/copy/{pje_auth_id} | Realiza uma nova cópia processual
*IntimaiApi.EscutasApi* | [**createProcessEscuta**](docs/EscutasApi.md#createProcessEscuta) | **POST** /actions/process-docs/{pje_auth_id} | Realiza uma nova escuta processual
*IntimaiApi.IntimacoesApi* | [**getAllIntimacoes**](docs/IntimacoesApi.md#getAllIntimacoes) | **GET** /intimacoes | Visualiza todas as intimações capturadas
*IntimaiApi.ProtocolosApi* | [**createProcessProtocolo**](docs/ProtocolosApi.md#createProcessProtocolo) | **POST** /actions/process-protocol/{pje_auth_id} | Realiza um novo protocolo


## Documentação para os Models

 - [IntimaiApi.ActionsProcessDocsResponse](docs/ActionsProcessDocsResponse.md)
 - [IntimaiApi.ActionsProcessProtocolResponse](docs/ActionsProcessProtocolResponse.md)
 - [IntimaiApi.ActionsProcessosCopyResponse](docs/ActionsProcessosCopyResponse.md)
 - [IntimaiApi.ActionsStatusResponse](docs/ActionsStatusResponse.md)
 - [IntimaiApi.Documento](docs/Documento.md)
 - [IntimaiApi.IntimacoesResponse](docs/IntimacoesResponse.md)


## Documentação para Autenticação


### api_token

- **Tipo**: API Key
- **Parametro da API**: api_token
- **Localização**: URL query string

