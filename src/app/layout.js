import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export async function generateMetadata() {
  return {
    title: "Make New Fantasy | Your Gateway to Friendship and Play",
    description:
      "Explore Make New Fantasy, where friendship meets adventure. Join us for playful experiences and exciting connections designed to enhance your social life.",
    keywords: [
      "Make New Fantasy",
      "friendship services",
      "playboy jobs",
      "social connections",
      "adventure experiences",
      "fun and play",
      "friendship activities",
      "social engagement",
      "lifestyle enhancement",
      "creative friendships",
    ],
    icons: {
      icon: "/img/favicon.png",
      shortcut: "/img/favicon.png",
      apple: "/img/favicon.png",
    },
    openGraph: {
      title: "Make New Fantasy | Your Gateway to Friendship and Play",
      description:
        "Explore Make New Fantasy, where friendship meets adventure. Join us for playful experiences and exciting connections designed to enhance your social life.",
      images: "/img/favicon.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link rel="icon" href={process.env.NEXT_PUBLIC_FAVICON} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
