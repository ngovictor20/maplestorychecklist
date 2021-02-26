import React from 'react'
import { Character } from 'types'
interface CharacterProps{
    list: Array<Character>;
}

const CharacterList:React.FC<CharacterProps> = ({list}) => {
    return (
        <div>
            {list && list.map((char)=>(
                <p>
                    {char.name}
                    {char.class}
                </p>
            ))}
        </div>
    )
}

export default CharacterList
