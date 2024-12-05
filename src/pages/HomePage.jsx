import ToggleButton from "@/assets/components/mode-toggle";
import NavDoc from "@/assets/components/NavDocs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className=" flex flex-col max-h-screen items-center bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
        <main className="w-full max-w-screen-sm  items-center px-6 flex flex-col ">
          <div className="w-full max-w-screen-sm pb-40 justify-center h-screen items-center flex flex-col ">
            <NavDoc />
          </div>

          <footer className="fixed bottom-0 w-full mb-2 max-w-screen-sm  space-y-2 px-6 ">
            <div className="w-full justify-between min-h-full flex  items-center cursor-default">
              <div className="antialiased font-bold text-[1rem] leading-5 text-neutral-950 dark:text-zinc-200 ">
                <h1>Mac Os</h1>
                <h1>Dock</h1>
              </div>
              <ToggleButton />
            </div>
            <div className="border-t-2 py-2 border-zinc-400 opacity-20 w-full flex justify-between cursor-default">
              <div className="antialiased text-[0.75rem] leading-5 text-neutral-800 dark:text-zinc-100   ">
                <h1>NN</h1>
              </div>
              <div className="antialiased  text-[0.75rem] leading-5 text-neutral-800 dark:text-zinc-100  ">
                <h1>2024</h1>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default HomePage;
