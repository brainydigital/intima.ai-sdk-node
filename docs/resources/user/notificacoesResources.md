# **notificacoesResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](notificacoesResources.md#consultarPorId) | **GET** /user-notifications/{user_email_notification_id} | Visualiza um email cadastrado para receber notificações
[**cadastrarNovoEmailParaNotificacoes**](notificacoesResources.md#cadastrarNovoEmailParaNotificacoes) | **POST** /user-notifications | Cadastra um novo email para receber notificações
[**atualizarEmailParaNotificacoes**](notificacoesResources.md#atualizarEmailParaNotificacoes) | **PUT** /user-notifications/{user_email_notification_id} | Atualiza um email para receber notificações
[**excluirEmailParaNotificacoes**](notificacoesResources.md#excluirEmailParaNotificacoes) | **DELETE** /user-notifications/{user_email_notification_id} | Exclui um email, que deixara de receber notificações

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]

# **cadastrarNovoEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**email** | **string**| email que deseja cadastrar para receber notificações | [obrigatório]

# **atualizarEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_email_notification_id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]
**email** | **string**| email que deseja atualizar para receber notificações | [obrigatório]

# **excluirEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_email_notification_id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.notificacoesResources.consultarPorId(1);

    const new_email_result = await intimaai.notificacoesResources.cadastrarNovoEmailParaNotificacoes('user@email.com');

    const update_email_result = await intimaai.notificacoesResources.atualizarEmailParaNotificacoes(3, 'user2@email.com');

    const delete_email_result = await intimaai.notificacoesResources.excluirEmailParaNotificacoes(3);
    
    const paginator = await intimaai.notificacoesResources.paginate();
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
