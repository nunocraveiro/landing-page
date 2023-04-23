import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <section className='about'>
            <div className='aboutBackground'>
                <div className='backArrowContainer'>
                    <span className="material-symbols-outlined backArrow" onClick={() => navigate('/')}>keyboard_backspace</span>
                </div>
                <div className='aboutTitleContainer'>
                    <h1 className='aboutH1'>About</h1>
                </div>
                <div className='aboutText'>
                    <p>Hi there! I am a Portuguese Full Stack developer based in Stockholm with a focus on Frontend.</p>
                    <p>With an academic background in both Music and Computer Science and professional experience as a music composer, turning creative ideas into real solutions is something I am truly passionate about. For me, it's all about coming up with the best result for each different challenge!</p>
                    <p>Nowadays I combine this skill with my love for clean code and design, learning new technologies and especially teamwork.</p>
                </div>
                <h2>Main skills</h2>
                <div className='mainSkills container'>
                    <div>
                        <p>Frontend development</p>
                        <p>Backend development</p>
                        <p>UX/UI design</p>
                    </div>
                    <div>
                        <p>Music composition</p>
                        <p>Adaptability</p>
                        <p>Teamwork</p>
                    </div>
                    <div>
                        <p>Creativity</p>
                        <p>Critical thinking</p>
                    </div>
                </div>
                <h2>Tools</h2>
                <div className='tools container'>
                    <div>
                        <p>Javascript</p>
                        <p>Typescript</p>
                    </div>
                    <div>
                        <p>CSS</p>
                        <p>HTML</p>
                    </div>
                    <div>
                        <p>React</p>
                        <p>Node.js</p>
                    </div>
                    <div>
                        <p>Express.js</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;