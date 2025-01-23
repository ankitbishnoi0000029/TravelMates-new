import axios from "axios";


  
export const PostApi = async () => {
    const token =  localStorage.getItem('token');

    console.log('tken ..........', token);
    
       
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
  export const userProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/profile");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const user = await response.json();
      console.log(user);
      return user; // Return the user data if needed elsewhere
    } catch (error) {
      console.error("Failed to fetch user profile:", error.message);
    }
  };
  