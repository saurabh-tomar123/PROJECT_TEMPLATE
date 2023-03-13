import { Link } from "react-router-dom";
import HomPage from "./HomePage";

function Page404()
{
    return(
        <div>
            <h1>404</h1>
            <h1> Page Not Found</h1>
            <Link to="/">HomPage </Link>

        </div>
    )
}
export default Page404;