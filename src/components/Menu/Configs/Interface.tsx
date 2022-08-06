import categories from './data/categories.json'

export default function Interface(): JSX.Element {
    return (
        <div className="config-modal">
            <header>
                <h2>Switch Interface</h2>
                <button>Raw Data 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M10 13l-1 2l1 2" />
                        <path d="M14 13l1 2l-1 2" />
                    </svg>
                </button>
            </header>

            <section className="categories-buttons">
                {categories.map((category: any) => (
                    <button key={category.id} className={`category-button ${category.name}`}>
                        {category.name}
                    </button>
                ))}
            </section>
        </div>
    )
}