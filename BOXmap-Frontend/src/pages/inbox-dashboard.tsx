import "../styles/inboxDashboard.css"
import InboxNavigation from "../components/layout/inboxNavigation"
import InboxSidebar from "../components/layout/inboxSidebar"
import ChatList from "../components/layout/chatList"
import ChatWindow from "../components/layout/chatWindow"
import DetailsPanel from "../components/layout/detailsPanel"

type Props = { loadStep?: number }

export function InboxDashboard({ loadStep = 0 }: Props)
{
    return<>
        <div className="Inbox-wrapper">
            <InboxNavigation></InboxNavigation>
            <div className="Inbox-body">
                <div className="Body-user">
                    <div className="Users-list">
                        <InboxSidebar loadStep={loadStep} />
                    </div>
                    <div className="Users-message">
                        <ChatList loadStep={loadStep} />
                    </div>
                </div>
                <div className="Chat">
                    <ChatWindow loadStep={loadStep} />
                </div>
                <div className="Chat-info">
                    <DetailsPanel loadStep={loadStep} />
                </div>
            </div>
        </div>
    </>
}