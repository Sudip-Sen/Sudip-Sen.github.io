import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudip Sen | GIS & Remote Sensing Researcher",
  description: "Researcher at Gazipur Agricultural University specializing in Precision Agriculture, Remote Sensing, and Machine Learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}