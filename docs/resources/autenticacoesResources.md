# Recurso: **autenticacoes**

> As autenticações são os serviços de autenticação do `Intima.ai` para os tribunais. 
> Você pode criar diversas autenticações para diversos tribunais sendo uma autenticação para cada tribunal.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](autenticacoesResources.md#consultarPorId) | **GET** /autenticacoes/{id} | Visualiza uma autenticação pelo id
[**cadastrarNovaAutenticacao**](autenticacoesResources.md#cadastrarNovaAutenticacao) | **POST** /autenticacoes | Cadastra uma nova autenticação
[**ativarCapturaDeIntimacoesParaAutenticacao**](autenticacoesResources.md#ativarCapturaDeIntimacoesParaAutenticacao) | **PUT** /autenticacoes/{autenticacao_id}/intimacoes/ativar | Ativa a captura de intimações para uma autenticação
[**desativarCapturaDeIntimacoesParaAutenticacao**](autenticacoesResources.md#desativarCapturaDeIntimacoesParaAutenticacao) | **PUT** /autenticacoes/{autenticacao_id}/intimacoes/desativar | Desativa a captura de intimações para uma autenticação

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.autenticacoes.consultarPorId(1);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**auth** | [**NovaAutenticacao**](../models/auth/NovaAutenticacao.md)| parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const autenticacao = { 
        tribunal_id: 1, 
        certificado_id: 1,
        // ou
        // login: '',
        // senha: ''
    };
    const resultado = await intimaai.autenticacoes.cadastrarNovaAutenticacao(autenticacao);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **ativarCapturaDeIntimacoesParaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**autenticacao_id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]
**enable_auth** | [**AtivarIntimacoesParaAutenticacao**](../models/auth/AtivarIntimacoesParaAutenticacao.md)| parametros necessários para a ativação da captura de intimações | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const ativar_autenticacao = { horas_do_dia: ['06:00'], abas: ['SEM_PRAZO'], dias_da_semana: [0] };
    const resultado = await intimaai.autenticacoes.ativarCapturaDeIntimacoesParaAutenticacao(199, ativar_autenticacao);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **desativarCapturaDeIntimacoesParaAutenticacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**autenticacao_id** | **number**| é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.autenticacoes.desativarCapturaDeIntimacoesParaAutenticacao(199);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
