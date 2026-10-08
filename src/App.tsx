/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, ClientEnquiry } from './types';
import { PRODUCTS } from './data/products';
import { BusinessConfig, getBusinessConfig } from './config/business';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { RentalServiceSection } from './components/RentalServiceSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { QuoteSlipModal } from './components/QuoteSlipModal';
import { ConfigModal } from './components/ConfigModal';
import { getWhatsAppUrl } from './utils/whatsapp';
import { MessageCircle, ShoppingBag, Check } from 'lucide-react';

const CART_STORAGE_KEY = 'medfinity_cart_items';

export default function App() {
  const [businessConfig, setBusinessConfig] = useState<BusinessConfig>(getBusinessConfig());
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [printClient, setPrintClient] = useState<ClientEnquiry | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Search & Navigation
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, intent: 'Purchase' | 'Rental' | 'Both' = 'Purchase') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, intent }
            : item
        );
      }
      return [...prev, { product, quantity, intent }];
    });
    showToast(`Added ${product.code} to Quote Basket`);
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleUpdateIntent = (productId: string, intent: 'Purchase' | 'Rental' | 'Both') => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, intent } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleOpenPrintSlip = (client: ClientEnquiry) => {
    setPrintClient(client);
    setIsPrintModalOpen(true);
  };

  const cartProductIds = useMemo(() => {
    return new Set(cartItems.map((item) => item.product.id));
  }, [cartItems]);

  const floatingWhatsAppUrl = getWhatsAppUrl(
    businessConfig.whatsappNumber,
    `Hello ${businessConfig.name},\nI am on your website and would like to enquire about medical equipment availability and pricing.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Top Navigation */}
      <Navbar
        businessConfig={businessConfig}
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
        activeSection={selectedCategory !== 'all' ? 'catalog' : ''}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          businessConfig={businessConfig}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Searchable Catalog Section */}
        <CatalogSection
          products={PRODUCTS}
          businessConfig={businessConfig}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
          cartProductIds={cartProductIds}
        />

        {/* Healthcare at Home Rentals Section (Page 12 of brochure) */}
        <RentalServiceSection businessConfig={businessConfig} />

        {/* OT Setup, Servicing & AMC Pillars */}
        <ServicesSection businessConfig={businessConfig} />

        {/* About Dealer & Contact Section */}
        <AboutContactSection businessConfig={businessConfig} />
      </main>

      {/* Footer */}
      <Footer
        businessConfig={businessConfig}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Slide-over Quote Basket Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateIntent={handleUpdateIntent}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        businessConfig={businessConfig}
        onOpenPrintSlip={handleOpenPrintSlip}
      />

      {/* Technical Specifications Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedProduct(null);
        }}
        businessConfig={businessConfig}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cartProductIds.has(selectedProduct.id) : false}
      />

      {/* Printable Request For Quotation Slip Modal */}
      {printClient && (
        <QuoteSlipModal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
          cartItems={cartItems}
          client={printClient}
          businessConfig={businessConfig}
        />
      )}

      {/* Dealer WhatsApp & Contact Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={businessConfig}
        onUpdate={(newConfig) => {
          setBusinessConfig(newConfig);
          showToast('Updated Dealer WhatsApp & Contact details');
        }}
      />

      {/* Floating Actions - Bottom Right */}
<aside
  aria-label="Support and quote basket actions"
  className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
>
  {cartItems.length > 0 && (
    <button
      onClick={() => setIsCartOpen(true)}
      className="flex items-center gap-2 px-4 py-2.5 bg-sky-900 hover:bg-sky-800 text-white font-bold text-xs rounded-full shadow-lg transition-all"
    >
      <ShoppingBag className="w-4 h-4 text-sky-200" />
      <span>Quote Basket ({cartItems.length})</span>
    </button>
  )}

  {/* WhatsApp */}
  <a
    href={floatingWhatsAppUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
    title={`Enquire on WhatsApp (+${businessConfig.whatsappNumber})`}
  >
    <MessageCircle className="w-7 h-7" />
  </a>
</aside>

      {/* Toast Notification */}
      {toastMessage && (
        <aside aria-label="Notification alert" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold border border-slate-700 animate-fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
}
