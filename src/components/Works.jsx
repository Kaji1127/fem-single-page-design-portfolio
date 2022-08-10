import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
import Slide1 from '../assets/image-slide-1.jpg';
import Slide2 from '../assets/image-slide-2.jpg';
import Slide3 from '../assets/image-slide-3.jpg';
import Slide4 from '../assets/image-slide-4.jpg';
import Slide5 from '../assets/image-slide-5.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Works.css';

const Works = () => {
	const slideImages = [Slide1, Slide2, Slide3, Slide4, Slide5];

	return (
		<section className="works">
			<h2>My Work</h2>
			<Swiper
				navigation={true}
				modules={[Navigation, Keyboard]}
				spaceBetween={15}
				initialSlide={2}
				slidesPerView={1.5}
				centeredSlides={true}
				keyboard={{ enabled: true }}
				breakpoints={{
					768: {
						width: 768,
						spaceBetween: 30,
					},
					1024: {
						width: 1024,
						slidesPerView: 2,
					},
					1200: {
						width: 1200,
						slidesPerView: 2.5,
					},
					1440: {
						width: 1440,
						slidesPerView: 3,
					},
					1920: {
						width: 1920,
						slidesPerView: 4,
					},
				}}
			>
				{slideImages.map((image, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={image} alt="" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Works;
