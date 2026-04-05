import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import { Suspense } from "react";

// Define a type for your params
interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments Promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}
