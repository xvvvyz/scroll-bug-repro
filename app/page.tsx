import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "lightgrey",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Link href="/scroll">Auto-scroll</Link>
      <Link href="/no-scroll">No auto-scroll</Link>
    </div>
  );
}
