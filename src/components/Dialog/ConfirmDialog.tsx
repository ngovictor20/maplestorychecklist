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

const StyledButton = styled.button`
  background: linear-gradient(180deg, #ddff00 0%, #88cc00 100%);
`;

const ConfirmDialog: React.FC<DialogProps> = ({
  setDialogOpen,
  confirmMessage,
  onConfirm,
}) => {
  return (
    <div className="flex flex-col h-1/4 content-center">
      <StyledBackground className="rounded-xl m-3 mb-1 flex items-center px-1 py-4">
        <div className="flex content-center justify-center w-1/4 h-full p-4 border-r-2 border-gray-200">
          <img
            src={`${process.env.PUBLIC_URL}/admin.png`}
            className="self-center"
            alt=""
          />
        </div>
        <div className="relative flex bg-white ml-4 mr-1 p-6 h-full w-full rounded-xl flex flex-col">
          <p className="text-base self-center text-center text-gray-500">
            {confirmMessage}
          </p>
        </div>
        <img
          onClick={() => setDialogOpen(false)}
          src={`${process.env.PUBLIC_URL}/exit.svg`}
          className="absolute top-0 right-0 h-4 w-4 m-4 hover:bg-blue-200"
          alt="exit"
        />
      </StyledBackground>
      <StyledButton
        className="self-end mr-4 h-6 w-16 text-sm rounded-md text-white"
        onClick={onConfirm}
      >
        OK
      </StyledButton>
    </div>
  );
};

export default ConfirmDialog;
