import "../styles/inboxDashboard.css"
import InboxNavigation from "../components/layout/inboxNavigation"
import InboxSidebar from "../components/layout/inboxSidebar"
import ChatList from "../components/layout/chatList"
import ChatWindow from "../components/layout/chatWindow"
import DetailsPanel from "../components/layout/detailsPanel"

export function InboxDashboard()
{
    return<>
        <div className="Inbox-wrapper">
            <InboxNavigation></InboxNavigation>
            <div className="Inbox-body">
                <div className="Body-user">
                    <div className="Users-list">
                        <InboxSidebar></InboxSidebar>
                    </div>
                    <div className="Users-message">
                        <ChatList></ChatList>
                    </div>
                </div>
                <div className="Chat">
                    <ChatWindow></ChatWindow>
                </div>
                <div className="Chat-info">
                    <DetailsPanel></DetailsPanel>
                </div>
            </div>
        </div>
    </>
}