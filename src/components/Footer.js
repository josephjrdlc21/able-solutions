const Footer = () => {
  return ( 
    <div className="max-w-[1280px] p-2 mx-auto mt-10">
      <footer className="mt-10 mb-10 text-white text-center md:text-start flex flex-col justify-between md:flex-row gap-5">
        <ul>
          <h3 className="font-bold text-lg">Product</h3>
          <li className="mt-3">Attendance Monitoring</li>
          <li className="mt-2">Student's Account Management</li>
          <li className="mt-2">Canteen Management</li>
        </ul>
        <ul>
          <h3 className="font-bold text-lg">Business</h3>
          <li className="mt-3"><a href="#home">Home</a></li>
          <li className="mt-2"><a href="#about">About</a></li>
          <li className="mt-2"><a href="#services">Services</a></li>
          <li className="mt-2"><a href="#pricing">Pricing</a></li>
          <li className="mt-2"><a href="#contact">Contact</a></li>
        </ul>
        <ul>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <li className="mt-3"><a href="#contact">Phone: +63 918 930 4976</a></li>
          <li className="mt-2"><a href="mailto:oscarfontelera@yahoo.com">Email: oscarfontelera@yahoo.com</a></li>
        </ul>
        <ul>
          <h3 className="font-bold text-lg">Location</h3>
          <li className="mt-3"><p>122 dumlao Street</p></li>
          <li className="mt-3"><p>2204 Olongapo</p></li>
          <li className="mt-3"><p>Philippines</p></li>
        </ul>
      </footer>
      <div className="border-t border-blue-300 w-full">
        <p className="text-sm text-center mt-5 mb-5 text-white md:text-start">
          Copyright 2024 Able Solutions. Privacy Policy
        </p>
      </div>
    </div>
   );
}
 
export default Footer;