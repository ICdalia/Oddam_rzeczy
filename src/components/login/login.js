// import React, { useState } from "react";
//
//
// function Login() {
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//
//     const database = [
//         {
//             username: "email1",
//             password: "pass1"
//         },
//         {
//             username: "email2",
//             password: "pass2"
//         }
//     ];
//
//     const errors = {
//         email: "invalid email",
//         pass: "invalid password"
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//
//         let { email, pass } = document.forms[0];
//
//         const userData = database.find((user) => user.username === email.value);
//
//         if (userData) {
//             if (userData.password !== pass.value) {
//
//                 setErrorMessages({ name: "pass", message: errors.pass });
//             } else {
//                 setIsSubmitted(true);
//             }
//         } else {
//             setErrorMessages({ name: "uname", message: errors.email });
//         }
//     };
//
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//         );
//
//     const renderForm = (
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="input-form">
//                     <label>Email </label>
//                     <input type="text" name="uname" required />
//                     {renderErrorMessage("uname")}
//                 </div>
//                 <div className="input-form">
//                     <label>Hasło </label>
//                     <input type="password" name="pass" required />
//                     {renderErrorMessage("pass")}
//                 </div>
//                 <div className="button-container">
//                     <input type="submit"  className="button-register" value="Załóż konto" />
//                     <input type="submit"  className="button-login" value="Zaloguj się" />
//                 </div>
//             </form>
//         </div>
//     );
//
//     return (
//         <div className="login">
//             <div className="login-form">
//                 <div className="title">Zaloguj się</div>
//                 {isSubmitted ? <div>Użytkownik jest zalogowany</div> : renderForm}
//             </div>
//         </div>
//     );
// }
//
// export default Login;

