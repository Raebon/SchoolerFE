import { useForm } from 'react-hook-form';
import { TextInput } from '../../components/form/inputs'
import { PrimaryButton } from '../../components/elements/buttons';
import Footer from '../../layout/Footer'

const Login = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ email: string; password: string }>();

  const onSubmit = (event: { email: string; password: string }) => {
    console.log(event)
  }
  return (
    <>
      <section className="h-[85vh]">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="font-extrabold text-3xl text-blue-700 mb-10 ">Přihlášení</span>
                <div className="mb-4 mt-4">
                  <TextInput id="email" name="email" label="E-mail" control={control} errors={errors} required />
                </div>

                <div className="mb-2">
                  <TextInput id="password" name="password" label="Heslo" control={control} errors={errors} required />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <a href="#!" className="text-blue-700 hover:text-blue-800"><small>Zapomněl jste heslo?</small></a>
                </div>

                <div className="text-center lg:text-left">
                  <PrimaryButton
                    type="submit"
                  >
                    Přihlásit
                  </PrimaryButton>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Nemáte ještě účet?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    > Registrace</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login