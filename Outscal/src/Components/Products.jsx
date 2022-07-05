import "./Products.css"  
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Navbar } from "./Navbar"
 
export const Products = () => {
  const [products, setProducts] = useState([])
  const [sort,setSort] = useState("asc")
  const page = useRef(1)
  const filter = useRef()
   
  const handleScroll = (e) => {
    const {scrollHeight,scrollTop,clientHeight} = e.target;
    let dif = scrollHeight - scrollTop|0;
    const bottom = dif === clientHeight;

    if (bottom && products.length !== 100){
      page.current+=1;
      let pg = page.current
      axios.get(`https://outscal-asig.herokuapp.com/products?page=${pg}&filter=${filter.current}&sort=${sort}`)
      .then(({data})=>{
        setProducts([...products,...data.product])
      })
    }
  }

  useEffect(()=>{
    axios.get(`https://outscal-asig.herokuapp.com/products`)
      .then(({data})=>{
        setProducts(data.product)
      })
  },[page])

  const sortFeature = () =>{
    console.log(sort,filter);
   axios.get(`https://outscal-asig.herokuapp.com/products?filter=${filter.current}&sort=${sort}`)
      .then(({data})=>{
        setProducts(data.product)
      })
  }

  const handlePriceFilter = (e)=>{
    filter.current = e.target.value;
    axios.get(`https://outscal-asig.herokuapp.com/products?filter=${filter.current}&sort=${sort}`)
      .then(({data})=>{
        setProducts(data.product)
      })
  }

  if(products.length === 0){
    return <div></div>
  }

  const handleOrder=()=>{
    page.current = 1; 
    setSort(sort ==="asc"?"desc":"asc");
    sortFeature()
  }
    return (
    
      <div className="App"> 
       
            <Navbar handlePriceFilter={handlePriceFilter}  sort={sort} handleOrder={handleOrder}/> 
            
        <div className = "container" onScroll={(e)=>{handleScroll(e)}}>
          {products?.map((el)=>(
          <div className="element" key={el._id}>
            {/* <p>{el.index}</p> */}
            <img className="img" src={el.image} alt={el.title} />
            <h4>{el.title}</h4>
            <h4>Price : {el.price}</h4> 
            <button className="btn">Buy Now</button>
          </div> ))}
        </div>
      </div>
    )
}