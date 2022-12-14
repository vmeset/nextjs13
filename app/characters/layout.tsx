interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default RootLayout