# JE‑P3 Super Ecosystem Platform  
### PT Digital Bisnis Manajemen – Official Next.js Stack  
**Chief Technology Officer / Principal Architect:** Tn. H. Gugun Gunara (Prabu Danling)

---

JE‑P3 (Jaringan Ekosistem Pengusaha Persatuan Pembangunan) adalah **super‑ekosistem bisnis multinasional** yang lahir dari desa dan dirancang untuk menghubungkan 83.763 desa Indonesia dengan 195 negara melalui infrastruktur digital, blockchain, AI, dan logistik cerdas.  

JE‑P3 (The Ecosystem Network of Entrepreneurship for Development) is a **multi‑national business super‑ecosystem** born from Indonesian villages and engineered to connect **83,763 rural nodes to 195 countries** through digital infrastructure, blockchain, AI, and intelligent logistics.

Repository ini berisi kode sumber **portal digital resmi PT Digital Bisnis Manajemen** untuk domain `pppbisnis.com` – gerbang utama ekosistem JE‑P3 bagi pengusaha, petani, koperasi, investor, dan mitra strategis global.  
This repository contains the official codebase of **PT Digital Bisnis Manajemen** for `pppbisnis.com` – the primary digital gateway into the JE‑P3 ecosystem for entrepreneurs, farmers, cooperatives, investors, and strategic partners.

> “From Village to Global Market – turning every village into an export engine, every farmer into an entrepreneur, and every local product into a global brand.”

---

## 1. Vision & Strategic Context  
### Konteks Visi & Strategi

- **Economic Civilization Architecture**  
  Implementasi praktis dari *Kitab 39 Dokumen Bisnis Kelas Dunia JE‑P3* – mulai dari visi, masterplan, model bisnis, hingga governance dan ESG.  
  Practical implementation of the *JE‑P3 39 World‑Class Business Documents* – from vision and masterplan to business models, governance, and ESG.

- **Rural‑First, Tech‑Intensive**  
  Desa sebagai pusat, teknologi sebagai enabler: Next.js, AI, blockchain, IoT, dan cloud‑native.  
  Villages at the center, technology as the enabler: Next.js, AI, blockchain, IoT, and cloud‑native infrastructure.

- **Open, Post‑Partisan Ecosystem**  
  Terbuka bagi pengusaha PPP dan non‑PPP yang berkomitmen pada ekonomi kerakyatan digital.  
  Open to PPP and non‑PPP entrepreneurs committed to digital people‑centric economics.

- **Global‑Ready Architecture**  
  Dirancang untuk replikasi ke Asia Tenggara, Afrika, dan Amerika Latin melalui arsitektur multi‑negara dan multi‑mata uang.  
  Architected for replication across Southeast Asia, Africa, and Latin America with multi‑country, multi‑currency capabilities.

---

## 2. Technology Stack  
### Tumpukan Teknologi

Platform ini dibangun di atas **scaffold modern** yang dioptimalkan untuk skala nasional–global.  
This platform is built on a **modern scaffold** optimized for national‑to‑global scale.

### Core Framework

- **Next.js 16** – App Router, server components, edge‑ready rendering.  
- **TypeScript 5** – Type safety end‑to‑end.  
- **Tailwind CSS 4** – Utility‑first styling for responsive, consistent design.

### UI & Interaction

- **shadcn/ui** – High‑quality, accessible UI components.  
- **Lucide Icons** – Clean, modern iconography.  
- **Framer Motion** – Smooth animations for premium user experience.  
- **Next Themes** – Elegant dark/light mode management.

### Forms, State & Data

- **React Hook Form + Zod** – Robust, type‑safe forms and validation.  
- **Zustand** – Simple yet scalable state management.  
- **TanStack Query** – Reliable data fetching, caching, and synchronization.

### Backend & Data Layer

- **Prisma ORM** – Modern database abstraction with explicit schema.  
- **Next.js Route Handlers** – Built‑in API routes for lightweight micro‑services.  
- *(Future)* Integrasi blockchain & IoT gateway sesuai arsitektur JE‑P3.  
  *(Future)* Blockchain and IoT gateway integration aligned with the JE‑P3 tech blueprint.

### Productivity & Internationalization

- **Next Intl** – Internationalization (Bahasa Indonesia, English, and local languages).  
- **date‑fns** – Modern date utilities.  
- **ReactUse** – Curated collection of reusable React hooks.

---

## 3. Project Structure  
### Struktur Proyek

```bash
src/
├─ app/                     # Next.js App Router (pages & layouts / halaman & layout)
│  ├─ page.tsx              # Main JE‑P3 / pppbisnis.com landing page
│  └─ layout.tsx            # Global layout, theming, shells
├─ components/
│  ├─ sections/             # Business sections (hero, ecosystem, membership, etc.)
│  ├─ navigation/           # JE‑P3 main navigation & menus
│  └─ ui/                   # Reusable shadcn/ui components
├─ lib/                     # Helpers, configuration, utilities
├─ prisma/                  # Database schema (when backend features are enabled)
└─ public/                  # Static assets (logos, icons, illustrations)
```

Bagi tim bisnis & konten, file yang paling sering disentuh:  
For business & content teams, these are the main touch points:

