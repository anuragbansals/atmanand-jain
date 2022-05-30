import axios from "axios";
import Cookie from "universal-cookie";

export const addTeacher = (data) => {
  console.log(data);
  const image = data.imageUrl;
  const cookie = new Cookie();
  const token = cookie.get("token");
  //   const
  return axios.post(
    "https://atmanand-jain-api.herokuapp.com/addTeacher",
    {
      designation: data.values.designation,
      education: data.values.education,
      image,
      name: data.values.name,
      phone: data.values.phone,
      id: data.values.id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
