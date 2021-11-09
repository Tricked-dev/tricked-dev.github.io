import Link from "next/link";

let items = [
  {
    n: "Matrix",
    h: "/matrix",
  },
  {
    n: "Discord",
    h: "/discord",
  },
  {
    n: "Github",
    h: "/github",
  },
  {
    n: "Donate",
    h: "/donating",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {items.map((x, y) => (
          <div className="flex flex-col space-y-4" key={y}>
            <Link href={x.h}>{x.n}</Link>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"></div>
    </footer>
  );
}
