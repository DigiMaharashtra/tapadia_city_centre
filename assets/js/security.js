/**
 * Tapadia City Centre (TCC) Mall - High-Security Integrity & Anti-Inspection Guard
 * Prevents unauthorized inspection, source scraping, key capture, and reverse engineering.
 */
(function() {
  'use strict';

  // Security Toast Notification
  function notifySecurity(message) {
    let toast = document.getElementById('tcc-security-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tcc-security-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(13, 17, 28, 0.95);
        border: 1px solid rgba(0, 242, 254, 0.6);
        box-shadow: 0 0 25px rgba(0, 242, 254, 0.35);
        backdrop-filter: blur(12px);
        color: #fff;
        padding: 12px 24px;
        border-radius: 30px;
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
        z-index: 9999999;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#00f2fe;font-size:16px;">🛡️</span> <span>${message || 'TCC Security: Code & Asset Inspection Restricted'}</span>`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2800);
  }

  // 1. Disable Right Click Context Menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    notifySecurity('Right-click inspection is disabled.');
    return false;
  }, { capture: true });

  // 2. Intercept DevTools and View Source Keyboard Shortcuts
  window.addEventListener('keydown', function(e) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const ctrlKey = isMac ? e.metaKey : e.ctrlKey;
    const shiftKey = e.shiftKey;
    const keyCode = e.keyCode || e.which;

    // F12
    if (keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      notifySecurity('Developer Console access blocked.');
      return false;
    }

    // Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker)
    if (ctrlKey && shiftKey && (keyCode === 73 || keyCode === 74 || keyCode === 67)) {
      e.preventDefault();
      e.stopPropagation();
      notifySecurity('Developer Tools shortcut blocked.');
      return false;
    }

    // Ctrl+U (View Source)
    if (ctrlKey && (keyCode === 85 || keyCode === 117)) {
      e.preventDefault();
      e.stopPropagation();
      notifySecurity('Source code viewing restricted.');
      return false;
    }

    // Ctrl+S (Save Page)
    if (ctrlKey && (keyCode === 83 || keyCode === 115)) {
      e.preventDefault();
      e.stopPropagation();
      notifySecurity('Page saving restricted.');
      return false;
    }
  }, { capture: true });

  // 3. Prevent Dragging Images & Canvas frames
  document.addEventListener('dragstart', function(e) {
    if (e.target && (e.target.nodeName === 'IMG' || e.target.nodeName === 'CANVAS')) {
      e.preventDefault();
      return false;
    }
  }, false);

  // 4. Subtle DevTools Open Detection without breaking UX
  let devtoolsDetected = false;
  const threshold = 160;

  function checkDevTools() {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    
    if ((widthDiff || heightDiff) && !devtoolsDetected) {
      devtoolsDetected = true;
      notifySecurity('Inspection Mode Detected: Protected Environment');
    } else if (!widthDiff && !heightDiff) {
      devtoolsDetected = false;
    }
  }

  window.addEventListener('resize', checkDevTools);
  setInterval(checkDevTools, 2000);

  // 5. Console deterrent banner
  try {
    const style1 = 'color:#00f2fe;font-size:20px;font-weight:bold;text-shadow:0 0 10px #00f2fe;';
    const style2 = 'color:#ffa751;font-size:13px;';
    console.log('%c⚡ TAPADIA CITY CENTRE (TCC) AMRAVATI', style1);
    console.log('%c🛡️ Protected Proprietary Web Application. Reverse engineering, scraping, or tampering is prohibited.', style2);
  } catch (err) {}

})();
