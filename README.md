# Shiva's Developer Portfolio 

A modern, responsive, and interactive Personal Portfolio built to showcase my skills, projects, and professional experience as a Full-Stack MERN Developer.

##  Features

- **Modern UI/UX**: Designed using Tailwind CSS with glassmorphism, gradient accents, and subtle animations.
- **Fully Responsive**: Optimized for seamless viewing across all devices (Mobile, Tablet, Desktop).
- **Interactive Contact Form**: Integrated with [EmailJS](https://www.emailjs.com/) to receive messages securely without a dedicated backend server.
- **Dynamic Projects Section**: Smoothly displays personal projects, professional experience, and links to live demos & GitHub repositories.
- **Technology Showcase**: Organized technology stack into Frontend, Backend, and DevOps/Tools categories.

##  Tech Stack

- **Frontend Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS animations
- **Icons**: `react-icons` (FontAwesome, SimpleIcons, Feather Icons)
- **Email Service**: EmailJS
- **Deployment**: Configured out of the box for optimal deployment on **Vercel**

##  Getting Started

Follow these steps to run the portfolio on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/Silurana/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
To get the contact form working, you'll need EmailJS credentials. Rename the provided `.env.example` file to `.env` (or create a new `.env` file) and fill in your keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run the Development Server
```bash
npm run dev
```

The app will become available at `http://localhost:5173`. 

##  Deployment (Vercel)

This project is optimized for deployment via [Vercel](https://vercel.com/). 

1. Push your code to a GitHub repository.
2. Import the project into your Vercel dashboard.
3. Vercel will automatically detect **Vite** as the framework.
4. **Important**: Make sure to add the `VITE_EMAILJS_*` environment variables in your Vercel Project Settings.
5. The included `vercel.json` will automatically ensure proper routing and cache static assets for extremely fast load times.

##  Contact

- **Email**: shibanandarana.dev@gmail.com
- **LinkedIn**: [shibananda-rana](https://www.linkedin.com/in/shibananda-rana)
- **GitHub**: [Silurana](https://github.com/Silurana)

---

