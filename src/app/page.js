import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Welcome to next js project</h1>
      <Link href={'/recipe-list'}>Explore Recipe</Link>
    </div>
  );
}
