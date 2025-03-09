import { useLoading } from "../../contexts/loading.context";
import './loader.scss';

const Loader = () => {
    const { loading } = useLoading();

    return (
        <div className={`top-loading-bar ${loading ? "loading" : ""}`}></div>
    );
};

export default Loader;
