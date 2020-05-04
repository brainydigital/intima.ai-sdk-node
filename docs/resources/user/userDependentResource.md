# **userDependentResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](userDependentResource.md#getById) | **GET** /user-dependents | Visualiza um dependente do usuário
[**getNewUserDependent**](userDependentResource.md#getNewUserDependent) | **POST** /user-dependents | Cadastra um novo dependente do usuário
[**updateUserDependent**](userDependentResource.md#updateUserDependent) | **PUT** /user-dependents/{user_dependent_id} | Atualiza um dependente do usuário
[**deleteUserDependent**](userDependentResource.md#deleteUserDependent) | **DELETE** /user-dependents/{user_dependent_id} | Exclui um dependente do usuário

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao dependente do usuário no Intima.ai | [obrigatório]

# **getNewUserDependent**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_dependent** | **Dependent**| parametros necessários para a criação de um novo registro | [obrigatório]

# **updateUserDependent**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_dependent_id** | **number**| é o id referente ao dependente do usuário no Intima.ai | [obrigatório]
**user_dependent** | **Dependent**| parametros necessários para a criação de um novo registro | [obrigatório]

# **deleteUserDependent**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**user_dependent_id** | **number**| é o id referente ao dependente do usuário no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.userDependentResource.getById(1);
    const result = await intimaai.userDependentResource.getNewUserDependent({ email: 'user@email.com' });
    const result = await intimaai.userDependentResource.updateUserDependent(3, { email: 'user2@email.com' });
    const result = await intimaai.userDependentResource.deleteUserDependent(3);
    
    const paginator = await intimaai.userDependentResource.paginate();
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
