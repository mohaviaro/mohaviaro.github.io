# Mohavia Sinon &ndash; Curriculum Vitae & Portfolio

A clean, minimalist, human-crafted personal CV and portfolio website for **Mohavia Sinon** (@mohaviaro). 

Built with semantic HTML5, pure CSS, and minimal vanilla JavaScript. Fast, lightweight, and pre-configured for instant deployment on GitHub Pages.

🔗 **Live Website**: [https://mohaviaro.github.io](https://mohaviaro.github.io)

---

## 📄 Contents & Features

- **Single Source of Truth (`index.html`)**: The CV PDF is directly generated from the webpage using headless Chrome and modern print styling, ensuring 100% parity between the site and downloaded resume.
- **Dual CV Export Options**:
  - **Download CV (PDF)**: Directly downloads `Mohavia Sinon-cv.pdf` generated from `index.html`.
  - **Print / Save as PDF**: Opens the browser's native print dialog (`window.print()`) styled cleanly for A4 export.
- **Automated Regeneration**: Run `npm run build:pdf` locally, or let GitHub Actions automatically recompile `Mohavia Sinon-cv.pdf` from `index.html` on every push.
- **Minimal, Professional Aesthetic**: Clean Inter typography, responsive layout, and understated light/dark mode.
- **Peer-Reviewed Publications**: MDPI (2026) and Springer (2024) research papers with direct DOI links.
- **Social & Contact Links**: Direct connections to LinkedIn, GitHub, email, and phone.

---

## 📁 Project Structure

```
.
├── index.html                   # Source of truth CV webpage
├── Mohavia Sinon-cv.pdf         # Generated 2-page A4 PDF resume (built from index.html)
├── package.json                 # Scripts for PDF compilation (npm run build:pdf)
├── scripts/
│   └── generate-pdf.sh          # Headless Chrome PDF generation script
├── assets/
│   ├── css/
│   │   ├── variables.css        # Theme variables & typography tokens
│   │   ├── base.css             # Base reset & typography
│   │   ├── components.css       # Clean layout components & entries
│   │   └── print.css            # Refined 2-page A4 print & PDF stylesheet
│   └── js/
│       └── app.js               # Theme toggle, copy email & print handlers
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Automated GitHub Pages CI/CD with PDF generator
│       └── static.yml           # Static Pages deployment with PDF generator
└── README.md                    # Documentation
```

---

## 🛠️ Generating the PDF Locally

To regenerate `Mohavia Sinon-cv.pdf` directly from `index.html`:

```bash
npm run build:pdf
# or:
bash scripts/generate-pdf.sh
```

This runs headless Google Chrome or Chromium to render `index.html` to a 2-page A4 PDF using the print stylesheet.

---

## 🚀 Publish to GitHub Pages

1. **Commit and push** changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: clean, minimal CV website with downloadable PDF"
   git push -u origin master
   ```

2. **Enable GitHub Pages**:
   - In GitHub repository: **Settings** &rarr; **Pages**
   - Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
   - Your site will be live at: **`https://mohaviaro.github.io`**
