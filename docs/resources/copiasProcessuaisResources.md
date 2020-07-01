# Recurso: **copiasProcessuais**

> Neste recurso você poderá visualizar e manter todas as suas cópias processuais. 
>Bastando somente informar o tribunal e numero do processo.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](copiasProcessuaisResources.md#consultarPorId) | **GET** /copias-processuais/{id} | Visualiza as informações processuais por id
[**cadastrarNovaCopia**](copiasProcessuaisResources.md#cadastrarNovaCopia) | **POST** /acoes/copias-processuais | Cadastra uma nova cópia processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a cópia processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.copiasProcessuais.consultarPorId(45202);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaCopia**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**copy** | [**CopiaProcessual**](../models/copy/CopiaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const copia = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 1 };
    const resultado = await intimaai.copiasProcessuais.cadastrarNovaCopia(copia);
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
