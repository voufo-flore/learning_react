import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../api';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      const jobData = await fetchJobById(id);
      setJob(jobData);
    };
    getJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <a href={job.apply_url} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
};

export default JobDetail;