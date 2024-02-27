import './category.item.scss'

const CategoryItem = ({catrgory})=>{
    const {imageUrl,title}= catrgory;
    return(
        <div  className="category-container" >
        {
          <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}> 

            </div>

        }
        <div className="category-body">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    
    
        )

}

export default CategoryItem