export enum ACTION_TYPE {
    PROCESS_INFO = 0,
    PROCESS_COPY,
    PROCESS_INTIMACOES,
    PROCESS_ESCUTA,
    PROCESS_PROTOCOLO,
    PROCESS_PROTOCOLO_HABILITACAO,
    PROCESS_ANDAMENTOS,
    PROCESS_CONSULTA,
    PROCESS_CONSULTA_PRE_ANALISE
}

export enum HTTP_VERB {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export type Webhook = {
    tipo_acao: ACTION_TYPE | number,
    verbo_http: HTTP_VERB | string,
    url: string
}