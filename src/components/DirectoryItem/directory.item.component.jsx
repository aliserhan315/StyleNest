import { useNavigate } from 'react-router-dom';
import './directory.item.scss';

const DirectoryItem = ({ catrgory }) => {
  const { imageUrl, title } = catrgory;
  const navigate = useNavigate(); // React Router hook for navigation

  const handleClick = () => {
    navigate(`/shop/${title.toLowerCase()}`); // Navigate to /shop/:title (convert to lowercase for consistency)
  };

  return (
    <div className="directoryItem-container" onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directoryItem-body">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
