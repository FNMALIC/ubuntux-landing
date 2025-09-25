import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const signikaNegative = Signika_Negative({
    variable: "--font-signika-negative",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: {
        default: 'Ubuntu-x - Redefining Money Transfers in Africa',
        template: '%s | Ubuntu-x'
    },
    description: 'Ubuntu-x is a revolutionary fintech platform for seamless money transfers, crypto exchange, and virtual cards in Africa. send money easily, exchange cryptocurrencies, and manage digital payments.',
    keywords: ['money transfer', 'fintech', 'Africa', 'Cameroon', 'cryptocurrency exchange', 'virtual cards', 'mobile money', 'international transfers', 'digital payments'],
    authors: [{ name: 'Ubuntu-x Team' }],
    creator: 'Ubuntu-x',
    publisher: 'Ubuntu-x',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Ubuntu-x - Redefining Money Transfers in Africa',
        description: 'Ubuntu-x is a revolutionary fintech platform for seamless money transfers, crypto exchange, and virtual cards in Africa. send money easily, exchange cryptocurrencies, and manage digital payments.',
        url: 'https://ubuntu-x.com',
        siteName: 'Ubuntu-x',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Ubuntu-x - African Fintech Platform',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ubuntu-x - Redefining Money Transfers in Africa',
        description: 'A revolutionary fintech platform for seamless money transfers, crypto exchange, and virtual cards in Africa',
        images: ['/twitter-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    canonical: 'https://ubuntu-x.com',
    alternates: {
        canonical: 'https://ubuntu-x.com',
        languages: {
            'en-US': 'https://ubuntu-x.com/en',
            'fr-FR': 'https://ubuntu-x.com/fr',
        },
    },
    verification: {
        google: 'google-site-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-863YCSX08F"></Script>
            <Script id="google-analytics">
                {
                    `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-863YCSX08F');
                     `
                }
            </Script>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Ubuntux",
                        "url": "https://ubuntux.com",
                        "logo": "https://ubuntux.com/logo.png",
                        "description": "A revolutionary fintech platform for seamless money transfers, crypto exchange, and virtual cards in Africa",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Bonamousadi clinic necker",
                            "addressLocality": "Douala",
                            "addressRegion": "Littoral",
                            "addressCountry": "Cameroon"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+237-683-094-406",
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "https://www.facebook.com/Ubuntux",
                            "https://www.linkedin.com/company/ubuntu-x",
                            "https://www.instagram.com/Ubuntux237"
                        ]
                    })
                }}
            />
        </head>
        <body className={` `}>
            {children}
        </body>
        </html>
    );
}