import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'
import Head from 'next/head'
//fetching
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

const Finance = ({blogs}) => {
  const FinBlogs = blogs.filter((blog)=> blog.fields.categorytd ==='Finance')
    return ( 
      <>
        <Head>
      <title>Finance</title>
      <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Head>
      <div className='f-cards'>
         {FinBlogs.map(blog=>(
    <Link href={'/'+ blog.fields.slug} legacyBehavior>
      <div key={blog.sys.id} className='cards'>
      <div className="card-headers">
      <Image className="thumbnail"
        src={'https:'+ blog.fields.thumbnail.fields.file.url}
      height = {300}
      width = {300}
      alt ={ blog.fields.slug}
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
      placeholder ="blur"
      loading='lazy'
        />
      </div>
      <div className="card-bodies">
      
      <h4>{blog.fields.title}</h4>
      
      <span className="tag tag-teal">
      {blog.fields.categorytd}
      </span>
      </div>
      
    </div>
    </Link>
   
   ))}
   </div>
  <Footer/>
      </>
     );
}
 
export default Finance;