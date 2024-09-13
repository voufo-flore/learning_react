import axios from 'axios';


export const fetchJobs = async () => {
  try {
    const response = await axios.get('https://api.crackeddevs.com/v1/get-jobs', {
      headers: {
        'api-key': "2ad9dd1f-5e77-4ec5-8b81-34d25c238ecf"
      }
    })
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};



export const fetchJobById = async (id) => {
  try {
    const response = await axios.get(`${'https://api.crackeddevs.com/jobs'}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
};