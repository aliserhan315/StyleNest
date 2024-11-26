import './shop.page.scss';
import { Route,Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/catogoriesPreview';
import Category from '../category/category';  
    const Shop = () => {
        return (
          <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
          </Routes>
        );
      };
      
      export default Shop;