import NavBar from "../NavBar";
import Footer from "../footer";


export default function RootLayout({children}) {
    return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
    );
  }