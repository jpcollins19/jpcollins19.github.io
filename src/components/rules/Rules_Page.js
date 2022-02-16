const Rules_Page = () => {
  return (
    <main id="rules_page">
      <div>
        <h3 className="to-do">figure out the penalty for a DQ</h3>
        <h3 className="to-do">
          add info to emailing me with subject line and who referred you if i
          dont know you
        </h3>
        <h3 className="to-do">
          Adjust submitting picks and payment info at bottom
        </h3>
        <h3 className="to-do">email: add blurb about not doing an api</h3>
        <h3>Pick your golfers</h3>
        <ul>
          <li>Choose 2 players at or under 25/1 odds</li>
          <li>Choose 2 players between 26/1 & 75/1 odds</li>
          <li>Choose 2 players over 76/1 odds</li>
        </ul>
        The person with the lowest cumulative score between their six golfers
        wins.
        <h3>Missed cut penalty:</h3>
        <ul>
          <li>If a player misses the cut, add +5 to their score.</li>
          <li>
            All golfers that make the cut would be capped out at the cut line
            for Saturday and Sunday.
          </li>
        </ul>
        <h4>Example scenario:</h4>
        <ul>
          <li>Cut is +4.</li>
          <li>Sergio ends on Friday at +6 - his final score will be +11.</li>
          <li>
            Rose makes the cut at -3, but pulls a Spieth on Sunday and ends at
            +5 - Rose's final score would be +4.
          </li>
        </ul>
        <h3>Tiebreaker:</h3>
        <ul>
          <li>Choose a winner, and their final score in accordance to 288.</li>
          <li>
            In the event of a final score tie between your six golfers:
            <ul>
              <li>
                The 1st tie breaker would be if you selected the correct winner.
                If both, or neither person chose the correct winner:
              </li>
              <li>
                The 2nd tiebreaker would be the closest (in strokes) to the
                Masters winner's final score, price is right rules. If both
                tiebreaker scores are over the Masters winner's final score, the
                winner will be the person who is closer to the Masters winner's
                score (ie whoever has the tiebreaker score closest to 0).
              </li>
            </ul>
          </li>
        </ul>
        <h3>Submitting Your Golfer Picks & Tiebreaker Info:</h3>
        <ul>
          <li>Email me: Jpatcollins@gmail.com</li>
        </ul>
        <h3>Payments/Payout:</h3>
        <ul>
          <li>$20 entry fee.</li>
          <li>Venmo: Joe-Collins-12</li>
          <li>3rd place gets money back.</li>
          <li>Winner gets 75% of remaining purse.</li>
          <li>2nd gets 25% of remaining purse.</li>
        </ul>
      </div>
    </main>
  );
};

export default Rules_Page;
