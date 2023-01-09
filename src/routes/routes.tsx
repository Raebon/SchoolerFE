import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PrivateRoute from './PrivateRoutes'
import RestrictedRoute from './RestrictedRoute'
import { AuthProvider } from '../context/AuthContext'

const App = React.lazy(() => import('../App'))
const CreateQandAPage = React.lazy(() => import('../pages/CreateQAPage/CreateQuestionAndAnswerPage'))
const MainPage = React.lazy(() => import('../pages/MainPage/MainPage'))

const PageNotFound = React.lazy(() => import('../pages/PageNotFound'))

const Auth = React.lazy(() => import('../auth/Auth'))
const Login = React.lazy(() => import('../auth/components/Login'))


export const RoutesComponent = () => {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={"načítání..."}>
          <AuthProvider>
            <Routes>
              <Route path={``} element={
                <RestrictedRoute>
                  <QueryClientProvider client={queryClient}>
                    <Auth />
                  </QueryClientProvider>
                </RestrictedRoute>
              }>
                <Route path={`/`} element={<Login />} />
                <Route path={`login`} element={<Login />} />
                <Route path={`/secret`} element={<MainPage />} />
                {/* <Route path={`registration`} element={<Registration />} /> */}
              </Route>

              <Route
                path={``}
                element={
                  <PrivateRoute>
                    <QueryClientProvider client={queryClient}>
                      <App />
                    </QueryClientProvider>
                  </PrivateRoute>
                }>
                <Route path={`/`} element={<MainPage />} />
                <Route path={`/home`} element={<MainPage />} />
                <Route path={`tool/create-test`} element={<CreateQandAPage />} />
                <Route path={`tool`} element={<CreateQandAPage />} />

                <Route path={`*`} element={<PageNotFound />} />
              </Route>
            </Routes>
          </AuthProvider>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RoutesComponent