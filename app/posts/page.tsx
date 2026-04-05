import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

export default async function Posts() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="mt-6">
      <h1>All posts</h1>

      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
