import { useParams } from "react-router"
import NoTest from "./NoTest";
import Test1 from "./Test1";


export const Tests = () => {
    const params = useParams();
    switch (params.id) {
        case '1':
            return <Test1 />
        default:
            return <NoTest />
    }
}
