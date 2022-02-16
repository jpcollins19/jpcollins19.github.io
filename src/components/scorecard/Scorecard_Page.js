import { useSelector } from "react-redux";
import Scorecard_Cont from "./Scorecard_Cont";

const Scorecard_Page = () => {
  const part = useSelector((state) => state.part);

  return (
    <main id="scorecard_page">
      <div id="scorecard-master-container">
        <div id="scorecard-part-scores-container">
          {part.tourneyStage !== "pre" ? (
            <Scorecard_Cont />
          ) : (
            <div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Scorecard_Page;
