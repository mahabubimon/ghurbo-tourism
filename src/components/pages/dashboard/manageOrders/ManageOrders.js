import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import { ImBin } from "react-icons/im";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghurbo-tourism.herokuapp.com/orders")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
        if (res.data.insertedId) {
          alert("added successfully");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Package</th>
            <th>Price</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {allOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.package}</td>
                <td>{order.price}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Pending
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Approve</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>
                  <ImBin></ImBin>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
