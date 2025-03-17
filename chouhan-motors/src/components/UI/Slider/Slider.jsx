import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Slider() {
    return (
        <div className="w-full max-w-full mx-auto h-[80vh] md:h-[90vh] lg:h-[75vh] xl:h-[85vh] px-8 py-8">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={0} 
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full rounded-xl shadow-lg overflow-hidden"
            >
                <SwiperSlide>
                    <img src="/Showroom.jpeg" alt="Showroom" className="w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out opacity-100" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/VidaCatCard.webp" alt="Vida" className="w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out opacity-100" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Xtreme250RCatCard.jpg" alt="Xtreme 250R" className="w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out opacity-100" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
