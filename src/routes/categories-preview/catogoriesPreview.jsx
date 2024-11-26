

import CategoryPreview from '../../components/category-preview/categoryPreview';
import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/category.context';


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  
    return (
        <Fragment>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })}
        </Fragment>
      );
    };
    
    export default CategoriesPreview;

