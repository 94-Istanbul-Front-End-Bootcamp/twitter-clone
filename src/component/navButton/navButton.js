import PropTypes from 'prop-types';
import { Icon } from '../icon'

const NavButton = (props) => {
    const { text, iconName } = props;
    
    return (
        <button className="nav-button">
            <div>
                <Icon size={30} iconName={iconName} />
                <span>{text}</span>
            </div>
        </button>
    );
}

NavButton.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    handleNav: PropTypes.func
}

export default NavButton;
