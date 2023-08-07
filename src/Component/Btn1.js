import Header from "./Header";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Btn1() {
  const { id } = useParams();
  console.log(id);
  

  const [data1, setdata1] = useState([]);
    let [load, setload] = useState(false);
    let [img,setimg] = useState([])

const changeImg = (item) =>{
  setdata1({...data1,thumbnail:item})
}

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setdata1(response.data);
        setimg(response.data.images)
        console.log(response.data);   
  
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
    if (load) {
  return (
    <div>
      <Header />
      <div className="b_main">
        <div className="slid">
          <div className="iages">
          { 
           
            img.map((items)=>{
              return(
              <>
              
 <img src={items} onClick={()=>changeImg(items)}></img>              
              </>
             
              )
    })
  } 
          </div>
          <div className="paddings web">

              
            <img src={data1.thumbnail}></img>
            <div className="u_btn">
              <button>
                <AiOutlineShoppingCart />
                ADD TO CART
              </button>
              <button>
                <AiOutlineThunderbolt />
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="a_right">
          <div className="aple">{data1.title}</div>
          <div className="l2">
            <div className="star">
              {data1.rating}
              <AiFillStar />
            </div>
          </div>
          <div className="ex">Available Stock : <span className="stock">{data1.stock} pieces</span></div>
          <div className="off">
            <span>
              $
              {data1.price} on
            </span>
            <span><AiFillTag />{data1.discountPercentage}% off</span>
          </div>
        
          <div className="disp">
            <span>Description</span>
            <table>
              <tr>
                <td>Brand</td>
                <td>{data1.brand}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{data1.category}</td>
              </tr>
            </table>
            <span>
             {data1.description}
            </span>
          </div>
      
        </div>
      </div>
    </div>
  );
    }
    else {
      return (
        <>
          <h1>Refreshing..</h1>
        </>
      );
    }
}
export default Btn1;
