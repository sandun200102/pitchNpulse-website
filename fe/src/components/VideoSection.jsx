import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const lessons = [
    { 
      id: 1, 
      title: "Piano Basics for Beginners", 
      videoSrc: "/vid1.mp4", 
      img: "gitar.jpg" 
    },
    { 
      id: 2, 
      title: "Advanced Guitar Shredding", 
      videoSrc: "/vid2.mp4", 
      img: "violin.jpg" 
    },
    { 
      id: 3, 
      title: "Vocal Warmups", 
      videoSrc: "/vid3.mp4", 
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800" 
    },
  ];

  return (
    <section className="py-20 bg-stone-900 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
          Featured <span className="text-amber-500">Tutorials</span>
        </h2>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          // Disable Swiper autoplay if a video is currently active
          autoplay={
            activeVideo 
              ? false 
              : { delay: 5000, disableOnInteraction: true }
          }
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper !pb-14"
        >
          {lessons.map((lesson) => (
            <SwiperSlide key={lesson.id}>
              <div className="group px-2">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-stone-800">
                  
                  {activeVideo === lesson.id ? (
                    <div className="relative w-full h-full">
                      <video 
                        src={lesson.videoSrc} 
                        className="w-full h-full"
                        controls 
                        autoPlay 
                        playsInline
                        // This event ensures the video starts playing as soon as it's ready
                        onLoadedData={(e) => e.target.play()}
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideo(null);
                        }}
                        className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-amber-500 text-white p-2 rounded-full transition-colors"
                      >
                        <FaTimes size={20} />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer" 
                      onClick={() => setActiveVideo(lesson.id)}
                    >
                      <img 
                        src={lesson.img} 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" 
                        alt={lesson.title} 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-all group-hover:scale-110">
                          <FaPlay className="text-white text-2xl ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-white text-xl font-bold mt-6 text-center group-hover:text-amber-400 transition-colors">
                  {lesson.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #f59e0b !important;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b !important;
        }
      `}</style>
    </section>
  );
}