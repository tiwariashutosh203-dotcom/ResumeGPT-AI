import Navbar from "../components/navbar/Navbar";
import Features from "../components/landing/Features";
import Templates from "../components/landing/Templates";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/footer/Footer";



function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center">

        <h1 className="text-6xl font-bold">
          Build Resume with AI
        </h1>

        <p className="mt-6 text-xl text-gray-500">
          Create professional resumes in seconds.
        </p>

        <button
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          Get Started
        </button>

      </section>

        
        <Features />
        <Templates />
         <Testimonials />
         <Footer />





    </>
  );
}

export default Home;