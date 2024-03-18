import { useState } from "react";

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggled = () => {
    setIsToggled(prevState => !prevState);
  }

  return (
    <div className="w-full h-16 bg-blue-600 fixed top-0 z-10">
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center p-2">
        <div className="flex justify-between items-center gap-3">
          <div className="w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#00e8ff" d="m88 148l20-60l90 90l-30 50l-40-40h-20"></path><path fill="#283198" d="M128 188v-80l40-40v80M48 188l40 40l20-40l-20-40H68"></path><path fill="#324fff" d="M88 148V68l40-40v80m40 120v-80l40-40v80m-160 0v-80l40 40"></path><path fill="#0ff" d="M88 228v-80l40 40"></path></g></svg>
          </div>
          <h3 className="text-xl font-bold text-white">Able Solutions</h3>
        </div>
        <ul className="hidden md:flex md:justify-between md:items-center text-white">
          <li className="mr-10 font-semibold"><a href="#home" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Home</a></li>
          <li className="mr-10 font-semibold"><a href="#about" className="hover:border-b hover:border-gray-100 hover:text-sky-200">About</a></li>
          <li className="mr-10 font-semibold"><a href="#services" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Services</a></li>
          <li className="mr-10 font-semibold"><a href="#pricing" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Pricing</a></li>
          <li className="font-semibold"><a href="#contact" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Contact</a></li>
        </ul>
        <div onClick={handleToggled} className="w-8 h-8 md:hidden">
          {!isToggled ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg>
          ): (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path></svg>
          )}
        </div>
      </nav>
      {isToggled && (
        <ul className="flex flex-col items-center md:hidden text-white bg-blue-600 pl-2 py-2 border-b border-gray-600">
          <li className="font-semibold"><a href="#home" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Home</a></li>
          <li className="mt-6 font-semibold"><a href="#about" className="hover:border-b hover:border-gray-100 hover:text-sky-200">About</a></li>
          <li className="mt-6 font-semibold"><a href="#services" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Services</a></li>
          <li className="mt-6 font-semibold"><a href="#pricing" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Pricing</a></li>
          <li className="mt-6 mb-5 font-semibold"><a href="#contact" className="hover:border-b hover:border-gray-100 hover:text-sky-200">Contact</a></li>
        </ul>
      )}
    </div>
   );
}
 
export default Navbar;