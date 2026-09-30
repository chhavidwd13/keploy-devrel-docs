# Zero-Code Testing for Go Microservices: A Hands-on Keploy Guide

> **Candidate Assignment for Developer Relations (DevRel) Specialist at Keploy**  
> Built with Next.js 16 (App Router), MDX (`.mdx`), Tailwind CSS, and custom interactive React components.

---

## 🚀 Live Demo & Repository
* **Live Deployment:** [https://keploy-devrel-docs.vercel.app/](https://keploy-devrel-docs.vercel.app/)
* **Source Code:** [GitHub Repository](https://github.com/chhavidwd13/keploy-devrel-docs)

---

## 📌 Project Overview
This project fulfills the Keploy DevRel Candidate Assignment:
1. **Interactive Documentation Site:** Built using **Next.js** and **MDX**, blending markdown storytelling with rich React UI components.
2. **Technical Topic:** A deep-dive, beginner-friendly tutorial on running Keploy against a **Go Gin + MongoDB (URL Shortener)** microservice.
3. **Explaining the "Why":** Breaks down the core concepts behind zero-code eBPF network socket interception, automated YAML test/mock generation, and offline replay without running a live database.
4. **Developer-First UX:**
   - 🌓 **Dark / Light Theme Toggle** with persistent user preference (bonus criteria).
   - ⚡ **Interactive Architecture Flow Diagram:** Toggle between Phase 1 (Record) and Phase 2 (Replay) data flows.
   - 📄 **Live YAML Inspector:** Side-by-side inspection and syntax explanation of generated `test-1.yaml` and `mocks.yaml`.
   - 📋 **Progress Checklist:** Interactive step tracker for developers following along.
   - 💻 **Copyable Code Blocks:** Multi-language snippets with one-click clipboard copy and feedback.
   - 💡 **DevRel Callouts:** Custom `<Callout type="info | tip | warning | aha">` alerts.
   - 🧭 **Sticky Table of Contents & Navigation:** Smooth scrolling with active section indicator.

---

## 🛠️ Tech Stack
* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Content:** [MDX (`@next/mdx`)](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Next.js Geist Font

---

## 🏃 Getting Started Locally

### Prerequisites
* Node.js 18.17+ or 20+ installed
* npm (or pnpm / yarn / bun)

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd keploy-devrel-docs
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel (Step-by-Step)

1. Push this project to a new public GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Keploy DevRel documentation tutorial with Next.js and MDX"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Framework: Next.js) and click **Deploy**.
5. Once deployed, copy your live URL and submit both links to the hiring team.

---

## 🧑‍💻 Author
Candidate submission for Keploy DevRel Specialist.
