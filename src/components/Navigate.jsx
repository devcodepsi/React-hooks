import { Link } from "react-router-dom";

export default function Navigate() {
    return(
        <menu className="border-b p-5 flex gap-10 mb-5">
            <li><Link to='/hooks'>Hooks</Link></li>
            <li><Link to='/apis'>APIs</Link></li>
        </menu>
    )
}