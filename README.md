
# 📚 BorrowBooks

A modern online book borrowing platform built with **Next.js**, featuring user authentication, book browsing, and a clean responsive UI.


## 🌐 Live Demo

>(https://borrowbooks-next.vercel.app/)


###  Clone the repository

```bash
git clone  https://github.com/Rabiul-Sujon/borrowbooks.next.git
cd borrowbooks.next


@@ ✨ Features

- 🔐 **Authentication** — Email/password & Google OAuth (via `better-auth`)
- 📖 **Browse Books** — Explore all 12 books with search and category filtering
- 🔎 **Book Details** — Individual book pages with full details
- 👤 **User Profile** — View and update profile information
- 🛡️ **Private Routes** — Protected pages for authenticated users only
- 🎨 **Modern UI** — Built with Tailwind CSS & DaisyUI, animated with animate.css
- 🌀 **Swiper Carousel** — Interactive banner and featured book sliders
- 🔔 **Toast Notifications** — Real-time feedback with react-hot-toast



@@ 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js |
| Language | JavaScript |
| Styling | Tailwind CSS, DaisyUI |
| Authentication | better-auth |
| Database | MongoDB |
| Icons | react-icons |
| Carousel | Swiper |
| Animations | animate.css |
| Notifications | react-hot-toast |
| Deployment | Vercel |


@@  MongoDB Connection Fix

If you experience intermittent `ECONNREFUSED` errors:

1. The `family: 4` option is set in `auth.js` to force IPv4 DNS resolution.
2. Run `ipconfig /flushdns` in your terminal.
3. Restart VS Code.