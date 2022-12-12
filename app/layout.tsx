import NavBar from '../components/NavBar';
import '../styles/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}
      <NavBar/>
      </body>
    </html>
  )
}
