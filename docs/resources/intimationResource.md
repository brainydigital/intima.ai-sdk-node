# **intimationResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](intimationResource.md#getById) | **GET** /intimations/{id} | Visualiza uma intimação
[**markAsRevised**](intimationResource.md#markAsRevised) | **PUT** /intimations/{intimation_id}/mark-as-revised | Marca uma intimação como revisada

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a intimação no Intima.ai | [obrigatório]

# **markAsRevised**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**intimation_id** | **number**| é o id referente a intimação no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.intimationResource.getById(1);
    const result = await intimaai.intimationResource.markAsRevised(1);
    
    const paginator = await intimaai.intimationResource.paginate();
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
