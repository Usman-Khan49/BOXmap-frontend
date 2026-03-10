import '../../styles/loadingScreen.css'
import inboxSvg from '../../assets/inbox.svg'

type HoneyCombProps = {
    imageUrl: string
    alt: string
}

export function HoneyComb({ imageUrl = inboxSvg, alt = 'Honeycomb icon' }: HoneyCombProps) {
    return (
        <div className="honeyComb">
            
            <div className="honeyComb-inner">
            <img src={imageUrl} alt={alt} />

            </div>
            
        </div>
    )
}