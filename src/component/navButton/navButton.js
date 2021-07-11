import PropTypes from 'prop-types';
import { Icon } from '../icon'
import { Link } from "react-router-dom";

const NavButton = (props) => {
    const { text, iconName, to } = props;
    //nav__link--active
    return (
        <div className="nav__link">
            <div className="nav__group">
                <Link to={to}>
                    <Icon size={30} iconName={iconName} />
                    <span>{text}</span>
                </Link>
            </div>
        </div>
    );
}

NavButton.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    handleNav: PropTypes.func
}

export default NavButton;
