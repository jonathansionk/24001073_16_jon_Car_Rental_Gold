import HeroImg from '../assets/images/hero_img.png'
import IconCeklis from '../assets/icons/icon_ceklis.svg'

const Benefit = () => {
    return (
        <section className="benefit">
            <div className="hero-img-benefit">
                <img src={HeroImg} alt="girl-img"/>
            </div>

            <div className="benefit-text">
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                    kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                    dll.
                </p>

                <ul className="benefit-list-item">
                    <li className="benefit-list">
                        <i><img src={IconCeklis} /></i>
                        <span className="section-list-title">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                    </li>
                    <li className="benefit-list">
                        <i><img src={IconCeklis} /></i>
                        <span className="section-list-title">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                    </li>
                    <li className="benefit-list">
                        <i><img src={IconCeklis} /></i>
                        <span className="section-list-title">Sewa Mobil Jangka Panjang Bulanan</span>
                    </li>
                    <li className="benefit-list">
                        <i><img src={IconCeklis}/></i>
                        <span className="section-list-title">Gratis Antar - Jemput Mobil di Bandara</span>
                    </li>
                    <li className="benefit-list">
                        <i><img src={IconCeklis} /></i>
                        <span className="section-list-title">Layanan Airport Transfer / Drop In Out</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Benefit
