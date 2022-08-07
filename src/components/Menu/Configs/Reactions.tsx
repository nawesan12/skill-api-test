import '../../../assets/css/menu/index.css'
import Bandeja from './Reactions/Bandeja'
import Bate from './Reactions/Bate'
import Clap from './Reactions/Clap'
import Hearts from './Reactions/Hearts'
import Puno from './Reactions/Puno'

export default function Reactions(): JSX.Element {
    return (
        <div className="config-modal">
            <header>
                <h2>Reactions</h2>
            </header>

            <section className="reactions">
                <Clap />
                <Hearts />
                <Bandeja />
                <Bate />
                <Puno />
            </section>
        </div>
    )
}