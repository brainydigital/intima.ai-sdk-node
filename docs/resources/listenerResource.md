# **listenerResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](listenerResource.md#getById) | **GET** /process-listeners/{id} | Visualiza a escuta processual
[**getNewListener**](listenerResource.md#getNewListener) | **POST** /process-listeners | Cadastra uma nova escuta processual
[**captureListener**](listenerResource.md#captureListener) | **GET** /actions/process-listeners/{listener_id}/capture | Executa a escuta processual
[**getNewListenerAndCapture**](listenerResource.md#getNewListenerAndCapture) | **POST** /actions/process-listeners/create-and-capture| Cadastra e executa a escuta processual
[**getListenerResults**](listenerResource.md#getListenerResults) | **GET** /process-listeners/{listener_id}/results | Retorna os resultados da escuta processual
[**updateListener**](listenerResource.md#updateListener) | **PUT** /process-listeners/{listener_id} | Atualiza uma escuta processual
[**deleteListener**](listenerResource.md#deleteListener) | **DELETE** /process-listeners/{listener_id} | Exclui uma escuta processual

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

# **getNewListener**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | **Listener**| parametros necessários para a criação de um novo registro | [obrigatório]

# **captureListener**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

# **getNewListenerAndCapture**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener** | **Listener**| parametros necessários para a criação de um novo registro | [obrigatório]

# **getListenerResults**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

# **updateListener**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]
**listener** | **ListenerUpdate**| parametros necessários para a atualizar o registro | [obrigatório]

# **deleteListener**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**listener_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const listener = { 
        process_number: '0037250-06.2018.8.17.2001', 
        auth_id: 1, 
        schedule_times: ['07:00'] 
    };
    const result = await intimaai.listenerResource.getById(21);
    const result = await intimaai.listenerResource.deleteListener(27);
    const result = await intimaai.listenerResource.captureListener(30);
    const result = await intimaai.listenerResource.getNewListenerAndCapture(listener);
    const result = await intimaai.listenerResource.getNewListener(listener);
    const result = await intimaai.listenerResource.updateListener(31, { schedule_times: ['11:00'] });
    
    const paginator = await intimaai.listenerResource.getListenerResults(31);
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
