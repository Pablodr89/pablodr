import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col w-full h-full gap-20 bg-black text-white">
      <Navbar />

      <main className="flex flex-col items-center w-full h-full px-5 mx-auto max-[2000px]:max-w-7xl min-[2000px]:max-w-400">
        <Outlet />
      </main>
    </div>
  );
}
