import { type NextApiRequest, type NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>
                <p>${req.body.message}</p>
                <p>${req.body.name}</p>
                <p>${req.body.phone}</p>
            </div>`,
  };

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(
      message,
      (err: Error | null, info: nodemailer.SentMessageInfo) => {
        if (err) {
          if ("address" in err) {
            res.status(404).json({
              error: `Connection refused at ${err.address}`,
            });
          } else {
            res.status(404).json({
              error: err,
            });
          }
        } else {
          res.status(250).json({
            success: `Message delivered to ${info.accepted}`,
          });
        }
      }
    );
  }
}
