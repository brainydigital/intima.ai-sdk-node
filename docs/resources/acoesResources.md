# Recurso: **acoes**

> Todas as ações realizadas dentro do `Intima.ai`, ficam registradas neste recurso. Você pode 
>utilizar o método `consultarResultadosDaAcao` para visualizar detalhamente os resultados da ação 
>solicitada.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](acoesResources.md#consultarPorId) | **GET** /acoes/{id} | Visualiza uma ação pelo id
[**consultarResultadosDaAcao**](acoesResources.md#consultarResultadosDaAcao) | **GET** /acoes/{acao_id}/resultados | Retorna um [**Paginator**](../models/api/Paginator.md) com o resultados de uma ação

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

    const resultado = await intimaai.acoes.consultarPorId(95388);
    console.log(resultado);
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
**acao_id** | **number**| é o id referente a ação no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultados = await intimaai.acoes.consultarResultadosDaAcao(95371);
    await resultados.obterPagina(1);
    console.log(resultados.obterColecao());
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
