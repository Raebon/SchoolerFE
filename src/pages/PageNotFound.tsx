import { useNavigate } from "react-router"
import { PageContainer } from '../components/elements/containers/pageContainer';
import { PrimaryButton } from '../components/elements/buttons';

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <PageContainer title="">
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-blue-800">
              <span className="sr-only">Chyba</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Stránku se nepodařilo najít.</p>
            <p className="mt-4 mb-8">Je možné, že jste zadali nesprávnou adresu, nebo nemáte přístup k vámi zvolené adrese!</p>
            <PrimaryButton onClick={() => navigate(`/home`)}>Domů</PrimaryButton>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}

export default PageNotFound