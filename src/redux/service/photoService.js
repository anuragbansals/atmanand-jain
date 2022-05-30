import axios from "axios";
import Cookie from "universal-cookie";

export const addPhoto = (id) => {
  console.log(id);
  const cookie = new Cookie();
  const token = cookie.get("token");
  return axios.post(
    `https://atmanand-jain-api.herokuapp.com/addPhoto`,
    {
      link: id.url,
      id: id.asset_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getPhotos = () => {
  return axios.get(`https://atmanand-jain-api.herokuapp.com/getPhotos`);
};
