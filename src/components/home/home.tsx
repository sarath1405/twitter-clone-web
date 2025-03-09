import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../navbar/navbar";
import { fetchTweets } from "../../services/home.service";
import LeftPanel from "./components/left-panel/left-panel";
import TweetCard, { ITweet } from "./components/tweet-card/tweet-card";
import RightPanel from "./components/right-panel/right-panel";
import './home.scss';
import Loader from "../loader/loader";
import { useLoading } from "../../contexts/loading.context";
import { useUser } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const [tweets, setTweets] = useState<ITweet[]>([]);
    const { loading, setLoading } = useLoading();
    const observerRef = useRef<IntersectionObserver | null>(null);
    const { user } = useUser();

    useEffect(() => {
        if(user) {
            getTweets();
        }
        else {
            navigate('/');
        }
    }, []);

    const getTweets = async (skip: number = 0) => {
        if (loading) return;
        setLoading(true);
        const newTweets = await fetchTweets(skip);
        setTweets([...tweets, ...newTweets]);
        setLoading(false);
    }

    const lastTweetRef = useCallback((node: HTMLDivElement | null) => {
        if (loading) return;
        if (observerRef.current) observerRef.current.disconnect();
        
        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    getTweets(tweets.length);
                }, 0);
            }
        });

        if (node) observerRef.current.observe(node);
    }, [loading]);

    return (
        <div className="home-container">
            <Loader />
            <Navbar />
            <div className="home-wrapper">
                <div className="home-layout">
                    <LeftPanel />
                    <div className="home-feed">
                        <div className="tweet-list">
                            {tweets.map((tweet: ITweet, index) => (
                                <TweetCard key={tweet.tweetId} tweet={tweet} ref={index === tweets.length - 1 ? lastTweetRef : null} />
                            ))}
                        </div>
                    </div>
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}