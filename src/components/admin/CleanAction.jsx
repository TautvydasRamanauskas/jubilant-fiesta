import React from 'react';
import ClearButton from "./ClearButton";
import ConfirmationDialog from "./ConfirmationDialog";

const CleanAction = ({buttonText, buttonClick, dialogTitle, dialogOk, dialogCancel, dialogOpen}) => (
    <div>
        <ClearButton text={buttonText} onClick={buttonClick}/>
        <ConfirmationDialog
            title={dialogTitle}
            cancel={dialogCancel}
            ok={dialogOk}
            open={dialogOpen}
        />
    </div>
);

export default CleanAction;
