import IconFB from '../assets/icons/icon_facebook.svg'
import IconIG from '../assets/icons/icon_instagram.svg'
import IconTW from '../assets/icons/icon_twitter.svg'
import IconMail from '../assets/icons/icon_mail.svg'
import IconTwitch from '../assets/icons/icon_twitch.svg'


const Footer = () => {
    return(
        <footer id="footer">
        <div class="contacts">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>

        <div class="nav-footer">
            <a href="#our-service">Our Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#faq">FAQ</a>
        </div>

        <div class="connect">
            <p>Connect with us</p>
            <div class="sosmed">
                <a href="#"><img src={IconFB} alt=""/></a>
                <a href="#"><img src={IconIG} alt=""/></a>
                <a href="#"><img src={IconTW} alt=""/></a>
                <a href="#"><img src={IconMail} alt=""/></a>
                <a href="#"><img src={IconTwitch} alt=""/></a>
            </div>
        </div>

        <div class="copyright">
            <p>Copyright Binar 2022</p>
            <a href="#"><div class="logo"></div></a>
        </div>
    </footer>
    )
}

export default Footer