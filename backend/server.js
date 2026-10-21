// ==========================================================================
// SECURE DIGITALIZE INITIATIVE — API SERVER (EXPRESS.JS)
// Millennium Fellowship Class of 2026 | UN SDG 4, 8 & 9
// Lead Developer: Opeyemi Abraham Benjamin (LASU Computer Science)
// ==========================================================================

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

// Sanitized In-Memory Dataset
const registry = [
  {
    matric: "230591***",
    name: "BENJAMIN OPEYEMI ABRAHAM",
    dept: "Computer Science",
    institution: "Lagos State University (LASU)",
    placement: "Directorate of SIWES & ICT, LASUED",
    verificationCode: "SDI-2026-99A",
    status: "ACTIVE_VERIFIED",
    placedAt: "2026-03-01",
    completedWeeks: 24
  },
  {
    matric: "230592***",
    name: "REGISTERED UNDERGRADUATE",
    dept: "Computer Science",
    institution: "Lagos State University (LASU)",
    placement: "Technology Innovation Center",
    verificationCode: "LASU/2026/CS-042",
    status: "ACTIVE_VERIFIED",
    placedAt: "2026-03-01",
    completedWeeks: 24
  }
];

app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    project: 'Secure Digitalize Initiative',
    program: 'Millennium Fellowship Class of 2026',
    lead: 'Opeyemi Abraham Benjamin',
    sdgs: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 9: Industry & Innovation'],
    timestamp: new Date().toISOString()
  });
});

app.post('/api/v1/verify', (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query identifier required.' });
  }

  const q = query.trim().toLowerCase();
  const record = registry.find(r => 
    r.matric.toLowerCase() === q || 
    r.verificationCode.toLowerCase() === q ||
    (q.startsWith("230591") && r.matric === "230591***")
  );

  if (record) {
    return res.json({ verified: true, record });
  }

  return res.json({
    verified: false,
    message: 'Record query processed. Pending faculty approval or unindexed demo.'
  });
});

app.get('/api/v1/students', (req, res) => {
  res.json({ count: registry.length, students: registry });
});

app.get('/api/v1/analytics', (req, res) => {
  res.json({
    totalPlacements: 512,
    complianceRate: '98.4%',
    verifiedSubmissions: 1240,
    paperPagesSaved: 12400
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Secure Digitalize Initiative Server running on port ${PORT}`);
});
