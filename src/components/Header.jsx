import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../assets/logo.png';

function Nav(){
    const [activeSection, setActiveSection] = useState('');

    const handleSetActiveSection = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
        const sections = ['activity', 'recycle', 'more-info'];
        let currentSection = '';
        sections.forEach((section) => {
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
            currentSection = section;
            }
        });
        setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li key="activity" className={styles.navItem}><a href="#activity" className={`${styles.navLink} ${activeSection === 'activity' && styles.activeSection}`} onClick={()=>handleSetActiveSection('activity')}>品牌回收活動</a></li>
                <li key="recycle" className={styles.navItem}><a href="#recycle" className={`${styles.navLink} ${activeSection === 'recycle' && styles.activeSection}`} onClick={()=>handleSetActiveSection('recycle')}>回收小常識</a></li>
                <li key="more-info" className={styles.navItem}><a href="#more-info" className={`${styles.navLink} ${activeSection === 'more-info' && styles.activeSection}`} onClick={()=>handleSetActiveSection('more-info')}>更多資訊</a></li>
            </ul>
        </nav>
    )
}

export default function Header(){
    return (
        <header id="header" className={styles.header}>
            
            <a href="#" className={styles.navbarBrand}><img src={logo} alt="logo" width="60"/>回收大作戰</a>
            <label htmlFor="navbar-toggle" className={styles.navbarToggleLabel}><span className={styles.hamburger}></span></label>
            <input type="checkbox" className={styles.navbarToggle} id="navbar-toggle"></input>
            <Nav />
        </header>
        
    )
}
