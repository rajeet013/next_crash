export default async function getPostComments(id: string) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  return result.json();
}
