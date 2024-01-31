import { useQuery } from "react-query";
import axios from "axios";

const fetchLeaderboardData = async () => {
  const JSONBIN_URL = "https://api.jsonbin.io/v3/b/65519f5112a5d3765998bbdb"; // replace YOUR_BIN_ID with your bin's ID
  const JSONBIN_SECRET_KEY =
    "$2a$10$G/T7F2wH1L01B/VHMyYew.JPDr7WRf5ld8t.Ix3oQHs4DMu3rzEoK"; // replace with your secret key from JSONBin

  const headers = {
    "secret-key": JSONBIN_SECRET_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(JSONBIN_URL, { headers });
    return response.data.record.leaderboard; // This will return the JSON you stored in the bin
  } catch (error) {
    console.error("Error fetching data from JSONBin:", error);
    throw error;
  }
};

export const useLeaderboardData = () => {
  const queryResult = useQuery("leaderboardData", fetchLeaderboardData);

  // Here, you can also format or process the data further if needed

  return {
    data: queryResult.data,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  };
};