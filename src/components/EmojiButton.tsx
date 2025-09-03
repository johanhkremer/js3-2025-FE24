import { useState } from "react"

//En komponent med tre knappar med tre olika emojis. När användaren trycker på en emoji, så visas den valda emojin nedanför knapparna.

const emojis = ["😄", "😩", "😂"]

const EmojiButton = () => {
    const [selectedIndex, setSelectedindex] = useState<number | null>(null)

    return (
        <>
            <div>
                {emojis.map((emoji, index) => (
                    <button key={index} onClick={() => setSelectedindex(index)}>
                        {emoji}
                    </button>
                ))}
            </div>
            <p>Vald emoji:</p>
            <p>
                {selectedIndex !== null
                    ? emojis[selectedIndex]
                    : "ingen vald"
                }
            </p>
        </>
    )
}

export default EmojiButton