import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-sky-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-neutral-800">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-neutral-800">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-blue-400 shadow-lg h-10 w-10 items-center rounded-full mr-2"
                type="button"
              >
                <FaTwitter className="mx-auto text-lg" />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg h-10 w-10 items-center rounded-full mr-2"
                type="button"
              >
                <FaFacebook className="mx-auto text-lg" />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg h-10 w-10 items-center rounded-full mr-2"
                type="button"
              >
                <FaDribbble className="mx-auto text-lg" />
              </button>
              <button
                className="bg-white text-blue-800 shadow-lg h-10 w-10 items-center rounded-full mr-2"
                type="button"
              >
                <FaGithub className="mx-auto text-lg" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blue-800 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#   "
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Free Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <label className="text-gray-500 hover:text-gray-800"> by </label>
              <Link href="#" className="text-gray-500 hover:text-gray-800">
                Zoma
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
