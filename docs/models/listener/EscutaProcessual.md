# EscutaProcessual

## Propriedades
Nome | Tipo | Descrição | Notas
------------ | ------------- | ------------- | -------------
**autenticacao_id** | **number** | é o id referente ao tribunal cadastrado em "Tribunais ativos" no Intima.ai | [obrigatório] 
**numero_processo** | **string** | é o numero do processo no qual se deseja realizar a cópia | [obrigatório] 
**dias_de_captura** | **Array\<number\>** | são os dias em que deseja realizar as escutas (valores aceitos: de 0 a 6 (sendo "0" domingo e "6" sábado)) | [obrigatório] 
**horarios_de_captura** | **Array\<string\>** | são os horários do dia em que deseja realizar as escutas (valores aceitos: das 06:00 as 00:00) | [obrigatório] 

[[Voltar a lista da API]](../../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../../README.md#Intima.ai---SDK-NodeJS)
