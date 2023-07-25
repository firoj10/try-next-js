// "use client"


import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";


const BlogsPage = async () => {
    // const router=  useRouter()
   const blogs = await loadBlogsData()
    return (
        <div className="container mx-auto p-2">
            {
                blogs.map(({ id, body, title }) => (
                    <div key={id} className="block border border-blue-500 p-2 my-2">
                        <h2 className="text-2xl"> {id}.{title}</h2>
                        <p>{body}</p>
                        <Link href={`/blogs/${id}`}>
                            <button className="bg-blue-500">Details</button>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default BlogsPage;


