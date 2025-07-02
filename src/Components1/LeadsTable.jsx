import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeadsTable() {
  const [leads, setLeads] = useState([]);
  const getLeadsData = () => {
    const url = process.env.REACT_APP_API_URL;
    axios.get(`${url}/api/leads`)
      .then(res => {
        setLeads(res.data);
        console.log("first", res.data)
      });
  };

  useEffect(() => {
    getLeadsData();
  }, []);

  return (
    <table className="min-w-full shadow rounded ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Source</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {leads?.map(l => (
          <tr key={l._id}>
            <td>{l.name}</td>
            <td>{l.email}</td>
            <td>{l.source}</td>
            <td>{l.status}</td>
            <td>{new Date(l.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
