import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BiHive } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, cartItem } from "../Store/CounterSlice";
import {Badge} from "react-bootstrap"


function Api() {
  const [val, setval] = useState([]);
  const [search, setsearch] = useState("");
  const [menu, setmenu] = useState([]);

  const cartdata1 = useSelector((state) => state.counter.cartdata)
  const cartItems = useSelector((state) => state.counter.showcart)
  console.log(cartdata1);
  const dispatch = useDispatch()
  

 
  const searching = (item) => {
    setsearch(item.target.value)
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then(function (response) {
        setval(response.data.products);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Showhandler=(item)=>{
   
      axios.get(`https://dummyjson.com/products/category/${item}`)
      .then(function(response){
        setval(response.data.products);
        // console.log(response.data.products)
      })
      .catch(function(error){
        console.log(error)
      })
    }

  useEffect(() => {
      axios.get("https://dummyjson.com/products")
        .then(function (response) {
          setval(response.data.products);
          // console.log(response.data.products)
        })
        .catch(function (error) {
          console.error(error);
        })
        axios.get("https://dummyjson.com/products/categories")
      .then(function (response) {
        setmenu(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    },[]);
    
  
  return (
    <div>
      <div className="bg_theme">
        <div className="p-3 header">
          <div className="logo">
            <a href="#">
              <BiHive />
              HiVE
            </a>
          </div>
          <div>
            <ul className="ul">
              <li>
                <Link to="/cart">
                  <FiShoppingCart className="icon" /><Badge bg="secondary">{cartItems}</Badge>
                </Link>
              </li>

              <li className="search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={searching}
                />
                <BiSearch />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body">
        <Row>
          <Col lg="3">
            <div className="containe">
              <div className="trnd s">
                {menu.map((item) => {
                  return( 
                  <button  onClick={()=>{Showhandler(item)}}>{item} </button>);
                })}
              </div>
            </div>
          </Col>

          <Col lg="8">
            {val.map((item) => {
              return (
                <div key={item.id} className="head">
                  <div className="img">
                    <img src={item.thumbnail}></img>
                  </div>

                  <div className="u_body">
                    <div>
                      Brand : <span>{item.brand}</span>
                    </div>
                    <div>
                      Category : <span>{item.category}</span>
                    </div>
                    <div>
                      Title : <span>{item.title}</span>
                    </div>
                    <div>
                      Description :<span>{item.description} </span>
                    </div>
                    <div>
                      Price : <span>{item.price}</span>
                    </div>
                    <div>
                      Rating : <span>{item.rating}</span>
                    </div>
                    <div>
                      Stock : <span>{item.stock}</span>
                    </div>
                   <div className="d-flex gap-4">
                     <Link to={`/btn/${item.id}`}>
                      <button>More Detailes</button>
                    </Link>
                    
                       {/* <button onClick={()=>{cart(item)}}>Add to Cart</button> */}
                       <button onClick={()=>{dispatch(addTocart(item));dispatch(cartItem(item))}}>Add to Cart</button>
                    
                   </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Api;
