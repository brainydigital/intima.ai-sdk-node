# Recurso: **notificacoesResources**

> Atravez deste recurso você poderá ter o controle de todos os outros emails em que se deseja 
>receber notificações, além do seu email principal.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](notificacoesResources.md#consultarPorId) | **GET** /usuarios-notificacoes/{email_notificacao_id} | Visualiza um email cadastrado para receber notificações
[**cadastrarNovoEmailParaNotificacoes**](notificacoesResources.md#cadastrarNovoEmailParaNotificacoes) | **POST** /usuarios-notificacoes | Cadastra um novo email para receber notificações
[**atualizarEmailParaNotificacoes**](notificacoesResources.md#atualizarEmailParaNotificacoes) | **PUT** /usuarios-notificacoes/{email_notificacao_id} | Atualiza um email para receber notificações
[**excluirEmailParaNotificacoes**](notificacoesResources.md#excluirEmailParaNotificacoes) | **DELETE** /usuarios-notificacoes/{email_notificacao_id} | Exclui um email, que deixara de receber notificações

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.notificacoes.consultarPorId(1);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**email** | **string**| email que deseja cadastrar para receber notificações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.notificacoes.cadastrarNovoEmailParaNotificacoes('user@email.com');
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **atualizarEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**email_notificacao_id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]
**email** | **string**| email que deseja atualizar para receber notificações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.notificacoes.atualizarEmailParaNotificacoes(3, 'user2@email.com');
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirEmailParaNotificacoes**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**email_notificacao_id** | **number**| é o id referente ao email cadastrado que recebe notificações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.notificacoes.excluirEmailParaNotificacoes(3);
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
