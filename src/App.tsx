import SaveWord from './pages/SaveWord'
import CreateQuestionAndAnswerPage from './pages/CreateQAPage/CreateQuestionAndAnswerPage'
import NavBar from './layout/NavBar'
import SidebarMenu from './layout/SidebarMenu'

function App() {

  return (

    <>
      <NavBar />
      <div className="flex">
        <SidebarMenu />
        <div className="w-full">
          <CreateQuestionAndAnswerPage />
        </div>
      </div>
    </>
  )
}

export default App
