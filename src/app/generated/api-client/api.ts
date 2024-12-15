/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {HttpClient, RequestParams} from "./http-client";
import {Projects} from "./data-contracts";

export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {

    getProjects = (
        query: {
            cursor: number
        },
        params: RequestParams = {},
    ) => this.request<Projects, any>({
        path: `/api/projects`,
        method: 'GET',
        query,
        format: 'json',
        ...params,
    })
}
