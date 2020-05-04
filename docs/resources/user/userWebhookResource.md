# **userWebhookResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](userWebhookResource.md#getById) | **GET** /user-webhooks | Visualiza um webhook do usuário
[**getNewUserWebhook**](userWebhookResource.md#getNewUserWebhook) | **POST** /user-webhooks | Cadastra um novo webhook do usuário
[**updateUserWebhook**](userWebhookResource.md#updateUserWebhook) | **PUT** /user-webhooks/{user_webhook_id} | Atualiza um webhook do usuário
[**deleteUserWebhook**](userWebhookResource.md#deleteUserWebhook) | **DELETE** /user-webhooks/{user_webhook_id} | Exclui um webhook do usuário

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

# **getNewUserWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook** | **Webhook**| parametros necessários para a criação de um novo registro | [obrigatório]

# **updateUserWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]
**user_webhook** | **Webhook**| parametros necessários para a criação de um novo registro | [obrigatório]

# **deleteUserWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.userWebhookResource.getById(4);
    const webhook = { 
        action_type: ACTION_TYPE.PROCESS_COPY, 
        http_verb: HTTP_VERB.GET, 
        url: 'https://example.com' 
    };
    const result = await intimaai.userWebhookResource.getNewUserWebhook(webhook);
    const result = await intimaai.userWebhookResource.deleteUserWebhook(6);

    const paginator = await intimaai.userWebhookResource.paginate();
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
