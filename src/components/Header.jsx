import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

function Header(props) {
    const headerStyles = {
        backgroundColor: 'blue',
        color: red,
    }

    return (
        <header style={{ backgroundColor: 'blue', color: 'red'}}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header