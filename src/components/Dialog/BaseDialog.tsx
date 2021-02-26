import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

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
    min-width: 500px;
    max-width: 100%; 
    min-height: 500px;
    border-radius: 8px;
    border: 1px solid black;
`;

const StyledExitButton = styled.button`
    position: absolute;
    height: 35px;
    width: 35px;
    border: none;
    background-color: rgb(0,0,0,0);
    right: 0;
    cursor: pointer;
    filter: brightness(0) invert(1);
`;

const StyledExitIcon = styled.img`
    height: auto;
    width: 100%;
`;

const StyledHeader = styled.div`
    border-radius: 5px 5px 0 0;
    padding-left: 5px;
    text-align: center;
    font-size: 28px;
    font-family: Montserrat;
    padding: 1rem;
`;

const StyledErrorDiv = styled.div`
    background-color: white;
    height: calc(100% - 70px);
    z-index: 3;
    position: absolute;
    width: 100%;
    top: 70px;
    text-align: center;
`;

const BaseDialog: React.FC<DialogProps> = ({ setDialogOpen, type }) => {
    const [header, setHeader] = useState("Dialog");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        switch (type) {
            case "musicAdd":
                setHeader("Add Music");
                break;
            case "pictureAdd":
                setHeader("Add Picture");
                break;
            default:
                break;
        }
    }, [type])

    return (
        <StyledContainer>
            <StyledDialog>
                <StyledHeader>{header}</StyledHeader>
                <StyledExitButton onClick={() => setDialogOpen(false)}>
                    <StyledExitIcon src={`${process.env.PUBLIC_URL}/exit.svg`} />
                </StyledExitButton>
            </StyledDialog>
        </StyledContainer>
    )
}

export default BaseDialog
