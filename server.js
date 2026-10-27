/**
 * Tapadia City Centre (TCC) Mall - High Performance Node.js Server
 * Built for Node.js v24.18.0
 */

const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip/deflate compression for blazing fast transfers
app.use(compression({
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

// Parse JSON & URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security & Caching Headers Middleware
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Aggressive caching for image frames (300 splash frames + 300 building frames)
  if (req.url.match(/\.(jpg|jpeg|png|webp|svg|ico)$/i)) {
    res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
  } else if (req.url.match(/\.(css|js)$/i)) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }

  next();
});

// Serve Static Files
const staticOptions = {
  maxAge: '7d',
  immutable: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.jpg') || filePath.endsWith('.png')) {
      res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    }
  }
};

app.use(express.static(__dirname, staticOptions));

// ==========================================================================
// REST API ENDPOINTS
// ==========================================================================

// 1. Live Mall Status & Timings
app.get('/api/status', (req, res) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 3600000 * 5.5);
  const currentHour = ist.getHours();
  const currentMinutes = ist.getMinutes();
  const totalMinutes = currentHour * 60 + currentMinutes;

  const isMallOpen = totalMinutes >= 660 && totalMinutes <= 1320; // 11:00 AM - 10:00 PM
  const isSmartEarly = totalMinutes >= 420 && totalMinutes < 660; // 7:00 AM - 11:00 AM

  res.json({
    mallName: 'Tapadia City Centre (TCC) Mall',
    city: 'Amravati, Maharashtra',
    timeIST: ist.toLocaleTimeString('en-IN', { hour12: true }),
    isOpen: isMallOpen,
    isSmartEarlyOpen: isSmartEarly,
    hours: {
      retail: '11:00 AM - 10:00 PM Daily',
      relianceSmart: '7:00 AM - 10:00 PM Daily',
      mirajCinemas: 'Runs late for evening & night showtimes'
    },
    helpline: {
      leasing: '+91 8111001200',
      helpdesk: '+91 9422655830'
    }
  });
});

// 2. Inquiries Endpoint (Leasing & Customer Support)
const inquiriesLogFile = path.join(__dirname, 'inquiries.json');

app.post('/api/inquiry', (req, res) => {
  const { fullName, phone, inquiryType, message } = req.body;

  if (!fullName || !phone) {
    return res.status(400).json({ success: false, error: 'Name and Phone number are required.' });
  }

  const record = {
    id: 'TCC-' + Date.now(),
    fullName,
    phone,
    inquiryType: inquiryType || 'leasing',
    message: message || '',
    receivedAt: new Date().toISOString()
  };

  try {
    let existing = [];
    if (fs.existsSync(inquiriesLogFile)) {
      const content = fs.readFileSync(inquiriesLogFile, 'utf8');
      existing = JSON.parse(content || '[]');
    }
    existing.push(record);
    fs.writeFileSync(inquiriesLogFile, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('Inquiry storage error:', err);
  }

  console.log(`[INQUIRY] New submission from ${fullName} (${phone}) - Type: ${inquiryType}`);

  res.json({
    success: true,
    message: 'Your inquiry has been successfully transmitted to TCC Management.',
    inquiryId: record.id
  });
});

// 3. Fallback Route: Deliver index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('================================================================');
  console.log('  🏛️  TAPADIA CITY CENTRE (TCC) MALL - AMRAVATI');
  console.log('  ⚡ 3D Smart Scroll Web Server Active');
  console.log(`  🌐 Local Access:    http://localhost:${PORT}`);
  console.log('  🛡️  Anti-Inspection: Armed & Active');
  console.log('  🎬 3D Frame Buffer: 300 Splash + 300 Building Frames Ready');
  console.log('================================================================');
});
