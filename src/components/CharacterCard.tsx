import React from 'react'
import { Class } from 'types'
interface CharacterProps {
    name: string;
    className: Class;
    level: number;
}


const CharacterCard: React.FC<CharacterProps> = ({ className, level, name }) => {
    return (
        <div className="flex border-blue-600">

        </div>
    )
}

export default CharacterCard
