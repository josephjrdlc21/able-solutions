const Pricing = () => {
  return ( 
    <div id="pricing" className="max-w-[1280px] p-2 mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize mt-10">
        check our affordable
         <span className="underline decoration-blue-500"> Pricing</span>
      </h1>
      <div className="mt-16 grid grid-cols-1 gap-6 text-gray-600 md:grid-cols-3">
        <div className="relative p-8 rounded-xl bg-white px-6 py-8 shadow-sm flex flex-col">
          <div className="flex-1">
            <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full text-xs font-semibold tracking-wide  transform -translate-y-1/2">
              Attendance Monitoring</p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-3xl font-extrabold tracking-tight">₱3000</span><span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-6">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">DTR printing for Faculty</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Attendance verification for Students</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Daily report printing of late Students</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">SMS notification to Parents</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">SMS notification to Principal of faculty attendance</span>
              </li>
            </ul>
          </div>
          <a className="bg-slate-500 text-white  hover:bg-sky-600 mt-8 block w-full py-2 px-2 border border-transparent rounded-md text-center font-medium" href="https://www.facebook.com/profile.php?id=100084043000697">Subscribe now</a>
        </div>

        <div className="relative p-8 rounded-xl bg-white px-6 py-8 shadow-sm flex flex-col">
          <div className="flex-1">
            <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold tracking-wide  transform -translate-y-1/2">
              Student's Account Management</p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-3xl font-extrabold tracking-tight">₱2500</span><span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-6">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Auto compute of Students monthly due</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Transaction details Report printing</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Printing of Student's Statement account</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">SMS statement of account for students</span>
              </li>
            </ul>
          </div>
          <a className="bg-slate-500 text-white  hover:bg-sky-600 mt-8 block w-full py-2 px-2 border border-transparent rounded-md text-center font-medium" href="https://www.facebook.com/profile.php?id=100084043000697">Subscribe now</a>
        </div>

        <div className="relative p-8 rounded-xl bg-white px-6 py-8 shadow-sm flex flex-col">
          <div className="flex-1">
            <p className="absolute top-0 py-1.5 px-4 bg-red-500 text-white rounded-full text-xs font-semibold tracking-wide  transform -translate-y-1/2">
              Canteen Management</p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-3xl font-extrabold tracking-tight">₱3180</span><span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-6">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Cashless students transactions to canteen</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="ml-3">Barcode entry for canteen items</span>
              </li>
            </ul>
          </div>
          <a className="bg-slate-500 text-white  hover:bg-sky-600 mt-8 block w-full py-2 px-2 border border-transparent rounded-md text-center font-medium" href="https://www.facebook.com/profile.php?id=100084043000697">Subscribe now</a>
        </div>
      </div>
    </div>
   );
}
 
export default Pricing;