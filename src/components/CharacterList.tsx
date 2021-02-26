import React, { useEffect } from 'react';
import {setCharIndex, updateCharList} from 'redux/stateSlice'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import { isEmpty } from 'lodash';

const CharacterList: React.FC = () => {
    const charList = useAppSelector(state=>state.characters);
    const charIndex = useAppSelector(state=>state.characterIndex);
    const dispatch = useAppDispatch();
    console.log(charList, charIndex);
    useEffect(()=>{
        const list = localStorage.getItem("characters");
        if(isEmpty(list)){
            console.log("EMPTY")
        }else{
            dispatch(updateCharList(JSON.parse(list!.toString())))
        }
    },[])

    return (
    <div>
        <div>
            {charList && charList.map((char, index) => (
                <div onClick={
                    () => {
                        dispatch(setCharIndex(index));
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
