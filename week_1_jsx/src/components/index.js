import "./style.css";
import {TRIALDATA} from "./trial_data";
import COLOSSEUM_IMG from "../assets/hk_colosseum.jpg";
import WavesDisplay from "./waves_display";

const TrialDisplay = () => {
    return (
        <>
            <img src={COLOSSEUM_IMG} alt="Colosseum Arena" className="title_img"/>
            {TRIALDATA.map((data, index) => (
                <div key={index} className="trial_container">
                    <h1>{data.title}</h1>
                    <h3><strong>Reward:</strong> {data.reward} Geo</h3>
                    <h3><strong>Difficulty:</strong> {data.difficulty}</h3>
                    <WavesDisplay waves={data.waves}/>
                </div>
            ))}
        </>
    )
}

export default TrialDisplay;