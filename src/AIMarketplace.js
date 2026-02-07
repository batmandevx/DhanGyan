import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Book, Wrench, ChefHat, Code, Briefcase, Plus, X, Heart, Share2, MessageSquare, Star, ArrowRight, ArrowLeft, Camera, Music, Palette, Clock, FileText, Users, IndianRupee, Gift, Award, CreditCard, Truck, MapPin, Sun, Cloud, CloudRain } from 'lucide-react';

const sampleListings = [
  { id: 1, title: "Advanced Web Development", category: "Courses", price: 4999, rating: 4.5, image: "/api/placeholder/400/300", seller: "TechGuru", description: "Master modern web technologies and frameworks.", type: "course" },
  { id: 2, title: "Handcrafted Pashmina Shawl", category: "Goods", price: 2499, rating: 4.8, image: "/api/placeholder/400/300", seller: "KashmirCrafts", description: "Authentic Pashmina shawl, handwoven with care.", type: "product" },
  { id: 3, title: "Indian Cuisine Masterclass", category: "Cooking", price: 3999, rating: 4.7, image: "/api/placeholder/400/300", seller: "ChefAnand", description: "Learn to cook authentic Indian dishes like a pro.", type: "course" },
  { id: 4, title: "AI-Powered Chatbot Development", category: "Services", price: 14999, rating: 4.6, image: "/api/placeholder/400/300", seller: "AIWizard", description: "Custom chatbot development for your business.", type: "service" },
  { id: 5, title: "Vintage Bollywood Poster", category: "Goods", price: 7999, rating: 4.2, image: "/api/placeholder/400/300", seller: "RetroIndia", description: "Original vintage Bollywood poster from the 1960s.", type: "product" },
  { id: 6, title: "Yoga and Meditation Retreat", category: "Wellness", price: 9999, rating: 4.9, image: "/api/placeholder/400/300", seller: "ZenMaster", description: "5-day retreat in the Himalayas for inner peace.", type: "service" },
  { id: 7, title: "Blockchain for Beginners", category: "Courses", price: 5999, rating: 4.4, image: "/api/placeholder/400/300", seller: "CryptoExpert", description: "Understand the fundamentals of blockchain technology.", type: "course" },
  { id: 8, title: "Handmade Leather Wallet", category: "Goods", price: 1999, rating: 4.7, image: "/api/placeholder/400/300", seller: "LeatherCraft", description: "Premium leather wallet, handcrafted in Rajasthan.", type: "product" },
];

const categories = [
  { name: 'All', icon: ShoppingCart },
  { name: 'Courses', icon: Book },
  { name: 'Skills', icon: Wrench },
  { name: 'Cooking', icon: ChefHat },
  { name: 'Coding', icon: Code },
  { name: 'Services', icon: Briefcase },
  { name: 'Photography', icon: Camera },
  { name: 'Music', icon: Music },
  { name: 'Art', icon: Palette },
];

const EnhancedAIMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewListing, setShowNewListing] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedListing, setSelectedListing] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [weather, setWeather] = useState({ temp: 25, condition: 'Sunny' });
  const [favorites, setFavorites] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [newListing, setNewListing] = useState({ title: '', category: '', price: '', description: '', image: null });
  const [listings, setListings] = useState(sampleListings);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleNewListingChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewListing(prev => ({ ...prev, image: files[0] }));
    } else {
      setNewListing(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNewListingSubmit = (e) => {
    e.preventDefault();
    const newId = listings.length + 1;
    const newListingWithId = { ...newListing, id: newId, rating: 0 };
    setListings([...listings, newListingWithId]);
    setShowNewListing(false);
    setNewListing({ title: '', category: '', price: '', description: '', image: null });
    showNotification('New listing added successfully!');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const filteredListings = listings.filter(listing =>
    (selectedCategory === 'All' || listing.category === selectedCategory) &&
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredListings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addToCart = (listing) => {
    setCart([...cart, listing]);
    showNotification(`${listing.title} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    showNotification('Item removed from cart!');
  };

  const toggleFavorite = (listing) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === listing.id)) {
        showNotification(`${listing.title} removed from favorites!`);
        return prevFavorites.filter(fav => fav.id !== listing.id);
      } else {
        showNotification(`${listing.title} added to favorites!`);
        return [...prevFavorites, listing];
      }
    });
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const ListingCard = ({ listing }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <figure className="relative">
        <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 badge badge-secondary">{listing.category}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {listing.title}
          <div className="badge badge-outline">{listing.type}</div>
        </h2>
        <p>{listing.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <IndianRupee className="w-5 h-5 mr-1" />
            <span className="text-xl font-bold">{listing.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-400 mr-1" />
            <span>{listing.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={() => setSelectedListing(listing)}>View Details</button>
          <button className="btn btn-outline btn-primary" onClick={() => addToCart(listing)}>
            <ShoppingCart className="mr-2" /> Add to Cart
          </button>
          <button 
            className={`btn btn-outline ${favorites.some(fav => fav.id === listing.id) ? 'btn-secondary' : 'btn-primary'}`} 
            onClick={() => toggleFavorite(listing)}
          >
            <Heart className={`mr-2 ${favorites.some(fav => fav.id === listing.id) ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const CartModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-base-100 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button className="btn btn-ghost" onClick={() => setShowCart(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.title}</span>
                  <div>
                    <span className="mr-2">₹{item.price.toLocaleString('en-IN')}</span>
                    <button className="btn btn-sm btn-error" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-xl font-bold">Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</p>
              </div>
              <button className="btn btn-primary w-full mt-4" onClick={() => {
                setShowCart(false);
                setShowCheckout(true);
              }}>
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  const CheckoutModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-base-100 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button className="btn btn-ghost" onClick={() => setShowCheckout(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex space-x-2">
              <button 
                className={`btn ${paymentMethod === 'card' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="mr-2" /> Card
              </button>
              <button 
                className={`btn ${paymentMethod === 'upi' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setPaymentMethod('upi')}
              >
                UPI
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter your delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title}</span>
                <span>₹{item.price.toLocaleString('en-IN')}</span>
              </div>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-xl font-bold">Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</p>
            </div>
          </div>
          <button 
            className="btn btn-primary w-full"
            onClick={() => {
              showNotification('Payment processed successfully!');
              setCart([]);
              setShowCheckout(false);
            }}
          >
            Pay Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  const NewListingModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-base-100 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Create New Listing</h2>
            <button className="btn btn-ghost" onClick={() => setShowNewListing(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <form onSubmit={handleNewListingSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={newListing.title}
                onChange={handleNewListingChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                value={newListing.category}
                onChange={handleNewListingChange}
                className="select select-bordered w-full"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={newListing.price}
                onChange={handleNewListingChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={newListing.description}
                onChange={handleNewListingChange}
                className="textarea textarea-bordered w-full"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleNewListingChange}
                className="file-input file-input-bordered w-full"
                accept="image/*"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">Create Listing</button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );

  const ListingDetailModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-base-100 rounded-lg shadow-xl overflow-hidden w-full max-w-2xl"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedListing.title}</h2>
            <button className="btn btn-ghost" onClick={() => setSelectedListing(null)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <img src={selectedListing.image} alt={selectedListing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-lg mb-4">{selectedListing.description}</p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <IndianRupee className="w-5 h-5 mr-1" />
              <span className="text-2xl font-bold">{selectedListing.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" />
              <span>{selectedListing.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="btn btn-primary" onClick={() => addToCart(selectedListing)}>
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button 
              className={`btn btn-outline ${favorites.some(fav => fav.id === selectedListing.id) ? 'btn-secondary' : 'btn-primary'}`} 
              onClick={() => toggleFavorite(selectedListing)}
            >
              <Heart className={`mr-2 ${favorites.some(fav => fav.id === selectedListing.id) ? 'fill-current' : ''}`} />
              {favorites.some(fav => fav.id === selectedListing.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-base-content p-4 md:p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
      >
        Dhan Gyan AI-Powered Marketplace
      </motion.h1>
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex-grow w-full md:w-auto md:mr-4 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for goods, services, or courses..."
              className="input input-bordered w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ShoppingCart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 mb-4 md:mb-0">
          <button onClick={() => setViewMode('grid')} className={`btn btn-sm ${viewMode === 'grid' ? 'btn-active' : ''}`}>Grid</button>
          <button onClick={() => setViewMode('list')} className={`btn btn-sm ${viewMode === 'list' ? 'btn-active' : ''}`}>List</button>
          <button onClick={() => setShowNewListing(true)} className="btn btn-sm btn-primary">
            <Plus className="mr-2" /> New Listing
          </button>
          <button onClick={() => setShowCart(true)} className="btn btn-sm btn-secondary">
            <ShoppingCart className="mr-2" /> Cart ({cart.length})
          </button>
          <button onClick={toggleFullscreen} className="btn btn-sm btn-outline">
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg mb-8 shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center">
          {weather.condition.toLowerCase().includes('sun') ? (
            <Sun className="text-yellow-300 w-8 h-8 mr-4" />
          ) : weather.condition.toLowerCase().includes('cloud') ? (
            <Cloud className="text-gray-300 w-8 h-8 mr-4" />
          ) : (
            <CloudRain className="text-gray-300 w-8 h-8 mr-4" />
          )}
          <div>
            <p className="text-xl font-bold text-white">{weather.temp}°C</p>
            <p className="text-sm text-white">{weather.condition}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center space-x-2 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.name)}
            className={`btn btn-sm ${selectedCategory === category.name ? 'btn-active' : ''} mb-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <category.icon className="mr-2" size={16} />
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        layout
        className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
      >
        <AnimatePresence>
          {currentItems.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-8">
        <div className="btn-group">
          <button className="btn btn-sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <ArrowLeft size={16} />
          </button>
          {Array.from({ length: Math.ceil(filteredListings.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${currentPage === i + 1 ? 'btn-active' : ''}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredListings.length / itemsPerPage)}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showNewListing && <NewListingModal />}
        {showCart && <CartModal />}
        {showCheckout && <CheckoutModal />}
        {selectedListing && <ListingDetailModal />}
      </AnimatePresence>

      {showWelcomeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-base-100 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Welcome to Dhan Gyan AI Marketplace!</h2>
              <p className="mb-4">Discover a world of knowledge, skills, and unique products. Our platform is here to help you find exactly what you need.</p>
              <button className="btn btn-primary w-full" onClick={() => setShowWelcomeModal(false)}>Get Started</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-base-100 text-base-content p-4 rounded-lg shadow-lg"
        >
          {notification}
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedAIMarketplace;