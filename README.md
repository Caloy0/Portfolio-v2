# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase your skills, projects, and experience to recruiters and potential employers.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - Reusable component library (configured)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Edit `src/app/page.tsx` to customize:

- **Name**: Replace "Your Name" in the hero section
- **Title**: Update your job title and tech stack
- **About**: Modify the About Me section with your bio
- **Skills**: Add or remove skills in the skills grid
- **Projects**: Update project cards with your actual projects
- **Experience**: Add your work history
- **Contact**: Update email, phone, and location

### Styling

The project uses CSS variables for theming. You can customize colors by editing `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... other variables */
}
```

### Adding Icons

Lucide React icons are already installed. Import and use them like:

```tsx
import { Mail, Phone } from "lucide-react";

<Mail size={24} />
<Phone size={20} />
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main portfolio page
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [shadcn/ui](https://ui.shadcn.com/)
