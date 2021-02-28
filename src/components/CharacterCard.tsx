import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setCharIndex } from 'redux/stateSlice';
import { Class } from 'types'
import { DialogType } from './Dialog/types';
interface CharacterProps {
    name: string;
    className: Class;
    level: number;
    index: number;
    selected?: boolean;
    toggleDialog: (type: DialogType)=>void;
}


const CharacterCard: React.FC<CharacterProps> = ({ className, level, name, index, selected, toggleDialog }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={`relative cursor-pointer border-blue-400 border rounded-lg flex items-center ${selected ? "text-white bg-blue-400" : ""}`} onClick={() => dispatch(setCharIndex(index))}>
            <img className=" w-12 h-12 m-2 rounded-full ring-1 blue-500" src={`${process.env.PUBLIC_URL}/${Class[className]}.svg`} alt={`${Class[className]}`} />
            <div className="pr-2">
                <p>{name}</p>
                <p>{level}</p>
            </div>
            <img onClick={() => {toggleDialog(DialogType.deleteCharacter)}} src={`${process.env.PUBLIC_URL}/exit.svg`} className={`absolute top-0 right-0 h-2 w-2 m-1 hover:bg-blue-200 ${selected ? "":""}`} alt="exit"/>
        </div>
    )
}

export default CharacterCard
