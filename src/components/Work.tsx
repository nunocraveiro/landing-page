import './Work.css';
import { useNavigate } from 'react-router-dom';
import todoAppImg from './assets/images/todoapp.png';
import milkAppImg from './assets/images/milkapp.png';
import flightsAppImg from './assets/images/flightsapp.png';

const Work = () => {
    const navigate = useNavigate();

    return (
        <section className='work'>
            <div className='workBackground'>
                <div className='backArrowContainer'>
                    <span className="material-symbols-outlined backArrow" onClick={() => navigate('/')}>keyboard_backspace</span>
                </div>
                <div className='workTitleContainer'>
                    <h1 className='workH1'>Selected works</h1>
                </div>
                <section className='workCardsContainer'>
                    <div className='workCard'>
                        <img className='todoAppImg' src={todoAppImg} alt="todoapp" />
                        <a className='imgLink' href='https://deluxe-nasturtium-b5b5b8.netlify.app' target="_blank" rel="noopener noreferrer">Go to website</a>
                        <h2 className='workTitle'>ToDo App</h2>
                        <p className='workDescription'>Simple todo app created with React with a retro inspired design and a more unusual layout.</p>
                    </div>
                    <div className='workCard'>
                        <img src={milkAppImg} alt="milkapp" />
                        <a className='imgLink' href='https://github.com/nunocraveiro/milk-app' target="_blank" rel="noopener noreferrer">Go to website</a>
                        <h2 className='workTitle'>E-Commerce App</h2>
                        <p className='workDescription'>Fictional milk products store app with search/filter/cart management functionalities. Fullstack Typescript app with a simple NodeJs + Express server and a React frontend.</p>
                    </div>
                    <div className='workCard'>
                        <img src={flightsAppImg} alt="flightsapp" />
                        <a className='imgLink' href='https://github.com/nunocraveiro/flightFinder' target="_blank" rel="noopener noreferrer">Go to website</a>
                        <h2 className='workTitle'>Flight Finder App</h2>
                        <p className='workDescription'>Flight finder app with a focus on cleaner design. Fullstack app with a NodeJs + Express server and a React frontend.</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Work;