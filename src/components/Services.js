const Services = () => {
  return (
    <div id="services" className="max-w-[1280px] p-2 mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize mt-10">
        explore our awesome
         <span className="underline decoration-blue-500"> Services</span>
      </h1>
      <p className="text-gray-600 text-center mt-10">
        We provide robust application for institution integrated with RFID.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 text-center text-gray-600 md:grid-cols-3">
        <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <svg className="w-20 h-20 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#0066ff" d="M9.354 7.854a.5.5 0 0 0-.708-.708L7.234 8.558l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12.75a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5"></path></svg>
          <h3 className="my-3 font-display font-medium text-lg">Attendance Monitoring</h3>
          <p className="mt-1.5 leading-6 text-justify">
            Integrates DTR printing for faculty members, facilitating streamlined attendance tracking. For students, 
            it offers efficient attendance verification, ensuring accurate records. Additionally, it generates daily 
            reports highlighting late student arrivals, aiding in monitoring and addressing punctuality issues. 
            Furthermore, the system sends SMS notifications to parents upon their child's arrival and departure from 
            school, enhancing communication and safety.
          </p>
        </div>
        <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <svg className="w-20 h-20 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#0066ff" d="m225.9 58.31l-96-32a6 6 0 0 0-3.8 0l-96 32A6 6 0 0 0 26 64v80a6 6 0 0 0 12 0V72.32l38.68 12.9A62 62 0 0 0 99 174.75c-19.25 6.53-36 19.59-48 38a6 6 0 0 0 10 6.53C76.47 195.59 100.88 182 128 182s51.53 13.59 67 37.28a6 6 0 0 0 10-6.56c-12-18.38-28.73-31.44-48-38a62 62 0 0 0 22.27-89.53l46.63-15.5a6 6 0 0 0 0-11.38M178 120a50 50 0 1 1-89.37-30.8l37.47 12.49a6 6 0 0 0 3.8 0l37.47-12.49A49.78 49.78 0 0 1 178 120m-50-30.32L51 64l77-25.68L205 64Z"></path></svg>
          <h3 className="my-3 font-display font-medium text-lg">Student's Account Management</h3>
          <p className="mt-1.5 leading-6 text-justify">
            Automates the computation of monthly dues, ensuring accuracy and efficiency in financial tracking. It 
            generates transaction details reports, offering comprehensive insights into financial activities. Additionally, 
            it facilitates the printing of student statement accounts, providing transparent records for students and 
            administrators. Moreover, it sends SMS statements of account to students, promoting timely awareness of financial 
            obligations and fostering responsibility.
          </p>
        </div>
        <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <svg className="w-20 h-20 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0066ff" d="M10.308 17.346h.846v-3.384q.529 0 .899-.37t.37-.9v-2.538h-.846v2.538h-.423v-2.538h-.846v2.538h-.423v-2.538h-.847v2.538q0 .53.37.9t.9.37zm3.384 0h.846v-7.192q-.69 0-1.19.497q-.502.497-.502 1.195v2.539h.846zM5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75"></path></svg>
          <h3 className="my-3 font-display font-medium text-lg">Canteen Management</h3>
          <p className="mt-1.5 leading-6 text-justify">
            Enables cashless transactions for students, promoting convenience and efficiency in purchasing meals and snacks. 
            It utilizes barcode entry for canteen items, ensuring accurate and swift processing of orders. This system streamlines 
            the canteen experience, reducing wait times and enhancing customer satisfaction. By offering cashless transactions, 
            it also promotes financial security and accountability for both students and the canteen staff.
          </p>
        </div>
      </div>
    </div> 
  );
}
 
export default Services;