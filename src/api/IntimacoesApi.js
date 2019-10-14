/**
 * Intima.ai - API
 * Bem vindo a documentação da API do [Intima.ai](https://app.intima.ai). Está documentação cobre todas as ações disponíveis dentro do Intima.ai e as disponibilizam como `ENDPOINTS` que podem ser integrados e utilizados por outros serviços ou aplicações, bastando somente possuir o `Token de acesso da API`.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IntimacoesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IntimacoesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.IntimaaiApi) {
      root.IntimaaiApi = {};
    }
    root.IntimaaiApi.IntimacoesApi = factory(root.IntimaaiApi.ApiClient, root.IntimaaiApi.IntimacoesResponse);
  }
}(this, function(ApiClient, IntimacoesResponse) {
  'use strict';

  /**
   * Intimacoes service.
   * @module api/IntimacoesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IntimacoesApi. 
   * @alias module:api/IntimacoesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllIntimacoes operation.
     * @callback module:api/IntimacoesApi~getAllIntimacoesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntimacoesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllIntimacoes
     * Visualiza todas as intimações capturadas
     * @param {module:api/IntimacoesApi~getAllIntimacoesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntimacoesResponse}
     */
    this.getAllIntimacoes = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntimacoesResponse;

      return this.apiClient.callApi(
        '/intimacoes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
