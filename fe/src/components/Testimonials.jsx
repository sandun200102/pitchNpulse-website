import { useState, useEffect } from 'react';

export default function Testimonials() {
  // 1. Initialize state: Try to load from localStorage, otherwise use defaults
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('music_teacher_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing reviews", e);
      }
    }
    return [
      { id: 1, name: "John Smith", role: "Guitarist", text: "Amazing teacher! My progress has tripled in just 2 months." },
      { id: 2, name: "Elena Rossi", role: "Vocalist", text: "Very professional and patient. Highly recommended for kids." },
      { id: 3, name: "David Wu", role: "Pianist", text: "The online classes are just as good as in-person. 10/10!" },
    ];
  });

  // State for the form input
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });

  // 2. Sync with localStorage whenever the 'reviews' array changes
  useEffect(() => {
    localStorage.setItem('music_teacher_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    
    // Add new review with a unique ID and reset form
    const newReview = {
      ...formData,
      id: Date.now() // Unique ID for React keys
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', role: '', text: '' });
  };

  return (
    <section className="py-20 bg-amber-50/30 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-stone-800">Student Stories</h2>
        
        {/* Horizontal Scroll Display */}
        <div className="flex gap-6 overflow-x-auto snap-x no-scrollbar pb-12">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        <hr className="border-stone-200 mb-16" />

        {/* Input & Preview Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold mb-6 text-stone-800">Share your experience</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-amber-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Your Instrument/Role (e.g. Drummer)" 
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-amber-500"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              />
              <textarea 
                placeholder="Your Review" 
                rows="4"
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-amber-500"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
              />
              <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition">
                Post Review
              </button>
            </div>
          </form>

          {/* Preview Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4 ml-2">Live Preview</h3>
            <div className="opacity-80">
                <ReviewCard 
                  review={{
                    name: formData.name || "Your Name",
                    role: formData.role || "Your Role",
                    text: formData.text || "Your review will appear here as you type..."
                  }} 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function ReviewCard({ review }) {
  return (
    <div className="min-w-[85%] md:min-w-[400px] snap-center bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
      <p className="text-stone-600 italic mb-6">"{review.text}"</p>
      <div className="font-bold text-stone-900">{review.name}</div>
      <div className="text-amber-600 text-sm">{review.role}</div>
    </div>
  );
}