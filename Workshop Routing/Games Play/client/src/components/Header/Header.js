import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
        </header>
    );
};

export default Header;
