# Portfolio Website

A minimal, modern portfolio website built with React and Vite.

## Setup Instructions

### 1. Download and Extract
Download the portfolio folder to your desired location.

### 2. Install Dependencies
Open terminal in the portfolio folder and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Your site will be running at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```
Output will be in the `dist` folder.

---

## Customize Your Content

Edit the file `src/portfolio/data/content.js`:

### Personal Info
```js
export const personalInfo = {
  name: "Your Name",           // ← Change this
  title: "Your Title",
  email: "your@email.com",     // ← Change this
  github: "github.com/you",    // ← Change this
  linkedin: "linkedin.com/in/you",
  bio: "Your bio here..."
};
```

### Projects
Add/edit projects in the `projects` array.

### Language Skills
Edit the `languageTests` array.

### Extracurricular Activities
Edit the `extracurriculars` array.

### Technical Skills
Edit the `skills` object.

---

## Adding Images

1. Create a `public/images` folder
2. Add your images there
3. Reference them in content.js:
```js
images: [
  { url: "/images/photo1.jpg", caption: "Caption here" }
]
```

---

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── portfolio/
        ├── Portfolio.jsx
        ├── components/
        │   ├── index.js
        │   ├── Nav.jsx
        │   ├── Hero.jsx
        │   ├── Projects.jsx
        │   ├── ProjectDetail.jsx
        │   ├── Skills.jsx
        │   ├── Languages.jsx
        │   ├── Extracurriculars.jsx
        │   ├── ActivityDetail.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        ├── pages/
        │   └── Home.jsx
        ├── data/
        │   └── content.js
        └── styles/
            └── portfolio.css
```

---

## Deployment

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Deploy

### Netlify
1. Push to GitHub
2. Import to Netlify
3. Deploy

### GitHub Pages
1. Build: `npm run build`
2. Deploy the `dist` folder

---

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS (no frameworks)
