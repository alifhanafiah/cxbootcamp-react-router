import { Link } from 'react-router-dom';

const List = () => {
  return (
    <ul>
      <li>
        <Link to="/contact/alif">alif</Link>
      </li>
      <li>
        <Link to="/contact/mufid">mufid</Link>
      </li>
      <li>
        <Link to="/contact/akbar">akbar</Link>
      </li>
      <li>
        <Link to="/contact/farhan">farhan</Link>
      </li>
    </ul>
  );
};

export default List;
