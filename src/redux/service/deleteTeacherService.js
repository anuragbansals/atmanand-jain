import axios from "axios";
import Cookie from "universal-cookie";

export const removeTeacher = (id) => {
  console.log(id);
  const cookie = new Cookie();
  const token = cookie.get("token");
  return axios.delete(
    `https://atmanand-jain-api.herokuapp.com/deleteTeacher/${id.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
