import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

const PRODUCTS: Product[] = [
  { id: 1, title: "Cotton Fabrics", description: "Soft, breathable, and durable fabrics." },
  { id: 2, title: "Silk Sarees", description: "Premium silk with elegant designs." },
  { id: 3, title: "Polyester Materials", description: "Long-lasting and cost-effective textiles." },
  { id: 4, title: "Uniform Cloth", description: "Reliable fabrics for schools and offices." },
  { id: 5, title: "Wholesale Fabrics", description: "Bulk supply with consistent quality." },
  { id: 6, title: "Custom Orders", description: "Tailored fabrics based on requirements." },
];

const TextileBusinessPage: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Abirami Textiles
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Premium quality fabrics crafted with tradition, trust, and excellence.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          About Our Business
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          We are a family-owned textile business with decades of experience in
          manufacturing and supplying high-quality fabrics. Our focus is on
          durability, comfort, and customer satisfaction.
        </p>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium">{product.title}</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">✔ Trusted Quality</h3>
            <p className="text-gray-600">
              Carefully selected materials and strict quality checks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✔ Fair Pricing</h3>
            <p className="text-gray-600">
              Competitive pricing for retail and wholesale buyers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✔ Years of Experience</h3>
            <p className="text-gray-600">
              Serving customers with trust for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-2">📍 Location: Salem, Tamil Nadu</p>
        <p className="mb-2">📞 Phone: +91 9087751156</p>
        <p>📧 Email: abitexsalem@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Sri Balaji Textiles. All rights reserved.
      </footer>
    </main>
  );
};

export default TextileBusinessPage;
