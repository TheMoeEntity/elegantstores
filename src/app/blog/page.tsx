import dynamic from "next/dynamic";
const BlogPage = dynamic(() => import("../../components/Blog"));


const Blog = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <BlogPage />
    </main>
  )
}

export default Blog