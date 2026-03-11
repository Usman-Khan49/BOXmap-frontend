import aiSvg from "../../assets/ai.svg"
import campaignSvg from "../../assets/campaign.svg"
import frameSvg from "../../assets/Frame.svg"
import inboxSvg from "../../assets/inbox.svg"
import workflowSvg from "../../assets/workflow.svg"
import NavItem from "../common/navitem"
import settingIcon from "../../assets/setting.svg"
import profileIcon from "../../assets/profileIcon.png"
import "../../styles/inboxDashboard.css"
import { useState } from "react"
export default function InboxNav()
{
    const [selected, setSelected] = useState<number>(0);
    return(
        <div className="Inbox-navigation">
                <div className="Navigation-item">
                    <h2 className="logo">BOXpad</h2>
                    <NavItem itemName="Inbox" iconUrl={inboxSvg} isSelected={selected === 0} onClick={() => setSelected(0)}/>
                    <NavItem itemName="Contact" iconUrl={frameSvg} isSelected={selected === 1} onClick={() => setSelected(1)}/>
                    <NavItem itemName="AI Employees" iconUrl={aiSvg} isSelected={selected === 2} onClick={() => setSelected(2)}/>
                    <NavItem itemName="Workflows" iconUrl={workflowSvg} isSelected={selected === 3} onClick={() => setSelected(3)}/>
                    <NavItem itemName="Campaigns" iconUrl={campaignSvg} isSelected={selected === 4} onClick={() => setSelected(4)}/>
                </div>
                <div className="Navigation-item-profile">
                    <img src={settingIcon} alt="setting icon" className="setting-icon" />
                    <div className="nav-profile">
                        <img src={profileIcon} alt="profile icon" className="profile-icon" />
                        <p className="profile-name">Leanne Graham</p>
                    </div>
                </div>
        </div>
    )
}