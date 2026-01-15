require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// health
app.get('/', (req, res) => res.send('Okatech backend up'));

// endpoint contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'Champs manquants' });
    }

    // build email
    const html = `
      <h3>Nouveau message depuis le site portfolio</h3>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // send mail
    await transporter.sendMail({
      from: `"Site Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio contact — ${subject}`,
      html
    });

    return res.json({ ok: true, message: 'Message envoyé' });
  } catch (err) {
    console.error('Error sending mail:', err);
    return res.status(500).json({ error: 'Erreur envoi email', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
