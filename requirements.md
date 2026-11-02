# ROLE & OBJECTIVE
Act as a Principal Frontend Engineer and Minimalist UI/UX Designer. Build a complete, production-ready, responsive portfolio web application for **Muhammad Junaid (Frontend Developer)**. 

You must strictly replicate the high-contrast monochrome editorial aesthetic and exact Hero layout of the reference design while expanding the application into a complete single-page portfolio ready for zero-config deployment on **Vercel**.

---

# 1. TECH STACK & ARCHITECTURE SPECIFICATIONS
- **Framework:** React.js (Vite + TypeScript with a `/api` Vercel Serverless Function directory, OR Next.js App Router).
- **Styling:** Tailwind CSS (strict monochrome palette: pure white `#FFFFFF` background, off-white `#FAFAFA` secondary cards, `#E4E4E7` borders, `#52525B` body text, and `#09090B` deep black accents).
- **UI Component Primitives:** `shadcn/ui` + `@radix-ui` primitives:
  - Use Radix `NavigationMenu` / custom floating pill navbar with active scroll-spy state.
  - Use Radix `Dialog` for detailed Project Case Study popups.
  - Use Radix `Sheet` for the mobile responsive navigation drawer.
  - Use Radix `Tooltip` for social links and tech stack icon badges.
  - Use `sonner` or Radix `Toast` for real-time contact form notifications.
- **Animations:** `framer-motion` for subtle entrance reveals, staggered project grid animations, magnetic button hover states, and a typewriter text effect with a blinking cursor in the Hero section.
- **Icons:** `lucide-react` for UI icons + clean SVG icons for GitHub, LinkedIn, WhatsApp, and tech stack logos.
- **Contact Form Backend (Nodemailer on Vercel):**
  - Build a Node.js Serverless API endpoint (`/api/contact.ts` or `/app/api/contact/route.ts`).
  - Explicitly force the Node.js runtime (`export const runtime = 'nodejs'`).
  - Configure `nodemailer` using port `465` (`secure: true`) or `587` with `process.env.SMTP_HOST`, `process.env.SMTP_USER`, and `process.env.SMTP_PASS`.
  - **CRITICAL:** Always `await transporter.sendMail(...)` inside a `try/catch` block before returning the HTTP response so Vercel's serverless lifecycle does not terminate the SMTP handshake prematurely.

---

# 2. EXACT VISUAL DESIGN & HERO SECTION LAYOUT
Match the reference design with pixel-level fidelity:

### Top Floating Pill Navbar
- Centered horizontally at the top (`fixed top-6 left-1/2 -translate-x-1/2 z-50`).
- Container styling: `bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm rounded-full px-3 py-1.5 flex items-center gap-2 md:gap-6`.
- **5 Navigation Links (each with a small outline Lucide icon on the left):**
  1. `Home` (`Home` icon) — Default active state styled as a solid black pill (`bg-zinc-950 text-white rounded-full px-4 py-1.5 font-medium`).
  2. `About` (`IdCard` / `UserSquare2` icon) — Ghost pill (`text-zinc-700 hover:text-zinc-950 px-3 py-1.5`).
  3. `Projects` (`Folder` icon) — Ghost pill.
  4. `services` (`Code2` icon `</>`) — Ghost pill.
  5. `Contact` (`Mail` icon) — Ghost pill.

