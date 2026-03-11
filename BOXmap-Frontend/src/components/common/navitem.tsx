import "../../styles/inboxDashboard.css"
type NavItemProps = {
  itemName?: string
  iconUrl?: string
  isSelected?: boolean
  onClick?: () => void
}
export default function NavItem({itemName, iconUrl, isSelected, onClick}:NavItemProps)
{
    return (
        <div className={`nav-item-tile${isSelected ? " selected" : ""}`} onClick={onClick}>
            <img src={iconUrl} alt="icon" className="nav-item-icon"/>
            <p className="nav-item-text">{itemName}</p>
        </div>
    )
}