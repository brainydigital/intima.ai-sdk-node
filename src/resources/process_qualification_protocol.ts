import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api/api";
import * as fs from 'fs';

export type FirstStepQualificationProtocol = {
    process_number: string,
    auth_id: number
};

export type SecondStepQualificationProtocol = {
    tipo_solicitacao: number,
    tipo_declaracao: number,
    polo: number,
    partes_vinculadas: Array<string>,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    documentos?: Array<{ arquivo: string, tipo_documento: number, descricao_documento: string, order: number }>
};

export class ProcessQualificationProtocol extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-qualification-protocols';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * getNewQualificationProtocolFirstStep
     */
    public async getNewQualificationProtocolFirstStep(qualification_protocol: FirstStepQualificationProtocol): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, qualification_protocol, {}, {}, null, true);
    }

    /**
     * getNewQualificationProtocolSecondStep
     */
    public async getNewQualificationProtocolSecondStep(qualification_protocol_id: number, qualification_protocol: SecondStepQualificationProtocol): Promise<any> {

        let attachs = null;

        if (qualification_protocol.documentos) {
            if (qualification_protocol.documentos.length) {
                const files = qualification_protocol.documentos.map((doc) => {
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
                `${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${qualification_protocol_id}`,
                qualification_protocol,
                {},
                {},
                attachs,
                true
            );
    }
}