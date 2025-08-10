import './globals.css';

export const metadata = {
  title: 'Power Esthétique Formation',
  description: 'La référence des formations esthétiques haut de gamme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
