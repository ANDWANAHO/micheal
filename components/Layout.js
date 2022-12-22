import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({children}) => {
    return ( 
        <>
        <Header/>
        {children}
        
        </>
     );
}
 
export default Layout;