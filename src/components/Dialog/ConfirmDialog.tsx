import React from "react";

interface DialogProps {
  setIsLoading?: (arg: boolean) => void;
  setIsError?: (arg: boolean) => void;
  setErrorMsg?: (arg: string) => void;
  onConfirm: () => void;
  confirmMessage: string;
}

const ConfirmDialog: React.FC<DialogProps> = ({
  setIsLoading,
  setIsError,
  setErrorMsg,
  onConfirm,
  confirmMessage,
}) => {
  return (
    <div className="flex flex-col relative px-12 h-full content-center">
      <p className="text-2xl self-center text-center">{confirmMessage}</p>
      <button
        onClick={onConfirm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 cursor-pointer"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmDialog;
