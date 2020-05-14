# **informacoesProcessuaisResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](informacoesProcessuaisResources.md#consultarPorId) | **GET** /process-infos/{id} | Visualiza as informações processuais por id
[**capturarNovaInformacaoProcessual**](informacoesProcessuaisResources.md#capturarNovaInformacaoProcessual) | **POST** /actions/process-infos | Cadastra uma nova captura de informações processuais de um processo

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente as informações processuais capturadas no Intima.ai | [obrigatório]

# **capturarNovaInformacaoProcessual**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**process** | [**Process**](../models/process_info/Process.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.informacoesProcessuaisResources.consultarPorId(21);

    const process = { process_number: '00000000000000000000', auth_id: 120 };
    const new_info_result = await intimaai.informacoesProcessuaisResources.capturarNovaInformacaoProcessual(process);

    const paginator = await intimaai.informacoesProcessuaisResources.paginate();
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
