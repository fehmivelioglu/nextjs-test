import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-red-500">
      <h1>Home</h1>
      <Link href="/routing/catch/1/2/3">CatchAll</Link>
    </div>
  );
}
