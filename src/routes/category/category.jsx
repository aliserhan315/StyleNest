import { useParams } from "react-router-dom"
import { useContext,useState,useEffect } from "react";
import { CategoriesContext } from "../../contexts/category.context";
import ProductCard from "../../components/Product-card/product-card";
import './category.scss'
import { Fragment } from "react";


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Fragment>
    );
  };
  
  export default Category;