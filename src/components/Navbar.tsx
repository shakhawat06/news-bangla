import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <header className="relative flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 px-4 py-4 ">
        <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />

        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">News Bangla 24</span>
          <p className="text-xs text-neutral-500">{date}</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-3">
        <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>
        <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors  ">সাইন আপ</button>
      </div>


      <NavLinks />
    </header>
  );
};

export default Navbar;
