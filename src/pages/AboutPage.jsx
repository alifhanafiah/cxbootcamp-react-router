import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <Link to="/">homepage</Link> <br />
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default AboutPage;
