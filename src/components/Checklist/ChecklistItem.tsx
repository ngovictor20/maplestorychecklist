import React, { useEffect, useState } from 'react'
import { deleteChecklistItem, updateChecklistItem } from 'redux/stateSlice';
import { useAppDispatch } from 'redux/hooks';
import styled from 'styled-components';
interface ChecklistItemProps {
    field: string;
    value: boolean;
}

const StyledLabel = styled.label`
    width: 50%;
    &:hover .hover-target{
        visibility: visible;
    }
`;


const ChecklistItem: React.FC<ChecklistItemProps> = ({ field, value }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setChecked(value);
    }, [value])
    return (
        <div key={field} className="">
            <StyledLabel className="flex items-center h-8 cursor-pointer justify-between hover:bg-gray-100">
                <div>
                <input type="checkbox" className="rounded text-pink-500" checked={checked} onChange={(e) => {
                    setChecked(e.target.checked);
                    dispatch(updateChecklistItem({ field }));
                }} />
                <span className="ml-2">{field}</span>
                </div>
                <img onClick={() => {dispatch(deleteChecklistItem(field))}} src={`${process.env.PUBLIC_URL}/exit.svg`} className={`h-4 w-4 m-1 hover:bg-blue-200 hover-target invisible`} alt="exit"/>
            </StyledLabel>
        </div>
    )
}

export default ChecklistItem
