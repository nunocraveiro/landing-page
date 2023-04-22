import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='skillsBackground'>
                <h2>Main skills</h2>
                <div className='mainSkills container'>
                    <p>Frontend development</p>
                    <p>UX/UI design</p>
                    <p>Backend development</p>
                    <p>Music composition</p>
                    <p>Adaptability</p>
                    <p>Teamwork</p>
                    <p>Creativity</p>
                    <p>Critical thinking</p>
                </div>
                <h2>Tools</h2>
                <div className='tools container'>
                    <p>Javascript</p>
                    <p>CSS</p>
                    <p>HTML</p>
                    <p>Typescript</p>
                    <p>React</p>
                    <p>Node.js</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;