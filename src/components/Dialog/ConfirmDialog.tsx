import React from "react";
import styled from "styled-components";

interface DialogProps {
  setDialogOpen: (arg: boolean) => void;
  onConfirm: () => void;
  confirmMessage: string;
}

const StyledBackground = styled.div`
  background-color: #eeeeee;
  border: 1px solid #8d8d8d;
  height: calc(100% - 3rem);
`;

const StyledContent = styled.div``;
const ConfirmDialog: React.FC<DialogProps> = ({
  setDialogOpen,
  confirmMessage,
}) => {
  return (
    <div className="flex flex-col h-full content-center">
      <StyledBackground className="rounded-2xl m-2 flex items-center px-1 py-2">
        <div className="flex justify-center w-1/3 h-full p-4 border-r border-gray-300">
          <img src={`${process.env.PUBLIC_URL}/admin.png`} className="h-3/4" />
        </div>
        <StyledContent className="bg-white ml-4 mr-1 h-full rounded-2xl">
          <p className="text-xl self-center text-center">{confirmMessage}</p>
          <img
            onClick={() => setDialogOpen(false)}
            src={`${process.env.PUBLIC_URL}/exit.svg`}
            className="absolute top-0 right-0 h-4 w-4 m-3 hover:bg-blue-200"
            alt="exit"
          />
        </StyledContent>
      </StyledBackground>
    </div>
  );
};

export default ConfirmDialog;
