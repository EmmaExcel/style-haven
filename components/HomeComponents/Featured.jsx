import styles from '@/styles/Home.module.css'

const Data =[
    {
        id:1,
        name:"Trendy Grey Leather Jacket",
        price:"328",
        img:""
    },
    {
        id:2,
        name:"Louis Vuitton Leather Bag",
        price:"290",
        img:""
    },
    {
        id:3,
        name:"Stylish African attire",
        price:"454",
        img:""
    },
    {
        id:4,
        name:"Trendy Brown Leather Jacket",
        price:"328",
        img:""
    },
    {
        id:5,
        name:"Effortlessly chic, just for you.",
        price:"",
        img:""
    },
    {
        id:6,
        name:"Trendy Black coat",
        price:"454",
        img:""
    },

]

const Featured = () => {
  return (
    <section className='styles.FeaturedSection'>
      <div className="styles.FeaturedContainer">
        <div className="styles.FeaturedHeader">
            <p>Featured Products </p>
        </div>

        <div className="styles.FeaturedProductContainer">
            <div className="">

            {/* MAP THROUGH THIS COMPONENT CREATE A DATA WHILE FOR 3FR1 COLUMN */}


           {/*      data.map((product)=>(
                    <div className="">
                        <div className=""><img src={product.img} alt="" /></div>
                        <p>{product.name}</p>
                        <div className="">
                            <p>${product.price}</p>

                            <p>Add to cart</p>
                        </div>
                    </div>
                ))   */} 
                
            </div>

        
        </div>
      </div>
    </section>
  )
}

export default Featured
