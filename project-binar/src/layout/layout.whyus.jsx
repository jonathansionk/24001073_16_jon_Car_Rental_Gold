import IconKomplit from '../assets/icons/icon_complete.svg'
import IconPrice from '../assets/icons/icon_price.svg'
import Icon24 from '../assets/icons/icon_24hrs.svg'
import IconProf from '../assets/icons/icon_professional.svg'

const WhyUs = () => {
    return (
        <section className="why-us" id="why-us">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental</p>
        <div className="services">
            <div className="services-item">
                <i><img src={IconKomplit} alt=""/></i>
                <h3>Mobil Lengkap</h3>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>

            <div className="services-item">
                <i><img src={IconPrice} alt=""/></i>
                <h3>Harga Murah</h3>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>

            <div className="services-item">
                <i><img src={Icon24} alt=""/></i>
                <h3>Layanan 24 Jam</h3>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>

            <div className="services-item">
                <i><img src={IconProf} alt=""/></i>
                <h3>Sopir Profesional</h3>
                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
        </div>
    </section>
    )
}

export default WhyUs