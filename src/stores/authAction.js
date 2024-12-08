import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_API, USER_API } from '@/constants/api'
import { getCurrentUser } from '@/services/user'
import { login } from '@/services/auth'

export const loginAction = createAsyncThunk(
    AUTH_API.LOGIN,
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await login(credentials)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    },
)

export const getCurrentUserAction = createAsyncThunk(
    USER_API.GET_CURRENT_USER,
    async (_, { rejectWithValue }) => {
        try {
            const res = await getCurrentUser()
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    },
)
