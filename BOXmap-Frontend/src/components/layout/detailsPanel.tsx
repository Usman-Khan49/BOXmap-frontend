import "../../styles/detailsPanel.css"
import { useState } from "react"

export default function DetailsPanel() {
    const [chatDataOpen, setChatDataOpen] = useState(true)
    const [contactDataOpen, setContactDataOpen] = useState(true)
    const [labelsOpen, setLabelsOpen] = useState(true)
    const [notesOpen, setNotesOpen] = useState(true)
    const [otherChatsOpen, setOtherChatsOpen] = useState(true)

    return (
        <div className="Details-container">
            <div className="Details-header">
                <h3 className="Details-title">Details</h3>
                <button className="Details-toggle-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                    </svg>
                </button>
            </div>

            {/* Chat Data Section */}
            <div className="Details-section">
                <div className="Details-section-header" onClick={() => setChatDataOpen(!chatDataOpen)}>
                    <span className="Details-section-title">Chat Data</span>
                    <svg className={`Details-chevron ${chatDataOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {chatDataOpen && (
                    <div className="Details-section-content">
                        <div className="Details-row">
                            <span className="Details-label">Assignee</span>
                            <div className="Details-value-row">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span className="Details-value">James West</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                        <div className="Details-row">
                            <span className="Details-label">Team</span>
                            <div className="Details-value-row">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <span className="Details-value">Sales Team</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Data Section */}
            <div className="Details-section">
                <div className="Details-section-header" onClick={() => setContactDataOpen(!contactDataOpen)}>
                    <span className="Details-section-title">Contact Data</span>
                    <svg className={`Details-chevron ${contactDataOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {contactDataOpen && (
                    <div className="Details-section-content">
                        <div className="Details-field">
                            <span className="Details-field-label">First Name</span>
                            <span className="Details-field-value">Olivia</span>
                        </div>
                        <div className="Details-field">
                            <span className="Details-field-label">Last Name</span>
                            <span className="Details-field-value">Mckinsey</span>
                        </div>
                        <div className="Details-field">
                            <span className="Details-field-label">Phone number</span>
                            <span className="Details-field-value">+1 (312) 555-0134</span>
                        </div>
                        <div className="Details-field">
                            <span className="Details-field-label">Email</span>
                            <span className="Details-field-value">olivia.Mckinsey@gmail.com</span>
                        </div>
                        <span className="Details-see-all">See all</span>
                    </div>
                )}
            </div>

            {/* Contact Labels Section */}
            <div className="Details-section">
                <div className="Details-section-header" onClick={() => setLabelsOpen(!labelsOpen)}>
                    <span className="Details-section-title">Contact Labels</span>
                    <svg className={`Details-chevron ${labelsOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {labelsOpen && (
                    <div className="Details-section-content">
                        <div className="Details-labels-row">
                            <span className="Details-label-tag green">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Closed Won
                            </span>
                            <span className="Details-label-tag orange">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E65100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Chicago
                            </span>
                            <button className="Details-label-add">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007AEC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Notes Section */}
            <div className="Details-section">
                <div className="Details-section-header" onClick={() => setNotesOpen(!notesOpen)}>
                    <span className="Details-section-title">Notes</span>
                    <svg className={`Details-chevron ${notesOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {notesOpen && (
                    <div className="Details-section-content">
                        <input type="text" placeholder="Add a note" className="Details-note-input" />
                        <div className="Details-note-card">
                            <p>Strong potential for future upgrades</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Other Chats Section */}
            <div className="Details-section">
                <div className="Details-section-header" onClick={() => setOtherChatsOpen(!otherChatsOpen)}>
                    <span className="Details-section-title">Other Chats</span>
                    <svg className={`Details-chevron ${otherChatsOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {otherChatsOpen && (
                    <div className="Details-section-content">
                        <div className="Details-other-chat">
                            <div className="Details-other-chat-left">
                                <div className="Details-platform-icon red">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </div>
                                <div className="Details-other-chat-info">
                                    <span className="Details-other-chat-name">Fit4Life</span>
                                    <span className="Details-other-chat-msg">On my way!</span>
                                </div>
                            </div>
                            <span className="Details-other-chat-date">08/08/25</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
