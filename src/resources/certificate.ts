import { Resource } from "../api/resource";
import { API } from "../api/api";
import { Certificado } from "../models/Certificado";
import * as fs from 'fs';

export class Certificate extends Resource {
    
    getResourceEndpoint() {
        return 'certificados';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem um certificado pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo certificado
     */
    public async cadastrarNovoCertificado(certificado: Certificado): Promise<any> {
        let attachs = this.validateCertificate(certificado);
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, certificado, {} , {}, attachs, true);
    }

    /**
     * Atualiza um certificado pelo id
     */
    public async atualizarCertificado(certificado_id: number, certificado: Certificado): Promise<any> {
        let attachs = this.validateCertificate(certificado);
        return await this.getAPI().post(`${this.getResourceEndpoint()}/${certificado_id}`, certificado, {} , {}, attachs, true);
    }

    /**
     * Deleta um certificado pelo id
     */
    public async excluirCertificado(certificado_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${certificado_id}`, {}, {}, true);
    }

    private validateCertificate(certificado: Certificado) {
        let attachs = null;
        if (certificado.pfx) {
            const file_path = certificado.pfx;

            if (!fs.existsSync(file_path)) {
                throw "O caminho do arquivo informado é inválido!";
            }

            delete certificado['pfx'];
            
            attachs = { field_name: 'pfx', files: file_path } ;
        }
        return attachs;
    }
}