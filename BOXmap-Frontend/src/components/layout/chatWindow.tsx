import "../../styles/chatWindow.css"
import type { Message } from "../../types/inbox"
import dndIcon from "../../assets/dnd-icon.svg"
import archiveIcon from "../../assets/archive-icon.svg"

const messages: Message[] = [
    { id: 1, sender: "customer", text: "Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?", time: "23:08" },
    { id: 2, sender: "agent", text: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?", time: "23:08", delivered: true },
    { id: 3, sender: "customer", text: "Yes, it's olivia.Mckinsey@gmail.com", time: "23:16" },
    { id: 4, sender: "agent", text: "Thanks! Looks like your reset wasn't completed. I've sent a new link - please check your inbox.", time: "23:16", delivered: true },
    { id: 5, sender: "customer", text: "I see it. resetting now...", time: "23:17" },
    { id: 6, sender: "customer", text: "Done! I'm logged in. Thanks!", time: "23:20" },
    { id: 7, sender: "agent", text: "Perfect 🎉 Your plan is ready under \"My Programs\". Since you're starting out, I suggest our Premium Guide - it boosts results and is 20% off here 👉\nwww.Fit4Life.com/Premium", time: "23:20", delivered: true },
    { id: 8, sender: "customer", text: "Oh my god 😍 I'll try it ASAP, thank you so much!!", time: "23:23" },
]

function CheckmarkIcon() {
    return (
        <svg width="16" height="11" viewBox="0 0 20 13" fill="none">
            <path d="M1.5 6.5L5.5 10.5L12.5 1.5" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 6.5L11.5 10.5L18.5 1.5" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function ChatWindow() {
    return (
        <div className="ChatWindow-container">
            <div className="ChatWindow-header">
                <h3 className="ChatWindow-contact-name">Olivia Mckinsey</h3>
                <div className="ChatWindow-header-actions">
                    <button className="ChatWindow-action-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <button className="ChatWindow-action-btn">
                        <img src={dndIcon} alt="do not disturb icon" className="ChatWindow-action-icon" />
                    </button>
                    <button className="ChatWindow-action-btn special">
                        <img src={archiveIcon} alt="archive icon" className="ChatWindow-action-icon" />
                    </button>
                </div>
            </div>

            <div className="ChatWindow-messages">
                <div className="ChatWindow-date-pill">28 August 2025</div>
                {messages.map((msg) => (
                    <div key={msg.id} className={`ChatWindow-msg ${msg.sender}`}>
                        <div className="ChatWindow-msg-bubble">
                            <p className="ChatWindow-msg-text">{msg.text}</p>
                        </div>
                        <div className="ChatWindow-msg-meta">
                            {msg.delivered && <CheckmarkIcon />}
                            <span className="ChatWindow-msg-time">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ChatWindow-input-area">
                <div className="ChatWindow-input-wrapper">
                    <input type="text" placeholder="Type something...." className="ChatWindow-input" />
                </div>
                <div className="ChatWindow-toolbar">
                    <button className="ChatWindow-toolbar-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                    </button>
                    <button className="ChatWindow-toolbar-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                    </button>
                    <button className="ChatWindow-toolbar-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </button>
                    <button className="ChatWindow-toolbar-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                    </button>
                    <button className="ChatWindow-toolbar-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19l7-7 3 3-7 7-3-3z" />
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                            <path d="M2 2l7.586 7.586" />
                            <circle cx="11" cy="11" r="2" />
                        </svg>
                    </button>
                    <div className="ChatWindow-toolbar-right">
                        <button className="ChatWindow-toolbar-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </button>
                        <button className="ChatWindow-toolbar-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
