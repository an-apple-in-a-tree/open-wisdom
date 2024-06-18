import React from "react";

export default function Page() {
  return (
      <div className="max-w-xs align-center mx-auto">
        <h1 className="text-2xl my-12 font-bold text-center align-center mx-auto">Dashboard: </h1>
        <div className="bg-white shadow-xl rounded-xl my-8 border-4 border-darkGold">
          <div className="photo-wrapper bg-mediumGold rounded-t-xl py-2">
            <img
              className="m-8 w-32 h-32 rounded-full mx-auto"
              src="https://i.pinimg.com/236x/6e/45/c8/6e45c8b9984ee028ab7dcbe44e7f3b13.jpg"
              alt="John Doe"
            ></img>
          </div>
          <div className="p-2 bg-lightGold w-full rounded-b-xl">
            <h3 className="text-center text-xl text-navy font-medium leading-8">
              Jane Doe
            </h3>
            <div className="text-center text-navy text-xs font-semibold">
              <p>Active learner and teacher!</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-shinyBlack font-semibold">
                    Points:{" "}
                  </td>
                  <td className="px-2 py-2">40</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-shinyBlack font-semibold">
                    Lessons Uploaded:
                  </td>
                  <td className="px-2 py-2">4</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-shinyBlack font-semibold">
                    Lessons Learned Today:{" "}
                  </td>
                  <td className="px-2 py-2">4</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-shinyBlack font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">jane.doe@exmaple.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
