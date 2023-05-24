import React from "react";
import './About.css';



const About = () => {
    return (
      <div>
        <h3 className='mfh'>My fav heroes!</h3>
        <div className='team-about'>
          <div className='FavHero'>
            <img
              className="team-photo"
              src="https://media.wired.com/photos/607dce47faba7eee98ae78e5/master/w_2560%2Cc_limit/games_overwatch-pro.jpg"
              alt="Ana"
            ></img>
  
            <h4 className="bio-name">
              <em>Ana</em>
            </h4>
            <p className="bio-text">
            One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for. 
            </p>
            Ana's versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power. 

            <img
              className="team-photo-mei"
              src="https://imgix.bustle.com/mic/zbz1f5zjezqqdvmhp4ndhzrixbx7yztsd4upaqstv70hty98k0db6axlevk1nvom.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpgg"
              alt="Mei"
            ></img>
  
            <h4 className="bio-name">
              <em>Mei</em>
            </h4>
            <p className="bio-text">
            Mei is a Damage hero in Overwatch.
            </p>
            Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team's movements with an Ice Wall. 

            <img
              className="team-photo-sombra"
              src="https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blta5830262a146aab0/638810315148880e83ab70d3/sombra-00.jpg"
              alt="Mei"
            ></img>
  
            <h4 className="bio-name">
              <em>somba</em>
            </h4>
            <p className="bio-text">
            Sombra is a Damage hero in Overwatch.
            </p>
            Stealth and debilitating attacks make Sombra a powerful infiltrator. She is the archetypal technomancer of Overwatch the same way Widowmaker is the archetypal sniper. Her hacking can disrupt her enemies, ensuring they're easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra’s ability to Translocate and camouflage herself makes her a hard target to pin down


            </div> 
            </div>
            </div> 
            );
            };
            export default About;