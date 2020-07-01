import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { PrimeiraEtapaParaProtocoloDeHabilitacao } from "../models/PrimeiraEtapaParaProtocoloDeHabilitacao";
import { SegundaEtapaParaProtocoloDeHabilitacao } from "../models/SegundaEtapaParaProtocoloDeHabilitacao";
import * as fs from 'fs';

export class ProcessQualificationProtocol extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'protocolos-de-habilitacao';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem um protocolo de habilitação pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo protocolo de habilitação, está é a primeira etapa (de duas etapas) para cadastrar um novo protocolo de habilitação no Intima.ai
     */
    public async cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(primeira_etapa_para_protocolo_de_habilitacao: PrimeiraEtapaParaProtocoloDeHabilitacao): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, primeira_etapa_para_protocolo_de_habilitacao, {}, {}, null, true);
    }

    /**
     * Cadastra um novo protocolo de habilitação, está é a segunda e ultima etapa para cadastrar um novo protocolo de habilitação no Intima.ai
     */
    public async cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(protocolo_de_habilitacao_id: number, segunda_etapa_para_protocolo_de_habilitacao: SegundaEtapaParaProtocoloDeHabilitacao): Promise<any> {

        let attachs = null;

        if (segunda_etapa_para_protocolo_de_habilitacao.documentos) {
            if (segunda_etapa_para_protocolo_de_habilitacao.documentos.length) {
                const files = segunda_etapa_para_protocolo_de_habilitacao.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw "O caminho do arquivo informado é inválido!";
                    }

                    delete doc['arquivo'];
                    return file_path;
                });
                attachs = { field_name: 'documentos', files: files } ;
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${protocolo_de_habilitacao_id}`,
                segunda_etapa_para_protocolo_de_habilitacao,
                {},
                {},
                attachs,
                true
            );
    }
}