import React, {useEffect} from 'react';
import {IPhotoInterface} from "../interfaces/IPhotoInterface";

interface IPhotoInterfaces {
    user: IPhotoInterface
}
const User = ({user}: IPhotoInterfaces) => {
    return (
        <div style={{
            margin: "15px auto"
        }}>
            <img src={user.url} alt=""/>
            <h1 style={{
                width: "600px"
            }}>{user.title}</h1>
        </div>
    );
};

export default User;