import axios from "axios";

export const PostApi = async () => {
    const token =  localStorage.getItem('token');
    if (!token) {
      console.error("No token found! Please log in again.");
      return null;
    }
    try {
      const response = await axios.get("http://localhost:3000/api/posts", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      }
      });
  
      return response.data;
    } catch (error) {
                                if (error.response) {
        console.log("Server Error:", error.response.status, error.response.data,);
      } else if (error.request) {
        console.log("Network Error:", error.request);
      } else {
        console.log("Error:", error.message);
      }   
      return null; 
    }
  };

  export const Postdata = async () =>{

    const posts = await axios.get("/api/posts");
      return posts.data;
  }
  export const userProfile = async () => {
    const token = localStorage.getItem('token')
  
    try {
      const response = await fetch("/api/profile",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const user = await response.json();

      return user.Result;
      
    } catch (error) {
      console.log("Failed to fetch user profile:", error.message);
    }
  };

  export const Chating_data = async (resever) => {
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch("/api/chating",{
        headers: {
          Authorization: `Bearer ${token}`,
          ReseverId : resever,
         },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const chat = await response.json();
    return chat.data;
     
    } catch (error) {
      console.log("Failed to fetch user profile:", error.message);
    }
  };
  