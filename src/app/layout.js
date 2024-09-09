import Header from './Header/page'
import Footer from './Footer/page'
export const metadata = {
  title: 'NXTGEN Broker',
  description: 'Generated by Digi India Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:'0', padding:'0', textDecoration:'none'}}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
