import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import CategorySidebar from "../components/CategorySidebar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

function GamingGadgets() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      {/* Sidebar + Main shopping area */}
      <div className="page-layout">
        <CategorySidebar />

        <main className="main-content">
          <Hero />

          <ProductSection />
        </main>
      </div>

      {/* Full-width sections */}
      <div className="full-width-content">
        <FAQ />

        <Testimonials />

        <Footer />
      </div>

      <FloatingActions />
    </>
  );
}

export default GamingGadgets;