# **actionResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](actionResource.md#getById) | **GET** /actions/{id} | Visualiza um auth
[**getActionResults**](actionResource.md#getActionResults) | **GET** /actions/{action_id}/results | Retorna um *Paginator* com o resultado de uma ação

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a ação no Intima.ai | [obrigatório]

# **getActionResults**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**action_id** | **number**| é o id referente a ação no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.actionResource.getById(95388);

    const paginator = await intimaai.actionResource.getActionResults(95371);
    await paginator.getPage(1);
    
    const paginator = await intimaai.actionResource.paginate();
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
