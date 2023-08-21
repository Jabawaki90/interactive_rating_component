import "./RatingCard.scss";
import { Card, Button } from "antd";
import { ReactComponent as Star } from "../../public/icon-star.svg";

const ratings = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
];

const RatingCard = ({ setCurrentRate }) => {
  return (
    <Card className="card-rating-container">
      <div className="inner-rating-container">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 0 20px 0",
            width: "60px",
            height: "60px",
            backgroundColor: "hsl(213, 19%, 18%)",
            borderRadius: "50px",
          }}
        >
          <Star style={{ transform: "scale(1.3)" }} />
        </span>
        <p className="title-text">How did we do?</p>
        <p className="desc-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div
          className="rating-button-container"
          style={{ margin: "0 0 35px 0" }}
        >
          {ratings.map((item, index) => {
            return (
              <Button
                onClick={() => {
                  setCurrentRate(item.name);
                }}
                className="button-container"
                key={index}
                type="normal"
                shape="circle"
              >
                {item.name}
              </Button>
            );
          })}
        </div>
        <Button className="button-submit" shape="round">
          SUBMIT
        </Button>
      </div>
    </Card>
  );
};

export default RatingCard;
