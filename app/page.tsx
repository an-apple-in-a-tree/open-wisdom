"use client";
//Landing Page
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full flex-col bg-gray-100">
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative bg-mediumGold">
            <div className="absolute inset-0 -skew-y-3 bg-gradient-to-t from-palePeach to-white"></div>
            <div className="container relative mx-auto overflow-hidden px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl">
              <div className="text-center text-navy">
                <h2 className="mb-4 text-3xl font-black md:text-5xl">
                  OpenWisdom: Elevating Your Learning Experience
                </h2>
                <h3 className="mx-auto my-16 text-balance text-lg font-medium text-darkGold md:text-xl md:leading-relaxed lg:w-2/3">
                  OpenWisdom is a community-driven learning platform designed to
                  help you break free from the cycle of tutorial hell. Gain
                  access to a wealth of knowledge, collaborate with others, and
                  elevate your learning journey.
                </h3>
              </div>
              <div className="mt-8 relative rounded-xl bg-white p-2 shadow-lg ring-1 ring-palePeach lg:mx-40 lg:flex lg:items-center lg:justify-center">
                <div className="absolute left-0 top-0 -ml-20 -mt-12 h-48 w-48 rounded-full bg-mediumGold"></div>
                <div className="absolute right-0 top-0 -mr-16 -mt-20 h-32 w-32 rotate-3 rounded-xl bg-darkGold"></div>
                <div className="absolute bottom-0 right-0 -mb-10 -mr-16 h-40 w-40 rounded-full bg-cameo"></div>
                <div className="absolute bottom-0 left-0 -mb-16 -ml-12 h-20 w-20 -rotate-12 rounded-xl bg-brown"></div>
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
            <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-black md:text-5xl">
                  How OpenWisdom Works
                </h2>
                <h3 className="mx-auto text-balance text-lg font-medium text-gray-500 md:text-xl md:leading-relaxed lg:w-2/3">
                  Empower your learning journey with OpenWisdom’s intuitive
                  features.
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border-2 border-blue-50 bg-gradient-to-t from-blue-50 to-white p-10 text-center transition hover:border-blue-100">
                  <svg
                    className="hi-outline hi-desktop-computer mb-5 inline-block h-12 w-12 text-blue-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h4 className="mb-2 text-lg font-bold">
                    1. Personalized Dashboard
                  </h4>
                  <p className="text-left text-sm leading-relaxed text-gray-600">
                    Enjoy a custom dashboard that adapts to your learning needs.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-indigo-50 bg-gradient-to-t from-indigo-50 to-white p-10 text-center transition hover:border-indigo-100">
                  <svg
                    className="hi-outline hi-cube mb-5 inline-block h-12 w-12 text-indigo-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  <h4 className="mb-2 text-lg font-bold">
                    2. Seamless Integration
                  </h4>
                  <p className="text-left text-sm leading-relaxed text-gray-600">
                    Easily connect to your preferred learning resources and
                    tools.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-purple-50 bg-gradient-to-t from-purple-50 to-white p-10 text-center transition hover:border-purple-100 sm:col-span-2 lg:col-span-1">
                  <svg
                    className="hi-outline hi-presentation-chart-line mb-5 inline-block h-12 w-12 text-purple-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                  <h4 className="mb-2 text-lg font-bold">
                    3. Advanced Analytics
                  </h4>
                  <p className="text-left text-sm leading-relaxed text-gray-600">
                    Gain insights with powerful analytics to track your
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white">
            <div className="absolute inset-0 skew-y-3 bg-gradient-to-t from-blue-50 to-white"></div>
            <div className="container relative mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-black md:text-5xl">
                  Key Features of OpenWisdom
                </h2>
                <h3 className="mx-auto text-balance text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed lg:w-2/3">
                  Discover the features that make OpenWisdom an invaluable tool
                  for your learning journey.
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
                <div className="py-5 text-center">
                  <div className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-blue-300"></div>
                    <div className="absolute inset-0 -m-2 rounded-3xl bg-blue-600/75"></div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-outline hi-code relative inline-block h-10 w-10 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l-4 4 4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-bold">Automation</h4>
                  <p className="text-left leading-relaxed text-gray-600">
                    Automate repetitive tasks and focus more on learning new
                    concepts.
                  </p>
                </div>
                <div className="py-5 text-center">
                  <div className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-green-300"></div>
                    <div className="absolute inset-0 -m-2 rounded-3xl bg-green-600/75"></div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-outline hi-badge-check relative inline-block h-10 w-10 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-bold">Certification</h4>
                  <p className="text-left leading-relaxed text-gray-600">
                    Earn certifications for your achievements to boost your
                    profile.
                  </p>
                </div>
                <div className="py-5 text-center">
                  <div className="relative mb-12 ml-3 inline-flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 -m-2 rotate-45 rounded-3xl bg-purple-300"></div>
                    <div className="absolute inset-0 -m-2 rounded-3xl bg-purple-600/75"></div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-outline hi-heart relative inline-block h-10 w-10 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6s-8 5.5-8 8a4 4 0 004 4c1.33 0 2.67-.67 4-1s2.67 1 4 1 4-1.67 4-4c0-2.5-8-8-8-8z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-bold">Community</h4>
                  <p className="text-left leading-relaxed text-gray-600">
                    Join a vibrant community of learners and mentors to share
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
