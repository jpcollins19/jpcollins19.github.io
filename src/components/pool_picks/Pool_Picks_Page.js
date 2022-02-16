import { useSelector } from "react-redux";
import Pool_Picks_Single_Cont from "./Pool_Picks_Single_Cont";

const Pool_Picks_Page = () => {
  const part = useSelector((state) => state.part);

  return (
    <main id="pool-picks-page">
      <div id="pool-picks-container">
        <div className="pool-picks-all-picks-table-container">
          {part.tourneyStage !== "pre" ? (
            <Pool_Picks_Single_Cont />
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
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Pool_Picks_Page;
