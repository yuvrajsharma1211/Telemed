import React, { useState, useEffect } from "react";

export default function Dashboard() {
    // Carousel state
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    

    // Doctor data
    const doctors = [
        {
            name: "Dr. Karthick N",
            credentials: "M.B.B.S, Medical Officer",
            location: "Dharmapur, Tamil Nadu",
            patients: "113,100+",
            image: "https://img.freepik.com/premium-photo/indian-doctor-smiling-face_1197144-1012.jpg"
        },
        {
            name: "Dr. K Suresh T",
            credentials: "M.B.B.S, Medical Officer",
            location: "Kanniyakumari, Tamil Nadu",
            patients: "100,500+",
            image:"https://i1.sndcdn.com/artworks-000562525653-v1wh6h-t500x500.jpg"
        },
        {
            name: "Dr. B. Ahmed Paizal",
            credentials: "M.B.B.S, General Physician",
            location: "Dindigul, Tamil Nadu",
            patients: "93,000+",
            image:"https://static.vecteezy.com/system/resources/previews/053/323/058/non_2x/portrait-of-indian-doctor-with-stethoscope-around-his-neck-smiling-over-blue-background-photo.jpg"
        },
        {
            name: "Dr. Priya Sharma",
            credentials: "M.D, Pediatrician",
            location: "Chennai, Tamil Nadu",
            patients: "87,500+",
            image:"https://thumbs.dreamstime.com/b/happy-indian-female-cardiologist-white-coat-posing-workplace-general-practitioner-pose-exude-confidence-professionalism-355502336.jpg"
        },
        {
            name: "Dr. Rajesh Kumar",
            credentials: "M.S, Orthopedic Surgeon",
            location: "Coimbatore, Tamil Nadu",
            patients: "95,200+",
            image:"https://tse3.mm.bing.net/th/id/OIP.LSd9wYUuxJCh79C9tvt-igHaGn?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=206&h=184&c=7&dpr=1.3&o=7&rm=3"
        },
        {
            name: "Dr. Meena Iyer",
            credentials: "M.D, Dermatologist",
            location: "Madurai, Tamil Nadu",
            patients: "78,900+",
            image:"https://img.freepik.com/premium-photo/indian-female-doctor-wear-headset-face-headshot-telemedicine-india_203461-1162.jpg?w=2000"
        }
    ];

    


    // Auto-scroll effect
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % doctors.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused, doctors.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % doctors.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
    };

    return (
        <div className="font-sans text-green-900 relative">
            {/* Navbar */}
            <header className="glass flex justify-between items-center py-6 px-10 shadow-lg sticky top-0 z-40 border-b border-green-100">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                    Telemed Connect
                </h1>
                <nav className="flex gap-8 text-lg font-medium items-center">
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">Services</a>
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">About Us</a>
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">Contact</a>
                    {/* Chat Link */}
                    <a
                        href="/chat"
                        className="text-green-700 hover:text-green-900 transition-all font-semibold hover:scale-110"
                    >
                        Chat
                    </a>
                    <a href="/signup" className="hover:text-green-600 transition-all hover:scale-110">Sign Up</a>
                    <a href="/login" className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full hover:from-green-700 hover:to-green-600 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                        Login
                    </a>
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
                <div className="bg-gradient-to-br from-green-800/70 via-green-700/60 to-green-900/70 animate-gradient px-10 py-28">
                    <h2 className="text-5xl font-extrabold mb-6 animate-slide-up">
                        Online Doctor Consultation Services
                    </h2>
                    <p className="text-xl max-w-3xl mb-8 animate-fade-in">
                        Connect with doctors online for timely and accessible medical care
                        from the comfort of your home through Telemed Connect.
                    </p>
                    <a href="/signup">
                        <button className="bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-xl px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-600 transition-all hover:scale-105 animate-glow shadow-xl">
                            Book Consultation
                        </button>
                    </a>

                    <div className="flex items-center gap-4 mt-6 text-lg font-medium animate-fade-in">
                        <span className="animate-pulse-slow">⭐⭐⭐⭐⭐</span> Fast Consultations | Professional Care
                    </div>

                    <div className="flex items-center gap-3 mt-4 animate-slide-right">
                        <img
                            src="/user1.png"
                            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                            alt="Audrey"
                        />
                        <p className="italic text-white font-semibold">
                            "Telemed Connect saved me so much time and hassle." – Audrey Flores
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gradient-to-b from-green-50 to-white py-20 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT COLUMN — Title & Subtitle */}
                    <div className="lg:col-span-1 animate-slide-right">
                        <h2 className="text-4xl font-bold mb-5 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                            Convenient Online Consultations
                        </h2>
                        <p className="text-lg text-gray-700">
                            Access professional medical care from anywhere, anytime.
                        </p>
                    </div>

                    {/* RIGHT COLUMN — Cards Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <div className="hover-lift bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 hover:border-green-300 animate-fade-in group">
                            <div className="overflow-hidden">
                                <img
                                    src="/consult2.png"
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-green-800">Timely Medical Care</h3>
                                <p className="text-gray-600">
                                    Get quick consultations and medical advice, reducing waiting times and
                                    ensuring prompt treatment.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="hover-lift bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 hover:border-green-300 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
                            <div className="overflow-hidden">
                                <img
                                    src="/consult1.png"
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-green-800">Easy Access to Doctors</h3>
                                <p className="text-gray-600">
                                    Connect with experienced doctors instantly without the need to travel,
                                    saving time and effort.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="hover-lift bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 hover:border-green-300 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
                            <div className="overflow-hidden">
                                <img
                                    src="/consult3.jpeg"
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-green-800">Flexible Appointments</h3>
                                <p className="text-gray-600">
                                    Schedule consultations at your convenience, making it easier to fit
                                    healthcare into your busy lifestyle.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="hover-lift bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 hover:border-green-300 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
                            <div className="overflow-hidden">
                                <img
                                    src="/doctor.png"
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-green-800">Expert Medical Advice</h3>
                                <p className="text-gray-600">
                                    Receive expert opinions and guidance from qualified doctors, ensuring
                                    accurate diagnosis and treatment.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Doctors Section */}
            <section className="bg-gradient-to-b from-green-50 to-white py-20 px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent animate-fade-in">
                        Our Doctors
                    </h2>

                    {/* Carousel Container */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Cards Container */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out gap-8"
                                style={{
                                    transform: `translateX(-${currentSlide * (100 / 3)}%)`
                                }}
                            >
                                {[...doctors,...doctors].map((doctor, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] hover-lift bg-gradient-to-br from-green-100 via-green-50 to-white rounded-3xl p-8 shadow-lg border border-green-200 group"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            {/* Empty placeholder for doctor image */}
                                            <div className="w-20 h-20 rounded-full overflow-hidden   flex items-center justify-center">
                                                <img src={doctor.image} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-green-900 mb-1">{doctor.name}</h3>
                                                <p className="text-sm text-gray-600 mb-1">{doctor.credentials}</p>
                                                <p className="text-sm text-gray-500">{doctor.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-700 font-semibold bg-white/70 rounded-full px-4 py-2 shadow-sm">
                                            <span className="text-yellow-500">⭐</span>
                                            <span className="text-sm">{doctor.patients} Patients served</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-green-200 hover:border-green-400 flex items-center justify-center text-green-700 hover:text-green-900 transition-all hover:scale-110"
                                aria-label="Previous"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-green-200 hover:border-green-400 flex items-center justify-center text-green-700 hover:text-green-900 transition-all hover:scale-110"
                                aria-label="Next"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonial */}
            <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 animate-gradient text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 animate-slide-up">
                    <p className="text-3xl font-semibold max-w-3xl mx-auto px-6">
                        "Telemed Connect has made it incredibly easy for me to access medical
                        care whenever I need it."
                    </p>
                    <p className="mt-6 text-xl font-bold">Zoe Wilson</p>
                </div>
            </section>

            {/* Booking Section */}
            <section className="bg-gradient-to-b from-white to-green-50 py-24 flex justify-center px-6">
                <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-3xl text-center border-2 border-transparent bg-gradient-to-r from-green-100 via-white to-green-100 hover-lift animate-scale-in">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-6">
                        Book Your Consultation Now.
                    </h2>
                    <p className="text-lg mb-10 italic text-gray-700">
                        "Telemed Connect has been a lifesaver for me. I can quickly consult
                        with doctors without having to leave my home. The service is reliable
                        and the doctors are always professional and caring." – Nora Wright
                    </p>
                    <button className="bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-xl px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-600 transition-all hover:scale-105 animate-glow shadow-xl">
                        Book Consultation
                    </button>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-gradient-to-b from-green-100 to-green-200 py-10 text-center text-green-800">
                <div className="flex justify-center gap-10 text-lg font-semibold mb-6">
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">Homepage</a>
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">Services</a>
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">About Us</a>
                    <a href="#" className="hover:text-green-600 transition-all hover:scale-110">Contact</a>
                </div>

                <p className="text-sm font-medium">© All rights reserved.</p>
            </footer>
        </div>
    );
}
