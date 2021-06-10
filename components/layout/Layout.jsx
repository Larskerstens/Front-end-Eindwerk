import Footer from "./Footer"
import Navigation from "../nav/Navigation"

function Layout({ children }) {
    return (
        <>
          <Navigation />
           {children} 
          <Footer />
        </>
    );
}

export default Layout;
