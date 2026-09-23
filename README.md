# Mohavia Sinon &ndash; Curriculum Vitae & Portfolio

A clean, minimalist, human-crafted personal CV and portfolio website for **Mohavia Sinon** (@mohaviaro). 

Built with semantic HTML5, pure CSS, and minimal vanilla JavaScript. Fast, lightweight, and pre-configured for instant deployment on GitHub Pages.

🔗 **Live Website**: [https://mohaviaro.github.io/cv/](https://mohaviaro.github.io/cv/)

---

## 📄 Contents & Features

- **Directly Grounded in Official CV**: Mirrors your uploaded `Mohavia Sinon-cv.pdf` with exact roles, competencies, timeline, education, and technical stack.
- **Direct PDF Download**: Integrated download button serving your official `Mohavia Sinon-cv.pdf`.
- **Minimal, Professional Aesthetic**: Clean typography, calm palette, responsive layout, and understated light/dark mode without artificial effects.
- **Peer-Reviewed Publications**: MDPI (2026) and Springer (2024) research papers with direct DOI links.
- **Social & Contact Links**: Direct connections to LinkedIn, GitHub, email, and phone.
- **Zero Build Step**: Pure static HTML/CSS/JS ready to deploy to GitHub Pages via the included GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## 📁 Project Structure

```
cv/
├── index.html                   # Main CV webpage
├── Mohavia Sinon-cv.pdf         # Official downloadable PDF resume
├── assets/
│   ├── css/
│   │   ├── variables.css        # Theme variables & typography tokens
│   │   ├── base.css             # Base reset & typography
│   │   ├── components.css       # Clean layout components & entries
│   │   └── print.css            # Print stylesheet
│   └── js/
│       └── app.js               # Minimal theme toggle & copy helper
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
└── README.md                    # Documentation
```

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
   - Your site will be live at: **`https://mohaviaro.github.io/cv/`**
