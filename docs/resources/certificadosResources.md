# Recurso: **certificados**

> Certas ações como protocolar, por exemplo, exigem que possua um `Tribunal` com o tipo de autenticação 
> `Certificado A1`.
> 
> Após associar um `Certificado A1` a sua conta, você deverá esperar até que o mesmo seja aprovado e 
> liberado por nossa equipe.


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](certificadosResources.md#consultarPorId) | **GET** /certificados/{id} | Visualiza um certificado
[**cadastrarNovoCertificado**](certificadosResources.md#cadastrarNovoCertificado) | **POST** /certificados | Cadastra um novo certificado
[**atualizarCertificado**](certificadosResources.md#atualizarCertificado) | **POST** /certificados/{certificado_id} | Atualiza um certificado
[**excluirCertificado**](certificadosResources.md#excluirCertificado) | **DELETE** /certificados/{certificado_id} | Exclui um certificado

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.certificados.consultarPorId(18);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificado** | [**Certificado**](../models/certificate/Certificado.md)| parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const certificado = { pfx: '/path/to/file.pfx', senha: '12345678' };
    const resultado = await intimaai.certificados.cadastrarNovoCertificado(certificado);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **atualizarCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificado_id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]
**certificado** | [**Certificado**](../models/certificate/Certificado.md)| parametros necessários para a atualização do registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const certificado = { pfx: '/path/to/file.pfx', senha: '12345678' };
    const resultado = await intimaai.certificados.atualizarCertificado(1, certificado);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **excluirCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificado_id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.certificados.excluirCertificado(19);
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
