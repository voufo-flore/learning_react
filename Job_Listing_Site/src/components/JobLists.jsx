import React, { useState, useEffect } from 'react';
import { fetchJobs} from '../api';
import { Link } from 'react-router-dom';


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await fetchJobs();
      setJobs(jobsData);
      setFilteredJobs(jobsData);
    };
    getJobs();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = jobs.filter(job =>
      job.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search jobs"
      />
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

