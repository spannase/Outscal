 
import axios from "axios";
import { useEffect, useState } from "react"
import { Product } from "./product";
  

const PageNumber = 1

export const MainPage = () => {
    const [Data, SetData] = useState([]);
    const [page, SetPage] = useState(PageNumber)
    const [Price, setPrice] = useState('');
    const [order, SetOrder] = useState("")

    const handleChange = (e) => {
        
        if( e.target.value==="asc"){
      
            // console.log('Data', Data);
            SetData([...Data.sort((a, b) => a.price-b.price)])
          }
          if( e.target.value==="desc"){  
            // console.log('Data', Data);
            SetData([...Data.sort((a, b) => b.price-a.price)])
          }

        SetOrder(e.target.value)
        // SetData([])
        // SetPage(1)
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
        SetData([])
        SetPage(1)
    };

    useEffect(() => {
        GetData()
    }, [page, Price])

    const GetData = () => {
        axios.get(`http://localhost:8080/products?_page=${page}&_limit=15`).then(({ data }) => {
            SetData([...Data, ...data])
        })
    }


    const ReachedBottom = () => {
        SetPage(page + 1)
    }
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            ReachedBottom()
        }
    }
    return (
        <div>
            <div style={{ position: "fixed" }}>
                <div sx={{ m: 1, minWidth: 120 }} size="small">
                    <lable id="demo-select-small">Price</lable>
                    <select
                       
                        id="demo-select-small"
                        value={order}
                        label="Price"
                        onChange={handleChange}
                    >
                        <option value="">
                            <em></em>
                        </option>
                        <option value={"asc"}>low-high</option>
                        <option value={"desc"}>hign-low</option>

                    </select>
                </div>
                <div sx={{ m: 1, minWidth: 120 }} size="small">
                    <lable id="demo-select-small">Range</lable>
                    <select
                         
                        id="demo-select-small"
                        value={Price}
                        label="filter"
                        onChange={handleChangePrice}
                    >
                        <option value="">
                            <em></em>
                        </option>
                        <option value={500}>above 500</option>
                        <option value={600}>above 600</option>
                        <option value={700}>above 700</option>
                        <option value={800}>above 800</option>
                        <option value={900}>above 900</option>

                    </select>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-evenly", pt: "50px" }}>

                {Data.map((e,i) => {
                    return <Product key={i+1} data={e} />
                })}
            </div>
        </div>
    )
} 