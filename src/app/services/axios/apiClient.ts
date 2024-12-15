import {Api} from "@/src/app/generated/api-client/api";
import {apiConfig} from "./config";
import {attachInterceptors} from "./interceptors/attachInterceptors";

export const apiClient = new Api({
    ...apiConfig,
    attachInterceptors
})
