import React,{ useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, updateUser } from './Reducer';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from "yup";

function Addandupdate() {
  const users = useSelector((state) => state.users.users);
  const [update,setUpdate] = useState(false);
  const [userobj,setUserObj] = useState({
   name: "",
   email: "",
   username: "",
   mobile: "",
   roleKey: "",
   password: ""
  })
  const validationSchema = Yup.object().shape({
    name:Yup.string().min(2,"Enter a valid name").max(30,"Too long name").required('Required field'),
    email:Yup.string().email("Enter a valid mail id").required('Required field'),
    mobile:Yup.string().min(10,"Enter a valid number").required('Required field'),
    username:Yup.string().min(8,"Username is not valid").required("Required field"),
    roleKey:Yup.string().required('Required field'),
    password:Yup.string().required('Required field').min(8,"Password should be 8 characters long")
  })
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(id){
      const foundUser = users.find((user) => user.id == id);
      if(foundUser){
        userobj.name = foundUser.name;
        userobj.email = foundUser.email;
        userobj.username = foundUser.username;
        userobj.mobile = foundUser.mobile;
        userobj.roleKey = foundUser.roleKey;
        setUpdate(true);
      }else{
        navigate('/');
      }
    }else{
       setUpdate(false);
    }
  },[])  


  const onSubmit = (values,props) => {
    if(update){
      values.id = id;
      values.mobile = String(values.mobile);
      dispatch(updateUser(values));
      navigate('/');
    }else{
      values.id = users?.length > 0 ? users[users.length - 1 ].id + 1 : 1;
      values.mobile = String(values.mobile);
      dispatch(addUser(values));
      navigate('/');
    }
  }

  return (
    <>
    {update ? (
   <div className='user-form'>
    <div className="page-title"><h3>Edit record </h3>
</div>
   <Formik initialValues={userobj} onSubmit={onSubmit} validationSchema={validationSchema}>
     {(props) => (
      <Form >
         <div className="form-group">
          <label htmlFor="inputAddress">Name:</label>
           <Field type="text" className="form-control" id="inputAddress" name="name" placeholder="Please enter your name"/>
      <span className='error'>{props.errors.name}</span>
 </div>
 <div className="form-group">
   <label htmlFor="inputAddress2">Email: </label>
   <Field type="text" className="form-control" id="inputAddress2" name="email" placeholder="Enter your email address" />
   <span  className='error'>{props.errors.email}</span>
 </div>
 <div className="form-group">
   <label htmlFor="inputAddress2">Username: </label>
   <Field type="text" className="form-control" id="inputAddress2" name="username" placeholder="Enter your username" />
   <span  className='error'>{props.errors.username}</span>
 </div>
 <div className="form-group">
   <label htmlFor="inputAddress2">Mobile: </label>
   <Field type="number"  className="form-control" id="inputAddress2" name="mobile" placeholder="Enter your number" />
   <span  className='error'>{props.errors.mobile}</span>
 </div>
 <div className="form-group">
   <label htmlFor="inputAddress2">RoleKey: </label>
  <Field as="select"className="form-control" name="roleKey">
   <option value="Admin">Admin</option>
   <option value="User">User</option>
   <option value="Operator">Operator</option>
  </Field>
  <span className='error'>{props.errors.roleKey}</span>
 </div>
 <div className="form-group">
   <label htmlFor="inputAddress2">Password: </label>
   <Field type="password" className="form-control" id="inputAddress2" name="password" placeholder="Enter your password" />
   <span  className='error'>{props.errors.password}</span>
 </div>
<div className='user-form-btn'>
<button type="submit" className="btn btn-primary">Update</button>
 </div>
       </Form>
      )}
 </Formik>
   </div>
     ) : (
      <div className='user-form'>

<div className="page-title"><h3>Add record </h3>
</div>
    <Formik initialValues={userobj} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(props) => (
       <Form >
          <div className="form-group">
           <label htmlFor="inputAddress">Name:</label>
            <Field type="text" className="form-control" id="inputAddress" name="name" placeholder="Please enter your name"/>
               <span className='error'>{props.errors.name}</span>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Email: </label>
    <Field type="text" className="form-control" id="inputAddress2" name="email" placeholder="Enter your email address" />
    <span className='error'>{props.errors.email}</span>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Username: </label>
    <Field type="text" className="form-control" id="inputAddress2" name="username" placeholder="Enter your username" />
    <span className='error'>{props.errors.username}</span>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Mobile: </label>
    <Field type="number"  className="form-control" id="inputAddress2" name="mobile" placeholder="Enter your number" />
    <span className='error'>{props.errors.mobile}</span>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">RoleKey: </label>
   <Field as="select"className="form-control" name="roleKey">
    <option value="Admin">Admin</option>
    <option value="User">User</option>
    <option value="Operator">Operator</option>
   </Field>
   <span className='error'>{props.errors.roleKey}</span>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Password: </label>
    <Field type="password" className="form-control" id="inputAddress2" name="password" placeholder="Enter your password" />
    <span className='error'>{props.errors.password}</span>
  </div>
 <div className='user-form-btn'>
 <button type="submit" className="btn btn-primary">Add</button>
  </div>
        </Form>
       )}
  </Formik>
    </div>
     )}
    </>
  )
}

export default Addandupdate