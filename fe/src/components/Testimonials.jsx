import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// 1. Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });
  const [loading, setLoading] = useState(true);

  // 2. FETCH: Load data from Supabase on mount
  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching reviews:", error.message);
      } else {
        setReviews(data);
      }
      setLoading(false);
    }
    fetchReviews();
  }, []);

  // 3. SUBMIT: Save data to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const { data, error } = await supabase
      .from('reviews')
      .insert([formData])
      .select();

    if (error) {
      alert(`Error saving review: ${error.message}`);
    } else {
      // Add new review to the top of the UI list
      setReviews([data[0], ...reviews]);
      setFormData({ name: '', role: '', text: '' });
    }
  };

  return (
    <section className="py-20 bg-amber-50/30 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-stone-800">Student Stories</h2>
        
        {/* Horizontal Scroll Display */}
        <div className="flex gap-6 overflow-x-auto snap-x no-scrollbar pb-12">
          {loading ? (
            <div className="w-full text-center text-stone-500 animate-pulse">Loading global stories...</div>
          ) : reviews.length === 0 ? (
            <div className="w-full text-center text-stone-400">No stories yet. Be the first to share!</div>
          ) : (
            reviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))
          )}
        </div>

        <hr className="border-stone-200 mb-16" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold mb-6 text-stone-800">Share your experience</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                required
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
                required
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-amber-500"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
              />
              <button 
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition"
              >
                Post Review Globally
              </button>
            </div>
          </form>

          {/* Preview Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4 ml-2">Live Preview</h3>
            <div className="opacity-70">
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

function ReviewCard({ review }) {
  return (
    <div className="min-w-[85%] md:min-w-[400px] snap-center bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
      <p className="text-stone-600 italic mb-6">"{review.text}"</p>
      <div className="font-bold text-stone-900">{review.name}</div>
      <div className="text-amber-600 text-sm">{review.role}</div>
    </div>
  );
}