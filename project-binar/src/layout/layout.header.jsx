import { useState } from 'react';
import CarBanner from '../assets/images/img_car.png'
import LogoX from '../assets/icons/icon_x.svg'
import NavMenu from '../assets/icons/nav_menu.svg'


const urlLink = [{
    link: "#",
    navName: 'Our Services'
}, {
    link: "#",
    navName: 'Why Us'
}, {
    link: "#",
    navName: 'Testimonials'
}, {
    link: "#",
    navName: 'FAQ'
}];

export const Header = () => {
    const [open, setopen] = useState(false); //tutup

    //open false
    const toggle = () => {
        setopen(!open);
    }

    return(
    <header>
        <div className="header-nav">
                <div className="header-logo">
                </div>
                <ul className="header-navlink">
                    {urlLink?.map((item, index) => (
                        <li key={index}>{item?.navName}</li>
                    ))}
                </ul>
                <div className='btn-responsive'>
                    <button onClick={toggle} type='button' className="btn-menu">
                        <i className="fa fa-bars"><img src={NavMenu} alt="" /></i>
                    </button>
                    {open && <div id="toggle" className="responsive-nav">
                        <ul className="navbar">
                            <li>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span> BCR</span>
                                    <button onClick={toggle} style={{ border: 0, background: 'white', fontSize: 24 }}><i className='fa fa-times'><img src={LogoX} alt="" /></i></button>
                                </div>
                            </li>
                            {urlLink?.map((item, index) => (
                                <li key={index}>{item?.navName}</li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>



        <section className="hero-section" id="our-service">

            <div className="hero-text">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                
                <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                    terjangkau.
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. 
                </p>

                <button className="hero-btn">Mulai Sewa Mobil</button>
            </div>

            <div className="hero-img-car">
                <img src={CarBanner} alt="car-img" />
            </div>

        </section>
    </header>    
    )
    
}






