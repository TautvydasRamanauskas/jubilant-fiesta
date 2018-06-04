import React from 'react';
import {Dialog, FlatButton} from "material-ui";

const ConfirmationDialog = ({title, ok, cancel, open}) => {
    const onOk = () => {
        ok();
        cancel();
    };
    return (
        <Dialog
            title={title}
            actions={[
                <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={e => onOk()}/>,
                <FlatButton label="Cancel" secondary={true} onClick={e => cancel()}/>,
            ]}
            modal={false}
            open={open}
            onRequestClose={e => cancel()}
        />
    )
};

export default ConfirmationDialog;
