import about from '../assets/about.png'

const About = () => {
  return ( 
    <div id="about" className="max-w-[1280px] mt-10 p-2 mx-auto md:mt-20">
      <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize">
        about our
         <span className="underline decoration-blue-500"> Business</span>
      </h1>
      <div className="flex flex-col justify-between items-center md:flex-row gap-4 mt-10">
        <div className="w-full md:w-3/6 mt-5 order-last md:order-first">
          <p className="text-gray-600 text-justify">
            At our core, we are a dynamic IT business committed to revolutionizing administrative processes for 
            educational institutions. Specializing in Attendance Monitoring, Student's Account Management, and 
            Canteen Management, we seamlessly integrate cutting-edge technology with the daily operations of schools 
            and universities. Our comprehensive solutions empower educational administrators to streamline their workflows, 
            enhance efficiency, and ultimately, focus more on nurturing the academic growth of their students. 
          </p><br/>
          <p className="text-gray-600 text-justify">
            Driven by a passion for excellence and a dedication to serving the educational community, we prioritize user-friendly 
            interfaces, robust security measures, and customizable features tailored to the specific needs of each institution. Whether it's 
            ensuring accurate attendance records, facilitating hassle-free transactions in canteens, or providing transparent and efficient 
            student account management, our solutions are designed to simplify complexities and elevate operational standards.
          </p>
        </div>
        <div className="w-full md:w-3/6 order-first md:order-last">
          <div className="w-full md:w-9/12 mx-auto">
            <img className="rounded-2xl" src={ about } alt="about"/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;