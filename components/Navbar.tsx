// components/Navbar.tsx

import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-slate-800 p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">mattcarlson.vercel.app</Link>
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-white hover:text-slate-200">Home</Link></li>
                    <li><Link href="/projects" className="text-white hover:text-slate-200">Projects</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-slate-200">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
  };

export default Navbar;