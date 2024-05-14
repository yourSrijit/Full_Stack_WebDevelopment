import Link from "next/link";
export default function Footer({ font }: { font: string }) {
    return (
      <footer className="py-5 bg-gray-952 text-gray-953">
        <div className={`max-w-[100rem] px-12 mx-auto flex justify-center items-center ${font}`}
        >
          <Link href="https://www.linkedin.com/in/yoursrijit/" target="_blank" className="text-xl hover:text-yellow-500">©Srijit Bera 24</Link>
        </div>
      </footer>
    );
  }