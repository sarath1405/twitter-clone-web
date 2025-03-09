import React, { forwardRef, useState } from "react";
import "./tweet-card.scss";
import Dialog from "./dialog/dialog";
import { handleSelectOption } from "../../../../services/home.service";

export interface ITweet {
    tweetId: string;
    text: string;
    author: {
        name: string;
        username: string;
        profilePicUrl?: string;
    };
    tweetedAt: Date;
    publicMetrics: {
        reply_count: number;
        retweet_count: number;
        like_count: number;
        impression_count: number;
        bookmark_count: number;
    };
    selectedOption: string | null;
}

interface TweetCardProps {
    tweet: ITweet;
}

const TweetCard = forwardRef<HTMLDivElement, TweetCardProps>(({ tweet }, ref) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleSaveOption = async (selectedOption: string | null) => {
        try {
            const response = await handleSelectOption(tweet.tweetId, selectedOption);

            if (response) {
                tweet.selectedOption = selectedOption;
                setDialogOpen(false);
            } else {
                console.error("Failed to save option");
            }
        } catch (error) {
            console.error("handleSaveOption:", error);
        }
    };

    const convertNumberTostring = (value: number) => {
        if(value >= 1000) {
            return ((value/1000).toFixed(1) + 'k');
        }
        return value.toString();
    }

    return (
        <div className="tweet-card" ref={ref}>
            <img src={tweet.author.profilePicUrl || "/default-avatar.png"} alt="Profile" className="profile-pic" />
            <div className="tweet-content">
                <div className="tweet-header">
                    <div className="user-data">
                        <span className="tweet-name">{tweet.author.name}</span>
                        <span className="tweet-username">@{tweet.author.username}</span>
                    </div>
                    {tweet.selectedOption ? <div className="selected-option">{tweet.selectedOption}</div> : ''}
                    <div className="date"><span className="tweet-time">{new Date(tweet.tweetedAt).toLocaleString()}</span></div>
                </div>
                <p className="tweet-text">{tweet.text}</p>

                <div className="tweet-engagement">
                    <div className="engagement-item">
                        <i className="fa-regular fa-comment"></i>
                        <span>{tweet.publicMetrics?.reply_count ? convertNumberTostring(tweet.publicMetrics?.reply_count) : 0}</span>
                    </div>
                    <div className="engagement-item">
                        <i className="fa-solid fa-retweet"></i>
                        <span>{tweet.publicMetrics?.retweet_count ? convertNumberTostring(tweet.publicMetrics?.retweet_count) : 0}</span>
                    </div>
                    <div className="engagement-item">
                        <i className="fa-regular fa-heart"></i>
                        <span>{tweet.publicMetrics?.like_count ? convertNumberTostring(tweet.publicMetrics?.like_count) : 0}</span>
                    </div>
                    <div className="engagement-item">
                        <i className="fa-regular fa-eye"></i>
                        <span>{tweet.publicMetrics?.impression_count ? convertNumberTostring(tweet.publicMetrics?.impression_count) : 0}</span>
                    </div>
                    <div className="engagement-item" onClick={() => setDialogOpen(true)}>
                        <i className="fa-solid fa-ellipsis-h"></i>
                    </div>
                </div>

            </div>
            <Dialog optionProp={tweet.selectedOption} isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} onSave={handleSaveOption} />
        </div>
    );
});

export default TweetCard;
