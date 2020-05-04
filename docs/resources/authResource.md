# **authResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](authResource.md#getById) | **GET** /auths/{id} | Visualiza um auth
[**getNewAuth**](authResource.md#getNewAuth) | **POST** /auths | Cadastra um novo auth
[**enableIntimationsAuth**](authResource.md#enableIntimationsAuth) | **PUT** /auths/{auth_id}/intimations/enable | Ativa a captura de intimações para um auth
[**disableIntimationsAuth**](authResource.md#disableIntimationsAuth) | **PUT** /auths/{auth_id}/intimations/disable | Desativa a captura de intimações para um auth

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]

# **getNewAuth**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth** | **NewAuth**| parametros necessários para a criação de um novo registro | [obrigatório]

# **enableIntimationsAuth**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth_id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]
**enable_auth** | **EnableAuth**| parametros necessários para a ativação da captura de intimações | [obrigatório]

# **disableIntimationsAuth**

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

    const result = await intimaai.authResource.getById(1);
    const new_auth = { 
        tribunal_id: 1, 
        user_certificate_id: 1,
        // or
        // login: '',
        // password: ''
    };
    const result = await intimaai.authResource.getNewAuth(new_auth);
    const auth_enable = { day_hour: ['06:00'], tabs: ['SEM_PRAZO'], week_days: [0] };
    const result = await intimaai.authResource.enableIntimationsAuth(199, auth_enable);
    const result = await intimaai.authResource.disableIntimationsAuth(199);
    
    const paginator = await intimaai.authResource.paginate();
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
