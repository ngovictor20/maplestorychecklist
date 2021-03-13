import React, { useState } from "react";
import { Checklist } from "types";
import SubChecklistItem from "components/Checklist/SubChecklistItem";
import { useAppDispatch } from "redux/hooks";
import {
  addSubChecklistItem,
  deleteChecklistItem,
  updateSubChecklist,
} from "redux/stateSlice";
import { isEmpty, mapValues } from "lodash";
import styled from "styled-components";

interface ChecklistProps {
  label: string;
  checklist: Checklist;
}

const StyledLabel = styled.div`
  width: 100%;
  &:hover .hover-target {
    visibility: visible;
  }
`;

const SubChecklist: React.FC<ChecklistProps> = ({ checklist, label }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();
  const onChangeHandler = (field: string, value: boolean) => {
    console.log("On change: ", field, value);
    dispatch(
      updateSubChecklist({
        field: label,
        data: { ...checklist, [field]: value },
      })
    );
  };

  const changeAllFields = (value: boolean) => {
    console.log("Change all");
    dispatch(
      updateSubChecklist({
        field: label,
        data: mapValues(checklist, () => value),
      })
    );
  };

  return (
    <div>
      <StyledLabel className="inline-flex items-center h-8 justify-between">
        <div className="inline-flex items-center">
          <input
            type="checkbox"
            className="rounded text-pink-500 cursor-pointer"
            checked={allChecked}
            onChange={(e) => {
              setAllChecked(e.target.checked);
              changeAllFields(e.target.checked);
            }}
          />
          <span className="ml-2">{label}</span>
        </div>
        <div className="inline-flex items-end gap-1">
          <img
            onClick={() => {
              setIsAdding(!isAdding);
            }}
            src={`${process.env.PUBLIC_URL}/add.svg`}
            className={`h-4 w-4 hover:bg-blue-200 hover-target invisible cursor-pointer `}
            alt="add"
          />
          <img
            onClick={() => {
              dispatch(deleteChecklistItem({ field: label }));
            }}
            src={`${process.env.PUBLIC_URL}/exit.svg`}
            className={`h-4 w-4 hover:bg-blue-200 hover-target invisible`}
            alt="exit"
          />
        </div>
      </StyledLabel>
      <div className="ml-6">
        {Object.entries(checklist).map(([field, value]) => {
          if (typeof value === "boolean") {
            return (
              <SubChecklistItem
                {...{
                  heading: label,
                  field,
                  value,
                  globalChecked: allChecked,
                  onChangeHandler,
                }}
                key={field}
              />
            );
          } else {
            return undefined;
          }
        })}
      </div>
      <input
        type="text"
        placeholder="Add checklist item..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = e.currentTarget.value;
            if (!isEmpty(value)) {
              dispatch(
                addSubChecklistItem({
                  heading: label,
                  field: e.currentTarget.value,
                })
              );
              e.currentTarget.value = "";
              setIsAdding(false);
            }
          }
        }}
        className={`ml-10 ${
          isAdding ? "block" : "hidden"
        } border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      ></input>
    </div>
  );
};
interface ChecklistProps {
  checklist: Checklist;
}

export default SubChecklist;
