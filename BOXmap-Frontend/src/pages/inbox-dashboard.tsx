import "../styles/inboxDashboard.css"
import aiSvg from "../assets/ai.svg"
import campaignSvg from "../assets/campaign.svg"
import frameSvg from "../assets/Frame.svg"
import inboxSvg from "../assets/inbox.svg"
import workflowSvg from "../assets/workflow.svg"
import NavItem from "../components/common/navitem"
import settingIcon from "../assets/setting.svg"
import profileIcon from "../assets/profileIcon.png"
export function InboxDashboard()
{
    return<>
        <div className="Inbox-wrapper">
            <div className="Inbox-navigation">
                <div className="Navigation-item">
                    <h2 className="logo">BOXpad</h2>
                    <NavItem itemName="Inbox" iconUrl={inboxSvg}/>
                    <NavItem itemName="Contact" iconUrl={frameSvg}/>
                    <NavItem itemName="AI Employees" iconUrl={aiSvg}/>
                    <NavItem itemName="Workflows" iconUrl={workflowSvg}/>
                    <NavItem itemName="Campaigns" iconUrl={campaignSvg}/>
                </div>
                <div className="Navigation-item-profile">
                    <img src={settingIcon} alt="setting icon" className="setting-icon" />
                    <div className="nav-profile">
                        <img src={profileIcon} alt="profile icon" className="profile-icon" />
                        <p className="profile-name">Michael Johnson</p>
                    </div>
                </div>
            </div>
            <div className="Inbox-body">
                <div className="Body-user">
                    <div className="Users-list"></div>
                    <div className="Users-message"></div>
                </div>
                <div className="Chat"></div>
                <div className="Chat-info">
                    <div className="Info-nav"></div>
                    <div className="Chat-data"></div>
                    <div className="Contact-data"></div>
                    <div className="Contact-labels"></div>
                    <div className="Notes"></div>
                    <div className="Other-chat"></div>
                </div>
            </div>
        </div>
    </>
}