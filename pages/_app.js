import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from "@bradgarropy/next-seo"

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <SEO title="Jan Micheal" description="Review Blog" keywords={['Entertainment','insurance','technology','ios',
    'samsung','hosting','forex']} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
