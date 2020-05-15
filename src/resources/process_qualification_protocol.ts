import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { PrimeiraEtapaParaProtocoloDeHabilitacao } from "../models/PrimeiraEtapaParaProtocoloDeHabilitacao";
import { SegundaEtapaParaProtocoloDeHabilitacao } from "../models/SegundaEtapaParaProtocoloDeHabilitacao";
import * as fs from 'fs';

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
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao
     */
    public async cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(qualification_protocol: PrimeiraEtapaParaProtocoloDeHabilitacao): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, qualification_protocol, {}, {}, null, true);
    }

    /**
     * cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao
     */
    public async cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(qualification_protocol_id: number, qualification_protocol: SegundaEtapaParaProtocoloDeHabilitacao): Promise<any> {

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