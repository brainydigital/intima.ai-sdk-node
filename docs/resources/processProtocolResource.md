# **processProtocolResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](processProtocolResource.md#getById) | **GET** /process-protocols/{id} | Visualiza o protocolo
[**getNewProtocol**](processProtocolResource.md#getNewProtocol) | **POST** /actions/process-protocols | Cadastra um novo protocolo

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao protocolo no Intima.ai | [obrigatório]

# **getNewProtocol**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**protocol** | **Protocol**| parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.processProtocolResource.getById(14362);
    
    const paginator = await intimaai.processProtocolResource.paginate();
    await paginator.getPage(1);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
