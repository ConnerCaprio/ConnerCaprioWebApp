import styles from './resumePage.module.css';

export default function ResumePage() {
    return (
        <div>
            <div className={`rounded ${styles.textBlock}`}>
                <h1>Conner Caprio</h1>
                <h3>Senior Technical Consultant<br/> at Ventera Coporation</h3>
                <h5>conner.caprio@gmail.com</h5>
                <h5>(727) 735-1834</h5>
            </div>
            <div className={styles.clearSection}>
                <h3>About</h3>
                <p>Rational developer with 4 years of experience enhancing operations for organizations through information systems solutions. 
                    Proven track record of transforming specific business goals related to growth and efficiency improvements into new system designs. 
                    Innovator known for recommending new technologies to enhance existing systems and introduce new systems.</p>
            </div>
            <div className={styles.textBlock}>
                <h3>Experience</h3>
                <ul>
                    <li>
                        <b>Ventera, </b> <i>Senior Technical Consultant, </i>Jan 2022 - present
                    </li>
                    <li>
                        <b>Ventera, </b> <i>Technical Consultant, </i>Aug 2019 - Dec 2021
                    </li>
                    <li>
                        <b>Ventera, </b> <i>Technical Intern, </i>July 2018 - Aug 2018
                    </li>
                    <li>
                        <b>Bovie Medical Corporation,, </b> <i>IT Intern, </i>June 2016 - Aug 2016
                    </li>
                    <li>
                        <b>Mitre, </b> <i>Volunteer Intern, </i>June 2014 - Sept 2014
                    </li>
                </ul>
            </div>
            <div className={styles.clearSection}>
                <h3>Misc</h3>
                <a className='link-primary' href='https://www.linkedin.com/in/Conner-Caprio/' target="_blank">LinkedIn</a><br />
                <a className='link-primary' href='https://github.com/ConnerCaprio' target="_blank">GitHub</a>
            </div>
        </div>
    )
}

