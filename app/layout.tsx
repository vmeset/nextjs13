import Header from '../src/components/layout/Header/Header'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <head>
        <title>R_M</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout