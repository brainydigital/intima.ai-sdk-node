# **certificadosResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](certificadosResources.md#consultarPorId) | **GET** /certificates/{id} | Visualiza um certificado
[**cadastrarNovoCertificado**](certificadosResources.md#cadastrarNovoCertificado) | **POST** /certificates | Cadastra um novo certificado
[**atualizarCertificado**](certificadosResources.md#atualizarCertificado) | **POST** /certificates/{certificate_id} | Atualiza um certificado
[**excluirCertificado**](certificadosResources.md#excluirCertificado) | **DELETE** /certificates/{certificate_id} | Exclui um certificado

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]

# **cadastrarNovoCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificate** | [**Certificado**](../models/certificate/Certificado.md)| parametros necessários para a criação de um novo registro | [obrigatório]

# **atualizarCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificate_id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]
**certificate** | [**Certificado**](../models/certificate/Certificado.md)| parametros necessários para a atualização do registro | [obrigatório]

# **excluirCertificado**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificate_id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.certificadosResources.consultarPorId(18);

    const certificate = { pfx: '/path/to/file.pfx', password: '12345678' };
    const new_certificate_result = await intimaai.certificadosResources.cadastrarNovoCertificado(certificate);

    const delete_certificate_result = await intimaai.certificadosResources.excluirCertificado(19);

    const paginator = await intimaai.certificadosResources.paginate();
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
