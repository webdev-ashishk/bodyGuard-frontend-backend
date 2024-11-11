import cors from 'cors';
import express, { Request, Response } from 'express';
import nodemailer, { SentMessageInfo } from 'nodemailer';
const app = express();
const port = 4000;
//
// Configure CORS
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow only your frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'], // Allow 'Content-Type' header
  })
);
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('you are welcome ');
});
app.post('/send-email', (req: Request, res: Response) => {
  const { to, subject, text } = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashishcs098@gmail.com',
      pass: 'dgha kkmc eszo tprq',
    },
  });

  var mailOptions = {
    from: 'ashishcs098@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: SentMessageInfo) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }
  );
  res.send('message send successfully');
});
app.listen(port, () => {
  console.log('listening on port  ' + port);
});
