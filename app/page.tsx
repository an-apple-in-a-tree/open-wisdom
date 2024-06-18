"use client";
//Landing Page
import "./globals.css";

export default function Home() {
  return (
   <main>
    <div
      className="mx-auto flex min-h-screen w-full flex-col bg-gray-100"
    >
      <main id="page-content" className="flex max-w-full flex-auto flex-col">
        <div className="relative bg-mediumGold">
          <div
            className="absolute inset-0 -skew-y-3 bg-gradient-to-t from-palePeach to-white"
          ></div>
          <div
            className="container relative mx-auto overflow-hidden px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl"
          >
    <div className="text-center text-navy">
                <h2 className="mb-4 text-3xl font-black md:text-5xl">
                  Liberation from {" "}
                  <span className="bg-mediumGold text-white p-2">Tutorial Hell</span>
                </h2>
                <h3 className="mx-auto text-balance text-lg font-medium text-darkGold md:text-xl md:leading-relaxed lg:w-2/3">
                  Get access to the best software for your online business and
                  get control of your earnings and growth.
                </h3>
              </div>

            <div className="flex flex-wrap justify-center gap-4 pb-24 pt-10">
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center gap-2 rounded bg-darkGold px-6 py-3 font-semibold leading-6 text-white transition hover:border-darkGold hover:bg-darkGold hover:text-white focus:outline-none focus:ring focus:ring-blue-500/50 active:bg-lightGold"
              >
                <span>Get Access</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center gap-2 rounded bg-darkGold px-6 py-3 font-semibold leading-6 text-white transition hover:border-lightGold hover:bg-lightGold hover:text-white focus:outline-none focus:ring focus:ring-gray-500/50 active:border-gray-700 active:bg-gray-700"
              >
                <span>Learn More</span>
              </a>
            </div>
            <div
              className="relative rounded-xl bg-white p-2 shadow-lg ring-1 ring-palePeach lg:mx-40 lg:flex lg:items-center lg:justify-center"
            >
              <div
                className="absolute left-0 top-0 -ml-20 -mt-12 h-48 w-48 rounded-full bg-mediumGold"
              ></div>
              <div
                className="absolute right-0 top-0 -mr-16 -mt-20 h-32 w-32 rotate-3 rounded-xl bg-darkGold"
              ></div>
              <div
                className="absolute bottom-0 right-0 -mb-10 -mr-16 h-40 w-40 rounded-full bg-cameo"
              ></div>
              <div
                className="absolute bottom-0 left-0 -mb-16 -ml-12 h-20 w-20 -rotate-12 rounded-xl bg-brown"
              ></div>
              <div className="aspect-h-10 aspect-w-16 w-full">
                <img
                  src="https://img.freepik.com/premium-photo/abundance-wisdom-bookshelf-fashioned-by-learning-generated-by-ai_986584-2922.jpg"
                  alt="Hero Image"
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="bg-white">
          <div
            className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl"
          >

            <div className="text-center">
              <h2 className="mb-4 text-3xl font-black md:text-5xl">How it works</h2>
              <h3
                className="mx-auto text-balance text-lg font-medium text-gray-500 md:text-xl md:leading-relaxed lg:w-2/3"
              >
                It’s as simple as it sounds and ever more!
              </h3>
            </div>

            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            >
              <div
                className="rounded-2xl border-2 border-blue-50 bg-gradient-to-t from-blue-50 to-white p-10 text-center transition hover:border-blue-100"
              >
                <svg
                  className="hi-outline hi-desktop-computer mb-5 inline-block h-12 w-12 text-blue-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h4 className="mb-2 text-lg font-bold">
                  1. Get your custom dashboard
                </h4>
                <p className="text-left text-sm leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
              <div
                className="rounded-2xl border-2 border-indigo-50 bg-gradient-to-t from-indigo-50 to-white p-10 text-center transition hover:border-indigo-100"
              >
                <svg
                  className="hi-outline hi-cube mb-5 inline-block h-12 w-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
                <h4 className="mb-2 text-lg font-bold">
                  2. Connect to your product
                </h4>
                <p className="text-left text-sm leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
              <div
                className="rounded-2xl border-2 border-purple-50 bg-gradient-to-t from-purple-50 to-white p-10 text-center transition hover:border-purple-100 sm:col-span-2 lg:col-span-1"
              >
                <svg
                  className="hi-outline hi-presentation-chart-line mb-5 inline-block h-12 w-12 text-purple-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <h4 className="mb-2 text-lg font-bold">3. Explore Analytics</h4>
                <p className="text-left text-sm leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white">
          <div
            className="absolute inset-0 skew-y-3 bg-gradient-to-t from-blue-50 to-white"
          ></div>
          <div
            className="container relative mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-black md:text-5xl">
                Best Features
              </h2>
              <h3
                className="mx-auto text-balance text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed lg:w-2/3"
              >
                Amazing integrations will help you reach new customers and
                improve your user satisfaction.
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
              <div className="py-5 text-center">
                <div
                  className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center"
                >
                  <div
                    className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-blue-300"
                  ></div>
                  <div
                    className="absolute inset-0 -m-2 rounded-3xl bg-blue-600/75"
                  ></div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-code relative inline-block h-10 w-10 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-bold">Automation</h4>
                <p className="text-left leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
              <div className="py-5 text-center">
                <div
                  className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center"
                >
                  <div
                    className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-blue-300"
                  ></div>
                  <div
                    className="absolute inset-0 -m-2 rounded-3xl bg-blue-600/75"
                  ></div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-device-mobile relative inline-block h-10 w-10 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-bold">Schedule</h4>
                <p className="text-left leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
              <div className="py-5 text-center">
                <div
                  className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center"
                >
                  <div
                    className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-blue-300"
                  ></div>
                  <div
                    className="absolute inset-0 -m-2 rounded-3xl bg-blue-600/75"
                  ></div>
                  <span
                    className="relative text-xl font-semibold text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                    >JS</span
                  >
                </div>
                <h4 className="mb-2 text-xl font-bold">Integrations</h4>
                <p className="text-left leading-relaxed text-gray-600">
                  Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
                  sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo
                  turpis id lectus scelerisque vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div
            className="container mx-auto space-y-10 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-4xl"
          >

            <div className="text-center">
              <h2 className="mb-4 text-3xl font-black md:text-5xl">
                One powerful plan
              </h2>
              <h3
                className="mx-auto text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed lg:w-2/3"
              >
                Get access by paying once. Now that’s peace of mind.
              </h3>
            </div>

            <div
              className="relative flex flex-col rounded-lg border-2 border-blue-400 bg-blue-50 shadow-sm hover:border-blue-500 lg:mx-auto lg:w-96"
            >
              <div className="rounded-t-lg bg-white p-5 text-center lg:p-6">
                <span
                  className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-200/50 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-blue-700"
                  ><span>Lifetime</span></span
                >
                <div className="mb-1">
                  <span className="text-3xl font-extrabold lg:text-4xl">$199</span>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Get access for life
                </p>
              </div>
              <div className="grow space-y-5 p-5 lg:space-y-6 lg:p-6">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      className="hi-mini hi-check inline-block size-5 text-emerald-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span><strong>Unlimited</strong> Everything</span>
                  </li>
                </ul>
              </div>
              <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-2 rounded bg-blue-700 px-6 py-3 font-semibold leading-6 text-white transition hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring focus:ring-blue-500/50 active:border-blue-700 active:bg-blue-700"
                >
                  <span>Get Access</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  </main>
  );
}