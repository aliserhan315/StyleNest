import { Outlet } from 'react-router-dom';
import hatsImage from '../../category-photos/hats.png';
import jacketImage from '../../category-photos/jackets.png';
import sneakerImage from '../../category-photos/sneakers.png';
import womenImage from '../../category-photos/womens.png';
import menImage from '../../category-photos/men.png';

import Directory from '../../components/directory.menu/directory';
function Home() {

  const Categories =[
    {
      id: 1,
      title: "hats",
      imageUrl: hatsImage
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: jacketImage
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: sneakerImage
    },
    {
      id: 4,
      title: "womens",
      imageUrl: womenImage
        },
    {
      id: 5,
      title: "mens",
      imageUrl: menImage
    }
   
  ]
  return (
    <div>
     <Outlet/>
  <Directory Categories ={ Categories }/>;
  </div>);
};
export default Home ;