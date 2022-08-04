import '../../assets/css/menu/index.css'
import ActualConfig from "./Configs/ActualConfig"
import API from "./Configs/API"
import Interface from "./Configs/Interface"
import Reactions from "./Configs/Reactions"

export default function Menu(): JSX.Element {
    return (
        <section className='Menu'>
            <ActualConfig />
            <API />
            <Interface />
            <Reactions />
        </section>
    )
}