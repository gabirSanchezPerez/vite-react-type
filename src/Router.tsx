import { createBrowserRouter} from "react-router-dom";
import Home from './components/Home';
import Converter from './components/Converter';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/converter",
        element: <Converter />,
    },
]);

export default Router;