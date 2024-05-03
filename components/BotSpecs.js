import React from "react";

const bot_Classes ={
    Assault: " military",
    Defender: " shield",
    Support: " plus circle",
    Medic: " ambulance",
    Witch: " magic",
    Captain: " star"
}

const BotSpecs = ({bot, action, removeCard })=>{
    return(
       <div>
      <h2>Bot Specs</h2>
      <div>
        <img src={bot.avatar_url} alt={bot.name} />
        <div>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.Damage}</p>
            <p>Armor: {bot.Armor}</p>
            <button onClick={action}>Back to the list</button>
            <button onClick={() => removeCard(bot)}>Remove the card</button>
        </div>
      </div>
       </div> 
    )
}
export default BotSpecs