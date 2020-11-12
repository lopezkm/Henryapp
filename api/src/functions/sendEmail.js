const nodemailer = require("nodemailer");

export const sendEmail = async (dest, redirUrl) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "henrycomicsarg@gmail.com",
      pass: "ecommerceg8",
    },
  });

  let mailOptions = {
    from: "henrycomicsarg@gmail.com",
    to: dest,
    subject: "HenryApp",
    html: `<a href="${redirUrl}>Register<a/>"`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("Enviado");
    }
  });
  return true;
};
