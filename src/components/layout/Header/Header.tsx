import Link from "next/link";
import { ROUTES } from "../../../utils/consts/routes";
import { Logo } from "../../icons";

const Header = () => {
    return (
        <header className="bg-slate-400">
            <div className="container flex justify-between">
                <div>
                    <Logo />
                </div>
                <nav>
                    <ul>
                        <Link href='/'>Home</Link>
                        <Link href={ROUTES.CHARACTERS}>Chars</Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;