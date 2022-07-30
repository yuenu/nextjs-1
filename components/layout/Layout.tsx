import MainHeader from "./MainHeader"

type PropType = {
  children: React.ReactNode
}

function Layout({children}: PropType) {
  return (
   <>
      <MainHeader />
      <main>{children}</main>
   </>
  )
}

export default Layout