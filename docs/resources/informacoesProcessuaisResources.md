# Recurso: **informacoesProcessuais**

> Com as informações processuais, você poderá obter todas as informações do processo, tais como: 
>valor da causa, classe judicial, assuntos, polos e etc.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](informacoesProcessuaisResources.md#consultarPorId) | **GET** /informacoes-processuais/{id} | Visualiza as informações processuais por id
[**capturarNovaInformacaoProcessual**](informacoesProcessuaisResources.md#capturarNovaInformacaoProcessual) | **POST** /acoes/informacoes-processuais | Cadastra uma nova captura de informações processuais de um processo

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente as informações processuais capturadas no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.informacoesProcessuais.consultarPorId(21);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **capturarNovaInformacaoProcessual**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**informacao_processual** | [**InformacaoProcessual**](../models/process_info/InformacaoProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const processo = { numero_processo: '00000000000000000000', autenticacao_id: 120 };
    const resultado = await intimaai.informacoesProcessuais.capturarNovaInformacaoProcessual(processo);
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
