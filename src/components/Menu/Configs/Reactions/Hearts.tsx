import { useState } from 'react'
import heartsImage from '../../../../assets/images/heart.png'
import heartsGif from '../../../../assets/reactions/hearts.gif'
import ReactionOverlay from './ReactionOverlay'

export default function Hearts(): JSX.Element {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="reaction" onClick={() => setOpen(true)}>
                <img src={heartsImage} alt="" />
            </div>
            {open === true ? ( <ReactionOverlay gif={heartsGif} setOpen={setOpen} /> ) : null}
        </>
    )
}