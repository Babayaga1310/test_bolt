import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Franco Bramagli — Landing pages que venden',
  description:
    'Diseño y desarrollo landing pages rápidas y responsive para negocios y profesionales. Se ven bien, cargan rápido y funcionan perfecto en celular.',
  openGraph: {
    title: 'Franco Bramagli — Landing pages que venden',
    description:
      'Diseño y desarrollo landing pages rápidas y responsive para negocios y profesionales.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
