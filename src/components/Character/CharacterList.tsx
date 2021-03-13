import React, { useEffect } from "react";
import {
  updateCharList,
  dailyResetChecklists,
  selectCharacters,
  selectCharacterIndex,
  weeklyResetChecklists,
} from "redux/stateSlice";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { isEmpty } from "lodash";
import useDialog from "components/Dialog/useDialog";
import CharacterCard from "components/Character/CharacterCard";
import { DialogType } from "components/Dialog/types";
import { utcToZonedTime } from "date-fns-tz";
import { getHours, isWednesday, set, isBefore } from "date-fns";

const CharacterList: React.FC = () => {
  const charList = useAppSelector(selectCharacters);
  const charIndex = useAppSelector(selectCharacterIndex);
  const dispatch = useAppDispatch();
  const { renderDialog, toggleDialog } = useDialog();

  const checkIfLastVisitedExpired = () => {
    const currentDate = utcToZonedTime(new Date(), "America/New_York");
    const lastCheckedDate = localStorage.getItem("lastVisited");
    const resetHour = 19; //19 reg
    if (lastCheckedDate) {
      const resetDate = set(currentDate, {
        hours: resetHour,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      }); //19 0 0 0
      const lastLogin = utcToZonedTime(
        lastCheckedDate!.toString(),
        "America/New_York"
      );
      if (
        getHours(currentDate) >= resetHour &&
        isBefore(lastLogin, resetDate)
      ) {
        if (isWednesday(currentDate)) {
          dispatch(weeklyResetChecklists());
          console.log("Weekly Reset Triggered");
        } else {
          dispatch(dailyResetChecklists());
          console.log("Daily Reset Triggered");
        }
        toggleDialog(DialogType.informReset);
      }
    }
    localStorage.setItem("lastVisited", currentDate.toISOString());
  };

  useEffect(() => {
    const list = localStorage.getItem("characters");
    if (!isEmpty(list)) {
      dispatch(updateCharList(JSON.parse(list!.toString())));
    }
    checkIfLastVisitedExpired(); //ADD DIALOG POPUP IF RESET
  }, []);

  return (
    <div className="">
      {renderDialog()}
      <div className="flex flex-col items-center py-5 gap-y-6">
        {charList &&
          charList.map((char, index) => (
            <CharacterCard
              {...{
                index,
                name: char.name,
                className: char.class,
                level: char.level,
                selected: index === charIndex,
                toggleDialog,
              }}
              key={char.name}
            />
          ))}
      </div>
    </div>
  );
};

export default CharacterList;
