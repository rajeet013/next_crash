import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "This a blog about page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="">Vision</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {children}
    </div>
  );
}
