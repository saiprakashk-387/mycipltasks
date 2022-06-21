import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import EditForm from "./EditForm";
import { GET_USER, DELETE_USER, GET_USER_ID } from "./GraphqlQueries";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

export const Graph1 = () => {
  const [Comp, setComp] = useState(false);
  const [Search, setSearch] = useState("");
  const [Value, setValue] = useState();
  // const id = "6284b8dff61caca097ded223";
  // const { loading: loasd, data: UserId } = useQuery(GET_USER_ID, {
  //   variables: { id: id },
  // });
  const [getCountries, { loading, data, error }] = useLazyQuery(GET_USER);
  const [deleteUser, { data: deleyedata }] = useMutation(DELETE_USER);

  const getEditValue = (val) => {
    setValue(val);
  };

  const getDeleteID = (item) => {
    let id = { id: item.id };
    deleteUser({ variables: id });
  };

  return error ? (
    "Error !"
  ) : loading ? (
    <Loader />
  ) : (
    <>      
      <div>
        <button class="btn btn-info" onClick={() => getCountries()}>
          Get User list
        </button>
        {data?.users && (
          <>
            <span>
              <input
                type="text"
                placeholder="Search with Username "
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </span>
            <table border="1" class="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>username</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.users
                  .filter((value) => {
                    if (Search === !null) {
                      return value;
                    } else if (value.username.includes(Search)) {
                      return value;
                    }
                  })
                  .map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>                         
                          <button class="btn btn-info"
                            onClick={() => {
                              setComp(!Comp);
                              getEditValue(item);
                            }}
                          > 
                            Edit
                          </button>
                          <button class="btn btn-danger"
                            onClick={() => {
                              getDeleteID(item);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {Comp && <EditForm value={Value} />}
      </div>
    </>
  );
};
