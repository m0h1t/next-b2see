import React from "react"
import Link from "next/link";

const NavBar = () => {
    const navStyles: React.CSSProperties = {
        background: "#f14729",
        display: "flex",
        borderBottom: "2px solid yellow",
        marginBottom: "12px"
    };

    type LabelProps = {
        label: string;
        href: string;
    };

    const links: LabelProps[] = [
        { label: "Regitser", href: "/users/new" },
        { label: "Show users", href: "/users" }
    ];

    return (
        <nav className="space-x-6 mb-5 h-14 items-center" style={navStyles}>
            <Link href={"/"} className="space-x-4 h-14 items-center">
                <img className="space-x-6 h-14 items-center p-2" src="https://upload.wikimedia.org/wikipedia/commons/3/30/NeXT_logo.svg" alt="NEXT B2-SEE" />
            </Link>
            <ul className="flex space-x-6">
                {links.map(link =>
                    <Link
                        key={link.href}
                        className="text-yellow-300 hover:text-green-500 transition-colors px-1" href={link.href}>
                        {link.label}
                    </Link>)
                }
            </ul>
        </nav>
    )
}
export default NavBar
