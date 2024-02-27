import CategoryItem from "../category item/category.item.component"
import "./directory.scss"
const Directory =({Categories})=>{
    return(
    <div className="directory-container">
    {Categories.map((category)=>
    ( 
      <CategoryItem key={category.id} catrgory={category} />
    
  ))}
  </div>
    )

};
export default Directory;