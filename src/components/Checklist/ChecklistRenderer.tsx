import React, { useEffect, useState } from "react";
import ChecklistItem from "components/Checklist/ChecklistItem";
import SubChecklist from "components/Checklist/SubChecklist";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  addChecklistItem,
  addSubChecklist,
  selectChecklist,
  selectChecklistType,
} from "redux/stateSlice";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { Checklist, ChecklistType } from "types";

const StyledContainer = styled.div`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  height: 100%;
  overflow-y: auto;
`;

const ChecklistRenderer: React.FC = () => {
  const checklistType = useAppSelector(selectChecklistType);
  const checklist = useAppSelector(selectChecklist);
  const dispatch = useAppDispatch();
  const [list, setList] = useState<JSX.Element[]>([]);
  const [categoryList, setCategoryList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const tempList: JSX.Element[] = [];
    const tempCategoryList: JSX.Element[] = [];
    Object.entries(checklist[checklistType]).forEach(([field, value]) => {
      if (typeof value !== "boolean") {
        tempCategoryList.push(
          <SubChecklist label={field} checklist={value} key={field} />
        );
      } else {
        tempList.push(<ChecklistItem {...{ field, value }} key={field} />);
      }
    });
    setList(tempList);
    setCategoryList(tempCategoryList);
  }, [checklist, checklistType]);
  const renderHeader = () => {
    switch (checklistType) {
      case ChecklistType.dailyChecklist:
        return "Daily Checklist";
      case ChecklistType.shiftChecklist:
        return "Shift Checklist";
      case ChecklistType.weeklyBosses:
        return "Weekly Bosses";
    }
  };
  return (
    <StyledContainer className="container w-full flex flex-col text-lg p-6 ">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-bold text-gray-900 tracking-tight mb-5">
        {renderHeader()}
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Add checklist item.."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = e.currentTarget.value;
                if (!isEmpty(value)) {
                  dispatch(addChecklistItem(e.currentTarget.value));
                  e.currentTarget.value = "";
                }
              }
            }}
            className="mb-1 block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {list}
        </div>
        <div>
          <input
            type="text"
            placeholder="Add category..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = e.currentTarget.value;
                if (!isEmpty(value)) {
                  dispatch(addSubChecklist(e.currentTarget.value));
                  e.currentTarget.value = "";
                }
              }
            }}
            className="block border-0 border-gray-300 border-b-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {categoryList}
        </div>
      </div>
    </StyledContainer>
  );
};

export default ChecklistRenderer;
