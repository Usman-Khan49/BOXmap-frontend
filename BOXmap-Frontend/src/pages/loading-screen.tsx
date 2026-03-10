import "../styles/loadingScreen.css"
import { HoneyComb } from "../components/common/honeycomb"
import aiSvg from "../assets/ai.svg"
import campaignSvg from "../assets/campaign.svg"
import frameSvg from "../assets/Frame.svg"
import inboxSvg from "../assets/inbox.svg"
import workflowSvg from "../assets/workflow.svg"
import loading_gif from "../assets/Gif_loading_Skeleton-.gif"
export function LoadingScreen()
{
    return <>
        <div className="Wrapper">
            <div className="loading-wrapper">
                <div className="loading-honeyComb">
                    <HoneyComb imageUrl={aiSvg} alt="AI" />
                    <HoneyComb imageUrl={campaignSvg} alt="Campaign" />
                    <HoneyComb imageUrl={frameSvg} alt="Frame" />
                    <HoneyComb imageUrl={inboxSvg} alt="Inbox" />
                    <HoneyComb imageUrl={workflowSvg} alt="Workflow" />
                    <HoneyComb imageUrl={frameSvg} alt="AI secondary" />
                </div>
                <div className="loading-elements">
                    <div className="loading-gif">
                        <img src={loading_gif} alt="Background Loading Gif" width="390" height= "auto" />
                    </div>
                    <div className="loading-info">
                        <h1 className="loading-title">
                            Extracting Information...
                        </h1>
                        <h2 className=" loading-subtitle">
                            We are extracting information from the above honey combs to your system
                        </h2>

                    </div>
                </div>
            </div>
            <div className="placeholder"></div>
        </div>
    </>
}