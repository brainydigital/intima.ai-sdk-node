# **andamentosProcessuaisResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](andamentosProcessuaisResources.md#consultarPorId) | **GET** /process-courses/{id} | Visualiza um andamento processual
[**cadastrarNovoAndamento**](andamentosProcessuaisResources.md#cadastrarNovoAndamento) | **POST** /process-courses | Cadastra um novo andamento processual
[**capturarAndamentos**](andamentosProcessuaisResources.md#capturarAndamentos) | **GET** /actions/process-courses/{course_id}/capture | Captura os andamentos processuais de um andamento processual previamente cadastrado no Intima.ai
[**cadastrarNovoAndamentoECapturarAndamentos**](andamentosProcessuaisResources.md#cadastrarNovoAndamentoECapturarAndamentos) | **POST** /actions/process-courses/create-and-capture | Cadastra e captura os andamento processuais no Intima.ai
[**consultarResultadosDoAndamento**](andamentosProcessuaisResources.md#consultarResultadosDoAndamento) | **GET** /process-courses/{course_id}/results | Retorna um *Paginator* com os andamento processuais capturados
[**excluirAndamento**](andamentosProcessuaisResources.md#excluirAndamento) | **DELETE** /process-courses/{course_id} | Exclui um andamento processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.andamentosProcessuaisResources.consultarPorId(18);
    console.log(by_id_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course** | [**AndamentoProcessual**](../models/process_course/AndamentoProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const course = { process_number: '0000000-00.0000.0.00.0000', auth_id: 120 };
    const new_result = await intimaai.andamentosProcessuaisResources.cadastrarNovoAndamento(course);
    console.log(new_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **capturarAndamentos**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const capture_result = await intimaai.andamentosProcessuaisResources.capturarAndamentos(31);
    console.log(capture_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoAndamentoECapturarAndamentos**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course** | [**AndamentoProcessual**](../models/process_course/AndamentoProcessual.md) | parametros necessários para a criação e captura de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const course = { process_number: '0000000-00.0000.0.00.0000', auth_id: 120 };
    const new_result = await intimaai.andamentosProcessuaisResources.cadastrarNovoAndamentoECapturarAndamentos(course);
    console.log(new_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosDoAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const capture_results_paginator = await intimaai.andamentosProcessuaisResources.consultarResultadosDoAndamento(31);
    await capture_results_paginator.getPage(1);
    console.log(capture_results_paginator.getCollection());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const delete_result = await intimaai.andamentosProcessuaisResources.excluirAndamento(25);
    console.log(delete_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
