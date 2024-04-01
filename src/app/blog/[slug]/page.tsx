import dynamic from "next/dynamic";
const BlogPostUI = dynamic(() => import("../../../components/BlogPost"));


const BlogPost = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <BlogPostUI />
    </main>
  )
}

export default BlogPost