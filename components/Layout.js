import Head from 'next/head'

const Layout = ({ children }) => {
    return (
    <div>
        <Head>
            <title>Country Website</title>
            <link rel= "icon" href="/country.png" />
        </Head>
    {children}
    </div>
    
      );
}
 
export default Layout;