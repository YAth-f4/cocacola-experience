import { useState } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { FlavourLab } from './components/FlavourLab';
import { HeritageTimeline } from './components/HeritageTimeline';
import { SustainabilitySection } from './components/SustainabilitySection';
import { Footer } from './components/Footer';
import type { Product } from './data/products';

export function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [labPreselectedProduct, setLabPreselectedProduct] = useState<Product | null>(null);

  const handleOpenFlavourLab = (product?: Product) => {
    if (product) {
      setLabPreselectedProduct(product);
    }
    const labElem = document.getElementById('flavour-lab');
    if (labElem) {
      labElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const productsElem = document.getElementById('products');
    if (productsElem) {
      productsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#111111] relative selection:bg-[#E41E3F] selection:text-white">
      
      {/* Signature Handwriting Bootup Intro Loader */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* Main App Page Content */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onReplayIntro={() => setShowIntro(true)}
        onOpenFlavourLab={() => handleOpenFlavourLab()}
      />

      <main>
        {/* Parallax Hero Section */}
        <HeroSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreClick={handleExploreClick}
        />

        {/* Searchable & Filterable Product Gallery */}
        <ProductGrid
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onMixProduct={(product) => handleOpenFlavourLab(product)}
        />

        {/* Interactive Tasting Lab & Custom Mixer */}
        <FlavourLab preselectedProduct={labPreselectedProduct} />

        {/* Heritage Timeline Section */}
        <HeritageTimeline />

        {/* Sustainability & Recycling Commitment Section */}
        <SustainabilitySection />
      </main>

      {/* Footer with Red Scroll-To-Top and Black History Back Buttons */}
      <Footer />

      {/* Detailed Product Specs & Nutrition Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenFlavourLab={(product) => handleOpenFlavourLab(product)}
      />

    </div>
  );
}

export default App;
