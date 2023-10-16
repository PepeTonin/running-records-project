import React, { useState, useEffect } from "react";

import { fetchDataById, updateData } from "../../util/requestsFromApi";
import "./style.css";

interface FormProps {
  selectedId: number;
}

interface ItemDataToSendToApi {
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

export default function Form({ selectedId }: FormProps) {
  const [formValues, setFormValues] = useState<ItemDataToSendToApi>({
    m_100: 0,
    m_200: 0,
    m_400: 0,
    m_800: 0,
    m_1000: 0,
    m_1500: 0,
    km_4: 0,
    km_5: 0,
    km_6: 0,
    km_8: 0,
    km_10: 0,
    km_12: 0,
    km_15: 0,
    km_18: 0,
    km_21: 0,
    km_30: 0,
    km_42: 0,
    km_100: 0,
  });

  useEffect(() => {
    async function getRecordsById() {
      const response = await fetchDataById(selectedId);
      setFormValues(response);
    }
    getRecordsById();
  }, [selectedId]);

  const onChangeText: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    setFormValues({ ...formValues, [e.target.name]: Number(e.target.value) });
  };

  async function onSubmitHandler() {
    await updateData(selectedId, formValues);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row-container">
        <div className="colum-container">
          <p>100 m:</p>
          <input
            value={formValues.m_100}
            onChange={onChangeText}
            placeholder="100m"
            name="m_100"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>200 m:</p>
          <input
            value={formValues.m_200}
            onChange={onChangeText}
            placeholder="200m"
            name="m_200"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>400 m:</p>
          <input
            value={formValues.m_400}
            onChange={onChangeText}
            placeholder="400m"
            name="m_400"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>800 m:</p>
          <input
            value={formValues.m_800}
            onChange={onChangeText}
            placeholder="800m"
            name="m_800"
            type="number"
          />
        </div>
      </div>

      <div className="row-container">
        <div className="colum-container">
          <p>1000 m:</p>
          <input
            value={formValues.m_1000}
            onChange={onChangeText}
            placeholder="1000m"
            name="m_1000"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>1500 m:</p>
          <input
            value={formValues.m_1500}
            onChange={onChangeText}
            placeholder="1500m"
            name="m_1500"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>4 km:</p>
          <input
            value={formValues.km_4}
            onChange={onChangeText}
            placeholder="4km"
            name="km_4"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>5 km:</p>
          <input
            value={formValues.km_5}
            onChange={onChangeText}
            placeholder="5km"
            name="km_5"
            type="number"
          />
        </div>
      </div>

      <div className="row-container">
        <div className="colum-container">
          <p>6 km:</p>
          <input
            value={formValues.km_6}
            onChange={onChangeText}
            placeholder="6km"
            name="km_6"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>8 km:</p>
          <input
            value={formValues.km_8}
            onChange={onChangeText}
            placeholder="8km"
            name="km_8"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>10 km:</p>
          <input
            value={formValues.km_10}
            onChange={onChangeText}
            placeholder="10km"
            name="km_10"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>12 km:</p>
          <input
            value={formValues.km_12}
            onChange={onChangeText}
            placeholder="12km"
            name="km_12"
            type="number"
          />
        </div>
      </div>

      <div className="row-container">
        <div className="colum-container">
          <p>15 km:</p>
          <input
            value={formValues.km_15}
            onChange={onChangeText}
            placeholder="15km"
            name="km_15"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>18 km:</p>
          <input
            value={formValues.km_18}
            onChange={onChangeText}
            placeholder="18km"
            name="km_18"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>21 km:</p>
          <input
            value={formValues.km_21}
            onChange={onChangeText}
            placeholder="21km"
            name="km_21"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>30 km:</p>
          <input
            value={formValues.km_30}
            onChange={onChangeText}
            placeholder="30km"
            name="km_30"
            type="number"
          />
        </div>
      </div>

      <div className="row-container">
        <div className="colum-container">
          <p>42 km:</p>
          <input
            value={formValues.km_42}
            onChange={onChangeText}
            placeholder="42km"
            name="km_42"
            type="number"
          />
        </div>
        <div className="colum-container">
          <p>100 km:</p>
          <input
            value={formValues.km_100}
            onChange={onChangeText}
            placeholder="100km"
            name="km_100"
            type="number"
          />
        </div>
      </div>
      <button type="submit">Submit changes</button>
    </form>
  );
}
