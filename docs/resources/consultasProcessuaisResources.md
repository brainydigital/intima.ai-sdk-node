# **consultasProcessuaisResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](consultasProcessuaisResources.md#consultarPorId) | **GET** /process-searchs/{id} | Visualiza uma consulta processual
[**cadastrarNovaConsulta**](consultasProcessuaisResources.md#cadastrarNovaConsulta) | **POST** /actions/process-searchs | Cadastra uma nova consulta processual
[**consultarResultadosDaConsulta**](consultasProcessuaisResources.md#consultarResultadosDaConsulta) | **GET** /process-searchs/{search_id}/results | Retorna um [**Paginator**](../models/api/Paginator.md) com os processos capturados
[**listarPreAnalisesDeConsultas**](consultasProcessuaisResources.md#listarPreAnalisesDeConsultas) | **GET** /process-searchs/search-analyses | Retorna um [**Paginator**](../models/api/Paginator.md) com as pré-análises previamente realizadas para as consultas processuais
[**consultarPorIdPreAnaliseDeConsulta**](consultasProcessuaisResources.md#consultarPorIdPreAnaliseDeConsulta) | **GET** /process-searchs/search-analyses/{id} | Visualiza uma pré-análise que foi realizada para uma determinada consulta processual
[**cadastrarPreAnaliseDeConsulta**](consultasProcessuaisResources.md#cadastrarPreAnaliseDeConsulta) | **POST** /actions/process-searchs/search-analyses | Cadastra uma nova pré-análise para uma determinada consulta processual

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

    const by_id_result = await intimaai.consultasProcessuaisResources.consultarPorId(44);
    console.log(by_id_result);
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
**search** | [**ConsultaProcessual**](../models/process_search/ConsultaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const process_search = { process_number: '0000000-00.0000.0.00.0000', auth_id: 3 };
    const new_result = await intimaai.consultasProcessuaisResources.cadastrarNovaConsulta(process_search);
    console.log(new_result);
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
**search_id** | **number**| é o id referente a consulta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const results_paginator = await intimaai.consultasProcessuaisResources.consultarResultadosDaConsulta(44);
    await results_paginator.getPage(1);
    console.log(results_paginator.getCollection());
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

    const analyses_paginator = await intimaai.consultasProcessuaisResources.listarPreAnalisesDeConsultas();
    await analyses_paginator.getPage(1);
    console.log(analyses_paginator.getCollection());
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

    const pre_analyse_result = await intimaai.consultasProcessuaisResources.consultarPorIdPreAnaliseDeConsulta(23);
    console.log(pre_analyse_result);
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
**search_analyse** | [**PreAnaliseDeConsultaProcessual**](../models/process_search/PreAnaliseDeConsultaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const process_search = { process_number: '0000000-00.0000.0.00.0000', auth_id: 3 };
    const new_pre_analyse_result = await intimaai.consultasProcessuaisResources.cadastrarPreAnaliseDeConsulta(process_search);
    console.log(new_pre_analyse_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
