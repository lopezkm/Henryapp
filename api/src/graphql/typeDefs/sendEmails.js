// import { gql } from "apollo-server-express";
// const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'soyhenryapp@gmail.com',
//             pass: 'alumnos123',
//         })

//           //-----------Enviando Email----------
//           console.log('User ',user.email)
//           let mailOptions = {
//             from: 'henrycomicsarg@gmail.com',
//             to: user.email,
//             subject: 'Henry Comics',
//             template: 'resetPass',
//             context:{
//               name: user.username
//             }
//           };
//           transporter.sendMail(mailOptions, (err, data)=>{
//             if(err){
//               console.log('error', err);
//             }else{
//               console.log('Enviado');
//             }
//           });
//           //----------Fin Enviar email---------
//           res.status(200)
//           .json({message: 'Password Receteada'})
//         })
//         .catch(err=>{
//           res.status(404)
//           .json({message: 'Not Found', err})
//         })
//       })

//       server.post('/:id/passwordReset',  isAuthenticated, (req, res) =>{
//         const { id } = req.params;
//         const { password } = req.body;
//         User.findByPk(id)
//         .then(user =>{
//           user.update({
//             password: bcrypt.hashSync(password, 10)
//           })
//           //-----------Enviando Email----------
//           console.log('User ',user.email)
//           let mailOptions = {
//             from: 'henrycomicsarg@gmail.com',
//             to: user.email,
//             subject: 'Henry Comics',
//             template: 'resetPass',
//             context:{
//               name: user.username
//             }
//           };
//           transporter.sendMail(mailOptions, (err, data)=>{
//             if(err){
//               console.log('error', err);
//             }else{
//               console.log('Enviado');
//             }
//           });
//           //----------Fin Enviar email---------
//           res.status(200)
//           .json({message: 'Password Receteada'})
//         })
//         .catch(err=>{
//           res.status(404)
//           .json({message: 'Not Found', err})
//         })
//       })
