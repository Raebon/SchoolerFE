import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'
import RestrictedRoute from './RestrictedRoute'
import { AuthProvider } from '../context/AuthContext'

const App = React.lazy(() => import('../App'))
const CreateQandAPage = React.lazy(() => import('../pages/CreateQAPage/CreateQuestionAndAnswerPage'))
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'))

const Auth = React.lazy(() => import('../auth/Auth'))
const Login = React.lazy(() => import('../auth/components/Login'))


export const RoutesComponent = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={"načítání..."}>
          <AuthProvider>
            <Routes>
              <Route path={``} element={
                <RestrictedRoute>
                  <Auth />
                </RestrictedRoute>
              }>
                <Route path={`/`} element={<Login />} />
                <Route path={`login`} element={<Login />} />
                {/* <Route path={`registration`} element={<Registration />} /> */}
              </Route>

              <Route
                path={``}
                element={
                  <PrivateRoute>
                    <App />
                  </PrivateRoute>
                }>
                <Route path={`/`} element={<CreateQandAPage />} />
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