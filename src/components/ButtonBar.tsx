import React from "react";
import {
  clearExistingChecklist,
  clearCharacterChecklist,
} from "redux/stateSlice";
import { useAppDispatch } from "redux/hooks";
import useDialog from "components/Dialog/useDialog";
import { DialogType } from "components/Dialog/types";
import ReactTooltip from "react-tooltip";
import "styles/tooltip.css";

const TooltipProps = {
  type: "info",
  className: "tooltip",
  arrowColor: "#0c0c0fdd",
};

const ButtonBar = () => {
  const dispatch = useAppDispatch();
  const { renderDialog, toggleDialog } = useDialog();

  return (
    <div className="p2 sm:p-3 lg:p-6 flex flex-col items-center gap-3 text-xs sm:text-sm lg:text-base">
      {renderDialog()}
      <div
        onClick={() => {
          toggleDialog(DialogType.resetAllChecklists);
        }}
        data-tip
        data-for="reset-all-checklists"
        className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2"
      >
        Reset All Checklists
      </div>
      <div
        onClick={() => {
          dispatch(clearExistingChecklist());
        }}
        data-tip
        data-for="clear-checklist"
        className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2"
      >
        Clear Checklist
      </div>
      <div
        onClick={() => {
          dispatch(clearCharacterChecklist());
        }}
        data-tip
        data-for="clear-current-checklists"
        className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2"
      >
        Clear All Checklist
      </div>

      <ReactTooltip id="reset-all-checklists" {...{ TooltipProps }}>
        <span>
          Click this button to reset all character's checklists to the original
          checklist. <br /> This will wipe any custom checklists
        </span>
      </ReactTooltip>
      <ReactTooltip id="clear-checklist" {...{ TooltipProps }}>
        <span>Unchecks all the boxes in the currently viewed checklist</span>
      </ReactTooltip>
      <ReactTooltip id="clear-current-checklists" {...{ TooltipProps }}>
        <span>
          Unchecks all boxes in all checklists for the current character
        </span>
      </ReactTooltip>
    </div>
  );
};

export default ButtonBar;
