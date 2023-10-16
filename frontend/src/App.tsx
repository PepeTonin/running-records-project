import React, { useState, useEffect } from "react";
import "./App.css";
import { deleteData, fetchExistingIds, postData } from "./util/requestsFromApi";
import Form from "./components/Form/Form";

const newData = {
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
};

export default function App() {
  const [userIds, setUserIds] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateUserIdsList, setUpdateUserIdsList] = useState(false);

  async function getUserIds() {
    const response = await fetchExistingIds();
    setUserIds(response);
  }

  useEffect(() => {
    getUserIds();
  }, [updateUserIdsList]);

  useEffect(() => {
    if (userIds.length === 0) {
      setSelectedId(0);
      setIsFormVisible(false);
    }
  }, [userIds]);

  function openFormHandler() {
    setIsFormVisible((cur) => !cur);
  }

  async function onCreateNewUser() {
    await postData(newData);
    setUpdateUserIdsList(!updateUserIdsList);
  }

  async function onDeleteCurrentUser() {
    if (selectedId === 0) {
      return;
    }
    await deleteData(selectedId);
    setUpdateUserIdsList(!updateUserIdsList);
    setIsFormVisible(false);

    for (let i = 0; i < userIds.length; i++) {
      if (userIds[i] !== selectedId) {
        setSelectedId(userIds[i]);
        break;
      }
    }
  }

  return (
    <div>
      <select
        defaultValue={""}
        onChange={(e) => setSelectedId(Number(e.target.value))}
      >
        <option value="" disabled>
          Select an user ID
        </option>
        {userIds.map((id) => (
          <option value={id} key={id.toString()}>
            {id}
          </option>
        ))}
      </select>
      <input
        disabled={selectedId === 0 ? true : false}
        value={isFormVisible? "Close form" : "Open form"}
        type="button"
        onClick={openFormHandler}
      />
      <input value="Create new user" type="button" onClick={onCreateNewUser} />
      <input
        value="Delete current user"
        type="button"
        onClick={onDeleteCurrentUser}
      />

      {isFormVisible && <Form selectedId={selectedId} />}
    </div>
  );
}
