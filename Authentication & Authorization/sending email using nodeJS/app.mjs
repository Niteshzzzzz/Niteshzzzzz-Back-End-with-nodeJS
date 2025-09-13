import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "niteshkumarnkzzzzz@gmail.com",
    pass: "xnft hvzw ckru saen",
  },
});

(async () => {
  const info = await transporter.sendMail({
    from: '"Nitesh Kumar" <niteshkumarnkzzzzz@gmail.com',
    to: "niteshkr1661@gmail.com",
    subject: "Hello ✔",
    // text: "Hello world?", // plain‑text body
    html: "<h3>Hello world?</h3>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})();