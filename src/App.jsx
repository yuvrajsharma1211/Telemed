import React from "react";

export default function App() {
  return (
    <div className="font-sans text-green-900">
      {/* Navbar */}
      <header className="flex justify-between items-center py-6 px-10 bg-white shadow">
        <h1 className="text-2xl font-bold">Telemed Connect</h1>
        <nav className="flex gap-8 text-lg font-medium">
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="/signup">Sign Up</a>
          <a href="/login">Login</a> 
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-green-800/60 px-10 py-28 ">
          <h2 className="text-5xl font-extrabold mb-6">
            Online Doctor Consultation Services
          </h2>
          <p className="text-xl max-w-3xl mb-8">
            Connect with doctors online for timely and accessible medical care
            from the comfort of your home through Telemed Connect.
          </p>

          <button className="bg-green-600 text-white font-semibold text-xl px-7 py-3 rounded-lg hover:bg-green-700 transition">
            Book Consultation
          </button>

          <div className="flex items-center gap-4 mt-6 text-lg font-medium">
            ⭐⭐⭐⭐⭐ Fast Consultations | Professional Care
          </div>

          <div className="flex items-center gap-3 mt-4">
            <img
              src="/user1.png"
              className="w-10 h-10 rounded-full border"
              alt="Audrey"
            />
            <p className="italic text-white font-semibold">
              “Telemed Connect saved me so much time and hassle.” – Audrey Flores
            </p>
          </div>
        </div>
      </section>

     {/* Services Section */}
<section className="bg-green-50 py-20 px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT COLUMN — Title & Subtitle */}
    <div className="lg:col-span-1">
      <h2 className="text-4xl font-bold mb-5">
        Convenient Online Consultations
      </h2>
      <p className="text-lg">
        Access professional medical care from anywhere, anytime.
      </p>
    </div>

    {/* RIGHT COLUMN — Cards Grid */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Card 1 */}
      <div>
        <img src="/consult2.png" className="rounded-xl mb-4 shadow-md w-full h-56 object-cover" />
        <h3 className="text-xl font-bold mb-2">Timely Medical Care</h3>
        <p>
          Get quick consultations and medical advice, reducing waiting times and
          ensuring prompt treatment.
        </p>
      </div>

      {/* Card 2 */}
      <div>
        <img src="/consult1.png" className="rounded-xl mb-4 shadow-md w-full h-56 object-cover" />
        <h3 className="text-xl font-bold mb-2">Easy Access to Doctors</h3>
        <p>
          Connect with experienced doctors instantly without the need to travel,
          saving time and effort.
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <img src="/consult3.jpeg" className="rounded-xl mb-4 shadow-md w-full h-56 object-cover" />
        <h3 className="text-xl font-bold mb-2">Flexible Appointments</h3>
        <p>
          Schedule consultations at your convenience, making it easier to fit
          healthcare into your busy lifestyle.
        </p>
      </div>

      {/* Card 4 */}
      <div>
        <img src="/doctor.png" className="rounded-xl mb-4 shadow-md w-full h-56 object-cover" />
        <h3 className="text-xl font-bold mb-2">Expert Medical Advice</h3>
        <p>
          Receive expert opinions and guidance from qualified doctors, ensuring
          accurate diagnosis and treatment.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Testimonial */}
      <section className="bg-green-600 text-white py-20 text-center">
        <p className="text-3xl font-semibold max-w-3xl mx-auto">
          "Telemed Connect has made it incredibly easy for me to access medical
          care whenever I need it."
        </p>
        <p className="mt-6 text-xl font-bold">Zoe Wilson</p>
      </section>

      {/* Booking Section */}
      <section className="bg-green-50 py-24 flex justify-center">
        <div className="bg-white shadow-lg rounded-3xl p-12 max-w-3xl text-center border border-green-400">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Book Your Consultation Now.
          </h2>
          <p className="text-lg mb-10 italic">
            “Telemed Connect has been a lifesaver for me. I can quickly consult
            with doctors without having to leave my home. The service is reliable
            and the doctors are always professional and caring.” – Nora Wright
          </p>
          <button className="bg-green-600 text-white font-semibold text-xl px-7 py-3 rounded-lg hover:bg-green-700 transition">
            Book Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100 py-10 text-center text-green-800">
        <div className="flex justify-center gap-10 text-lg font-semibold mb-6">
          <a href="#">Homepage</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          
        </div>

        <p className="text-sm font-medium">© All rights reserved.</p>
      </footer>
    </div>
  );
}
