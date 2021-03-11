import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer'
import Timer from 'components/Timer'
import styled from 'styled-components'
import ButtonBar from './ButtonBar'

const StyledCard = styled.div`
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

const ContentContainer = () => {

    return (
        <div className="py-10 sm:pr-10 lg:pr-36 relative grid grid-cols-mainLayout grid-rows-2">
            <div className="row-span-2 mx-10">
                <ChecklistRenderer />
            </div>
            <StyledCard className="mb-10">
                <Timer />
            </StyledCard>
            <StyledCard>
                <ButtonBar />
            </StyledCard>

        </div>
    )
}

export default ContentContainer
