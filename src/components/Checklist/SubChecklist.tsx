import React, { useState } from 'react'
import { Checklist } from 'types'
import SubChecklistItem from 'components/Checklist/SubChecklistItem';
import { useAppDispatch } from 'redux/hooks';
import { deleteChecklistItem, updateSubChecklist } from 'redux/stateSlice';
import { mapValues } from 'lodash';
import styled from 'styled-components';

interface ChecklistProps {
    label: string;
    checklist: Checklist;
}

const StyledLabel = styled.label`
    width: 50%;
    &:hover .hover-target{
        visibility: visible;
    }
`;

const SubChecklist: React.FC<ChecklistProps> = ({ checklist, label }) => {
    const [allChecked, setAllChecked] = useState(false);
    const dispatch = useAppDispatch();
    const onChangeHandler = (field: string, value: boolean) => {
        console.log("On change: ", field, value);
        dispatch(updateSubChecklist({ field: label, data: { ...checklist, [field]: value } }));
    }

    const changeAllFields = (value: boolean) => {
        console.log("Change all")
        dispatch(updateSubChecklist({ field: label, data: mapValues(checklist, () => value) }));
    }

    return (
        <div>
            <StyledLabel className="inline-flex items-center h-8 cursor-pointer justify-between">
                <div className="inline-flex items-center">
                    <input type="checkbox" className="rounded text-pink-500" checked={allChecked} onChange={(e) => {
                        setAllChecked(e.target.checked);
                        changeAllFields(e.target.checked);
                    }} />
                    <span className="ml-2">{label}</span>
                </div>
                <img onClick={() => { dispatch(deleteChecklistItem(label)) }} src={`${process.env.PUBLIC_URL}/exit.svg`} className={`h-4 w-4 m-1 hover:bg-blue-200 hover-target invisible`} alt="exit" />
            </StyledLabel>
            <div className="ml-10">
                {
                    Object.entries(checklist).map(([field, value]) => {
                        if (typeof value === 'boolean') {
                            return <SubChecklistItem {...{ field, value, globalChecked: allChecked, onChangeHandler }} key={field} />
                        } else {
                            return undefined;
                        }
                    })
                }
            </div>
        </div>
    )
}
interface ChecklistProps {
    checklist: Checklist;
}

export default SubChecklist
