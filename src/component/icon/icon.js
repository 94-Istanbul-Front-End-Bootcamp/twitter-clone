import PropTypes from 'prop-types';
import { Icon as IconSystem } from "react-icon-system";

const Icon = (props) => {
    const { size, iconName } = props;
    return (
        <IconSystem style={{ height: size, width: size, color: "#03A9F4" }} src={iconName} />
    );
}

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string
}

export default Icon;
