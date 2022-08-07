import { useContext } from 'react'
import { ApiContext } from '../../context/context'
import '../../assets/css/output/index.css'

export default function Output(): JSX.Element {

    const {context, setContext} = useContext(ApiContext)

    return (
        <section className="Output">
            {JSON.stringify(context)}
        </section>
    )
}