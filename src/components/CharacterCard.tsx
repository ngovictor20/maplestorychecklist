import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setCharIndex } from 'redux/stateSlice';
import { Class } from 'types'
interface CharacterProps {
    name: string;
    className: Class;
    level: number;
    index: number;
    selected?: boolean;
}


const CharacterCard: React.FC<CharacterProps> = ({ className, level, name, index, selected }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="cursor-pointer border-blue-600 border rounded-lg flex items-center" onClick={() => dispatch(setCharIndex(index))}>
            <img className=" w-12 h-12 m-2 rounded-full ring-1 ring-black" src={`/${Class[className]}.svg`} alt={`${Class[className]}`} />
            <div className="pr-2">
                <p>{name}</p>
                <p>{level}</p>
            </div>
        </div>
    )
}

export default CharacterCard
