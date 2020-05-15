import { Documento } from "./Documento";

export type SegundaEtapaParaProtocoloDeHabilitacao = {
    tipo_solicitacao: number,
    tipo_declaracao: number,
    polo: number,
    partes_vinculadas: Array<string>,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    documentos?: Array<Documento>
};