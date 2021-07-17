import PropTypes from 'prop-types';
import FeatherIcon from 'react-feather'

const Icon = (props) => {
    const { size, iconName, fillColor } = props;
    const FeatherIcon = require(`react-feather/dist/icons/${iconName}`).default;
    return (
        <FeatherIcon
            size={size}
            className="nav__logoSVG"
            style={{ color: !!props.color ? props.color : "", fill: fillColor || "none" }} />
    );
}

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string
}

export default Icon;
