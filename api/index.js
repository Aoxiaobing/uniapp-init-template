import { get, post } from "./request";

export const apiGet = (params) => get('/get', params)
export const apiPostAnything = (params) => post('/anything', params)