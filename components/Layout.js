import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
    <div>
        <Head>
            <title>Country Website</title>
            <link rel= "icon" href="/country.png" />
        </Head>
    <Header />
    {children}
    <Footer />
    </div>
    
      );
}
 
export default Layout;