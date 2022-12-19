import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const NavDrop = () => {
    const [isShown, setIsShown ] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        console.log('div clicked');
    };

    return (
        <div class="tabs-small">
            <div onClick={handleClick}><FaBars size={60}/></div>

            
        </div>
    )
}

export default NavDrop;