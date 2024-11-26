import DirectoryItem from "../DirectoryItem/directory.item.component";
import "./directory.scss"
const Directory =({Categories})=>{
    return(
    <div className="directory-container">
    {Categories.map((category)=>
    ( 
      <DirectoryItem key={category.id} catrgory={category} />
    
  ))}
  </div>
    )

};
export default Directory;