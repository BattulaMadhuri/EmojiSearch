import React, { useState } from 'react'

const emojiData = [
    {
        id: 1,
        symbol: "😁",
        name: "Smile"
    },
    {
        id: 2,
        symbol: "😡",
        name: "Angry"
    },
    {
        id: 3,
        symbol: "😭",
        name: "Cry"
    },
    {
        id: 4,
        symbol: "😔",
        name: "Sad"
    },
    {
        id: 5,
        symbol: "😉",
        name: "Grinning"
    },
    {
        id: 6,
        symbol: "😴",
        name: "Sleeping"
    },
    {
        id: 7,
        symbol: "😱",
        name: "omg"
    },
    {
        id: 8,
        symbol: "😆",
        name: "Laughing"
    },
    {
        id: 9,
        symbol: "😘",
        name: "Flirt"
    },
    {
        id: 10,
        symbol: "😲",
        name: "Shock"
    },
]

function EmojiSearch() {
    const [SearchEmoji,setSearchEmoji]=useState("");

    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(SearchEmoji.toLowerCase());
    });
  return (
    <div>
        <h1> React Emoji App !!! </h1>
        <input type='=text' placeholder='Search for the emoji.....' value={SearchEmoji} onChange={handleChange} />
        <div>
            {showEmoji.map((emoji) => emoji.symbol)}
        </div>
    </div>
  )
}

export default EmojiSearch