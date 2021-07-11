import PropTypes from 'prop-types';

const Icon = (props) => {
    const { size, iconName } = props;
    const FeatherIcon = require(`react-feather/dist/icons/${iconName}`).default;
    return (
        <FeatherIcon
            size={size}
            className="nav__logoSVG" />
    );
}

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string
}

export default Icon;
