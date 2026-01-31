# 👗 AI Look Generator (Frontend)

AI Look Generator is a modern, scalable frontend web application that helps users generate fashion outfit ideas based on selected style vibes such as **Streetwear, Techwear, Minimal, Old Money**, and more.

This project focuses on building a **product-quality UI and architecture**, with the frontend intentionally designed so that real AI models or APIs can be integrated later without rewriting the app.

---

## 🚀 Features

- 🎯 Clean landing page with clear call-to-action
- 🎨 Vibe-based outfit generation flow
- 🧠 Mock AI logic simulating outfit recommendations
- 🧭 Multi-page navigation using React Router
- 🌙 Modern dark UI using Tailwind CSS
- 🧱 Scalable, component-based architecture

---

## 🧑‍💻 Tech Stack

- **React** (with TypeScript) – UI framework
- **Vite** – Fast development server & bundler
- **React Router DOM** – Client-side routing
- **Tailwind CSS (v3)** – Utility-first styling
- **PostCSS & Autoprefixer** – CSS processing
- **npm** – Package management

---

## 📁 Project Structure

src/
├─ components/
│ ├─ Navbar.tsx # Top navigation
│ ├─ VibeSelector.tsx # Fashion vibe selection
│ └─ LookCard.tsx # Outfit display card
│
├─ pages/
│ ├─ Home.tsx # Landing page
│ ├─ Generator.tsx # Vibe selection flow
│ └─ Results.tsx # Generated outfit results
│
├─ App.tsx # App routing
├─ main.tsx # App bootstrap
└─ index.css # Global styles


This structure mirrors real-world production React applications.

---

## 🧭 User Flow

1. **Home Page**
   - Introduction to the app
   - CTA to start generating a look

2. **Generator Page**
   - Users select one or more fashion vibes
   - UI enforces selection before proceeding

3. **Results Page**
   - Displays AI-inspired outfit recommendations
   - Uses mock data (for now)

---

## 🤖 AI Integration (Planned)

Currently, the app uses **mock data** to simulate AI-generated outfits.

The architecture is designed to support future integration with:
- OpenAI APIs
- Hugging Face models
- Custom ML backends
- Image generation APIs

The frontend will not need to be rewritten when AI is added.

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
