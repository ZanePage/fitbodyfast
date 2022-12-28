import Dropdown from 'react-bootstrap/Dropdown';
import CustomToggle from '../CustomToggle';
import CustomMenu from '../CustomMenu';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () => {
    const [isShown, setIsShown ] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        console.log('div clicked');
    };

    return (    
        <div class="nav-full">
            <div class="title">
                <h1><a href="/">Fit Body Faster</a></h1>
            </div>
            <div class="tabs">
                <a class="tabs-full" href="/about">Meet our Doctors</a>
                <a class="tabs-full" href="/semaglutide">About Semaglutide Treatment</a>
                <a class="tabs-full" href="/injection">Administer injection</a>
                <a class="tabs-full" href="/initial">Contact Us</a>
                <a class="tabs-full" href="/refill">Refills</a>
                <a href="NoticePrivacyPractice.pdf" class="tabs-full">Privacy</a>
                <div class="tabs-small" onClick={handleClick}><FaBars size={60}/></div>
            </div>
            <div>
            {isShown && (
                <div class="drop-tabs">
                    <a href="/about">Meet our Doctors</a>
                    <a href="/semaglutide">About Semaglutide Treatment</a>
                    <a href="/injection">Administer injection</a>
                    <a href="/initial">Contact Us</a>
                    <a href="/refill">Refills</a>
                    <a href="NoticePrivacyPractice.pdf" class="tabs-full">Privacy</a>
                </div>
            )}
            </div>
        </div>
     );
}
 
export default Navbar;