import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@/Store/Provider'
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/next";

const poppin = Poppins({
  weight: ['100', '400'],
  subsets: ['latin'],
})


export const metadata = {
  title: "e-commerce demo",
  description:
    "Discover high-quality, affordable furniture in Nairobi. We offer stylish sofas, beds, dining sets, office desks, and custom designs delivered across Kenya.",
  keywords: [
    "furniture Nairobi",
    "furniture Kenya",
    "affordable furniture Nairobi",
    "buy furniture online Kenya",
    "Nairobi sofas",
    "beds in Nairobi",
    "office furniture Kenya",
    "dining sets Nairobi",
    "home furniture Kenya",
    "custom furniture Nairobi",
    "modern furniture Kenya",
    "wooden furniture Nairobi",
    "furniture shops Nairobi",
    "furniture delivery Nairobi",
    "living room sets Kenya",
  ],
  openGraph: {
    title: "E-commerce Template",
    description: "One place portifolio for your business",
    url: "https://www.smetemplate.xyz",
    siteName: "E-commerce Template",
    images: [
      {
        url: "/og-image.png", // Image in public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>

    </html>
  )
}
