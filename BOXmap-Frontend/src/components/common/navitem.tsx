
type NavItemProps = {
  itemName?: string
  iconUrl?: string
}
export default function NavItem({itemName, iconUrl}:NavItemProps)
{
    return (
        <div className="nav-item-tile">
            <img src={iconUrl} alt="icon" className="nav-item-icon" />
            <p className="nav-item-text">{itemName}</p>
        </div>
    )
}