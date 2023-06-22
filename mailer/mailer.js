const nodemailer = require("nodemailer");

exports.sendConfirmationEmail = function ({ toUser, hash, name }) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const message = {
      from: process.env.GOOGLE_USER,
      to: toUser,
      subject: "Aktivacioni Email",
      html: `
            <head>
                <style>
                .button {
                    background-color: #4CAF50; /* Green */
                    border: none;
                    color: white;
                    padding: 16px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    border-radius: 10px;
                  }
                .button2 {
                    background-color: #4CAF50;
                    color: white; 
                    border: 2px solid #4CAF50;
                  }
                  
                  .button2:hover {
                    background-color: white;
                    color: black;
                    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
                  }
                </style>
                </head>
                <h1>Zdravo ${name}, Molimo Vas potvrdite svoj Email:</h1>
                <p>Molimo Vas pritisnite link ispod i potvrdite svoj email:</p>
                <button class="button button2"><a style="text-decoration: none; color: black;" target="_" href="${process.env.DOMAIN}?token=${hash}">Aktiviraj nalog!</a></button>
            `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};
