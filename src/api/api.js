import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" }
})


export const AuthAPI = {
    authenticateMe() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        );
    }
};

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        );
    }
};

export const ProfileAPI = {
    getSelectedUserProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        );
    }
};

export const FollowAPI = {
    followUser(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => response.data)
        );
    },
    unfollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data)
        );
    }
};