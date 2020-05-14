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

# **cadastrarNovaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | [**Listener**](../models/listener/Listener.md) | parametros necessários para a criação de um novo registro | [obrigatório]

# **capturarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

# **cadastrarNovaEscutaECapturar**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | [**Listener**](../models/listener/Listener.md) | parametros necessários para a criação de um novo registro | [obrigatório]

# **consultarResultadosCapturadosDaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

# **atualizarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]
**listener** | [**ListenerUpdate**](../models/listener/ListenerUpdate.md) | parametros necessários para a atualizar o registro | [obrigatório]

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

    const by_id_result = await intimaai.escutasProcessuaisResources.consultarPorId(21);

    const delete_result = await intimaai.escutasProcessuaisResources.excluirEscuta(27);

    const capture_result = await intimaai.escutasProcessuaisResources.capturarEscuta(30);

    const listener = { 
        process_number: '0000000-00.0000.0.00.0000', 
        auth_id: 1, 
        schedule_times: ['07:00'] 
    };

    const new_result = await intimaai.escutasProcessuaisResources.cadastrarNovaEscuta(listener);

    const new_and_capture_result = await intimaai.escutasProcessuaisResources.cadastrarNovaEscutaECapturar(listener);

    const update_result = await intimaai.escutasProcessuaisResources.atualizarEscuta(31, { schedule_times: ['11:00'] });
    
    const results_paginator = await intimaai.escutasProcessuaisResources.consultarResultadosCapturadosDaEscuta(31);
    await results_paginator.getPage(1);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
