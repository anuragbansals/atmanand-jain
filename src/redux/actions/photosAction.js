import * as types from "../config/actionType"

export const addPhoto = (data) => {
    return {
        type: types.ADD_PHOTO,
        data
    }
}


export const addedPhoto = (action) => {
    return {
        type: types.ADDED_PHOTO,
        action
    }
}


export const getPhotos = () => {
    return {
        type: types.GET_PHOTOS,
    }
}


export const gotPhotos = (action) => {
    return {
        type: types.GOT_PHOTOS,
        action
    }
}
