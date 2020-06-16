# **escutasProcessuaisResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](escutasProcessuaisResources.md#consultarPorId) | **GET** /process-listeners/{id} | Visualiza a escuta processual
[**cadastrarNovaEscuta**](escutasProcessuaisResources.md#cadastrarNovaEscuta) | **POST** /process-listeners | Cadastra uma nova escuta processual
[**capturarEscuta**](escutasProcessuaisResources.md#capturarEscuta) | **GET** /actions/process-listeners/{listener_id}/capture | Executa a escuta processual
[**cadastrarNovaEscutaECapturar**](escutasProcessuaisResources.md#cadastrarNovaEscutaECapturar) | **POST** /actions/process-listeners/create-and-capture| Cadastra e executa a escuta processual
[**consultarResultadosCapturadosDaEscuta**](escutasProcessuaisResources.md#consultarResultadosCapturadosDaEscuta) | **GET** /process-listeners/{listener_id}/results | Retorna os resultados da escuta processual
[**atualizarEscuta**](escutasProcessuaisResources.md#atualizarEscuta) | **PUT** /process-listeners/{listener_id} | Atualiza uma escuta processual
[**excluirEscuta**](escutasProcessuaisResources.md#excluirEscuta) | **DELETE** /process-listeners/{listener_id} | Exclui uma escuta processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.escutasProcessuaisResources.consultarPorId(21);
    console.log(by_id_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | [**EscutaProcessual**](../models/listener/EscutaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const listener = { 
        process_number: '0000000-00.0000.0.00.0000', 
        auth_id: 1, 
        schedule_times: ['07:00'] 
    };
    const new_result = await intimaai.escutasProcessuaisResources.cadastrarNovaEscuta(listener);
    console.log(new_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **capturarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const capture_result = await intimaai.escutasProcessuaisResources.capturarEscuta(30);
    console.log(capture_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaEscutaECapturar**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | [**EscutaProcessual**](../models/listener/EscutaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const listener = { 
        process_number: '0000000-00.0000.0.00.0000', 
        auth_id: 1, 
        schedule_times: ['07:00'] 
    };
    const new_and_capture_result = await intimaai.escutasProcessuaisResources.cadastrarNovaEscutaECapturar(listener);
    console.log(new_and_capture_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosCapturadosDaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');
    
    const results_paginator = await intimaai.escutasProcessuaisResources.consultarResultadosCapturadosDaEscuta(31);
    await results_paginator.getPage(1);
    console.log(results_paginator.getCollection());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **atualizarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]
**listener** | [**AtualizarEscutaProcessual**](../models/listener/AtualizarEscutaProcessual.md) | parametros necessários para a atualizar o registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const update_result = await intimaai.escutasProcessuaisResources.atualizarEscuta(31, { schedule_times: ['11:00'] });
    console.log(update_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const delete_result = await intimaai.escutasProcessuaisResources.excluirEscuta(27);
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
