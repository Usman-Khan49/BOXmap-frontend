import '../../styles/loadingScreen.css'
import inboxSvg from '../../assets/inbox.svg'

type HoneyCombProps = {
    imageUrl: string
    alt: string
    onClick?: () => void
    active?: boolean
}

export function HoneyComb({ imageUrl = inboxSvg, alt = 'Honeycomb icon', onClick, active }: HoneyCombProps) {
    return (
        <div className={`honeyComb${active ? ' honeyComb--active' : ''}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : undefined }}>
            <div className="honeyComb-inner">
                <img src={imageUrl} alt={alt} />
            </div>
        </div>
    )
}