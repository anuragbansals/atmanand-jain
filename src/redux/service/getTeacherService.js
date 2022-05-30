import axios from "axios";

export const fetchTeachers = () => {
  //   console.log(data);
  return axios.get("https://atmanand-jain-api.herokuapp.com/getTeachers");
};
