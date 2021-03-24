
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div >
      <Link  to="/">
        home
      </Link>
      <Link to="/students">
        students
      </Link>
    </div>
    );
  }

export default Header;