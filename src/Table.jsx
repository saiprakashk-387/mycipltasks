import React from "react";
import { list } from "./Data/datalist";
const Table = () => {
  return (
    <div>
      {list?.length >= 0 ? (
        <Table>
          <thead>
            <tr>Date</tr>
          </thead>
          {list?.map((val, i) => {
            <tbody>
              <tr>
                <td>{val.date}</td>
              </tr>
            </tbody>;
          })}
          {/* <tbody></tbody> */}
        </Table>
      ) : null}
    </div>
  );
};

export default Table;
