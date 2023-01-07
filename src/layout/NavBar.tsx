import logo from "../assets/img/school_tooler_logo.svg"
import Avatar from "../assets/img/profile-picture-5.jpg"

const NavBar = () => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-50">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <a
          href="#"
          className="flex items-center">
          <img
            src={logo}
            className="h-6 mr-3 sm:h-9"
            alt="SchoolTooler" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">School Tooler</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <div className="cursor-pointer relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img src={Avatar} alt="" />
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar