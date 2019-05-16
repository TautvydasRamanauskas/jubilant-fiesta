import React from 'react';
import {Avatar, ListItem} from "material-ui";
import GradeIcon from 'material-ui/svg-icons/action/grade';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';

const LEVELS = {
    DEFAULT: 0,
    ADMIN: 1,
};

const getIcon = (user, currentUser) => {
    if (currentUser) {
        return <AccountIcon/>;
    }
    if (user.level === LEVELS.ADMIN) {
        return <GradeIcon/>;
    }
    return null;
};

const User = ({user, changeLevel, currentUser}) => {
    const adminIcon = getIcon(user, currentUser);
    const onClick = currentUser ?
        () => {
        } :
        () => changeLevel(user.id, user.level === LEVELS.DEFAULT ? LEVELS.ADMIN : LEVELS.DEFAULT);
    return (
        <ListItem
            onClick={onClick}
            primaryText={user.name}
            secondaryText={user.email}
            insetChildren={!adminIcon}
            leftIcon={adminIcon}
            rightAvatar={<Avatar src={user.picture}/>}
        />
    );
};

export default User;
