import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setCharIndex } from 'redux/stateSlice';
import { Class } from 'types'
import { DialogType } from 'components/Dialog/types';
interface CharacterProps {
    name: string;
    className: Class;
    level: number;
    index: number;
    selected?: boolean;
    toggleDialog: (type: DialogType) => void;
}


const CharacterCard: React.FC<CharacterProps> = ({ className, level, name, index, selected, toggleDialog }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={`w-4/5 relative cursor-pointer border-accent-grey border-2 shadow-lg flex items-center h-20 rounded-md hover:ring-2 focus:ring-gray-300 ${selected ? "ring ring-gray-300 ring-offset-1" : ""}`} onClick={() => dispatch(setCharIndex(index))}>
            <img className="hidden lg:block w-12 h-12 m-2 rounded-full ring-1" src={`${process.env.PUBLIC_URL}/${Class[className]}.svg`} alt={`${Class[className]}`} />
            <div className="text-xs sm:text-sm lg:text-base">
                <p>{name}</p>
                <p>{level}</p>
            </div>
            <img onClick={() => { toggleDialog(DialogType.deleteCharacter) }} src={`${process.env.PUBLIC_URL}/exit.svg`} className={`absolute top-0 right-0 h-2 w-2 m-1 hover:bg-blue-200 ${selected ? "" : ""}`} alt="exit" />
        </div>
    )
}

export default CharacterCard
