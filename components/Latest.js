import Image from "next/image";
import Link from "next/link";



const Latest = ({blogs}) => {
  

    return ( 
        <main className="section-div">
          
      <h2>
       Articles
      </h2>
      <div className="f-cards">
     {blogs.map(blog=>(
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

        
    </main>
     );
}
 
export default Latest;
