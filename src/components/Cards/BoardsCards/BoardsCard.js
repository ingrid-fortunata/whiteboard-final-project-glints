import React from "react";
import { connect } from "react-redux";
import "./BoardsCard.scss";

const BoardsCard = (props) => {
  const filteredTeam = props.teamList.filter((x) => x._id === props.teamId[0]);
  console.log("Filtered Team", filteredTeam);
  console.log("Team List", props.teamList);
  // const teamSearchColor = filteredTeam.find((y) => y.color);
  // const teamColor = teamSearchColor.color;

  // console.log(filteredTeam);

  return (
    <div
      className="BoardsCard-container"
      style={{ backgroundColor: `${props.teamColor}` }}
    >
      <div className="BoardsCard-content-container">
        <div className="BoardsCard-container-projectname">{props.title}</div>
        <div className="BoardsCard-container-projectteam">
          on {filteredTeam[0].teamName}
        </div>
        <div className="BoardsCard-container-quicklinks">QUICK LINKS</div>
        <p>Details Tasks click here</p>
        <p>Done</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamList: state.teamListReducer.teamList,
  };
};

export default connect(mapStateToProps)(BoardsCard);
