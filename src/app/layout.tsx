import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://junaid-portfolio.vercel.app"),
  title: "Muhammad Junaid — Frontend Developer & UI/UX Engineer",
  description:
    "Production portfolio of Muhammad Junaid, Frontend Developer specializing in React.js, Tailwind CSS, TypeScript, and interactive web animations. Based in Lahore, Pakistan.",
  keywords: [
    "Muhammad Junaid",
    "Frontend Developer",
    "React.js Engineer",
    "UI/UX Designer",
    "Tailwind CSS",
    "Framer Motion",
    "Next.js Developer",
    "Lahore Developer",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Junaid", url: "https://github.com/" }],
  creator: "Muhammad Junaid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://junaid-portfolio.vercel.app",
    title: "Muhammad Junaid — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Tailwind CSS, and interactive animations. Based in Lahore, Pakistan.",
    siteName: "Muhammad Junaid Portfolio",
    images: [
      {
        url: "/profile-pic.jpeg",
        width: 800,
        height: 1000,
        alt: "Muhammad Junaid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Junaid — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Tailwind CSS, and interactive animations. Based in Lahore, Pakistan.",
    images: ["/profile-pic.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans text-body selection:bg-zinc-950 selection:text-white">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#09090b",
              color: "#ffffff",
              border: "1px solid #27272a",
              borderRadius: "0.75rem",
            },
            className: "text-xs font-medium",
          }}
        />
      </body>
    </html>
  );
}
