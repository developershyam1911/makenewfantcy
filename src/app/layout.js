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
// , { ssr: false }
// , { ssr: false }
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

export async function generateMetadata() {
  return {
    title: "Make New Fantasy - Friendship Club | Meeting for Just 1999/-",
    description:
      "Register at Make New Fantasy Club and get the Madam's phone number and meeting details within 10 minutes. Enjoy a premium friendship experience for just 1999/-.",
    keywords: [
      "Make New Fantasy",
      "friendship club",
      "affordable friendship plans",
      "playboy jobs near me",
      "playboy jobs ",
      "gigolo jobs",
      "gigolo jobs near me",
      "social connection",
      "friendship meetings",
      "lifestyle enhancement",
      "social engagement",
      "friendship Club alternative",
      "fun and friendship",
    ],
    icons: {
      icon: "/img/logo.png",
      shortcut: "/img/logo.png",
      apple: "/img/logo.png",
    },
    openGraph: {
      title: "Make New Fantasy - Friendship Club | Meeting for Just 1999/-",
      description:
        "Register at Make New Fantasy Club and get the Madam's phone number and meeting details within 10 minutes. Enjoy a premium friendship experience for just 1999/-.",
      images: "/img/logo.png",
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
