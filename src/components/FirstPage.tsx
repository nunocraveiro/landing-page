import './FirstPage.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <section className='firstPage'>
            <section className='navbar'>
                <div className='menu'>
                    <Link className='menuP aboutLink' to="/about">ABOUT</Link>
                    <Link className='menuP workLink' to="/work">WORK</Link>
                    {/* <Link className='menuP contactLink' to="/contact">CONTACT</Link> */}
                    <p className='menuP contactLink'>CONTACT</p>
                </div>
            </section>
            <div className='centralText'>
                <p className='p1'>Hello!</p>
                <p className='p2'>My name is <span className='nuno'>Nuno</span></p>
                <p className='p3'>and I'm a web developer</p>
            </div>
            <div className='slider'>
                <div className='slide'>
                    <span>
                        Frontend development&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;UX/UI design&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Backend development&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Music composition&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                        Adaptability&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Teamwork&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Creativity&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Critical thinking&nbsp;&nbsp;&nbsp;/&nbsp;
                    </span>
                </div>
                <div className='slide slide2'>
                <span>
                        Frontend development&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;UX/UI design&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Backend development&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Music composition&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                        Adaptability&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Teamwork&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Creativity&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Critical thinking&nbsp;&nbsp;&nbsp;/&nbsp;
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Navbar;