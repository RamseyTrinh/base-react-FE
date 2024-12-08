import http from '@/services/http';
import { AUTH_API } from '@/constants/api';

export const login = async (payload) => {
    return await http.post(AUTH_API.LOGIN, payload);
};

export const logout = async () => {
    return await http.post(AUTH_API.LOGOUT);
};

export const register = async (payload) => {
    return await http.post(AUTH_API.REGISTER, payload);
};
