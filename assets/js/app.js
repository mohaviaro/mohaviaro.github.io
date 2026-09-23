/**
 * Mohavia Sinon - Simple, Clean Portfolio Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyEmail();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function getSavedOrSystemTheme() {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    const metaTheme = document.querySelector('meta[name="color-scheme"]');
    if (metaTheme) {
      metaTheme.content = theme;
    }

    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
    }

    if (toggleBtn) {
      toggleBtn.setAttribute('title', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }

  // Initial theme application
  const initialTheme = getSavedOrSystemTheme();
  applyTheme(initialTheme);

  // Toggle click event
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme-preference', nextTheme);
      applyTheme(nextTheme);
    });
  }

  // Listen for OS system theme changes
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme-preference')) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
}

function initCopyEmail() {
  const copyBtns = document.querySelectorAll('[data-copy-email]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'mohaviaro@live.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard`);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
