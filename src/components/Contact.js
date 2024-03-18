const Contact = () => {
  return ( 
    <div id="contact" className="max-w-[1280px] p-2 mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize mt-10">
        get in touch,
         <span className="underline decoration-blue-500"> Contact Us</span>
      </h1>
      <div className="flex flex-wrap justify-between items-center md:flex-row mt-16 gap-6">
        <div className="flex gap-5 md:items-start">
          <div className="h-14 w-14 rounded-xl bg-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0066ff" d="M21 9v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-1.11.6-2.08 1.5-2.6l8-4.62l8 4.62c.9.52 1.5 1.49 1.5 2.6M3.72 7.47l7.78 5.03l7.78-5.03l-7.78-4.54zm7.78 6.24L3.13 8.28C3.05 8.5 3 8.75 3 9v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9c0-.25-.05-.5-.13-.72z"></path></svg>
          </div>
          <div className="text-gray-600">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="mt-2">Contact us at</p>
            <a href="mailto:oscarfontelera@yahoo.com">oscarfontelera@yahoo.com</a>
          </div>
        </div>
        <div className="flex gap-5 items-start">
          <div className="h-14 w-14 rounded-xl bg-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#0066ff" d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
          </div>
          <div className="text-gray-600">
            <h3 className="text-lg font-bold">Phone</h3>
            <p className="mt-2">Reach out to us by phone</p>
            <a href="/phone">+63 918 930 4976</a>
          </div>
        </div>
        <div className="flex gap-5 items-start">
          <div className="h-14 w-14 rounded-xl bg-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#0066ff" d="M9.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M14 7c0 2.874-3.097 6.016-4.841 7.558a1.74 1.74 0 0 1-2.318 0C5.097 13.016 2 9.874 2 7a6 6 0 1 1 12 0m-1 0A5 5 0 0 0 3 7c0 1.108.615 2.395 1.57 3.683c.934 1.258 2.087 2.377 2.933 3.126a.74.74 0 0 0 .994 0c.846-.749 2-1.867 2.933-3.126C12.385 9.395 13 8.108 13 7"></path></svg>
          </div>
          <div className="text-gray-600">
            <h3 className="text-lg font-bold">Location</h3>
            <p className="mt-2">Find us at</p>
            <a href="https://www.google.com/maps/place/122+Dumlao+St,+San+Felipe,+Zambales/@15.0620161,120.0654988,17z/data=!3m1!4b1!4m5!3m4!1s0x3395d4a73a23e72f:0xf9c99f2b6f8085a6!8m2!3d15.0620109!4d120.0680737?entry=ttu">122 Dumlao Street, Olongapo, Philippines</a>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;