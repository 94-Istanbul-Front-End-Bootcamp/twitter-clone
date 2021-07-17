import PropTypes from 'prop-types';

const PpImage = (props) => {
    const { src } = props;
    
    return (
        <img className="pp-image" src={src} />
    );
}

PpImage.propTypes = {
    src: PropTypes.string,
}

export default PpImage;
