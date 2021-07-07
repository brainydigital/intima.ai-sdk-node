import { Peticao } from "./Peticao";
import { Documento } from "./Documento";
import { ParteVinculada } from "./ParteVinculada";

export type SegundaEtapaParaProtocoloProcessualTjrj = {
    classe_id: number,
    categoria_id: number,
    partes_vinculadas: Array<ParteVinculada>,
    peticao: Peticao,
    documentos: Array<Documento>
}