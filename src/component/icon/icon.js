import PropTypes from 'prop-types';

const Icon = (props) => {
    const { size, iconName } = props;
    return (
        <img style={{ height: size, width: size }} src={`./assest/icons/${iconName}`} />
    );
}

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string
}

export default Icon;
