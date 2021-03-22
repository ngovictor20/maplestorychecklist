import React, { useState } from "react";
import styled from "styled-components";
import { Class } from "types";
import { addChar } from "redux/stateSlice";
import { useAppDispatch } from "redux/hooks";

interface DialogProps {
  setDialogOpen: (arg: boolean) => void;
}

const StyledBackground = styled.div`
  background-color: #eeeeee;
  border: 1px solid #8d8d8d;
  height: calc(100% - 3rem);
`;

const StyledButton = styled.button`
  background: linear-gradient(180deg, #ddff00 0%, #88cc00 100%);
`;

const StyledInput = styled.input`
  -moz-appearance: textfield;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputClass =
  "mb-1 w-full block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

const AddPictureDialog: React.FC<DialogProps> = ({ setDialogOpen }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState<Class>(Class.magician);
  const [level, setLevel] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col h-full content-center">
      <StyledBackground className="rounded-xl m-3 mb-1 flex items-center px-1 py-4">
        <div className="relative flex bg-white mx-2 px-4 py-4 h-full w-full rounded-xl flex flex-col gap-2">
          <p className="text-2xl text-center mb-2 font-semibold underline">
            Add Character
          </p>
          <label className="block">
            <span>Name</span>
            <input
              type="text"
              maxLength={12}
              onChange={(e) => {
                setName(e.target!.value);
              }}
              className={InputClass}
            ></input>
          </label>
          <label className="block">
            <span>Class</span>
            <select
              onChange={(e) => {
                setJob(Class[e.target!.value! as keyof typeof Class]);
              }}
              className={InputClass}
            >
              {Object.keys(Class).map((value) => {
                return <option>{value}</option>;
              })}
            </select>
          </label>
          <label className="block">
            <span>Level</span>
            <StyledInput
              type="number"
              max={300}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > 300 || value < 0) {
                  setLevel(0);
                } else {
                  setLevel(value);
                }
              }}
              value={level}
              className={InputClass}
            />
          </label>
        </div>
        <img
          onClick={() => setDialogOpen(false)}
          src={`${process.env.PUBLIC_URL}/exit.svg`}
          className="absolute top-0 right-0 h-4 w-4 m-4 cursor-pointer"
          alt="exit"
        />
      </StyledBackground>
      <StyledButton
        onClick={() => {
          dispatch(addChar({ name, level, class: job }));
          setDialogOpen(false);
        }}
        className="self-end mr-4 h-6 mb-2 w-16 text-sm rounded-md text-white"
      >
        Add
      </StyledButton>
    </div>
  );
};

export default AddPictureDialog;
