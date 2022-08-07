import { useContext } from "react"
import { ApiContext } from "../../../context/context"

export default function ActualConfig(): JSX.Element {

    const { context } = useContext(ApiContext)

    return (
        <div className="config-modal">
            <header>
                <h2>Actual Config</h2>
            </header>

            <section className="actual-config">
                <ul>
                    <li>API url: {context.actualConfig.apiUrl}</li>
                    <li>Category: {context.actualConfig.selectedCategory}</li>
                    <li>Expected Status: {context.actualConfig.statusExpected}
                        <span className={context.actualConfig.statusExpected === "200" ? "status ok" : "status error"} />       
                    </li>
                </ul>
            </section>
        </div>
    )
}