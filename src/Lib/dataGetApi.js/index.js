import axios from "axios";



export  async function CreatePost(data,userToken){
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    alert("Your post was created successfully");
  } catch (error) {
    console.error("Error creating post:", error);
    alert("An error occurred while creating the post.");
  }
};





export const PostApi = async (userToken) => {
    if (!userToken) {
      console.log("No token found! Please log in again.");
      return null;
    }
    try {
      const response = await axios.get("http://localhost:3000/api/posts", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
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
  export const userProfile = async (userToken) => {
   
  
    try {
      const response = await fetch("/api/profile",{
        headers: {
          Authorization: `Bearer ${userToken}`,
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

  export const getUserDetails = async (userID, token) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  };
  


  export const Chating_data = async (resever,userToken) => {
    try {
      const response = await fetch("/api/chating",{
        headers: {
          Authorization: `Bearer ${userToken}`,
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
  export const friendList = async (sender,userToken) => {
    try {
      const response = await fetch("/api/friends",{
        headers: {
          Authorization: `Bearer ${userToken}`,
          sender : sender,
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
  export default async function storeChat(userToken,payload){
    try {
      await axios.post(
        "http://localhost:3000/api/chating",
        {
          message: payload.message,
          sender: payload.sender,
          receiver: payload.receiver,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error storing chat:", error);
    }
  };
