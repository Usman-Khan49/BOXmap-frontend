import "../styles/inboxDashboard.css"
import InboxNavigation from "../components/layout/inboxNavigation"
import InboxSidebar from "../components/layout/inboxSidebar"
import ChatList from "../components/layout/chatList"
import ChatWindow from "../components/layout/chatWindow"
import DetailsPanel from "../components/layout/detailsPanel"

type Props = { unlockedSteps?: Set<number> }

export function InboxDashboard({ unlockedSteps = new Set() }: Props)
{
    return<>
        <div className="Inbox-wrapper">
            <InboxNavigation></InboxNavigation>
            <div className="Inbox-body">
                <div className="Body-user">
                    <div className="Users-list">
                        <InboxSidebar unlockedSteps={unlockedSteps} />
                    </div>
                    <div className="Users-message">
                        <ChatList unlockedSteps={unlockedSteps} />
                    </div>
                </div>
                <div className="Chat">
                    <ChatWindow unlockedSteps={unlockedSteps} />
                </div>
                <div className="Chat-info">
                    <DetailsPanel unlockedSteps={unlockedSteps} />
                </div>
            </div>
        </div>
    </>
}