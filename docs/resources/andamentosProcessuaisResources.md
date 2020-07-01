# Recurso: **andamentosProcessuais**

> Com os andamentos processuais, você poderá visualizar todas as movimentações e documentos 
>(PDF e HTML) do polo interno.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](andamentosProcessuaisResources.md#consultarPorId) | **GET** /andamentos-processuais/{id} | Visualiza um andamento processual
[**cadastrarNovoAndamento**](andamentosProcessuaisResources.md#cadastrarNovoAndamento) | **POST** /andamentos-processuais | Cadastra um novo andamento processual
[**capturarAndamentos**](andamentosProcessuaisResources.md#capturarAndamentos) | **GET** /actions/andamentos-processuais/{andamento_id}/capture | Captura os andamentos processuais de um andamento processual previamente cadastrado no Intima.ai
[**cadastrarNovoAndamentoECapturarAndamentos**](andamentosProcessuaisResources.md#cadastrarNovoAndamentoECapturarAndamentos) | **POST** /actions/andamentos-processuais/create-and-capture | Cadastra e captura os andamento processuais no Intima.ai
[**consultarResultadosDoAndamento**](andamentosProcessuaisResources.md#consultarResultadosDoAndamento) | **GET** /andamentos-processuais/{andamento_id}/results | Retorna um *Paginator* com os andamento processuais capturados
[**excluirAndamento**](andamentosProcessuaisResources.md#excluirAndamento) | **DELETE** /andamentos-processuais/{andamento_id} | Exclui um andamento processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.andamentosProcessuais.consultarPorId(18);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**andamento_processual** | [**AndamentoProcessual**](../models/process_course/AndamentoProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const andamento_processual = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 120 };
    const resultado = await intimaai.andamentosProcessuais.cadastrarNovoAndamento(andamento_processual);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **capturarAndamentos**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.andamentosProcessuais.capturarAndamentos(31);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoAndamentoECapturarAndamentos**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course** | [**AndamentoProcessual**](../models/process_course/AndamentoProcessual.md) | parametros necessários para a criação e captura de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const andamento_processual = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 120 };
    const resultado = await intimaai.andamentosProcessuais.cadastrarNovoAndamentoECapturarAndamentos(andamento_processual);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosDoAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultados = await intimaai.andamentosProcessuais.consultarResultadosDoAndamento(31);
    await resultados.obterPagina(1);
    console.log(resultados.obterColecao());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirAndamento**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.andamentosProcessuais.excluirAndamento(25);
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
