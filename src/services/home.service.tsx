import { environment } from "../enviroment";
import axios from "axios";

const API_URL = `${environment.apiUrl}/home`;

export const fetchTweets = async (skip: number) => {
    const result = await axios.get(`${API_URL}/tweets?skip=${skip}`);
    return result.data.data;
}

export const handleSelectOption = async (tweetId: string, selectedOption: string | null) => {
    const result = await axios.post(`${API_URL}/tweet/option`, { tweetId, selectedOption });
    return result.data.data;
}