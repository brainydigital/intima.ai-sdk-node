# SegundaEtapaParaProtocoloProcessualEsaj

## Propriedades
Nome | Tipo | Descrição | Notas
------------ | ------------- | ------------- | -------------
**classe_id** | **number** | é o id referente a classe do protocolo | [obrigatório] 
**categoria_id** | **number** | é o id referente a categoria do protocolo | [obrigatório] 
**partes_vinculadas** | [**Array\<ParteVinculada\>**](./ParteVinculada.md) | são as partes vinculadas ao protocolo | [obrigatório] 
**peticao** | [**Peticao**](../protocol/Peticao.md) | é a petição que se deseja anexar | [obrigatório] 
**documentos** | [**Array\<Documento\>**](../Documento.md) | são os documentos anexados | [opcional] 

[[Voltar a lista da API]](../../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../../README.md#Intima.ai---SDK-NodeJS)