### Hero Section (`#home`) — 2-Column Asymmetric Grid
- Container: `max-w-6xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`.
- **Left Column (`lg:col-span-7`):**
  1. **Status Pill Badge:** Light gray pill (`bg-zinc-200/70 text-zinc-800 text-xs font-medium px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-6`) reading `. Available for freelance work`.
  2. **Primary Heading:** Ultra-bold sans-serif (`text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]`) split across two lines:
     `Hi, I'm Muhammad`
     `Junaid`
  3. **Typewriter Subtitle:** Classical serif typography (`font-serif text-2xl sm:text-3xl text-zinc-900 mt-4 mb-5 flex items-center`) cycling smoothly through:
     - `Frontend Developer|`
     - `React.js Engineer|`
     - `UI/UX & Motion Crafter|`
  4. **Bio Paragraph (`text-zinc-600 text-base leading-relaxed max-w-xl mb-6`):**
     "I create beautiful, functional, and user-centered digital experiences. Specializing in React.js, Tailwind CSS, and interactive web animations, I bring ideas to life through clean code, scalable architecture, and thoughtful design."
  5. **Metadata Row (`flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-800 mb-7`):**
     - `MapPin` icon (filled/bold) + `Based in Lahore, Pakistan`
     - `Briefcase` icon + `Available Now`
  6. **CTA Button Group (`flex flex-wrap items-center gap-4 mb-8`):**
     - **Button 1 (Primary):** Solid black button (`bg-zinc-950 text-white hover:bg-zinc-800 rounded-lg px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 shadow-sm transition-transform active:scale-95`) reading `→ Hire Me` (smooth scrolls to `#contact`).
     - **Button 2 (Secondary):** Outlined button (`bg-white text-zinc-900 border border-zinc-400 hover:bg-zinc-50 rounded-lg px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 transition-colors`) with a `Download` icon reading `Download CV` (triggers download of `/M_Junaid_CV.pdf`).
  7. **Horizontal Divider:** `border-t border-zinc-400/80 w-full max-w-lg mb-6`.
  8. **Social Row (`flex items-center gap-5 text-sm font-medium text-zinc-700`):**
     - Text label: `Follow me:`
     - Icon links (wrapped in Radix `Tooltip`):
       - GitHub (`https://github.com/`)
       - LinkedIn (`https://www.linkedin.com/in/muhammad-junaid-063b06263/`)
       - WhatsApp (`https://wa.me/923286993079`)
       - Email (`mailto:junaidislam441@gmail.com`)
- **Right Column (`lg:col-span-5 flex justify-center lg:justify-end`):**
  - High-contrast monochrome developer illustration card (`w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm flex items-end justify-center`). Render a stylized monochrome vector/anime-inspired developer illustration working at a laptop, with a clean prop interface so the user can swap in a custom `.png`/`.webp` image asset.

---

# 3. FULL PORTFOLIO CONTENT PAYLOAD (NO PLACEHOLDERS)

## Section 2: About, Tech Stack & Experience (`#about`)
Create a clean 2-column or Bento-style layout with subtle Framer Motion scroll reveals:

### Developer Profile & Community
- **Narrative:** Frontend Developer based in Sabzazar, Lahore, Pakistan, pursuing a Bachelor's in Computer Science (BSCS) at Virtual University of Pakistan. Passionate about building accessible, high-performance interfaces using React.js, TypeScript, Redux Toolkit, and modern CSS frameworks. Actively engaged in Lahore's developer community, including Google Developer Group (GDG) Lahore workshops exploring AI, Generative AI, and Gemini integrations.

### Categorized Technical Skills (Interactive Radix Tooltip / Badge Grid)
- **Core Languages:** JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, C, C++
- **Frontend & State Management:** React.js, Redux Toolkit (RTK)
- **UI Libraries & Styling:** Tailwind CSS, shadcn/ui, Radix UI, Material-UI (MUI), Bootstrap 5
- **Animation & Smooth Scroll:** GSAP, Framer Motion, Locomotive Scroll, Lenis, AOS
- **Web Performance & Tooling:** Lazy Loading, Code Splitting, Image Optimization, Git, GitHub, GitLab, Canva

### Experience & Education Timeline
- **Frontend Developer (Internship)** — *AAA Digital Solutions / AAA Digital Marketing (Model Town, Lahore · On-site)*
  - *Period:* Dec 2024 – Apr 2025 (5 mos)
  - *Highlights:* Engineered responsive, user-friendly production web applications for corporate and logistics clients. Assisted in UI architecture, component debugging, cross-browser responsiveness, and performance optimization.
- **Client Communication & Lead Operations** — *Links Immigration Consultants & ZH IT Solution (Lahore)*
  - *Period:* Sep 2024 – Mar 2026
  - *Highlights:* Managed international client communications (USA market), technical troubleshooting, and lead pipeline qualification—developing strong stakeholder communication and requirement-gathering skills.
- **Bachelor of Science in Computer Science (BSCS)** — *Virtual University of Pakistan (VU)*
  - *Period:* 2022 – 2026 / 2027
- **Intermediate in Computer Science (ICS)** — *Punjab College of Engineering & Technology, Lahore*
  - *Period:* 2020 – 2023
- **Matriculation in Computer Science** — *Royal Heaven Cambridge School, Lahore*
  - *Period:* 2020 – 2021

---

