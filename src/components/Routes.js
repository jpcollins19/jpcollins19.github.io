import { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "../store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./pre_login/Pre_Login_Page";
import Login_Page from "./login_&_createAccount/Login_Page";
import Name_Page from "./name/Name_Page";
import Edit_Name_Page from "./name/Edit_Name_Page";
import Create_Account_Page from "./login_&_createAccount/Create_Account_Page";
import Scorecard_Page from "./scorecard/Scorecard_Page";
import My_Picks_Page_Locked from "./my_picks/My_Picks_Page_Locked";
import My_Picks_Page_Unlocked from "./my_picks/My_Picks_Page_Unlocked";
import Odds_Page from "./golfer_odds/Odds_Page";
import Rules_Page from "./rules/Rules_Page";
import Pool_Picks_Page from "./pool_picks/Pool_Picks_Page";

const Routes = () => {
  const part = useSelector((state) => state.part);

  const dispatch = useDispatch();
  useEffect(() => dispatch(me()), []);

  if (!part) {
    return null;
  }

  return part.id ? (
    <Switch>
      <Route exact path="/scorecard" component={Scorecard_Page} />
      <Route exact path="/my_picks" component={My_Picks_Page_Locked} />
      {part.tourneyStage === "pre" && (
        <Route
          exact
          path="/my_picks_edit_golfers"
          component={My_Picks_Page_Unlocked}
        />
      )}
      {part.tourneyStage === "pre" && (
        <Route
          exact
          path="/my_picks_edit_tiebreaker"
          component={My_Picks_Page_Unlocked}
        />
      )}
      <Route exact path="/pool_picks" component={Pool_Picks_Page} />
      <Route exact path="/golfer_odds" component={Odds_Page} />
      <Route exact path="/rules" component={Rules_Page} />
      <Route exact path="/name" component={Name_Page} />
      <Route exact path="/edit_name" component={Edit_Name_Page} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Pre_Login_Page} />
      <Route exact path="/login" component={Login_Page} />
      <Route exact path="/create_account" component={Create_Account_Page} />
      <Route exact path="/rules" component={Rules_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
