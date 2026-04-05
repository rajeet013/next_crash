import { notFound } from "next/navigation";

export default async function BlogPage(props: { params: { id: string } }) {
  const { id } = await props.params;

  if (id === "3") {
    notFound();
  }

  return <div className="">The blog id is : {id}</div>;
}
