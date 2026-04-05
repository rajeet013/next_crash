// 1. Define what a Comment looks like
interface Comment {
  id: number;
  body: string;
}

// 2. Define the Props interface
interface CommentsProps {
  Promise: Promise<Comment[]>;
}

// 3. Update the component
export default async function Comments({ Promise }: CommentsProps) {
  // Use lowercase 'promise' here
  const comments = await Promise;

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-xl font-bold">Comments</h1>
        <ul className="mt-4">
          {comments.map((comment) => (
            <li className="mb-2 p-2 border-b" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
