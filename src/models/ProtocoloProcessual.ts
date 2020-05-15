import { Peticao } from "./Peticao";
import { Documento } from "./Documento";

export type ProtocoloProcessual = {
    process_number: string,
    auth_id: number,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    peticao?: Peticao,
    documentos?: Array<Documento>
}