# Muhammad Junaid — Frontend Developer Portfolio

A minimalist, high-contrast monochrome editorial portfolio web application designed for **Muhammad Junaid (Frontend Developer)**. Built with React (Next.js App Router), TypeScript, Tailwind CSS, shadcn/ui + Radix UI primitives, Framer Motion, and a Nodemailer serverless function ready for zero-config deployment on **Vercel**.

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS (Strict monochrome aesthetic: `#FFFFFF`, `#FAFAFA`, `#E4E4E7`, `#52525B`, `#09090B`)
- **UI Components:** `shadcn/ui` & `@radix-ui` primitives
  - Floating pill navigation with active scroll-spy state & mobile drawer
  - Radix `Dialog` for comprehensive Project Case Study breakdowns
  - Radix `Tooltip` for technical skills and social badges
  - `sonner` for real-time contact notifications
- **Animations:** `framer-motion` (Typewriter subtitle effect with blinking cursor, interactive hover physics, staggered reveals)
- **Backend Function:** Vercel Serverless Function (`/api/contact`) with `nodemailer` (`runtime = 'nodejs'`)
- **Visuals:** Dual-mode developer presentation card (Real Portrait at tech event / Stylized Vector Studio illustration with animated code snippets)

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd junaid-portfolio
npm install
# or bun install
```

### 2. Configure Environment Variables
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Gmail SMTP credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=junaidislam441@gmail.com
SMTP_PASS=your-16-digit-google-app-password
CONTACT_RECEIVER=junaidislam441@gmail.com
```

> **Note:** To obtain a 16-character Google App Password:
> 1. Go to your [Google Account Security](https://myaccount.google.com/security).
> 2. Enable **2-Step Verification**.
> 3. Search for **App Passwords** (or visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
> 4. Generate a new password under the name "Portfolio Contact" and copy the 16 characters.

*(If unconfigured in local development, `/api/contact` automatically responds in graceful simulation mode with instant client feedback).*

### 3. Run Development Server
```bash
npm run dev
# or bun dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel (Zero-Config)

1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Vercel automatically detects Next.js.
4. Add the following **Environment Variables** in the Vercel dashboard:
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `465`
   - `SMTP_USER`: `junaidislam441@gmail.com`
   - `SMTP_PASS`: `<your-16-digit-google-app-password>`
   - `CONTACT_RECEIVER`: `junaidislam441@gmail.com`
5. Click **Deploy**.

---

## 📁 Project Structure

```
├── public/
│   ├── M_Junaid_CV.pdf       # Downloadable CV
│   └── profile-pic.jpeg      # Muhammad Junaid's portrait
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts  # Node.js Serverless Function (Nodemailer)
│   │   ├── globals.css       # Tailwind & custom scrollbar styles
│   │   ├── layout.tsx        # SEO metadata, fonts & Sonner toaster
│   │   └── page.tsx          # Single-page portfolio assembly
│   ├── components/
│   │   ├── ui/               # Radix UI primitives & shadcn/ui components
│   │   ├── About.tsx         # Bio, GDG Lahore card, skills matrix, timeline
│   │   ├── Contact.tsx       # Direct card & interactive contact form
│   │   ├── DeveloperCard.tsx # Photo / Vector Studio interactive switcher
│   │   ├── Footer.tsx        # Minimalist monochrome footer
│   │   ├── Hero.tsx          # Asymmetric 2-column hero & typewriter
│   │   ├── Navbar.tsx        # Floating pill navigation with scroll-spy
│   │   ├── ProjectDialog.tsx # Case study modal with full breakdown
│   │   ├── Projects.tsx      # Filterable featured projects grid
│   │   ├── Services.tsx      # 6-card services matrix with black badges
│   │   └── SocialIcons.tsx   # Clean SVGs for GitHub, LinkedIn, WhatsApp
│   ├── data/
│   │   └── portfolio-data.ts # Centralized typed portfolio dataset
│   └── lib/
│       └── utils.ts          # Classnames & Tailwind merge utility
├── .env.example              # Environment variables template
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Monochrome theme design tokens
└── tsconfig.json             # Strict TypeScript configuration
```

---

## 👤 Author

**Muhammad Junaid**  
Frontend Developer & UI/UX Engineer  
- 📍 Sabzazar, Lahore, Punjab, Pakistan  
- 💼 [LinkedIn](https://www.linkedin.com/in/muhammad-junaid-063b06263/)  
- 💬 [WhatsApp](https://wa.me/923286993079)  
- ✉️ [junaidislam441@gmail.com](mailto:junaidislam441@gmail.com)
# Junaid_Portfolio
