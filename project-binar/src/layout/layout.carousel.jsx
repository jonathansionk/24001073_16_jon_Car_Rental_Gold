import IconStar from '../assets/icons/Star_1.svg'
import Testi1 from '../assets/images/testi1.png'
import Testi2 from '../assets/images/testi2.png'
import LButton from '../assets/icons/Left button.svg'
import RButton from '../assets/icons/Right button.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
    return(
        <section className="carousel" id="testimonial">
        <div className="section-carousel-title">
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                spaceBetween={100}
                centeredSlides={true}
                className='section-box'
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
        
        <div className="section-box container">
         <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi2} alt="human-pic" className="img-review" />
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />                             
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi1} alt="human-pic" className="img-review"/>
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi1} alt="human-pic" className="img-review"/>
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi2} alt="human-pic" className="img-review" />
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />                             
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi1} alt="human-pic" className="img-review"/>
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={Testi2} alt="human-pic" className="img-review"/>
                        <div className="section-content-text">
                            <div>
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                                <img src={IconStar} />
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            
        </div>
        

        </Swiper>


        <div className="direction">
            <a href="#"><img src={LButton} alt="Left-btn" /></a>
            <a href="#"><img src={RButton} alt="Right-btn" /></a>
        </div>
    </section>

    )
}

export default Carousel