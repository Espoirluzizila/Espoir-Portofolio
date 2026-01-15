// src/components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://YOUR_BACKEND_URL.com/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(res.ok){ setStatus('sent'); setForm({name:'',email:'',subject:'',message:''}); }
      else { const txt = await res.text(); throw new Error(txt); }
    } catch(err){ console.error(err); setStatus('error'); }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required placeholder="Nom"/>
      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email"/>
      <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Sujet"/>
      <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message"/>
      <button type="submit">Envoyer</button>
      {status === 'loading' && <p>Envoi...</p>}
      {status === 'sent' && <p>Message envoyé — merci !</p>}
      {status === 'error' && <p>Erreur d'envoi.</p>}
    </form>
  );
}
