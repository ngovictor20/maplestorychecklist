import React, { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { setCharIndex, updateCharacter } from "redux/stateSlice";
import { Class } from "types";
import { DialogType } from "components/Dialog/types";
import styled from "styled-components";
interface CharacterProps {
  name: string;
  className: Class;
  level: number;
  index: number;
  selected?: boolean;
  toggleDialog: (type: DialogType) => void;
}

const StyledInput = styled.input`
  height: 30%;
  width: 100%;
`;

const StyledContainer = styled.div`
  input:read-only {
    border: 0px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
const CharacterCard: React.FC<CharacterProps> = ({
  className,
  level,
  name,
  index,
  selected,
  toggleDialog,
}) => {
  const dispatch = useAppDispatch();
  const [readOnlyMode, setReadOnlyMode] = useState<boolean>(true);
  const [newName, setNewName] = useState<string>(name);
  const [newLevel, setNewLevel] = useState<number>(level);
  console.log("log");
  return (
    <StyledContainer
      className={`w-4/5 relative cursor-pointer border-accent-grey border-2 shadow-lg flex items-center h-20 rounded-md hover:ring-2 focus:ring-gray-300 ${
        selected ? "ring ring-gray-300 ring-offset-1" : ""
      }`}
      onClick={() => dispatch(setCharIndex(index))}
    >
      <img
        className="hidden lg:block w-12 h-12 m-2 rounded-full ring-1"
        src={`${process.env.PUBLIC_URL}/${Class[className]}.svg`}
        alt={`${Class[className]}`}
      />
      <div className="grid grid-cols-2 h-full">
        <div className="text-xs sm:text-sm lg:text-base flex flex-col justify-center">
          <StyledInput
            type="text"
            readOnly={readOnlyMode}
            className={`w-full p-0 border-0 ${
              readOnlyMode ? "" : "border-gray-300 border-b-2"
            }`}
            onChange={(e) => {
              setNewName(e.currentTarget.value);
            }}
            placeholder={name}
          ></StyledInput>
          <StyledInput
            type="number"
            readOnly={readOnlyMode}
            className={`w-full p-0 border-0 ${
              readOnlyMode ? "" : "border-gray-300 border-b-2"
            }`}
            onChange={(e) => {
              setNewLevel(Number(e.currentTarget.value));
            }}
            placeholder={level.toString()}
          ></StyledInput>
        </div>
        <div className="flex flex-col justify-center pr-2 items-center">
          <img
            src={`${process.env.PUBLIC_URL}/exit.svg`}
            className="self-end"
            alt="exit"
            onClick={() => {
              toggleDialog(DialogType.deleteCharacter);
            }}
          />
          <img
            onClick={() => {
              if (readOnlyMode) {
                setReadOnlyMode(!readOnlyMode);
              } else {
                dispatch(
                  updateCharacter({
                    name: newName,
                    class: className,
                    level: newLevel,
                  })
                );
                setReadOnlyMode(!readOnlyMode);
              }
            }}
            src={`${process.env.PUBLIC_URL}/${
              readOnlyMode ? "edit" : "add"
            }.svg`}
            className="self-end"
            alt="exit"
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default CharacterCard;
