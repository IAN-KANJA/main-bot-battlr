import React from "react";

const bot_Classes ={
    Assault: " military",
    Defender: " shield",
    Support: " plus circle",
    Medic: " ambulance",
    Witch: " magic",
    Captain: " star"
}

const BotCard = ({bot, action, removeCard })
function handleClick(){
    console.log("handleClick complete")
    action(bot)
}

function handleDischarge(e){
    console.log("Red X is clicked")
    e.stopPropagation()
    removeCard(bot)
}

return (
    <div className={bot_Classes}>
        <img src={bot.avator_url} alt="bot.name"/>
        <div key={props.bot.id} onClick ={handleClick}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
         <button onClick ={handleDischarge}>
            remove
         </button>
        </div>
    </div>
)
export default BotCard 