# **certificateResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](certificateResource.md#getById) | **GET** /certificates/{id} | Visualiza um certificado
[**getNewCertificate**](certificateResource.md#getNewCertificate) | **POST** /certificates | Cadastra um novo certificado
[**updateCertificate**](certificateResource.md#updateCertificate) | **POST** /certificates/{certificate_id} | Atualiza um certificado
[**deleteCertificate**](certificateResource.md#deleteCertificate) | **DELETE** /certificates/{certificate_id} | Exclui um certificado

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]

# **getNewCertificate**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificate** | **NewCertificate**| parametros necessários para a criação de um novo registro | [obrigatório]

# **updateCertificate**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**certificate_id** | **number**| é o id referente ao certificado cadastrado no Intima.ai | [obrigatório]
**certificate** | **UpdateCertificate**| parametros necessários para a atualização do registro | [obrigatório]

# **deleteCertificate**

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

    const certificate = { pfx: '/path/to/file.pfx', password: '12345678' };
    const result = await intimaai.certificateResource.getById(18);
    const result = await intimaai.certificateResource.getNewCertificate(certificate);
    const result = await intimaai.certificateResource.deleteCertificate(19);
    const paginator = await intimaai.certificateResource.paginate();
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
