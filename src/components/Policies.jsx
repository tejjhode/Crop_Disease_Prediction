// components/Policies.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Policies() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('https://pib.gov.in/PressReleaseRSS.aspx');
        setPolicies(response.data.policies);
      } catch (error) {
        console.error("Error fetching policies", error);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-green-800">New Government Policies</h2>
      {policies.length ? (
        <ul>
          {policies.map((policy, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold">{policy.title}</h3>
              <p>{policy.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No policies available at the moment.</p>
      )}
    </div>
  );
}

export default Policies;
