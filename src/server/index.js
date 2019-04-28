// const express = require("express");
const os = require("os");
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const config = require("./mailConfig");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));
// app.use(express.static(__dirname + "/public"));

app.get("/helloworld", (req, res) => {
  res.status(200).send("HELLO");
});

app.post("/api/mail", (req, res) => {
  const {
    contactName,
    contactEmail,
    contactSubject,
    contactMessage
  } = req.body;
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${contactName}</li>
        <li>Email: ${contactEmail}</li>
        <li>Subject: ${contactSubject}</li>
      </ul>
      <h3<Message</h3>
      <p>${contactMessage}</p>
    `;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: config.account,
        pass: config.password
      }
    });

    const mailOptions = {
      from: "test@testaccount.com",
      to: config.account,
      replyTo: "test@testaccount.com",
      subject: contactSubject,
      text: contactMessage,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          err:
            "Something went wrong with the sending process. Please contact the admin with email kaiching0109@gamil.com"
        });
      } else {
        console.log("Message sent: %s", info);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
        res.status(200).json({
          message: "Success!"
        });
      }
    });
  });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
