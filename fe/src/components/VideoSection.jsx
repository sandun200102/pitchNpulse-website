import { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Prevent scrolling when video is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideo]);

    const lessons = [
    { 
      id: 1, 
      title: "Srilankan classes", 
      videoSrc: "/vid1.mp4", 
      img: "pi1.png" 
    },
    { 
      id: 2, 
      title: "Srilankan classes", 
      videoSrc: "/vid2.mp4", 
      img: "pi2.png" 
    },
    { 
      id: 3, 
      title: "Srilankan classes", 
      videoSrc: "/vid3.mp4", 
      img: "pi3.png" 
    },{ 
      id: 4, 
      title: "Srilankan classes", 
      videoSrc: "/vid4.mp4", 
      img: "pi4.png" 
    },
    { 
      id: 5, 
      title: "Srilankan classes", 
      videoSrc: "/vid5.mp4", 
      img: "pi5.png" 
    },
    { 
      id: 6, 
      title: "Srilankan classes", 
      videoSrc: "/vid6.mp4", 
      img: "pi6.png" 
    },{ 
      id: 7, 
      title: "Australian classes", 
      videoSrc: "/vid_n1.mp4", 
      img: "p1.png" 
    },
    { 
      id: 8, 
      title: "Australian classes", 
      videoSrc: "/vid_n2.mp4", 
      img: "p2.png" 
    },
    { 
      id: 9, 
      title: "Australian classes", 
      videoSrc: "/vid_n3.mp4", 
      img: "p3.png" 
    },
    { 
      id: 10, 
      title: "Australian classes", 
      videoSrc: "/vid_n4.mp4", 
      img: "p4.png" 
    },
    { 
      id: 11, 
      title: "Australian classes", 
      videoSrc: "/vid_n5.mp4", 
      img: "pi7.png" 
    },
    { 
      id: 12, 
      title: "Australian classes", 
      videoSrc: "/vid_n5.mp4", 
      img: "pi8.png" 
    },
  ];

  return (
    <section className="py-20 bg-stone-900 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
          Featured <span className="text-amber-500">Classes</span>
        </h2>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
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
              <div 
                className="group px-2 cursor-pointer" 
                onClick={() => setActiveVideo(lesson)}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-stone-800">
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
                <h3 className="text-white text-xl font-bold mt-6 text-center group-hover:text-amber-400 transition-colors">
                  {lesson.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- LARGE VIDEO MODAL --- */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-[110]"
            onClick={() => setActiveVideo(null)}
          >
            <FaTimes size={32} />
          </button>

          <div 
            className="relative w-full max-w-5xl aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
          >
            <video 
              src={activeVideo.videoSrc} 
              className="w-full h-full rounded-xl"
              controls 
              autoPlay 
              playsInline
            />
            <h3 className="text-white text-xl mt-4 font-semibold">{activeVideo.title}</h3>
          </div>
        </div>
      )}

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev { color: #f59e0b !important; }
        .swiper-pagination-bullet-active { background: #f59e0b !important; }
      `}</style>
    </section>
  );
}