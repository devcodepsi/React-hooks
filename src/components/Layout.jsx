import Navigate from "./Navigate";

export default function Layout({children}) {
    return (
        <>
            <Navigate />
            <main className="p-5">{children}</main>
        </>
    )
}