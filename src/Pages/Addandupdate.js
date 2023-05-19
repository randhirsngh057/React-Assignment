import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser } from "../Reducer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Userform from "../components/Userform";

function Addandupdate() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const [update, setUpdate] = useState(false);
  const [userobj, setUserObj] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    roleKey: "",
    password: "",
  });

  useEffect(() => {
    if (id) {
      const foundUser = users.find((user) => user.id == id);
      if (foundUser) {
        userobj.name = foundUser.name;
        userobj.email = foundUser.email;
        userobj.username = foundUser.username;
        userobj.mobile = foundUser.mobile;
        userobj.roleKey = foundUser.roleKey;
        setUpdate(true);
      } else {
        navigate("/");
      }
    } else {
      setUpdate(false);
    }
  }, []);

  const onSubmit = (values, props) => {
    if (update) {
      values.id = id;
      values.mobile = String(values.mobile);
      dispatch(updateUser(values));
      navigate("/");
    } else {
      values.id = users?.length > 0 ? users[users.length - 1].id + 1 : 1;
      values.mobile = String(values.mobile);
      dispatch(addUser(values));
      navigate("/");
    }
  };

  return (
    <>
      <Userform userobj={userobj} onSubmit={onSubmit} update={update} />
    </>
  );
}

export default Addandupdate;
