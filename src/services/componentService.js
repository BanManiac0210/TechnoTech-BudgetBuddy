import axiosClient from "../utils/axiosClient";

const getColors = async () => {
    return await axiosClient.get("colors");
};

const getColorByID = async (colorID) => {
    return await axiosClient.get(`colors/${colorID}`);
};

const getIcons = async () => {
    return await axiosClient.get("icons");
};

const getIconByID = async (iconID) => {
    return await axiosClient.get(`icons/${iconID}`);
};

export {getColors, getColorByID, getIconByID, getIcons}