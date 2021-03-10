import React from 'react';
import ChecklistItem from 'components/Checklist/ChecklistItem';
import SubChecklist from 'components/Checklist/SubChecklist';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addChecklistItem, selectChecklist, selectChecklistType } from 'redux/stateSlice';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { ChecklistType } from 'types';

const StyledContainer = styled.div`
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    overflow-y:auto;
`;

const ChecklistRenderer: React.FC = () => {
    const checklistType = useAppSelector(selectChecklistType);
    const checklist = useAppSelector(selectChecklist);
    const dispatch = useAppDispatch();
    const renderHeader = ()=>{
        switch(checklistType){
            case ChecklistType.dailyChecklist:
                return "Daily Checklist";
            case ChecklistType.shiftChecklist:
                return "Shift Checklist";
            case ChecklistType.weeklyBosses:
                return "Weekly Bosses";
        }
    }
    return (
        <StyledContainer className="container w-full flex flex-col text-lg p-6 ">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-7">{renderHeader()}</h2>
            {
                Object.entries(checklist[checklistType]).map(([field, value]) => {
                    if (typeof value !== 'boolean') {
                        return <SubChecklist label={field} checklist={value} key={field} />
                    } else {
                        return (
                            <ChecklistItem {...{ field, value }} key={field} />
                        )
                    }

                })
            }
            <input type="text" onKeyDown={(e) => {
                if (e.key === "Enter") {
                    const value = e.currentTarget.value;
                    if (!isEmpty(value)) {
                        dispatch(addChecklistItem(e.currentTarget.value))
                        e.currentTarget.value = "";
                    }
                }
            }} className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
        </StyledContainer>
    )
}

export default ChecklistRenderer