## Section 3: Featured Projects (`#projects`)
Build a filterable project grid (`All`, `React & UI`, `Corporate & Logistics`) using clean monochrome cards (`rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-950 hover:shadow-md transition-all`) and a Radix `Dialog` modal for detailed breakdown:

1. **Abaseen Group Corporate Web Platform (Abbaseen Real Estate)**
   - *Timeline:* Mar 2025 – Apr 2025 | *Organization:* AAA Digital Marketing
   - *Summary:* Designed and developed a responsive, modern corporate portal for Abaseen Group, a diversified conglomerate based in Lahore operating across real estate, engineering, agriculture, and industrial services.
   - *Key Achievements:* Engineered smooth navigation flows, mobile-first layouts, and optimized asset loading to elevate the conglomerate's digital presence and accessibility.
   - *Tech Badges:* `HTML5`, `CSS3`, `JavaScript`, `Responsive Design`, `Performance Optimization`
2. **Ashton Logistics & Supply Chain Portal**
   - *Timeline:* Jan 2025 – Feb 2025 | *Organization:* AAA Digital Marketing
   - *Summary:* Built a scalable, high-performance web platform for Ashton Logistics, a freight forwarding and supply chain solutions provider.
   - *Key Achievements:* Utilized Tailwind CSS for utility-first scalable styling and interactive JavaScript interfaces to ensure seamless cross-device navigation and rapid quote discovery.
   - *Tech Badges:* `HTML5`, `Tailwind CSS`, `JavaScript`, `UI/UX Design`
3. **AAA Digital Interactive Web Experience**
   - *Timeline:* Dec 2024 – Apr 2025 | *Organization:* AAA Digital Solutions
   - *Summary:* Developed modular, reusable React.js frontend interfaces and interactive scroll animations for agency web applications.
   - *Key Achievements:* Integrated state management, code splitting, and fluid UI transitions to boost engagement and Core Web Vitals scores.
   - *Tech Badges:* `React.js`, `Tailwind CSS`, `GSAP / Framer Motion`, `Git`

---

## Section 4: Services (`#services`)
Render a 6-card minimalist grid with black icon badges and subtle hover elevation:
1. **Custom Frontend Development:** Building fast, interactive Single Page Applications (SPAs) and web portals using React.js, TypeScript, and Redux Toolkit.
2. **Responsive UI & Design Systems:** Translating designs into pixel-perfect, accessible interfaces using Tailwind CSS, shadcn/ui, Radix UI, MUI, or Bootstrap 5.
3. **Web Animations & Micro-Interactions:** Crafting smooth scroll experiences and high-impact motion choreography with GSAP, Framer Motion, Lenis, and Locomotive Scroll.
4. **SaaS & Corporate Web Design:** Designing clean, conversion-focused landing pages and multi-page corporate websites.
5. **Frontend Performance Optimization:** Improving load speeds and Lighthouse scores via lazy loading, code splitting, and image optimization.
6. **UX Research & Interface Modernization:** Auditing existing web products to fix usability bottlenecks and modernize legacy UI codebases.

---

## Section 5: Contact Section & Nodemailer Integration (`#contact`)
- **Left Column (Direct Contact Card):**
  - Title: `Let's talk about your next project.`
  - Location: `Sabzazar, Lahore, Punjab, Pakistan`
  - Email: `junaidislam441@gmail.com` (include a one-click "Copy Email" button that triggers a Radix/Sonner toast)
  - Phone / WhatsApp: `+92 328 6993079`
  - Spoken Languages: `English`, `Urdu`, `Punjabi`
- **Right Column (Interactive Contact Form):**
  - Built with `shadcn/ui` Input, Textarea, Label, and Button components.
  - Fields: `Name` (required), `Email` (required, validated), `Subject` (required), `Message` (required).
  - Submit button shows a spinning `Loader2` icon while `isSubmitting` is true, posts JSON to `/api/contact`, and triggers a success/error toast notification.
- **Serverless API Route (`/api/contact`):**
  - Provide the complete, ready-to-deploy file using `nodemailer`.
  - Document the required Vercel Environment Variables (`SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_USER=junaidislam441@gmail.com`, `SMTP_PASS=<16-digit-google-app-password>`) in a `.env.example` file.
  - If using Vite instead of Next.js, also generate the `vercel.json` configuration file so `/api/*` routes execute as Vercel Functions while client routes rewrite cleanly to `/index.html`.