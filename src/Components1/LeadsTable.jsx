import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeadsTable() {
  const [leads, setLeads] = useState([]);
  const getLeadsData = () => {
    const url = process.env.REACT_APP_API_URL;
    axios.get(`${url}/api/leads`)
      .then(res => {
        setLeads(res.data);
      }).catch((err)=>console.log('err', err) );
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
        {leads?.map(lead => (
          <tr key={lead._id}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.source}</td>
            <td>{lead.status}</td>
            <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
