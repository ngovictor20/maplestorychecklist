import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer'
import Timer from 'components/Timer'
import { resetChecklists } from 'redux/stateSlice'
import { useAppDispatch } from 'redux/hooks'
import styled from 'styled-components'

const StyledCard = styled.div`
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

const ContentContainer = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="py-10 px-20 relative grid grid-cols-mainLayout grid-rows-2">
            <div className="row-span-2 mr-10">
                <ChecklistRenderer />
            </div>

            <StyledCard>
                <Timer />
            </StyledCard>
            <StyledCard>
                <div onClick={() => {
                    dispatch(resetChecklists());
                }} className="w-4/5 h-14 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md">
                    Reset Current Checklist
                </div>
            </StyledCard>

        </div>
    )
}

export default ContentContainer
