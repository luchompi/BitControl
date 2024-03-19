import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { lazy } from 'react'
import errorRoutes from './error.routes'
const Home = lazy(() => import('../pages/principal/Home'))
import authRoutes from './auth.routes'
const Root = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Home
            },
            ...Array.from(errorRoutes),
            ...Array.from(authRoutes)
        ]
    }
])

export default Root