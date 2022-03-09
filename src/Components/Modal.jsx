import React, { useState, useEffect, useContext } from "react";
import Users from "../store/Context";
import withPortal from "../utils/withPortal";
import "../style/index.css";
import { UPDATE_USER } from "../store/reducer";

function Modal({ selectedUser, closeModal }) {
  const [state, dispatch] = useContext(Users);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
    address: {
      city: "",
    },
  });

  useEffect(() => {
    setData(selectedUser);
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const nestedHandler = (e, item) => {
    const { name, value } = e.target;
    setData({ ...data, [item]: { ...data[item], [name]: value } });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
    closeModal()
  };
  console.log(data);

  const { name, email, phone, website, company, address } = data;
  return (
    <div className="modal" onClick={closeModal}>
      <form
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={ updateHandler }
      >
        <input
          onChange={changeHandler}
          name="name"
          type="text"
          placeholder="Full Name"
          defaultValue={name}
        />
        <input
          onChange={changeHandler}
          name="email"
          type="email"
          placeholder="Enter email"
          defaultValue={email}
        />
        <input
          onChange={changeHandler}
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          defaultValue={phone}
        />
        <input
          onChange={changeHandler}
          name="website"
          type="text"
          placeholder="Enter website"
          defaultValue={website}
        />
        <input
          onChange={(e) => nestedHandler(e, "company")}
          name="name"
          type="text"
          placeholder="Enter company name"
          defaultValue={company.name}
        />
        <input
          onChange={(e) => nestedHandler(e, "address")}
          name="city"
          type="text"
          placeholder="Enter address"
          defaultValue={address.city}
        />

        <button type="sumbit">Update</button>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </form>
    </div>
  );
}

export default withPortal(Modal);
