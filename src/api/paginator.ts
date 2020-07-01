import { Resource } from "./resource";

export class Paginator {
    
    protected currentPage = 0;

    protected lastPage = 1;

    protected perPage = 15;

    protected total = 0;

    protected paginationData;

    protected data;

    protected resourceClass: Resource;

    protected firstPageLink;

    constructor(resourceClass: Resource){
        this.resourceClass = resourceClass;
    }

    private prepare() {
        this.currentPage = this.paginationData['meta']['current_page'];
        this.lastPage = this.paginationData['meta']['last_page'];
        this.perPage = this.paginationData['meta']['per_page'];
        this.total = this.paginationData['meta']['total'];
        this.firstPageLink = this.paginationData['links']['first'];
        this.data = this.paginationData['data'];
    }

    /**
     * Returna um Paginator com os recursos da página informada
     * @return Paginator
     */
    public async obterPagina(pagina: number) {
        return this.getPage(pagina);
    }

    /**
     * getPage
     */
    private async getPage(page: number) {
        this.paginationData = await this.resourceClass.getAPI().get(this.resourceClass.getResourceEndpoint(), { page });
        this.prepare();
        return this;
    }

    /**
     * Retorna uma coleção de recursos
     * @return Array<any>
     */
    public obterColecao()
    {
        return this.getCollection;
    }

    /**
     * Return a array with resources
     * @return Array<any>
     */
    private getCollection()
    {
        return this.data;
    }

    /**
     * Obtem a proxima página da paginação
     * @return Paginator
     */
    public async proximaPagina(): Promise<Paginator>
    {
        return this.nextPage();
    }

    /**
     * Get next page
     * @return Paginator
     */
    private async nextPage(): Promise<Paginator>
    {
        if((this.currentPage < this.lastPage) || (!this.currentPage && !this.paginationData)) {
            this.currentPage++;            
            return await this.getPage(this.currentPage);
        }

        return this;
    }

    /**
     * Obtem a página anterior da paginação
     * @return Paginator
     */
    public async paginaAnterior(): Promise<Paginator>
    {
        return this.previousPage();
    }

    /**
     * Get previous page
     * @return Paginator
     */
    public async previousPage(): Promise<Paginator>
    {
        if(this.currentPage > 1) {
            this.currentPage--;
            return await this.getPage(this.currentPage);
        }

        return this;
    }

    /**
     * Verifica se a proxima página existe
     * @return boolean
     */
    public existeProximaPagina(): boolean
    {
        return this.hasNextPage();
    }

    /**
     * Verify if next page exists
     * @return boolean
     */
    private hasNextPage(): boolean
    {
        if(this.currentPage < this.lastPage) {
            return true;
        }

        return false;
    }

    /**
     * Carrega todas as paginações deste recurso.
     * Tenha cuidado ao utilizar este método.
     * Sua conta pode ser banida temporariamente devido ao grande numero de requisições sequênciais.
     * @return Paginator
     */
    public async carregarTudo()
    {
        return this.loadAll();
    }

    /**
     * Load all requested resources.
     * Be careful with this function.
     * Your account could be blocked because a big number of sequential requests.
     * @return Paginator
     */
    public async loadAll()
    {
        if(this.currentPage === 1 && this.lastPage === 1) {
            return await this.getPage(this.currentPage);
        }

        let resources = [];

        while(this.hasNextPage()) {
            this.currentPage++;
            const latestRequest = await this.getPage(this.currentPage);

            resources = resources.concat(latestRequest.getCollection());
        };

        this.paginationData['data'] = resources;

        this.prepare();

        return this;
    }

}