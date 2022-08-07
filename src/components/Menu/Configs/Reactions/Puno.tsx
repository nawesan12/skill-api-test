import { useState } from 'react'
import punoGif from '../../../../assets/reactions/puno.gif'
import punoImage from '../../../../assets/images/leadership.png'
import ReactionOverlay from './ReactionOverlay'

export default function Puno(): JSX.Element {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="reaction" onClick={() => setOpen(true)}>
                <img src={punoImage} alt="" />
            </div>
            {open === true ? ( <ReactionOverlay gif={punoGif} setOpen={setOpen} /> ) : null}
        </>
    )
}