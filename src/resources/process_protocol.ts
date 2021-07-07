import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ProtocoloProcessual } from "../models/ProtocoloProcessual";
import * as fs from 'fs';
import { PrimeiraEtapaParaProtocoloProcessualEsaj } from "../models/PrimeiraEtapaParaProtocoloProcessualEsaj";
import { SegundaEtapaParaProtocoloProcessualEsaj } from "../models/SegundaEtapaParaProtocoloProcessualEsaj";
import { PrimeiraEtapaParaProtocoloProcessualTjrj } from "../models/PrimeiraEtapaParaProtocoloProcessualTjrj";
import { SegundaEtapaParaProtocoloProcessualTjrj } from "../models/SegundaEtapaParaProtocoloProcessualTjrj";

export class ProcessProtocol extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'protocolos-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem um protocolo processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo protocolo processual para o PJE
     */
    public async cadastrarNovoProtocolo(protocolo_processual: ProtocoloProcessual): Promise<any> {

        let attachs = null;

        if (protocolo_processual.peticao) {

            if (!attachs) {
                attachs = [];
            }

            const file_path = protocolo_processual.peticao.arquivo;

            if (!fs.existsSync(file_path)) {
                throw `O caminho do arquivo informado é inválido para a petição (${file_path}).`;
            }

            attachs.push({ field_name: 'peticao', files: file_path });
            delete protocolo_processual.peticao['arquivo'];
        }

        if (protocolo_processual.documentos) {

            if (!attachs) {
                attachs = [];
            }

            if (protocolo_processual.documentos.length) {
                const files = protocolo_processual.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw `O caminho do arquivo informado é inválido (${file_path}).`;
                    }

                    delete doc['arquivo'];
                    return file_path;
                });

                attachs.push({ field_name: 'documentos', files: files });
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`,
                protocolo_processual,
                {},
                {},
                attachs,
                true
            );
    }

    /**
     * Cadastra um novo protocolo para o ESAJ, está é a primeira etapa (de duas etapas) para cadastrar um novo protocolo no Intima.ai
     */
    public async cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(primeira_etapa_para_protocolo_processual_esaj: PrimeiraEtapaParaProtocoloProcessualEsaj): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/esaj/${this.getResourceEndpoint()}`, primeira_etapa_para_protocolo_processual_esaj, {}, {}, null, true);
    }

    /**
     * Cadastra um novo protocolo para o ESAJ, está é a segunda e ultima etapa para cadastrar um novo protocolo no Intima.ai
     */
    public async cadastrarSegundaEtapaParaNovoProtocoloEsaj(protocolo_processual_id: number, segunda_etapa_para_protocolo_processual_esaj: SegundaEtapaParaProtocoloProcessualEsaj): Promise<any> {

        let attachs = null;

        if (segunda_etapa_para_protocolo_processual_esaj.peticao) {

            if (!attachs) {
                attachs = [];
            }

            const file_path = segunda_etapa_para_protocolo_processual_esaj.peticao.arquivo;

            if (!fs.existsSync(file_path)) {
                throw `O caminho do arquivo informado é inválido para a petição (${file_path}).`;
            }

            attachs.push({ field_name: 'peticao', files: file_path });
            delete segunda_etapa_para_protocolo_processual_esaj.peticao['arquivo'];
        }

        if (segunda_etapa_para_protocolo_processual_esaj.documentos) {

            if (!attachs) {
                attachs = [];
            }

            if (segunda_etapa_para_protocolo_processual_esaj.documentos.length) {
                const files = segunda_etapa_para_protocolo_processual_esaj.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw `O caminho do arquivo informado é inválido (${file_path}).`;
                    }

                    delete doc['arquivo'];
                    return file_path;
                });

                attachs.push({ field_name: 'documentos', files: files });
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/esaj/${this.getResourceEndpoint()}/${protocolo_processual_id}`,
                segunda_etapa_para_protocolo_processual_esaj,
                {},
                {},
                attachs,
                true
            );
    }

    /**
     * Cadastra um novo protocolo para o TJRJ, está é a primeira etapa (de duas etapas) para cadastrar um novo protocolo no Intima.ai
     */
     public async cadastrarPrimeiraEtapaParaNovoProtocoloTjrj(primeira_etapa_para_protocolo_processual_tjrj: PrimeiraEtapaParaProtocoloProcessualTjrj): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/tjrj/${this.getResourceEndpoint()}`, primeira_etapa_para_protocolo_processual_tjrj, {}, {}, null, true);
    }

    /**
     * Cadastra um novo protocolo para o TJRJ, está é a segunda e ultima etapa para cadastrar um novo protocolo no Intima.ai
     */
    public async cadastrarSegundaEtapaParaNovoProtocoloTjrj(protocolo_processual_id: number, segunda_etapa_para_protocolo_processual_tjrj: SegundaEtapaParaProtocoloProcessualTjrj): Promise<any> {

        let attachs = null;

        if (segunda_etapa_para_protocolo_processual_tjrj.peticao) {

            if (!attachs) {
                attachs = [];
            }

            const file_path = segunda_etapa_para_protocolo_processual_tjrj.peticao.arquivo;

            if (!fs.existsSync(file_path)) {
                throw `O caminho do arquivo informado é inválido para a petição (${file_path}).`;
            }

            attachs.push({ field_name: 'peticao', files: file_path });
            delete segunda_etapa_para_protocolo_processual_tjrj.peticao['arquivo'];
        }

        if (segunda_etapa_para_protocolo_processual_tjrj.documentos) {

            if (!attachs) {
                attachs = [];
            }

            if (segunda_etapa_para_protocolo_processual_tjrj.documentos.length) {
                const files = segunda_etapa_para_protocolo_processual_tjrj.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw `O caminho do arquivo informado é inválido (${file_path}).`;
                    }

                    delete doc['arquivo'];
                    return file_path;
                });

                attachs.push({ field_name: 'documentos', files: files });
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/tjrj/${this.getResourceEndpoint()}/${protocolo_processual_id}`,
                segunda_etapa_para_protocolo_processual_tjrj,
                {},
                {},
                attachs,
                true
            );
    }
}