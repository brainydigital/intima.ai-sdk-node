# Recurso: **escutasProcessuais**

> Com a escuta processual você pode saber todas as movimentações que ocorreram em um processo, 
>e baixar todos os novos documentos anexados ao processo. Para realizar uma escuta processual 
>é bastante simples, bastando somente informar o numero do processo, tribunal e os horários que 
>deseja realizar a escuta processual.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](escutasProcessuaisResources.md#consultarPorId) | **GET** /escutas-processuais/{id} | Visualiza a escuta processual
[**cadastrarNovaEscuta**](escutasProcessuaisResources.md#cadastrarNovaEscuta) | **POST** /escutas-processuais | Cadastra uma nova escuta processual
[**capturarEscuta**](escutasProcessuaisResources.md#capturarEscuta) | **GET** /acoes/escutas-processuais/{escuta_id}/capturar | Executa a escuta processual
[**cadastrarNovaEscutaECapturar**](escutasProcessuaisResources.md#cadastrarNovaEscutaECapturar) | **POST** /acoes/escutas-processuais/criar-e-capturar| Cadastra e executa a escuta processual
[**consultarResultadosCapturadosDaEscuta**](escutasProcessuaisResources.md#consultarResultadosCapturadosDaEscuta) | **GET** /escutas-processuais/{escuta_id}/results | Retorna os resultados da escuta processual
[**atualizarEscuta**](escutasProcessuaisResources.md#atualizarEscuta) | **PUT** /escutas-processuais/{escuta_id} | Atualiza uma escuta processual
[**excluirEscuta**](escutasProcessuaisResources.md#excluirEscuta) | **DELETE** /escutas-processuais/{escuta_id} | Exclui uma escuta processual

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.escutasProcessuais.consultarPorId(21);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual** | [**EscutaProcessual**](../models/listener/EscutaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const escuta = { 
        numero_processo: '0000000-00.0000.0.00.0000', 
        autenticacao_id: 1, 
        schedule_times: ['07:00'] 
    };
    const resultado = await intimaai.escutasProcessuais.cadastrarNovaEscuta(escuta);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **capturarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const capture_result = await intimaai.escutasProcessuais.capturarEscuta(30);
    console.log(capture_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovaEscutaECapturar**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual** | [**EscutaProcessual**](../models/listener/EscutaProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const escuta = { 
        numero_processo: '0000000-00.0000.0.00.0000', 
        autenticacao_id: 1, 
        horarios_de_captura: ['07:00'] 
    };
    const resultado = await intimaai.escutasProcessuais.cadastrarNovaEscutaECapturar(escuta);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **consultarResultadosCapturadosDaEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');
    
    const resultados = await intimaai.escutasProcessuais.consultarResultadosCapturadosDaEscuta(31);
    await resultados.obterPagina(1);
    console.log(resultados.obterColecao());
}
catch (error)
{
    console.error('error: ', error);
}
```

# **atualizarEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]
**escuta_processual** | [**AtualizarEscutaProcessual**](../models/listener/AtualizarEscutaProcessual.md) | parametros necessários para a atualizar o registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.escutasProcessuais.atualizarEscuta(31, { horarios_de_captura: ['11:00'] });
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirEscuta**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**escuta_processual_id** | **number**| é o id referente a escuta processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.escutasProcessuais.excluirEscuta(27);
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
