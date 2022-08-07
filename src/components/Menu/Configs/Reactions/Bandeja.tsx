import { useState} from 'react'
import bandejaImage from '../../../../assets/images/bandeja-de-comida.png'
import bandejaGif from '../../../../assets/reactions/ulala.gif'
import ReactionOverlay from './ReactionOverlay'

export default function Bandeja(): JSX.Element {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="reaction" onClick={() => setOpen(true)}>
                <img src={bandejaImage} alt="" />
            </div>
            {open === true ? ( <ReactionOverlay gif={bandejaGif} setOpen={setOpen} /> ) : null}
        </>
    )
}