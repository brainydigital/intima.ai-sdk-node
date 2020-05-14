# **autenticacoesResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](autenticacoesResources.md#consultarPorId) | **GET** /auths/{id} | Visualiza um auth
[**cadastrarNovaAutenticacao**](autenticacoesResources.md#cadastrarNovaAutenticacao) | **POST** /auths | Cadastra um novo auth
[**ativarCapturaDeIntimacoesParaAutenticacao**](autenticacoesResources.md#ativarCapturaDeIntimacoesParaAutenticacao) | **PUT** /auths/{auth_id}/intimations/enable | Ativa a captura de intimações para um auth
[**desativarCapturaDeIntimacoesParaAutenticacao**](autenticacoesResources.md#desativarCapturaDeIntimacoesParaAutenticacao) | **PUT** /auths/{auth_id}/intimations/disable | Desativa a captura de intimações para um auth

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]

# **cadastrarNovaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth** | [**NewAuth**](../models/auth/NewAuth.md)| parametros necessários para a criação de um novo registro | [obrigatório]

# **ativarCapturaDeIntimacoesParaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth_id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]
**enable_auth** | [**EnableAuth**](../models/auth/EnableAuth.md)| parametros necessários para a ativação da captura de intimações | [obrigatório]

# **desativarCapturaDeIntimacoesParaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth_id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const auth_by_id = await intimaai.autenticacoesResources.consultarPorId(1);

    const new_auth = { 
        tribunal_id: 1, 
        user_certificate_id: 1,
        // or
        // login: '',
        // password: ''
    };
    const new_auth_result = await intimaai.autenticacoesResources.cadastrarNovaAutenticacao(new_auth);

    const auth_enable = { day_hour: ['06:00'], tabs: ['SEM_PRAZO'], week_days: [0] };
    const enable_auth_intimations_result = await intimaai.autenticacoesResources.ativarCapturaDeIntimacoesParaAutenticacao(199, auth_enable);

    const disable_auth_intimations_result = await intimaai.autenticacoesResources.desativarCapturaDeIntimacoesParaAutenticacao(199);
    
    const paginator = await intimaai.autenticacoesResources.paginate();
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
