import "../styles/loadingScreen.css"
import { useState } from "react"
import { HoneyComb } from "../components/common/honeycomb"
import aiSvg from "../assets/ai.svg"
import campaignSvg from "../assets/campaign.svg"
import frameSvg from "../assets/Frame.svg"
import inboxSvg from "../assets/inbox.svg"
import workflowSvg from "../assets/workflow.svg"
import loading_gif from "../assets/Gif_loading_Skeleton-.gif"
import { InboxDashboard } from "./inbox-dashboard"

// Step mapping:
// 1 = Inbox  → sidebar users
// 2 = Frame  → chat list (user messages)
// 3 = Workflow → chat window messages
// 4 = Campaign → details panel
// 5 = AI     → notes & labels

export function LoadingScreen() {
    const [loadStep, setLoadStep] = useState(0)
    const [activeHex, setActiveHex] = useState<number | null>(null)

    function handleHexClick(step: number, hexIdx: number) {
        if (step <= loadStep) return
        setActiveHex(hexIdx)
        setTimeout(() => setActiveHex(null), 600)
        setLoadStep(step)
    }

    return <>
        <div className="Wrapper">
            <div className="loading-wrapper">
                <div className="loading-honeyComb">
                    <HoneyComb imageUrl={aiSvg}       alt="AI"       active={activeHex === 0} onClick={() => handleHexClick(5, 0)} />
                    <HoneyComb imageUrl={campaignSvg}  alt="Campaign" active={activeHex === 1} onClick={() => handleHexClick(4, 1)} />
                    <HoneyComb imageUrl={frameSvg}     alt="Frame"    active={activeHex === 2} onClick={() => handleHexClick(2, 2)} />
                    <HoneyComb imageUrl={inboxSvg}     alt="Inbox"    active={activeHex === 3} onClick={() => handleHexClick(1, 3)} />
                    <HoneyComb imageUrl={workflowSvg}  alt="Workflow" active={activeHex === 4} onClick={() => handleHexClick(3, 4)} />
                    <HoneyComb imageUrl={frameSvg}     alt="AI secondary" active={activeHex === 5} onClick={() => handleHexClick(2, 5)} />
                </div>
                <div className="loading-elements">
                    <div className="loading-gif">
                        <img src={loading_gif} alt="Background Loading Gif" width="390" height="auto" />
                    </div>
                    <div className="loading-info">
                        <h1 className="loading-title">
                            Extracting Information...
                        </h1>
                        <h2 className="loading-subtitle">
                            We are extracting information from the above honey combs to your system
                        </h2>
                    </div>
                </div>
            </div>
            <div className="placeholder">
                <InboxDashboard loadStep={loadStep} />
            </div>
        </div>
    </>
}