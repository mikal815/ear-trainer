import React from "react";
import "./PlayBox.css";

const PlayBox = () => (
    <div className="play-box">
        <div className="title">
            <h3>Hint Box</h3>
        </div>
        <div className="playbox-body">
            <div className="perfect-fifth">
                <h5>Perfect Fifth: </h5>
                <button className="btn" onClick>
                    <i class="far fa-play-circle"></i>
                </button>
            </div>
            <div className="minor-second">
                <h5>Minor Second: </h5>
                <button className="btn">
                    <i class="far fa-play-circle"></i>
                </button>
            </div>
            <div className="major-second">
                <h5>Major Second: </h5>
                <button className="btn">
                    <i class="far fa-play-circle"></i>
                </button>
            </div>
        </div>
    </div>
)

export default PlayBox;