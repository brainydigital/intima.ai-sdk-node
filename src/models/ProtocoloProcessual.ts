import { Documento } from "./Documento";
import { Peticao } from "./Peticao";

export type ProtocoloProcessual = {
    numero_processo: string,
    autenticacao_id: number,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    peticao?: Peticao,
    documentos?: Array<Documento>
}