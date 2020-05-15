# **webhooksResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](webhooksResources.md#consultarPorId) | **GET** /user-webhooks | Visualiza um webhook do usuário
[**cadastrarNovoWebhook**](webhooksResources.md#cadastrarNovoWebhook) | **POST** /user-webhooks | Cadastra um novo webhook do usuário
[**atualizarWebhook**](webhooksResources.md#atualizarWebhook) | **PUT** /user-webhooks/{user_webhook_id} | Atualiza um webhook do usuário
[**excluirWebhook**](webhooksResources.md#excluirWebhook) | **DELETE** /user-webhooks/{user_webhook_id} | Exclui um webhook do usuário

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

# **cadastrarNovoWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook** | [**Webhook**](../../models/webhook/Webhook.md) | parametros necessários para a criação de um novo registro | [obrigatório]

# **atualizarWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]
**user_webhook** | [**Webhook**](../../models/webhook/Webhook.md) | parametros necessários para a criação de um novo registro | [obrigatório]

# **excluirWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';
import { ACTION_TYPE, HTTP_VERB } from '@brainy-digital/intima.ai-sdk-node/models/Webhook';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.webhooksResources.consultarPorId(4);

    const webhook = { 
        action_type: ACTION_TYPE.PROCESS_COPY // ou apenas 1, 
        http_verb: HTTP_VERB.GET // ou apenas 'GET', 
        url: 'https://example.com' 
    };

    const new_webhook_result = await intimaai.webhooksResources.cadastrarNovoWebhook(webhook);

    const update_webhook_result = await intimaai.webhooksResources.atualizarWebhook(2, webhook);

    const delete_webhook_result = await intimaai.webhooksResources.excluirWebhook(6);

    const paginator = await intimaai.webhooksResources.paginate();
    await paginator.getPage(1);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../../README.md#Intima.ai---SDK-NodeJS)
