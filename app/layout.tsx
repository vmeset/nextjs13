import Footer from '../src/components/layout/Footer/Footer'
import Header from '../src/components/layout/Header/Header'
import '../styles/globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <head>
        <title>R&M</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout