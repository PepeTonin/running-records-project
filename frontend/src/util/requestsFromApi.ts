import axios from "axios";

interface Data {
  m_100: number;
  m_200: number;
  m_400: number;
  m_800: number;
  m_1000: number;
  m_1500: number;
  km_4: number;
  km_5: number;
  km_6: number;
  km_8: number;
  km_10: number;
  km_12: number;
  km_15: number;
  km_18: number;
  km_21: number;
  km_30: number;
  km_42: number;
  km_100: number;
}

export async function fetchData() {
  const response = await axios.get("http://localhost:8000/");
  return response.data;
}

export async function fetchExistingIds() {
  const response = await axios.get("http://localhost:8000/existing-ids/");
  return response.data;
}

export async function postData(data: Data) {
  const response = await axios.post("http://localhost:8000/", data);
  return response.data;
}

export async function updateData(id: number, data: Data) {
  const response = await axios.put(`http://localhost:8000/${id}/`, data);
  return response.data;
}

export async function deleteData(id: number) {
  const response = await axios.delete(`http://localhost:8000/${id}/`);
  return response.data;
}

export async function fetchDataById(id: number) {
  const response = await axios.get(`http://localhost:8000/${id}/`);
  return response.data;
}
