# **processCourseResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](processCourseResource.md#getById) | **GET** /process-courses/{id} | Visualiza um andamento processual
[**getNewCourse**](processCourseResource.md#getNewCourse) | **POST** /process-courses | Cadastra um novo andamento processual
[**captureCourse**](processCourseResource.md#captureCourse) | **GET** /actions/process-courses/{course_id}/capture | Captura os andamentos processuais de um andamento processual previamente cadastrado no Intima.ai
[**getNewCourseAndCapture**](processCourseResource.md#getNewCourseAndCapture) | **POST** /actions/process-courses/create-and-capture | Cadastra e captura os andamento processuais no Intima.ai
[**getCourseResults**](processCourseResource.md#getCourseResults) | **GET** /process-courses/{course_id}/results | Retorna um *Paginator* com os andamento processuais capturados
[**deleteCourse**](processCourseResource.md#deleteCourse) | **DELETE** /process-courses/{course_id} | Exclui um andamento processual

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

# **getNewCourse**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course** | **Course**| parametros necessários para a criação de um novo registro | [obrigatório]

# **captureCourse**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

# **getNewCourseAndCapture**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course** | **Course**| parametros necessários para a criação e captura de um novo registro | [obrigatório]

# **getCourseResults**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

# **deleteCourse**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**course_id** | **number**| é o id referente ao andamento processual no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.tribunalResource.getById(18);
    const paginator = await intimaai.tribunalResource.paginate();
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
