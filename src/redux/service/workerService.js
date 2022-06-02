import axios from "axios";
import Cookie from "universal-cookie";

export const addWorker = (data) => {
  console.log(data);
  const image = data.imageUrl;

  const cookie = new Cookie();
  const token = cookie.get("token");
  return axios.post(
    `https://atmanand-jain-api.herokuapp.com/addWorker`,
    {
        designation: data.values.designation,
        image,
        name: data.values.name,
        id: data.values.id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getWorkers = () => {
  return axios.get(`https://atmanand-jain-api.herokuapp.com/getWorkers`);
};
