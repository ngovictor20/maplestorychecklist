import React, { useEffect } from 'react';
import { setCharIndex, updateCharList } from 'redux/stateSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { isEmpty } from 'lodash';
import sampleCharacterList from 'config/sampleData';
import useDialog from 'components/Dialog/useDialog';

const CharacterList: React.FC = () => {
    const charList = useAppSelector(state => state.characters);
    const dispatch = useAppDispatch();
    const { renderDialog, setDialogOpen, dialogOpen } = useDialog();
    useEffect(() => {
        const list = localStorage.getItem("characters");
        if (isEmpty(list)) {
            localStorage.setItem('characters', JSON.stringify(sampleCharacterList));
        } else {
            dispatch(updateCharList(JSON.parse(list!.toString())))
        }
    }, [])

    return (
        <div className="grid grid-rows-1 grid-cols-2">
            {renderDialog("addCharacter")}
            <div className="flex">
                {charList && charList.map((char, index) => (
                    <div onClick={
                        () => {
                            dispatch(setCharIndex(index));
                        }
                    } key={char.name}>
                        <p>
                            {char.name}
                            {char.class}
                        </p>
                    </div>
                ))}
            </div>
            
            <button onClick={() => { setDialogOpen(!dialogOpen) }} className="col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 w-40 place-self-end self-start">
                Add Character
            </button>
        </div>
    )
}

export default CharacterList
