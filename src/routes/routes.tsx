import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'
import RestrictedRoute from './RestrictedRoute'

const App = React.lazy(() => import('../App'))
const CreateQandAPage = React.lazy(() => import('../pages/CreateQAPage/CreateQuestionAndAnswerPage'))


export const RoutesComponent = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={"načítání..."}>
          {/* <AuthProvider> */}
          <Routes>
            {/* <Route path={``} element={
                <RestrictedRoute>
                  <Auth />
                </RestrictedRoute>
              }>
                <Route path={`/`} element={<Login />} />
                <Route path={`login`} element={<Login />} />
                <Route path={`registration`} element={<Registration />} />
              </Route> */}

            <Route
              path={``}
              element={
                <PrivateRoute>
                  <App />
                </PrivateRoute>
              }>
              <Route path={`/`} element={<CreateQandAPage />} />
              <Route path={`create-test`} element={<CreateQandAPage />} />
              <Route path={`create-test/test-1`} element={<CreateQandAPage />} />

              <Route path={`*`} element={<div>Stránka nenalezena</div>} />
            </Route>
          </Routes>
          {/*  </AuthProvider> */}
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RoutesComponent