import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Footer from '../components/Footer'
import Head from 'next/head'
const Client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
   })
 //generating paths 
   export const getStaticPaths = async()=>{
    const res = await Client.getEntries({
        content_type:'blog'
    })
    const paths = res.items.map(item =>{
        return{
            params :{slug : item.fields.slug}
        }
    })
    return{
        paths,
        fallback:false
    }
   }
   //getting data from cms

   export async function getStaticProps({params}){
    const res =await Client.getEntries({
        content_type: 'blog',
        'fields.slug': params.slug
    })
    return{
        props:{blog : res.items[0]},
    
    }
   }
//begining of function
const BlogDetails = ({blog}) => {
    return ( 
        <>
            <Head>
      <title>{blog.fields.title}</title>
      <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Head>
            <main className='slug'>
                <h1> {blog.fields.title}</h1>
                <article className='content-body'>
                    {documentToReactComponents(blog.fields.body)}
                    
                </article>
            </main>
            <Footer/>
        </>
     );
}
 
export default BlogDetails;