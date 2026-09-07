# 🏛️ The Iconic Architects | Luxury Architecture & Interior Design Studio

A high-end, editorial, minimalist web application crafted for **The Iconic Architects**, an award-winning international architecture and luxury interior design practice.

Designed with an *Architectural Digest* editorial aesthetic, featuring obsidian dark mode, smooth scroll-triggered motion animations, a centered multi-tier logo header, an interactive project lightbox modal, and an Architectural Project Cost Estimator calculated in Indian Rupees (INR ₹ / Crore).

---

## ✨ Key Features & Interactive Highlights

- 🏛️ **Multi-Tier Centered Header Layout:** Top-tier centered brand mark flanked by quick action controls and a bottom-tier navigation bar (`Portfolio | Philosophy | Services | Cost Estimator | Press | Contact`).
- 📱 **100% Fluid Mobile Responsiveness:** Touch-friendly slide-down drawer menu on mobile devices with smooth backdrop transitions and auto-close navigation.
- 🎞️ **Cinematic Hero Showcase Reel:** Auto-rotating full-screen slider displaying photorealistic 3D architectural renders (`Obsidian Cantilever Cliffside Villa`, `Aether Skyscraper Atrium`, `The Alpine Sanctuary`) with interactive manual navigation dots.
- 📈 **Animated Statistics Counter:** IntersectionObserver-triggered animated count-up numbers displaying studio accolades (`145+ Global Awards`, `₹24,000 Cr Constructed Value`, `180+ Completed Landmarks`, `22+ Countries Active`).
- 🖼️ **Filterable Portfolio Gallery:** Filter projects dynamically by *Residential*, *Commercial*, and *Interiors* with smooth grid filter transitions.
- 🔍 **Native `<dialog>` Project Lightbox Modal:** Full-screen top-layer project inspection featuring high-resolution photography, completion year, location, surface area specs, LEED/CASBEE certifications, and design narratives.
- 🧮 **Architectural Project Cost Estimator (INR ₹ / Crore):** Interactive calculator allowing prospective clients to select project typologies, adjust gross floor area (2,000 - 50,000 sq ft), and choose finish specification tiers to get an instant investment estimate range and design schedule.
- 📋 **One-Click Form Auto-Fill:** 1-click button that transfers calculated estimate parameters directly into the consultation inquiry form.
- 📬 **Consultation Booking & Toast System:** Form validation with toast feedback notifications.
- 🌗 **Dark & Light Mode Switcher:** Instant theme switching toggling between Obsidian Charcoal and Alabaster White palettes.

---

## 🛠️ Tech Stack

- **Core Framework / Bundler:** [Vite](https://vitejs.dev/)
- **Structure & Logic:** Semantic HTML5 & Vanilla JavaScript (ES6+)
- **Styling:** Custom Vanilla CSS3 (Design Tokens, CSS Variables, `@starting-style`, `<dialog>` top layer animations, Glassmorphism)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Typography:** Google Fonts (*Syne*, *Playfair Display*, *Plus Jakarta Sans*)

---

## 📂 Project Structure

```text
theiconicarchitects/
├── public/
│   └── assets/              # Generated high-resolution 3D renders & assets
│       ├── hero_1.png       # Obsidian Cantilever Cliffside Villa render
│       ├── hero_2.png       # Titanium Skyscraper Atrium render
│       └── project_res_1.png# Alpine Pine Forest Residence render
├── src/
│   ├── style.css            # Complete design system, media queries & animations
│   └── main.js              # Application logic, slider, modal & calculator
├── index.html               # Main semantic HTML structure & sections
├── package.json             # Project dependencies & scripts
├── .gitignore               # Ignored files (node_modules, dist, logs)
└── README.md                # Comprehensive documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0 or higher) and `npm` installed.

### 1. Clone the Repository
```bash
git clone https://github.com/aicodewithkaran/Theiconicarchitects.git
cd Theiconicarchitects
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or the network URL displayed in your terminal).

### 4. Build for Production
To generate a minified, production-ready build:
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

---

## 🏢 Global Studio Locations

- **Mumbai Studio:** BKC Financial Center, Level 14, Mumbai 400051
- **New Delhi Studio:** Golf Course Road, DLF Phase 5, Gurugram 122002
- **Direct Inquiries:** commissions@theiconicarchitects.com

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
Copyright &copy; 2026 **The Iconic Architects Inc.** All rights reserved.
