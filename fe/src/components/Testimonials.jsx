export default function Testimonials() {
  const reviews = [
    { name: "John Smith", role: "Guitarist", text: "Amazing teacher! My progress has tripled in just 2 months." },
    { name: "Elena Rossi", role: "Vocalist", text: "Very professional and patient. Highly recommended for kids." },
    { name: "David Wu", role: "Pianist", text: "The online classes are just as good as in-person. 10/10!" },
  ];

  return (
    <section className="py-20 bg-amber-50/30 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-stone-800">Student Stories</h2>
        <div className="flex gap-6 overflow-x-auto snap-x no-scrollbar pb-6">
          {reviews.map((rev, i) => (
            <div key={i} className="min-w-[85%] md:min-w-[400px] snap-center bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-stone-600 italic mb-6">"{rev.text}"</p>
              <div className="font-bold text-stone-900">{rev.name}</div>
              <div className="text-amber-600 text-sm">{rev.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}