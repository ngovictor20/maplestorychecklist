import React from 'react';
import { useSelector } from 'react-redux';
import { Character } from 'types';
interface CharacterProps {
    list: Array<Character>;
    currentIndex: number;
    setCharIndex: (number: number) => void;
}

const CharacterList: React.FC = () => {
    const charList = useSelector((state)=>state.characters);
    return (
    <div>
        <div>
            {list && list.map((char, index) => (
                <div onClick={
                    () => {
                        setCharIndex(index);
                        console.log(index);
                    }
                } key={char.name}>
                    <p>
                        {char.name}
                        {char.class}
                    </p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default CharacterList
