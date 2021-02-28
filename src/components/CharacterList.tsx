import React, { useEffect } from 'react';
import { setCharIndex, updateCharList, resetDailyChecklists, resetWeeklyChecklists } from 'redux/stateSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { isEmpty } from 'lodash';
import sampleCharacterList from 'config/sampleData';
import useDialog from 'components/Dialog/useDialog';
import CharacterCard from './CharacterCard';

const CharacterList: React.FC = () => {
    const charList = useAppSelector(state => state.characters);
    const charIndex = useAppSelector(state => state.characterIndex);
    const dispatch = useAppDispatch();
    const { renderDialog, setDialogOpen, dialogOpen } = useDialog();

    const checkIfLastVisitedExpired = () => {
        const loginDate = new Date();
        const lastCheckedDate = localStorage.getItem("lastVisited");
        console.log(loginDate.getHours());
        //if its daily expiry
        if (lastCheckedDate && loginDate.getHours() > 19 && new Date(lastCheckedDate) < loginDate && new Date(lastCheckedDate).getHours() < 19) {
            console.log("Daily check passed");
            //check if its weekly expired
            if (loginDate.getDay() === 0) {
                console.log("week check passed");
                dispatch(resetWeeklyChecklists());
            }else{
                console.log("weeklycheck failed")
                dispatch(resetDailyChecklists());
            }
        }else{
            dispatch(resetDailyChecklists());
        }
        localStorage.setItem("lastVisited", loginDate.toISOString());
    }

    useEffect(() => {
        checkIfLastVisitedExpired();
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
            <div className="flex items-center py-5 gap-x-4">
                {charList && charList.map((char, index) => (
                    <CharacterCard {...{ index, name: char.name, className: char.class, level: char.level, selected: index === charIndex }} key={char.name}/>
                ))}
            </div>

            <button onClick={() => { setDialogOpen(!dialogOpen) }} className="col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 w-40 place-self-end self-start">
                Add Character
            </button>
        </div>
    )
}

export default CharacterList
