import "../../styles/chatList.css"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import type { ConversationItem } from "../../types/inbox"
import minimizeIcon from "../../assets/minimize-icon.svg"
import editIcon from "../../assets/edit-icon.svg"
import filterSearchIcon from "../../assets/filter-search-icon.png"
import { fetchUsers } from "../../services/api/inbox"
import type { JPUser } from "../../services/api/inbox"

const AVATAR_COLORS = ['#F5A623', '#4CAF50', '#2196F3', '#66BB6A', '#FFC107', '#9C27B0', '#009688', '#E91E63', '#8BC34A']
const FAKE_TIMES = ['23:23', '23:16', '22:28', '20:43', '17:37', '16:01', '13:44', '09:02', 'Yesterday']
const ENGLISH_PREVIEWS = [
    "Oh my god 😍 I'll try it ASAP, thank you!",
    "Good evening! Hope you are doing well.",
    "Thank you for signing up! Let us know if..",
    "I am sending you the report right now.",
    "Thank you for filling out our survey!",
    "I will update you soon, talk later!",
    "Hello! Let's collaborate on the project.",
    "Hi, looking forward to our meeting today.",
    "Hey! Ready for the upcoming holiday sale?",
]

export default function ChatList({ loadStep }: { loadStep: number }) {
    const [selectedId, setSelectedId] = useState(1)
    const [conversations, setConversations] = useState<ConversationItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loadStep < 2) return
        fetchUsers()
            .then((users: JPUser[]) => {
                const mapped: ConversationItem[] = users.slice(0, 9).map((user, idx) => ({
                    id: user.id,
                    name: user.name,
                    initial: user.name[0].toUpperCase(),
                    avatarColor: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                    lastMessage: ENGLISH_PREVIEWS[idx] ?? 'Hey, just checking in!',
                    time: FAKE_TIMES[idx] ?? 'Earlier',
                }))
                setConversations(mapped)
            })
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [loadStep])

    return (
        <div className="ChatList-container">
            <div className="ChatList-header">
                <div className="ChatList-header-left">
                    <img src={minimizeIcon} alt="minimize icon" className="ChatList-minimize-icon" />
                    <div className="ChatList-profile">
                        {loading
                            ? <Skeleton width={100} height={14} />
                            : <span className="ChatList-profile-name">{conversations[0]?.name ?? ''}</span>
                        }
                    </div>
                </div>
                <img src={editIcon} alt="edit icon" className="ChatList-compose" />
            </div>

            <div className="ChatList-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" placeholder="Search Chat" className="ChatList-search-input" />
                <img src={filterSearchIcon} alt="filter search icon" className="ChatList-filter-search-icon" />
            </div>

            <div className="ChatList-filters">
                <button className="ChatList-filter-btn">
                    <span>Open</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
                <button className="ChatList-filter-btn">
                    <span>Newest</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>

            <div className="ChatList-conversations">
                {loading
                    ? Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="ChatList-item">
                            <Skeleton circle width={18} height={18} />
                            <div className="ChatList-item-content">
                                <div className="ChatList-item-top">
                                    <Skeleton width={100} height={12} />
                                    <Skeleton width={32} height={10} />
                                </div>
                                <Skeleton width="85%" height={11} style={{ marginTop: 4 }} />
                            </div>
                        </div>
                    ))
                    : conversations.map(conv => (
                        <div
                            key={conv.id}
                            className={`ChatList-item ${selectedId === conv.id ? "selected" : ""}`}
                            onClick={() => setSelectedId(conv.id)}
                        >
                            <div className="ChatList-avatar" style={{ backgroundColor: conv.avatarColor }}>
                                {conv.initial}
                            </div>
                            <div className="ChatList-item-content">
                                <div className="ChatList-item-top">
                                    <span className="ChatList-item-name">{conv.name}</span>
                                    <span className="ChatList-item-time">{conv.time}</span>
                                </div>
                                <p className="ChatList-item-preview">{conv.lastMessage}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
