import axios from "axios";

export const editProfile = (data) => {
  console.log(data);
  return axios.get("https://atmanand-jain-api.herokuapp.com/getTeacher/123");
};
