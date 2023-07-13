import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }, isLogged) => (
  <div className="page">
    <Header isLogged={isLogged}/>
      {children}
    <Footer/>
  </div>
);

export default Layout;
