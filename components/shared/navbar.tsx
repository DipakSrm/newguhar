import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[20%] bg-black text-white flex justify-evenly items-center">
        <div className="text-3xl font-bold">गुहर</div>
        <div>
          <ul>
            <li className="inline-block p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block p-4">
              <Link href="/Categories">Categories</Link>
            </li>
            <li className="inline-block p-4">
              <Link href="/About-Us">About-Us</Link>
            </li>
            <li className="inline-block p-4">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Search
        </div>
      </div>
    </>
  );
}
