export const PostApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts/getposts");
      const data = await response.json(); 
        return data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  