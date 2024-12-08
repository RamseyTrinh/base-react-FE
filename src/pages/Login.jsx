import React, { useState } from 'react'
import {
    Card,
    TextField,
    Button,
    Alert,
    Box,
    IconButton,
    InputAdornment,
    Typography,
} from '@mui/material'
import { Visibility, VisibilityOff, LockOutlined, PersonOutline } from '@mui/icons-material'
import { login } from '@/services/auth'
import { PATHS } from '@/routers/path'
import { useNavigate } from 'react-router-dom' // Import useNavigate

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [error, setError] = useState('')
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate() // Initialize useNavigate

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setSubmitLoading(true)
        try {
            await login(values)
            navigate(PATHS.home) // Redirect to Home Page
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
            }}
        >
            <Card
                sx={{
                    width: '30vw',
                    padding: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" sx={{ mb: 2 }}>Đăng nhập</Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange('email')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutline />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Mật khẩu"
                        variant="outlined"
                        type={passwordVisible ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                        edge="end"
                                    >
                                        {passwordVisible ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 2 }}
                        required
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2,
                        }}
                    >
                        <Typography variant="body2">
                            Bạn chưa có tài khoản?{' '}
                            <Button
                                href={PATHS.signup}
                                size="small"
                                variant="text"
                                sx={{ textTransform: 'none', p: 0 }}
                            >
                                Đăng ký
                            </Button>
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={submitLoading}
                        >
                            {submitLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </Button>
                    </Box>
                </form>
            </Card>
        </Box>
    )
}

export default LoginPage