- `src/app/page.tsx` – Struktur halaman utama. / Main page structure.  
- `src/components/sections/*` – Copywriting hero, ekosistem, manfaat, paket membership. / Hero, ecosystem, benefits, membership packages.  
- `src/components/navigation/jep3-navigation.tsx` – Struktur menu & navigasi. / Navigation and menu structure.  
- `public/` – Logo dan aset visual kampanye. / Logos and visual campaign assets.

---

## 4. Development Workflow (Local)  
### Alur Kerja Pengembangan (Lokal)

Pastikan **Node.js LTS** sudah terpasang. / Ensure **Node.js LTS** is installed.

```bash
# 1. Clone repository
git clone https://github.com/prabudanling/website-jep3.git
cd website-jep3

# 2. Install dependencies
npm install

# 3. Jalankan server development / Start dev server
npm run dev

# Aplikasi tersedia di / App available at:
# http://localhost:3000
```

Script utama di `package.json` / Key scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 5. Deployment Strategy (Vercel)  
### Strategi Deploy (Vercel)

Platform ini di‑deploy di **Vercel** dengan pola **Git‑first**.  
This platform is deployed on **Vercel** following a **Git‑first** workflow.

1. Semua perubahan dikembangkan di branch `main` menggunakan Git.  
   All changes are developed on the `main` branch using Git.
2. Setiap `git push` ke `main` akan:  
   Each `git push` to `main` will:
   - Memicu build otomatis di Vercel. / Trigger an automatic Vercel build.  
   - Men‑deploy versi terbaru ke:  
     - `website-jep3.vercel.app` (preview / staging),  
     - `pppbisnis.com` dan `www.pppbisnis.com` (production) setelah DNS terset.  
       / once DNS is configured.

Monitoring dan rollback dilakukan melalui tab **Deployments** di dashboard Vercel.  
Monitoring and rollbacks are managed through the **Deployments** tab in the Vercel dashboard.

---

## 6. Git Workflow – Operational Playbook  
### Alur Git – Panduan Operasional

```bash
# 0. Masuk ke folder project / Enter project folder
cd path/to/website-jep3

# 1. Tarik update terbaru (jika bekerja tim)
#    Pull latest changes (when working in a team)
git pull origin main

# 2. Edit file di VS Code sesuai kebutuhan
#    Edit files in VS Code as needed

# 3. Cek perubahan / Inspect changes
git status

# 4. Stage perubahan / Stage changes
git add .

# 5. Commit dengan pesan yang jelas / Commit with a clear message
git commit -m "Update JE-P3 navigation & hero messaging"

# 6. Push ke GitHub → otomatis trigger deploy Vercel
#    Push to GitHub → automatically triggers Vercel deployment
git push origin main
```

Prinsip / Principles:

- **One logical change → one commit** dengan pesan deskriptif. / one logical change → one descriptive commit.  
- Hindari pesan generik seperti `update` atau `fix`. / Avoid generic messages such as `update` or `fix`.

---

## 7. Alignment with JE‑P3 39 World‑Class Documents  
### Kesesuaian dengan 39 Dokumen JE‑P3

Repository ini memetakan **Level 3–5** dari *Kitab 39 Dokumen Bisnis Kelas Dunia JE‑P3* ke dalam kode:  

This repository maps **Levels 3–5** of the *JE‑P3 39 World‑Class Business Documents* into code:

- **Visi & Masterplan** → Struktur halaman, narasi brand, dan arsitektur navigasi.  
  Vision & masterplan → Page structure, brand narrative, and navigation architecture.

- **Produk & Teknologi** → Next.js architecture, modular sections, dan kesiapan integrasi AI/blockchain/IoT.  
  Product & technology → Next.js architecture, modular sections, and readiness for AI/blockchain/IoT integrations.

- **Ekosistem & Tata Kelola** → Pemisahan peran `pppdigital.id` (super‑platform operasional) dan `pppbisnis.com` (portal komunikasi & pendaftaran).  
  Ecosystem & governance → Clear separation between `pppdigital.id` (operational super‑platform) and `pppbisnis.com` (communication & onboarding portal).

Setiap fitur baru sebaiknya diuji terhadap tiga filter:  
Each new feature should be tested against three filters:

1. **Menaikkan pendapatan petani/pengusaha?**  
   Does it increase farmer/entrepreneur income?  
2. **Transparan & dapat diaudit?**  
   Is it transparent and auditable?  
3. **Scalable ke 83.763 desa?**  
   Is it scalable to all 83,763 villages?

---

## 8. Ownership & Credits  
### Kepemilikan & Penghargaan

- **Enterprise Owner**  
  PT **Digital Bisnis Manajemen** – Strategic Technology & Ecosystem Builder for JE‑P3.

- **Chief Technology Officer / Principal Architect**  
  **Tn. H. Gugun Gunara (Prabu Danling)**  
  Visioner arsitektur ekosistem digital desa–global, konsultan manajemen & teknologi sejak 2007.  
  Visionary architect of the village‑to‑global digital ecosystem, management & technology consultant since 2007.

- **Strategic References**  
  - *Kitab 39 Dokumen Bisnis Kelas Dunia JE‑P3* (vision, strategy, governance, ESG).  
  - Domain & ecosystem: `pppbisnis.com` (business/investor portal), `pppdigital.id` (operational super‑platform).

---

> Built as the official digital gateway of JE‑P3 by **PT Digital Bisnis Manajemen**,  
> engineered under the strategic direction of **Prabu Danling** –  
> for a new economic civilization from Indonesian villages to the world.
```
