import React from 'react'
import BotCard from "../components/BotCard"

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />
  })

  return (
    <div>
      <div>
        {displayBotCards}
        You have completed your Bot Army. There are no more bots to collect.That is enough!
      </div>
    </div>
  )
}
