import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "xPay — Accept Payments from Every Corner of the World",
  description:
    "No foreign entity. No compliance headache. No failed transactions. xPay is the global payments infrastructure built for modern businesses.",
  keywords: ["payments", "global payments", "fintech", "xPay", "payment gateway"],
  icons: {
    icon: "/assets/xpay-favicon1.svg",
  },
  openGraph: {
    title: "xPay — Global Payments Infrastructure",
    description: "Accept payments from every corner of the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
