# **copyResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](copyResource.md#getById) | **GET** /process-copies/{id} | Visualiza as informações processuais por id
[**getNewCopy**](copyResource.md#getNewCopy) | **POST** /actions/process-copies | Cadastra uma nova cópia processual

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente a cópia processual no Intima.ai | [obrigatório]

# **getNewCopy**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**copy** | **Copy**| parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const copy = { process_number: '0000000-00.0000.0.00.0000', auth_id: 1 };
    const result = await intimaai.copyResource.getNewCopy(copy);
    const result = await intimaai.copyResource.getById(45202);

    const paginator = await intimaai.copyResource.paginate();
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
