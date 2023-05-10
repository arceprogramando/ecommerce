import '../index.css'
import { winewallpaper } from '../assets';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carousel = () => {
    const images = [winewallpaper, winewallpaper, winewallpaper];

    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 12000,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            className="max-w-screen-2xl mb-4 "
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="max-w-full">
                    <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    );
};

export default Carousel;