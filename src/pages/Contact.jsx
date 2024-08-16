import React from 'react';

const Contact = () => {
  return (
    <div className="mt-10 ">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-xl rounded-md font-sans">
        <div>
        <h1 className="text-gray-900 text-3xl font-bold">Let's Scribble!</h1>
          <p className="text-sm text-gray-600 mt-4">
            Got a quirky idea that needs to be inscribed in code? We’re all ears—and keyboards! Let’s chat and bring your digital dreams to life.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-900 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#0066cc" viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a href="javascript:void(0)" className="text-gray text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-900 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#0066cc" viewBox="0 0 24 24">
                    <path
                      d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#0066cc" viewBox="0 0 511 512">
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#0066cc" viewBox="0 0 93.393 93.393">
                    <path
                      d="M86.761 0H6.633C2.973 0 0 2.973 0 6.633v80.127c0 3.661 2.973 6.633 6.633 6.633H86.76c3.661 0 6.633-2.973 6.633-6.633V6.633C93.393 2.973 90.421 0 86.761 0zM30.124 10.879a4.999 4.999 0 1 1 0 9.998 4.999 4.999 0 0 1 0-9.998zm5.076 70.474H21.662V37.45h13.538zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-gray-900 text-3xl font-bold">Get in Touch</h1>

          <form action="#" className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="text-sm text-gray-900 font-medium">
                  First name
                </label>
                <input type="text" id="first-name" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900" placeholder="Enter your first name" />
              </div>

              <div>
                <label htmlFor="last-name" className="text-sm text-gray-900 font-medium">
                  Last name
                </label>
                <input type="text" id="last-name" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-gray-900 font-medium">
                Email
              </label>
              <input type="email" id="email" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900" placeholder="Enter your email" />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="text-sm text-gray-900 font-medium">
                Message
              </label>
              <textarea id="message" rows="5" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900" placeholder="Enter your message"></textarea>
            </div>

            <button className="mt-6 w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
