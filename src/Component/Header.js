// import { FiShoppingCart } from "react-icons/fi";
// import { BiSearch } from "react-icons/bi";
// import { BiHive } from "react-icons/bi";
// import { AiFillHeart } from "react-icons/ai";
// import { useEffect, useState } from "react";
// import axios  from "axios"

// function Header() {

//   const [search,setsearch] = useState("")
//   const [ans,setans] = useState([])

// const searching=(item)=>{
//   setsearch(item.target.value)
//   axios
//   .get(`https://dummyjson.com/products/search?q=${search}`)
//   .then(function (response) {
//     setans(response.data);
//     console.log(response.data);   
  
//   })
//   .catch(function (error) {
//     console.log(error.response.data);
//   });
  
//  }


//   return (
//     // <div className="bg_theme">
//     //   <div className="p-3 header">
//     //     <div className="logo">
//     //       <a href="#">
//     //         <BiHive />HiVE
//     //       </a>
//     //     </div>
//     //     <div>
//     //       <ul className="ul">
//     //         {/* <li>
//     //           <a href="#">
//     //             <AiFillHeart className="icon" />
//     //           </a>
//     //         </li> */}
//     //         <li>
//     //           <a href="#">
//     //             <FiShoppingCart className="icon" />
//     //           </a>
//     //         </li>

//     //         <li className="search">
//     //           <input type="text" placeholder="Search..." value={search} onChange={searching}/>
//     //           <BiSearch />
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }
// export default Header;
