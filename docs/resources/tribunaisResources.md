# Recurso: **tribunais**

> Os tribunais correspondem a todos os sistemas jurídicos disponíveis no `Intima.ai` 
> (PJE, ESAJ, PROJUDI e etc). 
>
> Para cada tribunal, você pode definir se deseja realizar as captura de intimações 
> (definir dias e horários do seu agrado) e associar uma `Autenticação`.
> 
> A `Autenticação` pode ser um certificado A1 ou login e senha, mas sempre deve-se 
> ficar atento as funcionalidades suportadas por cada tribunal.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](tribunaisResources.md#consultarPorId) | **GET** /tribunais/{id} | Visualiza um tribunal

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao tribunal disponível no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.tribunais.consultarPorId(18);
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
