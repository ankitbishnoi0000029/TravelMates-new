import axios from "axios";


  
export const PostApi = async () => {
    const token =  localStorage.getItem('token');
       
    // if (!token) {
    //   console.error("No token found! Please log in again.");
    //   return null;
    // }
    try {
      const response = await axios.get("http://localhost:3000/api/posts", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
      }
      });
  
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.status, error.response.data,);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      return null; 
    }
  };

  export const Postdata = async () =>{

    const posts = await axios.get("http://localhost:3000/api/posts");
      return posts.data;

  }