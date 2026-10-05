import { useState } from 'react';
import { products } from '@/data/products';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="bg-white py-20 lg:py-28">
      <div className="container-irfo">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''} mb-14 max-w-3xl`}
        >
          <p className="section-eyebrow">Our Products</p>
          <h2 className="section-title">
            Comprehensive industrial supply solutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
            IRFO offers a wide range of products for oil and gas pipelines,
            petrochemical, refineries and power plants — sourced from
            world-renowned brands and manufactured to international standards.
          </p>
        </div>

        {/* Product grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`reveal reveal-delay-${index + 1} ${gridVisible ? 'is-visible' : ''}`}
            >
              <ProductCard product={product} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
}
