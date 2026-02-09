# 🚀 Panduan Instalasi JE-P3 Super Web App ke Shared Hosting

Panduan lengkap untuk menginstal JE-P3 Super Web App ke shared hosting (cPanel, DirectAdmin, Plesk, dll)

---

## 📋 Persyaratan Sistem

### Minimal Requirements:
- **Node.js**: v18.0.0 atau lebih tinggi
- **npm**: v9.0.0 atau lebih tinggi (atau `bun`)
- **PHP**: v7.4 atau lebih tinggi (untuk beberapa hosting)
- **Disk Space**: Minimal 500MB
- **Memory**: Minimal 512MB RAM

### Rekomendasi:
- **Node.js**: v20 LTS atau lebih baru
- **npm**: v10 atau lebih baru
- **Disk Space**: 1GB atau lebih
- **Memory**: 1GB RAM atau lebih

---

## 🔧 Metode 1: Static Export (Paling Mudah & Direkomendasikan)

**Cocok untuk:** Shared hosting tanpa Node.js support, atau ingin performa maksimal

### Langkah 1: Persiapan Lokal

```bash
# Masuk ke direktori project
cd /path/to/your/project

# Install dependencies (jika belum)
npm install
# atau
bun install

# Edit next.config.ts untuk static export
```

### Langkah 2: Konfigurasi Static Export

Buka file `next.config.ts` dan tambahkan konfigurasi:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Tambahkan ini untuk static export
  images: {
    unoptimized: true,  // Required untuk static export
  },
  // Opsional: Trailing slash
  trailingSlash: true,
};

export default nextConfig;
```

### Langkah 3: Build Project

```bash
# Build untuk production
npm run build
# atau
bun run build

# Hasil build akan ada di folder 'out'
```

Setelah build selesai, semua file static akan ada di folder `out/`

### Langkah 4: Upload ke Shared Hosting

#### Opsi A: Menggunakan File Manager (cPanel)

1. Buka cPanel → File Manager
2. Masuk ke folder `public_html` atau subdomain yang diinginkan
3. Upload semua file dari folder `out/`:
   - Pilih semua file di folder `out/` (Ctrl+A atau Cmd+A)
   - Compress/Zip dulu (opsional tapi disarankan)
   - Upload ke File Manager
   - Extract jika di-upload sebagai zip

#### Opsi B: Menggunakan FTP/SFTP

```bash
# Menggunakan lftp atau filezilla
# Upload semua file dari folder 'out/' ke server
lftp -u username,hostname
mirror -R out/ /public_html/
```

#### Opsi C: Menggunakan rsync

```bash
rsync -avz --delete out/ username@hostname:/public_html/
```

### Langkah 5: Konfigurasi .htaccess (cPanel)

Buat atau edit file `.htaccess` di root folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Langkah 6: Verifikasi Instalasi

1. Buka browser dan akses domain/subdomain Anda
2. Pastikan halaman JE-P3 muncul dengan sempurna
3. Cek semua section dan animasi

---

## 🔧 Metode 2: Node.js Server (Full Features)

**Cocok untuk:** Shared hosting dengan Node.js support (cPanel dengan Node.js Selector)

### Langkah 1: Setup Node.js di cPanel

1. Login ke cPanel
2. Cari "Setup Node.js App" atau "Node.js Selector"
3. Klik "Create Application"
4. Konfigurasi:
   - **Node.js Version**: v20.x LTS
   - **Application Mode**: Production
   - **Application Root**: `jep3-app`
   - **Application URL**: `domain.com` atau subdomain
   - **Application Startup File**: `package.json` (Next.js akan otomatis detect)

### Langkah 2: Upload Project Files

```bash
# Upload seluruh project (kecuali node_modules, .next, out)
# Menggunakan File Manager atau FTP
```

Atau clone dari git:

```bash
cd ~/jep3-app
git clone <repository-url> .
rm -rf .git
```

### Langkah 3: Install Dependencies

Via SSH:

```bash
cd ~/jep3-app
npm install --production
# atau
bun install --production
```

### Langkah 4: Build Application

```bash
cd ~/jep3-app
npm run build
# atau
bun run build
```

### Langkah 5: Konfigurasi Environment

Buat file `.env` di root folder:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://domain.com
```

### Langkah 6: Restart Application

