const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const LEADS_FILE = path.join(__dirname, 'leads.json');

if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// POST: Save client inquiry from Contact / Audit form
app.post('/api/leads', (req, res) => {
  const { name, email, phone, website, service, budget, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ success: false, message: 'Name, Email, and Service are required.' });
  }

  const newLead = {
    id: 'ARX-' + Date.now().toString().slice(-6),
    name,
    email,
    phone: phone || 'Not Provided',
    website: website || 'Not Provided',
    service,
    budget: budget || 'Standard',
    message: message || '',
    status: 'New',
    date: new Date().toLocaleString()
  };

  const leads = JSON.parse(fs.readFileSync(LEADS_FILE));
  leads.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

  res.status(201).json({
    success: true,
    message: 'Thank you! Arxolon Technologies team will reach out within 2 hours.',
    lead: newLead
  });
});

// GET: Fetch all leads for Admin Dashboard
app.get('/api/leads', (req, res) => {
  const leads = JSON.parse(fs.readFileSync(LEADS_FILE));
  res.json({ success: true, leads });
});

app.listen(PORT, () => {
  console.log(`Arxolon Technologies Server running on http://localhost:${PORT}`);
});