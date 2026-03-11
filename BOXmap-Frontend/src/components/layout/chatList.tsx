import "../../styles/chatList.css"
import { useState } from "react"
import type { ConversationItem } from "../../types/inbox"
import profileIcon from "../../assets/profileIcon.png"

const conversations: ConversationItem[] = [
    { id: 1, name: "Olivia Mckinsey", initial: "O", avatarColor: "#F5A623", lastMessage: "Oh my god 😍 I'll try it ASAP, thank..", time: "23:23" },
    { id: 2, name: "Sara Williams", initial: "E", avatarColor: "#4CAF50", lastMessage: "Good Evening, Emily! Hope you are..", time: "23:16" },
    { id: 3, name: "Frank Thompson", initial: "F", avatarColor: "#2196F3", lastMessage: "Thank you for signing up Frank! If t..", time: "22:28" },
    { id: 4, name: "Grace Lee", initial: "G", avatarColor: "#66BB6A", lastMessage: "I am sending you the report right a..", time: "20:43" },
    { id: 5, name: "Henry Adams", initial: "H", avatarColor: "#FFC107", lastMessage: "Thank you for filling out our survey!", time: "17:37" },
    { id: 6, name: "Isabella Martinez", initial: "I", avatarColor: "#9C27B0", lastMessage: "I will update you soon Isabella!", time: "16:01" },
    { id: 7, name: "James Brown", initial: "J", avatarColor: "#009688", lastMessage: "Hello James! Let's collaborate on..", time: "13:44" },
    { id: 8, name: "Katherine White", initial: "K", avatarColor: "#E91E63", lastMessage: "Hi Katherine, looking forward to our..", time: "09:02" },
    { id: 9, name: "Lucas Green", initial: "L", avatarColor: "#8BC34A", lastMessage: "Hey Lucas! Ready for the holiday...", time: "Yesterday" },
]

export default function ChatList() {
    const [selectedId, setSelectedId] = useState(1)

    return (
        <div className="ChatList-container">
            <div className="ChatList-header">
                <div className="ChatList-header-left">
                    
                    <div className="ChatList-profile">
                        <img src={profileIcon} alt="profile" className="ChatList-profile-img" />
                        <span className="ChatList-profile-name">Michael Johnson</span>
                    </div>
                </div>
                <svg className="ChatList-compose" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            </div>

            <div className="ChatList-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" placeholder="Search Chat" className="ChatList-search-input" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
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
                {conversations.map((conv) => (
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
                ))}
            </div>
        </div>
    )
}
