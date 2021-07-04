import PropTypes from 'prop-types';
import { Icon } from '../icon'

const NavButton = (props) => {
    const { text, handleNav, iconName } = props;
    return (
        <button onClick={handleNav}>
            <Icon size={30} iconName={iconName} />
            <span>{text}</span>
        </button>
    );
}

NavButton.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    handleNav: PropTypes.func
}

export default NavButton;
