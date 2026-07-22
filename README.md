# Dev Portfolio

Portfolio website modern yang dibuat menggunakan React + Vite untuk menampilkan profil developer, pengalaman, skill, project, sertifikat, dan halaman kontak.

## Preview

```txt
Live Demo: https://fikri-personal-web.vercel.app/
```

---

## Features

* Responsive design
* Animasi menggunakan Framer Motion
* Dashboard statistik
* Showcase project portfolio
* Halaman sertifikat
* Contact form menggunakan EmailJS
* GitHub contribution calendar
* Routing menggunakan React Router
* Toast notification

---

## Tech Stack

### Frontend

* React 18
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM
* Recharts
* React Icons
* React Hot Toast

### Service

* EmailJS

---

## Project Structure

```bash
src/
├── animations/
├── assets/
├── components/
├── constants/
├── data/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── styles/
└── utils/
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/username/dev-portfolio.git
```

Masuk ke folder project:

```bash
cd dev-portfolio
```

Install dependencies:

```bash
npm install
```

Jalankan project:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Environment Variables

Buat file `.env` lalu isi seperti berikut:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Pages

* Home
* About
* Dashboard
* Certificates
* Messages / Contact

---

## Assets Included

Project ini sudah menyertakan:

* CV PDF
* Certificate PDF
* Project thumbnails
* Logo & profile image

---

## Dependencies

```json
{
  "@emailjs/browser": "^4.4.1",
  "framer-motion": "^11.3.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-github-calendar": "^5.0.6",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.2.1",
  "react-router-dom": "^6.26.0",
  "recharts": "^2.12.7"
}
```

---

## Deployment

Project ini bisa di-deploy menggunakan:

* Vercel
* Netlify
* GitHub Pages

Contoh deploy Vercel:

```bash
npm install -g vercel
vercel
```

---

## Notes

* Jangan upload file `.env`
* Pastikan EmailJS sudah dikonfigurasi
* Optimalkan gambar sebelum deploy agar loading lebih cepat

---

## License

This project is open source and available under the MIT License.
