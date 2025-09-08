import "./style.css";
import {TRIALDATA} from "./trial_data";
import COLOSSEUM_IMG from "../assets/hk_colosseum.jpg";
import WavesDisplay from "./waves_display";

const TrialDisplay = () => {
    return (
        <div className="trial-card">
            <img src={COLOSSEUM_IMG} alt="Colosseum Arena" className="title_img"/>
            <h1>{TRIALDATA.title}</h1>
            <h3><strong>Reward:</strong> {TRIALDATA.reward} Geo</h3>
            <h3><strong>Difficulty:</strong> {TRIALDATA.difficulty}</h3>
            <WavesDisplay waves={TRIALDATA.waves}/>
        </div>
    )
}

export default TrialDisplay;