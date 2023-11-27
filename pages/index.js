import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/server-table">SSR로 html을 전달</Link>
      <br />
      <br />
      <Link href="/client-table">SSR로 데이터만 페칭</Link>
    </div>
  );
}
