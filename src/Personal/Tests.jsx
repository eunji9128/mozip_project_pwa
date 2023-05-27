import { useParams } from "react-router"
import NoTest from "./NoTest";
import Test1 from "./Test1";
import Test5 from "./Test5"


export const Tests = () => {
    const params = useParams();
    switch (params.id) {
        case '1':
            return <Test1 />
        case '5':
            return <Test5 />
        default:
            return <NoTest />
    }
}
