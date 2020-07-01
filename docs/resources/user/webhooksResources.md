# Recurso: **webhooksResources**

> Atravez deste recurso você poderá cadastrar e manter todos os webhooks que deseja ser notificado, 
>após o termino de uma ação realizada pelo `Intima.ai`.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](webhooksResources.md#consultarPorId) | **GET** /usuarios-webhooks | Visualiza um webhook do usuário
[**cadastrarNovoWebhook**](webhooksResources.md#cadastrarNovoWebhook) | **POST** /usuarios-webhooks | Cadastra um novo webhook do usuário
[**atualizarWebhook**](webhooksResources.md#atualizarWebhook) | **PUT** /usuarios-webhooks/{webhook_id} | Atualiza um webhook do usuário
[**excluirWebhook**](webhooksResources.md#excluirWebhook) | **DELETE** /usuarios-webhooks/{webhook_id} | Exclui um webhook do usuário

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.webhooks.consultarPorId(4);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**webhook** | [**Webhook**](../../models/webhook/Webhook.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';
import { ACTION_TYPE, HTTP_VERB } from '@brainy-digital/intima.ai-sdk-node/models/Webhook';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const webhook = { 
        tipo_acao: ACTION_TYPE.PROCESS_COPY // ou apenas 1, 
        verbo_http: HTTP_VERB.GET // ou apenas 'GET', 
        url: 'https://example.com' 
    };

    const resultado = await intimaai.webhooks.cadastrarNovoWebhook(webhook);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **atualizarWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]
**webhook** | [**Webhook**](../../models/webhook/Webhook.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';
import { ACTION_TYPE, HTTP_VERB } from '@brainy-digital/intima.ai-sdk-node/models/Webhook';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const webhook = { 
        tipo_acao: ACTION_TYPE.PROCESS_COPY // ou apenas 1, 
        verbo_http: HTTP_VERB.GET // ou apenas 'GET', 
        url: 'https://example.com' 
    };

    const resultado = await intimaai.webhooks.atualizarWebhook(2, webhook);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirWebhook**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**webhook_id** | **number**| é o id referente ao webhook do usuário no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.webhooks.excluirWebhook(6);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../../README.md#Intima.ai---SDK-NodeJS)
