
import IconCD from '../assets/icons/check_down.svg'

const FAQ = () => {
    return(
        <section className="faq" id="faq">
        <div className="faq-text">
            <h2>Frequently Asked Question</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum modi laborum dolorem
            </p>
        </div>
       
        <div className="container-questions">
            <div className="questions">
                <p>Apa saja syarat yang dibutuhkan?</p>
                <a href="#"><img src={IconCD} alt=""/></a>
            </div>

            <div className="questions">
                <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                <a href="#"><img src={IconCD} alt=""/></a>
            </div>
            
            <div className="questions">
                <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                <a href="#"><img src={IconCD} alt=""/></a>
            </div>

            <div className="questions">
                <p>Apakah Ada biaya antar-jemput?</p>
                <a href="#"><img src={IconCD} alt=""/></a>
            </div>

            <div className="questions">
                <p>Bagaimana jika terjadi kecelakaan</p>
                <a href="#"><img src={IconCD} alt=""/></a>
            </div>
        </div>
    </section>
    )
}

export default FAQ