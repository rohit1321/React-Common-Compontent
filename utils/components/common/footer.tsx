
import { version } from "../../../package.json";

export default function Footer() {
    return (
        <>
            <div className="d-flex justify-content-center my-4">version:- {version}</div>
        </>
    );
}