1. Kembali ke "Setup Node.js App" di cPanel
2. Klik "Restart" pada aplikasi JE-P3
3. Cek logs untuk memastikan tidak ada error

### Langkah 7: Verifikasi

Akses domain/subdomain yang sudah dikonfigurasi dan pastikan aplikasi berjalan.

---

## 🔧 Metode 3: Menggunakan Vercel (Paling Mudah)

**Cocok untuk:** Tidak mau ribet dengan konfigurasi server

### Langkah 1: Push ke GitHub/GitLab/Bitbucket

```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit: JE-P3 Super Web App"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

### Langkah 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub/GitLab/Bitbucket
3. Klik "Add New Project"
4. Pilih repository JE-P3
5. Konfigurasi:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` atau `bun run build`
   - **Output Directory**: `.next` (default)
6. Klik "Deploy"

### Langkah 3: Setup Custom Domain (Opsional)

1. Di dashboard Vercel project
2. Klik "Settings" → "Domains"
3. Tambah domain Anda
4. Update DNS records sesuai instruksi Vercel

---

## 🔧 Metode 4: Docker Container (Advanced)

**Cocok untuk:** Shared hosting dengan Docker support

### Langkah 1: Buat Dockerfile

Buat file `Dockerfile` di root project:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Langkah 2: Update next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... konfigurasi lainnya
};
```

### Langkah 3: Build & Run Docker

```bash
# Build image
docker build -t jep3-app .

# Run container
docker run -p 3000:3000 jep3-app
```

---

## 🎯 Troubleshooting

### Masalah 1: Blank Page setelah Deploy

**Solusi:**
- Cek console browser untuk error JavaScript
- Pastikan semua asset terupload dengan benar
- Verifikasi path di `.htaccess` sudah benar

### Masalah 2: Animasi tidak berjalan

**Solusi:**
- Pastikan file CSS terupload
- Cek browser compatibility
- Clear browser cache

### Masalah 3: Build Error

**Solusi:**
- Hapus folder `.next` dan node_modules
- Jalankan `npm install` atau `bun install` ulang
- Pastikan Node.js version sesuai requirement

### Masalah 4: Images tidak muncul

**Solusi:**
- Pastikan folder `public/` terupload
- Cek file permissions (755 untuk folder, 644 untuk files)
- Untuk static export, pastikan `images.unoptimized: true` di next.config.ts

---

## 📊 Performance Optimization Tips

### 1. Enable Compression

Tambahkan ke `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css 
  AddOutputFilterByType DEFLATE application/javascript application/json
</IfModule>
```

### 2. Enable Browser Caching

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. Optimize Images

- Sebelum upload, kompress semua images
- Gunakan format WebP untuk better compression
- Pastikan ukuran image sesuai kebutuhan

### 4. Minimize Files

- Next.js otomatis minify CSS dan JS
- Tidak perlu manual minification

---

## 🔐 Security Checklist

- [ ] Remove `.env` file dari production (gunakan environment variables hosting)
- [ ] Set proper file permissions (755 folders, 644 files)
- [ ] Enable HTTPS (SSL certificate)
- [ ] Set up proper CORS if needed
- [ ] Regular backups
- [ ] Monitor error logs

---

## 📞 Support & Resources

### Dokumentasi Resmi:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Deployment](https://vercel.com/docs/deployments/overview)
- [cPanel Node.js](https://docs.cpanel.net/cpanel/nodejs-selector/)

### Community:
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## ✅ Pre-Deployment Checklist

- [ ] Build berhasil tanpa error
- [ ] Semua pages berfungsi di local
- [ ] Semua animations berjalan smooth
- [ ] Responsive design sudah tested
- [ ] Images optimized
- [ ] Environment variables sudah diset
- [ ] SSL certificate aktif
- [ ] Backup dibuat sebelum deployment
- [ ] Monitoring/error tracking disiapkan

---

## 🎉 Selesai!

Setelah mengikuti salah satu metode di atas, JE-P3 Super Web App Anda sudah live dan bisa diakses!

**Langkah terakhir:**
1. Test semua functionality
2. Share link ke team/stakeholders
3. Monitor performance dan user feedback
4. Siapkan untuk scale jika traffic meningkat

---

*Dibuat dengan ❤️ untuk JE-P3 - Jaringan Ekosistem Pengusaha Persatuan Pembangunan*
