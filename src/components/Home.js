import React from "react";
import "../index.css";

const Home = () => {
  return (
    <>
    <div>
      <h1>Captain America</h1>
      <h2>
        <em>"Steve Rogers"</em>
      </h2>
      <img src="https://wallpapercave.com/wp/wp7501016.jpg" alt="Captain America" />
      <p>
        The character wears a costume bearing an American flag motif, and he utilizes a nearly-indestructible shield
        that he throws as a projectile. Captain America is the alter ego of Steve Rogers, a frail young artist enhanced
        to the peak of human perfection by an experimental <span className="highlight">super-soldier serum</span> after joining the military to aid the
        United States government's efforts in World War II. Near the end of the war, he was trapped in ice and survived
        in suspended animation until he was revived in modern times. Although Captain America often struggles to maintain
        his ideals as a man out of his time, he remains a highly respected figure both with the American public and in
        the superhero community, which includes becoming the long-time leader of the Avengers.
      </p>
      <table>
        <thead>
          <tr>
            <th>Abilities</th>
            <th>Nature</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Superhuman Strength</td>
            <td>Just and Courageous</td>
            <td>Indestructible Shield</td>
          </tr>
          <tr>
            <td>Enhanced Agility</td>
            <td>Leader and Strategist</td>
            <td>Peak Human Condition</td>
          </tr>
        </tbody>
      </table>
      <hr />
      </div>
      <pre style={{color: "red",fontSize:"20px"}}>Developed by <span className="highlight">Syed Raiyanullah</span> <br />Roll: <strong>2001331530178</strong>
      (AIML-C)</pre>
    </>
  );
};

export default Home;
