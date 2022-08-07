import { useState } from 'react'
import clapImage from '../../../../assets/images/clapping.png'
import clapGif from '../../../../assets/reactions/claps.webp'

import ReactionOverlay from './ReactionOverlay';

export default function Clap(): JSX.Element {
    
    const [open, setOpen] = useState(false)

    return (
        <>
        <button className="reaction" onClick={() => setOpen(true)}>
            <img src={clapImage} alt="" />
        </button>
        {open === true ? ( <ReactionOverlay gif={clapGif} setOpen={setOpen} /> ) : null}
        </>
    )
}