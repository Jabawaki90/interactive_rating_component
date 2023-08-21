import React from "react";
import { Card } from "antd";
import "./ThankYouCard.scss";
import { ReactComponent as Ilu } from "../../public/illustration-thank-you.svg";

const ThankYouCard = (props) => {
  const { rate } = props;
  return (
    <Card className="card-thankyou-container">
      <div className="inner-thankyou-container">
        <Ilu style={{ marginBottom: "40px" }} />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "hsl(213, 19%, 18%)",
            width: "fit-content",
            borderRadius: "25px",
            padding: "0 20px",
            height: "50px",
          }}
        >
          <p className="selected-text">{`You selected ${rate} out of 5`}</p>
        </span>
        <p className="title-text">Thank you!</p>
        <p className="desc-text">{`We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch`}</p>
      </div>
    </Card>
  );
};

export default ThankYouCard;
