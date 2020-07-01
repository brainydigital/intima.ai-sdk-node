# Recurso: **consultasProcessuais**

> Com este recurso você poderá realizar consultas de todos os processos disponíveis em qualquer 
>tribunal do Brasil. Bastando apenas informar o `numero do proceso` ou o `nome da parte` ou o `nome do 
>representante`.
>
> O `Intima.ai` recomenda que antes de realizar qualquer consulta processual, primeiro solicite 
>a `pré-analise da consulta processual`, pois dependendo dos termos utilizados na consulta processual, 
>poderá haver um numero muito alto de registros encontrados, consumindo assim seus créditos.
>
> A `pré-analise de uma consulta processual` retorna a quantidade de registros encontrados com os 
>termos de busca informados.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](consultasProcessuaisResources.md#consultarPorId) | **GET** /consultas-processuais/{id} | Visualiza uma consulta processual
[**cadastrarNovaConsulta**](consultasProcessuaisResources.md#cadastrarNovaConsulta) | **POST** /acoes/consultas-processuais | Cadastra uma nova consulta processual
[**consultarResultadosDaConsulta**](consultasProcessuaisResources.md#consultarResultadosDaConsulta) | **GET** /consultas-processuais/{consulta_id}/resultados | Retorna um [**Paginator**](../models/api/Paginator.md) com os processos capturados
[**listarPreAnalisesDeConsultas**](consultasProcessuaisResources.md#listarPreAnalisesDeConsultas) | **GET** /consultas-processuais/consultas-analises | Retorna um [**Paginator**](../models/api/Paginator.md) com as pré-análises previamente realizadas para as consultas processuais
[**consultarPorIdPreAnaliseDeConsulta**](consultasProcessuaisResources.md#consultarPorIdPreAnaliseDeConsulta) | **GET** /consultas-processuais/consultas-analises/{id} | Visualiza uma pré-análise que foi realizada para uma determinada consulta processual
[**cadastrarPreAnaliseDeConsulta**](consultasProcessuaisResources.md#cadastrarPreAnaliseDeConsulta) | **POST** /acoes/consultas-processuais/consultas-analises | Cadastra uma nova pré-análise para uma determinada consulta processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a consulta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.consultasProcessuais.consultarPorId(44);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaConsulta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**consulta_processual** | [**ConsultaProcessual**](../models/process_search/ConsultaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const consulta = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 3 };
    const resultado = await intimaai.consultasProcessuais.cadastrarNovaConsulta(consulta);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosDaConsulta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**consulta_processual_id** | **number**| é o id referente a consulta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultados = await intimaai.consultasProcessuais.consultarResultadosDaConsulta(44);
    await resultados.obterPagina(1);
    console.log(resultados.obterColecao());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **listarPreAnalisesDeConsultas**

### Parametros

Este método não possui parametros

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultados = await intimaai.consultasProcessuais.listarPreAnalisesDeConsultas();
    await resultados.obterPagina(1);
    console.log(resultados.obterColecao());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarPorIdPreAnaliseDeConsulta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a consulta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.consultasProcessuais.consultarPorIdPreAnaliseDeConsulta(23);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarPreAnaliseDeConsulta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**pre_analise_de_consulta_processual** | [**PreAnaliseDeConsultaProcessual**](../models/process_search/PreAnaliseDeConsultaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const pre_analise = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 3 };
    const resultado = await intimaai.consultasProcessuais.cadastrarPreAnaliseDeConsulta(pre_analise);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
