import './Work.css';
import { useNavigate } from 'react-router-dom';
import todoAppImg from './assets/images/todoapp.png';

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
                        <img src={todoAppImg} alt="todoapp" />
                    </div>
                    <div className='workCard'>

                    </div>
                    <div className='workCard'>

                    </div>
                    <div className='workCard'>

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Work;