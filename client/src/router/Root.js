import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { lazy } from 'react'
const Home = lazy(() => import('../pages/principal/Home'))
const Root = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    }
])

export default Root