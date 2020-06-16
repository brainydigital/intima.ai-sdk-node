# **intimacoesResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](intimacoesResources.md#consultarPorId) | **GET** /intimations/{id} | Visualiza uma intimação
[**marcarIntimacaoComoRevisada**](intimacoesResources.md#marcarIntimacaoComoRevisada) | **PUT** /intimations/{intimation_id}/mark-as-revised | Marca uma intimação como revisada

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a intimação no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.intimacoesResources.consultarPorId(1);
    console.log(by_id_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **marcarIntimacaoComoRevisada**

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

    const mark_intimation_result = await intimaai.intimacoesResources.marcarIntimacaoComoRevisada(1);
    console.log(mark_intimation_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
