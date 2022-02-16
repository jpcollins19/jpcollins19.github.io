import { golferScoreClass, golferTotal } from "../../store";

const Total_Score_Cont = ({
  golfers,
  golfer1,
  golfer2,
  golfer3,
  golfer4,
  golfer5,
  golfer6,
}) => {
  if (
    !golfers ||
    !golfer1 ||
    !golfer2 ||
    !golfer3 ||
    !golfer4 ||
    !golfer5 ||
    !golfer6
  ) {
    return null;
  }

  return (
    <div className="pool-picks-golfer-total-container">
      <h4>Total</h4>
      <div className={golferScoreClass(golfer1, golfers)}>
        {golferTotal(golfer1, golfers)}
      </div>

      <div className={golferScoreClass(golfer2, golfers)}>
        {golferTotal(golfer2, golfers)}
      </div>

      <div className={golferScoreClass(golfer3, golfers)}>
        {golferTotal(golfer3, golfers)}
      </div>

      <div className={golferScoreClass(golfer4, golfers)}>
        {golferTotal(golfer4, golfers)}
      </div>

      <div className={golferScoreClass(golfer5, golfers)}>
        {golferTotal(golfer5, golfers)}
      </div>

      <div className={golferScoreClass(golfer6, golfers)}>
        {golferTotal(golfer6, golfers)}
      </div>
    </div>
  );
};

export default Total_Score_Cont;
