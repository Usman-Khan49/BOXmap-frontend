import "../../styles/inboxSidebar.css"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import teamsIcon from "../../assets/teams-icon.png"
import singleProfileIcon from "../../assets/single-profile-icon.png"
import peopleProfileIcon from "../../assets/people-profile-icon.png"
import assignedUserIcon from "../../assets/assigned-user-icon.png"
import userIcon from "../../assets/user-icon.png"
import { fetchUsers } from "../../services/api/inbox"
import type { JPUser } from "../../services/api/inbox"

function getBadge(user: JPUser): number | undefined {
    const val = (user.id * 7) % 15
    return val <= 1 ? undefined : val
}

export default function InboxSidebar({ unlockedSteps }: { unlockedSteps: Set<number> }) {
    const [teamsOpen, setTeamsOpen] = useState(true)
    const [usersOpen, setUsersOpen] = useState(true)
    const [channelsOpen, setChannelsOpen] = useState(true)
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
    const [users, setUsers] = useState<JPUser[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!unlockedSteps.has(1)) return
        fetchUsers()
            .then(data => {
                const sliced = data.slice(0, 9)
                setUsers(sliced)
                setSelectedUser(sliced[1]?.name ?? null)
            })
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [unlockedSteps])

    return (
        <div className="Sidebar-container">
            <div className="Sidebar-header">
                <div className="Sidebar-header-left">
                    <h3 className="Sidebar-title">Inbox</h3>
                </div>
            </div>

            <div className="Sidebar-menu">
                <div className="Sidebar-menu-item">
                    <div className="Sidebar-menu-left">
                        <img src={singleProfileIcon} alt="my inbox icon" className="Sidebar-icon" />
                        <span>My Inbox</span>
                    </div>
                </div>
                <div className="Sidebar-menu-item">
                    <div className="Sidebar-menu-left">
                        <img src={peopleProfileIcon} alt="all icon" className="Sidebar-icon" />
                        <span>All</span>
                    </div>
                    <span className="Sidebar-badge">28</span>
                </div>
                <div className="Sidebar-menu-item">
                    <div className="Sidebar-menu-left">
                        <img src={assignedUserIcon} alt="unassigned icon" className="Sidebar-icon" />
                        <span>Unassigned</span>
                    </div>
                    <span className="Sidebar-badge">5</span>
                </div>
            </div>

            <div className="Sidebar-section">
                <div className="Sidebar-section-header" onClick={() => setTeamsOpen(!teamsOpen)}>
                    <div className="Sidebar-section-title-wrap">
                        <span className="Sidebar-section-title">Teams</span>
                    </div>
                    <svg className={`Sidebar-chevron ${teamsOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
                {teamsOpen && (
                    <div className="Sidebar-section-items">
                        <div className="Sidebar-menu-item">
                            <div className="Sidebar-menu-left">
                                <img src={teamsIcon} alt="sales team icon" className="Sidebar-icon" />
                                <span>Sales</span>
                            </div>
                            <span className="Sidebar-badge">7</span>
                        </div>
                        <div className="Sidebar-menu-item">
                            <div className="Sidebar-menu-left">
                                <img src={teamsIcon} alt="customer support team icon" className="Sidebar-icon" />
                                <span>Customer Support</span>
                            </div>
                            <span className="Sidebar-badge">16</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="Sidebar-section">
                <div className="Sidebar-section-header" onClick={() => setUsersOpen(!usersOpen)}>
                    <span className="Sidebar-section-title">Users</span>
                    <svg className={`Sidebar-chevron ${usersOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
                {usersOpen && (
                    <div className="Sidebar-section-items">
                        {loading
                            ? Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="Sidebar-menu-item">
                                    <div className="Sidebar-menu-left">
                                        <Skeleton circle width={11} height={11} />
                                        <Skeleton width={85} height={11} style={{ marginLeft: 8 }} />
                                    </div>
                                    <Skeleton width={18} height={11} />
                                </div>
                            ))
                            : users.map(user => (
                                <div
                                    key={user.id}
                                    className={`Sidebar-menu-item Sidebar-user-item ${selectedUser === user.name ? "active" : ""}`}
                                    onClick={() => setSelectedUser(user.name)}
                                >
                                    <div className="Sidebar-menu-left">
                                        <img src={userIcon} alt="user icon" className="Sidebar-icon" />
                                        <span>{user.name}</span>
                                    </div>
                                    {getBadge(user) !== undefined && (
                                        <span className="Sidebar-badge">{getBadge(user)}</span>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>

            <div className="Sidebar-section">
                <div className="Sidebar-section-header" onClick={() => setChannelsOpen(!channelsOpen)}>
                    <span className="Sidebar-section-title">Channels</span>
                    <svg className={`Sidebar-chevron ${channelsOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
                {channelsOpen && (
                    <div className="Sidebar-section-items">
                        <div className="Sidebar-menu-item">
                            <div className="Sidebar-menu-left">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Fit4Life</span>
                            </div>
                        </div>
                        <div className="Sidebar-menu-item">
                            <div className="Sidebar-menu-left">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig-gradient)">
                                    <defs>
                                        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FFDC80" />
                                            <stop offset="25%" stopColor="#F77737" />
                                            <stop offset="50%" stopColor="#E1306C" />
                                            <stop offset="75%" stopColor="#C13584" />
                                            <stop offset="100%" stopColor="#833AB4" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                                <span>Fit4Life</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
