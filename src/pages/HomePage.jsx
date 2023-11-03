import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <Link to="/about">about</Link> <br />
      <Link to="/contact">contact</Link> <br />
      <Link to="/sociala">social media</Link>
    </div>
  );
};

export default HomePage;
