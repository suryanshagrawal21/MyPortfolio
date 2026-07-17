# Suryansh Agrawal — Software Engineer Portfolio v2 🚀

Welcome to the repository for **Suryansh Agrawal's** personal engineering portfolio website (v2). Re-architected as a modern, high-performance, single-page application built on a premium React developer stack to showcase B.Tech CSE placements, full-stack engineering skills, and AI/ML integrations.

---

## 🔗 Live Application
*   **Live Portfolio URL**: [https://suryanshagrawal.vercel.app/](https://suryanshagrawal.vercel.app/)
*   **Resume**: [View Online Google Drive Link](https://drive.google.com/file/d/1L9NkA7kLa_t7OMV46Xy6aYHJrR5ur2_V/view?usp=sharing)

---

## ✨ Features & Sections

*   **⚡ Interactive Hero**: Features a custom typewriter roles simulator, availability tags, floating interactive stack badges, and custom radial glow orbits.
*   **🎓 About & Academics**: Displays professional stats (CGPA **8.99/10**, 6+ Projects, availability status), primary focus areas, and central core technologies.
*   **🛠️ Technical Skills Toolkit**: Staggered cards displaying categorized skills (Languages, Frontend, Backend, Databases, AI/ML, and Core CS Fundamentals like DSA/DBMS).
*   **🚀 Projects Dashboard**: Dynamic filter bar (All, MERN, AI/ML, Full Stack, Backend) displaying 6 priority projects:
    1.  **Smart Campus**: MERN platform for issue reporting with Leaflet maps (`smartcampusreporting.vercel.app`).
    2.  **MediBill AI**: OCR-powered medical bill analyzer using Python, FastAPI, and Tesseract.
    3.  **CustomerPulse AI**: Real-time sentiment analysis CRM with dynamic LLM campaign generation (`customer-pulse-ai.vercel.app`).
    4.  **IPL Score Predictor**: Machine learning engine for score forecasting using Scikit-Learn.
    5.  **Utensify**: E-Commerce MERN platform with cart states and local storage persistence.
    6.  **Movie Booking System**: Transactionally safe SQL ticket reservation system preventing booking anomalies.
*   **💼 Journey Timeline**: Staggered vertical timeline outlining internship roles (AICTE Web Dev Intern) and technology simulations.
*   **🏅 9 Verified Credentials**: Clean grid showcasing 9 certified credentials (Oracle Cloud GenAI Pro, Udemy AI Masterclass, HackerRank Python/Java, Deloitte Simulation, SRMIST Data Analytics, and Infosys Springboard Python for DS) with verified links.
*   **👾 Coding Profile Stats**: Dynamically pulled GitHub Streak and GitHub Stats profile cards alongside direct links to LeetCode, HackerRank, GeeksforGeeks, and GitHub.
*   **✉️ Seamless Contact Panel**: Complete pre-filled native mailto client generator.

---

## 🛠️ Stack & Technologies Used

*   **Core Frame**: React (v19) + TypeScript + Vite (v7)
*   **Styling**: Tailwind CSS (v4) (custom utility layers and CSS brand tokens inside `@theme` in `index.css`)
*   **Animations**: Framer Motion (custom viewport-triggered stagger transitions, cubic-bezier scroll reveals)
*   **Icons**: Lucide React
*   **Scroll Navigation**: react-scroll (smooth nav scrolls with spy triggers)
*   **Routing**: React Router (v7) (case studies layout support)

---

## 📂 Project Structure

```text
My-Portfolio/
├── client/              # Main React Application
│   ├── public/          # Static assets (Favicons, suryanshresume.pdf)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/  # Sticky Navbar, Footer
│   │   │   ├── sections/# Hero, About, Skills, Projects, Experience, Certs, Contact
│   │   │   └── ui/      # SectionWrapper wrapper, custom elements
│   │   ├── data/        # Centralized portfolioData.ts (Single Source of Content)
│   │   ├── hooks/       # useScrollReveal.ts custom hook
│   │   ├── pages/       # Home page, Case Study details page
│   │   ├── App.tsx      # Main routes container
│   │   ├── index.css    # Tailwind v4 import + design system components
│   │   └── main.tsx     # Client entry point
│   ├── package.json     # Vite client build dependencies
│   └── vite.config.ts   # Bundler configurations
├── index.html           # Legacy static html
├── style.css            # Legacy stylesheet
└── README.md            # You are here!
```

---

## 🚀 Running Locally

If you want to run the project on your local machine:

1. **Clone this repository**
   ```bash
   git clone https://github.com/suryanshagrawal21/MyPortfolio.git
   cd MyPortfolio/client
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run local dev server**
   ```bash
   npm run dev
   ```
4. **Compile Production Build**
   ```bash
   npm run build
   ```

---

## 📬 Let's Connect

*   **Email**: [suryanshagrawal54@gmail.com](mailto:suryanshagrawal54@gmail.com)
*   **LinkedIn**: [Suryansh Agrawal](https://www.linkedin.com/in/suryansh-agrawal-b43821283)
*   **GitHub**: [suryanshagrawal21](https://github.com/suryanshagrawal21)
*   **LeetCode**: [suryanshagrawal21](https://leetcode.com/u/suryanshagrawal21/)

---
*Built with ❤️ by Suryansh Agrawal.*
