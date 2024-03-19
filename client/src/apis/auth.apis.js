import baseApi from "./base.api";

export const generateTokens = (data) => {
    return baseApi.post(`jwt/create`, data)
}

export const regeneratePAT = (data) => {
    return baseApi.post(`jwt/refresh`, data)
}