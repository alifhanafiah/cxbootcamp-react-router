import { useParams } from 'react-router-dom';

const ContactDetailPage = () => {
  const { name } = useParams();

  return <div>Ini adalah detail contact dari {name}</div>;
};

export default ContactDetailPage;
