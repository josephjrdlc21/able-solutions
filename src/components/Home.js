const Home = () => {
  return ( 
    <div id="home" className="w-full flex items-center pt-20">
      <div className="max-w-[1280px] mx-auto p-2 text-center">
        <h3 className="font-bold text-3xl md:text-4xl text-white">IT Services Designed For</h3>
        <h1 className="mt-10 font-bold text-5xl md:text-7xl text-white">Creating System With RFID</h1>
        <p className="mt-10 font-semibold text-base md:text-lg text-white">A RFID provider with functional application for institutions focusing on attendance.</p>
        <div className="w-full flex flex-row justify-center">
          <a href="mailto:oscarfontelera@yahoo.com" className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-4 px-6 rounded-3xl shadow-xl focus:outline-none focus:shadow-outline mt-10 flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
              <path fill="#fff" fillRule="evenodd" d="M11.821.098a1.62 1.62 0 0 1 2.077 2.076l-3.574 10.712a1.62 1.62 0 0 1-1.168 1.069a1.599 1.599 0 0 1-1.52-.434l-1.918-1.909l-2.014 1.042a.5.5 0 0 1-.73-.457l.083-3.184l7.045-5.117a.625.625 0 1 0-.735-1.012L2.203 8.088l-1.73-1.73a1.6 1.6 0 0 1-.437-1.447a1.62 1.62 0 0 1 1.069-1.238h.003L11.82.097Z" clipRule="evenodd"></path>
            </svg>
            <span>Connect with us!</span>
          </a>
        </div>
      </div>
    </div>
   );
}
 
export default Home;