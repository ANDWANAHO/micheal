import { createClient } from 'contentful'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
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

const Articles = ({blogs}) => {
  const EntBlogs = blogs.filter((blog)=> blog.fields.categorytd ==='Entertainment')
    return ( 
      <>
        <Head>
      <title>Entertainment</title>
      <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Head>
        <div className='f-cards'>
           {EntBlogs.map(blog=>(
        <div key={blog.sys.id} className='cards'>
          <Link href={'/'+ blog.fields.slug} legacyBehavior>
            <a>
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
        </a>
        </Link>
      </div>
     
     
     ))}
     </div>
    <Footer/>
        </>
        
     );
}
 
export default Articles;