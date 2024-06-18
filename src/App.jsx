import React from "react";
import "./App.css";
const App = () => {
  return (
    <div >
      <nav>
        <h2 className="text-bold text-4xl font-bold mb-5">Pricing</h2>
        <h5 className="text-gray-500">
          Change your plant according your needs
        </h5>
      </nav>
      <div className="flex mt-14 justify-around">
        <div className="border-2 rounded-lg p-6 text-left w-80">
          <h3 className="text-2xl font-semibold mb-1">Starter</h3>
          <p className="text-sm text-gray-500 mb-10">
            For Individuals and Small Teams
          </p>
          <div className="mb-2">
            <span className="text-3xl font-bold pr-2">$10</span>
            <span className="text-sm text-gray-500 font-semibold">
              per month
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Include</h3>
          <h4 className="mt-1 text-gray-500 text-sm">Everything you get in this plan</h4>
          <ul className="mt-4 space-y-4 text-md text-gray-600">
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              50 Page Unlock
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              10 GB Storage
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              6 Team Members
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited Book Mark
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited basic feature
            </li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 rounded-md p-2 text-white font-bold hover:bg-blue-600">Buy now</button>
        </div>
{/* 2nd */}
        <div className="border-2 rounded-lg p-6 text-left w-80">
          <h3 className="text-2xl font-semibold mb-1 ">Professional <span className="w-4 bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded-sm">Best Price</span></h3>
          <p className="text-sm text-gray-500 mb-10">
          For Individuals and Largest Teams
          </p>
          <div className="mb-2">
            <span className="text-3xl font-bold pr-2">$20</span>
            <span className="text-sm text-gray-500 font-semibold">
              per month
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Include</h3>
          <h4 className="mt-1 text-gray-500 text-sm">Everything you get in this plan</h4>
          <ul className="mt-4 space-y-4 text-md text-gray-600">
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              100 Page Unlock
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              20 GB Storage
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              8 Team Members
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited Book Mark
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited basic feature
            </li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 rounded-md p-2 text-white font-bold hover:bg-blue-600">Buy now</button>
        </div>
{/* 3rd */}

        <div className="border-2 rounded-lg p-6 text-left w-80">
          <h3 className="text-2xl font-semibold mb-1">Business</h3>
          <p className="text-sm text-gray-500 mb-10">
            For Individuals and Small Teams
          </p>
          <div className="mb-2">
            <span className="text-3xl font-bold pr-2">$100</span>
            <span className="text-sm text-gray-500 font-semibold">
              per month
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Include</h3>
          <h4 className="mt-1 text-gray-500 text-sm">Everything you get in this plan</h4>
          <ul className="mt-4 space-y-4 text-md text-gray-600">
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              300 Page Unlock
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              100 GB Storage
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              100 Team Members
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited Book Mark
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                class="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Unlimited basic feature
            </li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 rounded-md p-2 text-white font-bold hover:bg-blue-600">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
