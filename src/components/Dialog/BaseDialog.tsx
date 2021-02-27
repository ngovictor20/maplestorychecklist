import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AddCharacterDialog from './AddCharacterDialog';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    type: string;
}

const StyledContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0,0,0,0.7);
    z-index: 3;
    top: 0;
    left: 0;
    
`;

const StyledDialog = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-width: 400px;
    max-width: 100%; 
    min-height: 400px;
    border-radius: 8px;
    border: 1px solid black;
`;

const StyledHeader = styled.div`
    border-radius: 5px 5px 0 0;
    padding-left: 5px;
    text-align: center;
    font-size: 28px;
    font-family: Montserrat;
    padding: 1rem;
`;

const BaseDialog: React.FC<DialogProps> = ({ setDialogOpen, type }) => {
    const [header, setHeader] = useState("Dialog");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        switch (type) {
            case "addCharacter":
                setHeader("Add Character");
                break;
            default:
                break;
        }
    }, [type])

    const renderContent = () => {
        switch (type) {
            case "addCharacter":
                return <AddCharacterDialog setDialogOpen={setDialogOpen} setIsError={setIsError} setErrorMsg={setErrorMsg} setIsLoading={setIsLoading}/>
            default:
                break;
        }
    }

    return (
        <StyledContainer>
            <StyledDialog>
                <StyledHeader>{header}</StyledHeader>
                    <img onClick={() => setDialogOpen(false)} src="/exit.svg" className="absolute top-0 right-0 h-4 w-4 m-3" alt="exit"/>
                {renderContent()}
            </StyledDialog>
        </StyledContainer>
    )
}

export default BaseDialog
