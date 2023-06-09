import { useParams } from "react-router"
import NoTest from "./NoTest";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test5 from "./Test5";
import Test3 from "./Test3";
import Test4 from "./Test4";

export const Tests = () => {
    const params = useParams();
    switch (params.id) {
        case '1':
            return <Test1 />
        case '2':
            return <Test2 />
        case '3':
            return <Test3 />
        case '4':
            return <Test4 />
        case '5':
            return <Test5 />    
        default:
            return <NoTest />
    }
}
