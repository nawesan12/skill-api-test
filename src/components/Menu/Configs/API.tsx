export default function API(): JSX.Element {
    return (
        <div className="config-modal">
            <header>
                <h2>Enter API url:</h2>
            </header>

            <section className="api-insertion-input">
                <input type="text" placeholder="Your URL goes here!" className="API-input"/>
            </section>
            <section className="apply-button">
                <button className="apply-button-API">Apply</button>
            </section>
        </div>
    )
}