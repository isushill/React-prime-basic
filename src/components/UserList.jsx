import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const UserList = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        let response = await axios.get('https://randomuser.me/api/?results=23');
        let users = response.data.results;
        setState((prevState) => ({
          ...prevState,
          loading: false,
          users: users,
          errorMessage: null,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          errorMessage: 'Error fetching data.',
        }));
      }
    };

    fetchData();
  }, []);

   let displayImage = (x) =>{
         return <img src={x.picture.thumbnail} alt="" />
   }



  return (
    <>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.errorMessage ? (
        <p>{state.errorMessage}</p>
      ) : (
        <DataTable value={state.users}>
          <Column field="name.first" header="First Name"></Column>
          <Column field="name.last" header="Last Name"></Column>
          <Column field='picture.thumbnail' header='Image' body={displayImage} ></Column>
          <Column field="email" header="Email"></Column>
          <Column  sortable field='location.city' header='City'></Column>
          <Column field='location.state' header='State'></Column>
          <Column field='location.country' header='Country'></Column>
        </DataTable>
      )}
    </>
  );
};

export default UserList;
