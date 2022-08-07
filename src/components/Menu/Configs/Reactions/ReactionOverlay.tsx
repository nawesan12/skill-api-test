export default function ReactionOverlay({ setOpen, gif }: any): JSX.Element {

    setTimeout(() => {
        setOpen(false);
    }, 5000)

    return (
        <div className='reaction-overlay'>
            <img src={gif} alt="" />          
        </div>
    )
} 