import React, { useEffect, useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { deleteChecklistItem } from "redux/stateSlice";
import styled from "styled-components";

interface SubChecklistProps {
  field: string;
  heading: string;
  value: boolean;
  globalChecked: boolean;
  onChangeHandler: (field: string, value: boolean) => void;
}

const StyledLabel = styled.label`
  &:hover .hover-target {
    visibility: visible;
  }
`;

const SubChecklistItem: React.FC<SubChecklistProps> = ({
  heading,
  field,
  globalChecked,
  value,
  onChangeHandler,
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setChecked(globalChecked);
  }, [globalChecked]);

  useEffect(() => {
    setChecked(value);
  }, [value]);
  return (
    <div>
      <StyledLabel className="inline-flex items-center h-8 cursor-pointer justify-between hover:bg-gray-50">
        <div className="inline-flex items-center">
          <input
            type="checkbox"
            className="rounded text-pink-500 cursor-pointer"
            checked={checked}
            onChange={(e) => {
              console.log(e.target.checked);
              setChecked(e.target.checked);
              onChangeHandler(field, e.target.checked);
            }}
          />
          <span className="ml-2 w-full">{field}</span>
        </div>
        <img
          onClick={() => {
            dispatch(deleteChecklistItem({ field, heading }));
          }}
          src={`${process.env.PUBLIC_URL}/exit.svg`}
          className={`h-4 w-4 m-1 hover:bg-blue-200 hover-target invisible`}
          alt="exit"
        />
      </StyledLabel>
    </div>
  );
};

export default SubChecklistItem;
