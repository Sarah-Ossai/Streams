// import React from "react";
// import NavBar from "./NavBar";
// import "./SignUp.css";
// import Contact from "./Contact";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import KeyIcon from "@mui/icons-material/Key";
// import Swal from 'sweetalert2'
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const SignUp = () => {

//   let history = useNavigate();
//   const [data, setData]=useState({
//     username: "",
//     email:"",
//     password:""
//   })

//   const handleChange=(e)=>{
//     setData({ ...data, [e.target.name]: e.target.value});

//     // console.log(data)
//   }

//   const submitForm=(e)=>{
//     e.preventDefault();
//      const sendData = {
//       username:data.username,
//       email:data.email,
//       password:data.password
//     }

//     console.log(sendData);

//     axios.post('http://localhost/musicProject/insert.php', sendData)
//     .then((result)=>{
//       if (result.data.Status == 'Invalid')
//       alert('Invalid User');
//       else{

//       history('/login');
//       }
//     })
//     Swal.fire({
//       title: 'Great Job!',
//       text: 'You can login now!',
//       icon: 'success',
      
//     });
//   }
//    return (
//     <div className="wrapper">
//       <NavBar />
//       <div className="signup">
//         <h1>CREATE ACCOUNT</h1>

//         <div className="form">
//           <form onSubmit={submitForm} action="insert.php" method="post">
//             <div className="input-wrap input-mobile">
//               <PersonIcon className="icon-style" />
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Enter name e.g John Doe"
//                 onChange={handleChange} value={data.username}
//                 required
//                 className="input-style"
//               />
//             </div>
//             <br />
//             <div className="input-wrap input-mobile">
//               <EmailIcon className="icon-style" />
//               <input
//                 type="email"
//                 onChange={handleChange} value={data.email}
//                 id="email"
//                 name="email"
//                 required
//                 placeholder="Enter a valid email"
//                 className="input-style"
//               />
//             </div>

//             <br />
//             <div className="input-wrap input-mobile">
//               <KeyIcon className="icon-style" />
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 onChange={handleChange} value={data.password}
//                 required
//                 placeholder="Use a strong password"
//                 className="input-style"
//               />
//             </div>
//             <br />
//             <br />
//             <button name="submit" type="submit" id="signup-btn">
//               SIGN UP
//             </button>
//           </form>
//         </div>
//       </div>
//       <Contact />
//     </div>
//   );
// };

// export default SignUp;
