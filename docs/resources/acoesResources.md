# **acoesResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](acoesResources.md#consultarPorId) | **GET** /actions/{id} | Visualiza uma ação pelo id
[**consultarResultadosDaAcao**](acoesResources.md#consultarResultadosDaAcao) | **GET** /actions/{action_id}/results | Retorna um [**Paginator**](../models/api/Paginator.md) com o resultados de uma ação

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a ação no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.acoesResources.consultarPorId(95388);
    console.log(by_id_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosDaAcao**

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

    const results_action_paginator = await intimaai.acoesResources.consultarResultadosDaAcao(95371);
    await results_action_paginator.getPage(1);
    console.log(results_action_paginator.getCollection());
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
