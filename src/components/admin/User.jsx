import React from 'react';
import {Avatar, ListItem} from "material-ui";
import ActionGrade from 'material-ui/svg-icons/action/grade';

const User = ({user, changeLevel}) => {
    const adminIcon = user.level === 1 ? <ActionGrade/> : null;
    return (
        <ListItem
            key={user.id}
            onClick={e => changeLevel(user.id, user.level === 0 ? 1 : 0)}
            primaryText={user.name}
            secondaryText={user.email}
            insetChildren={!adminIcon}
            leftIcon={adminIcon}
            rightAvatar={<Avatar src={user.picture}/>}
        />
    );
};

export default User;
