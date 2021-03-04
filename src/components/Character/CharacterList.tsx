import React, { useEffect } from 'react';
import { updateCharList, resetDailyChecklists, resetWeeklyChecklists, selectCharacters, selectCharacterIndex } from 'redux/stateSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { isEmpty } from 'lodash';
import useDialog from 'components/Dialog/useDialog';
import CharacterCard from 'components/Character/CharacterCard';
import { DialogType } from 'components/Dialog/types';
import { utcToZonedTime } from 'date-fns-tz';
import { getHours, isThursday, isWednesday, setHours } from 'date-fns';
import { isBefore } from 'date-fns/fp';

const CharacterList: React.FC = () => {
    const charList = useAppSelector(selectCharacters);
    const charIndex = useAppSelector(selectCharacterIndex);
    const dispatch = useAppDispatch();
    const { renderDialog, toggleDialog } = useDialog();

    const checkIfLastVisitedExpired = () => {
        const currentDate = utcToZonedTime(new Date(), "America/New_York")
        const lastCheckedDate = localStorage.getItem("lastVisited");
        if (lastCheckedDate) {
            const resetDate = setHours(currentDate, 19);
            const lastLogin = utcToZonedTime(lastCheckedDate!.toString(), "America/New_York");
            console.log(lastLogin);
            console.log(currentDate, getHours(currentDate));
            if (getHours(currentDate) >= 19 && isBefore(lastLogin, resetDate)) {
                console.log("Checklists should reset")
                if (isWednesday(currentDate)) {
                    dispatch(resetWeeklyChecklists());
                    console.log("reset weekly")
                } else {
                    dispatch(resetDailyChecklists());
                    console.log("Reset daily");
                }
            }
        }
        localStorage.setItem("lastVisited", currentDate.toISOString());
    }

    useEffect(() => {
        checkIfLastVisitedExpired();
        const list = localStorage.getItem("characters");
        if (!isEmpty(list)) {
            dispatch(updateCharList(JSON.parse(list!.toString())))
        }
    }, [])

    return (
        <div className="grid grid-rows-1 grid-cols-2">
            {renderDialog()}
            <div className="flex items-center py-5 gap-x-4">
                {charList && charList.map((char, index) => (
                    <CharacterCard {...{ index, name: char.name, className: char.class, level: char.level, selected: index === charIndex, toggleDialog }} key={char.name} />
                ))}
            </div>
            <button onClick={() => { toggleDialog(DialogType.addCharacter) }} className="col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 w-40 place-self-end self-start">
                Add Character
            </button>
        </div>
    )
}

export default CharacterList
