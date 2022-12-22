import Footer from '../components/Footer'
import Hero from '../components/Intro'
import Latest from '../components/Latest'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'
import Head from 'next/head'

export async function getStaticProps(){
 const Client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
 })

 const res = await Client.getEntries({
  content_type:'blog'
 })
 return{
  props:{
    blogs : res.items
  }
 }
}
export default function Home({blogs}) {

  return (
    <>
    <Head>
      <title>Home</title>
      <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Head>
    <div className={styles.container}>
      <Hero/>
      <Latest blogs={blogs}/>
      <Footer/>
    </div>
    </>
  );
}
