import React from "react";
import CountdownApp from "./Timer";

function App() {
  return (
    // <div className="text-center p-2">
    //   <h1 className="font-bold text-3xl text-gray-800 my-2">
    //     Create a Shot Clock{" "}
    //     <span role="img" aria-label="Basketball">
    //       🏀
    //     </span>
    //   </h1>
    //   <p className="my-2 border-t-2 p-4 mb-6">
    //     A basketball field has 2 shot clocks, one above each rim. Both countdown 24 seconds.
    //     Referees can stop and/or reset clocks when needed.
    //   </p>
    //   <div className="my-2 font-medium text-xl m-8">
    //     <p className="bg-gray-800 text-white shadow-md rounded p-4">
    //       As a user, I want to see 2 clocks with pause & reset buttons, so I can manage the game.
    //     </p>
    //     <p className="text-gray-700 italic text-sm p-2">
    //       Feel free to create new files where needed. Using TypeScript is a nice-to-have. Tailwind
    //       is available if you wish to use it.
    //     </p>
    //   </div>
    //   <hr className="border" />
    // </div>

    <div className="flex bg-black justify-between px-12">
      <CountdownApp />
      <span className="text-7xl mt-16" role="img" aria-label="Basketball">
        🏀
      </span>
      <CountdownApp />
    </div>
  );
}

export default App;
