import type {NextApiRequest, NextApiResponse} from 'next';
const nodemailer = require('nodemailer');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {parrentName, childAge, phoneNumber} = JSON.parse(req.body);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.EMAIL_SENT_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_ADRESS,
      to: process.env.EMAIL_ADRESS,
      subject: 'Testing email',
      html: `<p style="color:red">Hello, dear Yaroslav!!!</p>
    <p>My name is ${parrentName}</p>
    <p>My child is ${childAge} years old</p>
    <p>I d like to discuss opportunity for my son participate in training</p>
    <p>I would be grateful if you would call me back</p>
    <p>My phone number is <a href="tel:${phoneNumber}">${phoneNumber}</a></p>`,
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
}
