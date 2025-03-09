import "./right-panel.scss";

const trendingTopics = [
  { category: "Sports · Trending", topic: "#INDvsNZ", posts: "41K posts" },
  { category: "Trending in India", topic: "Sneh Rana", posts: "2,842 posts" },
  { category: "Sports · Trending", topic: "#UFC313", posts: "161K posts" },
];

const suggestedUsers = [
  { name: "PMO India", username: "@PMOIndia" },
  { name: "Virat Kohli", username: "@imVkohli" },
  { name: "Yogi Adityanath", username: "@myogiadityanath" },
];

export default function RightPanel() {
  return (
    <div className="right-panel">
      <div className="trending">
        <div className="section-title">What's Happening</div>
        {trendingTopics.map((item, index) => (
          <div key={index} className="trending-item">
            <span className="category">{item.category}</span>
            <span className="topic">{item.topic}</span>
            <span className="posts">{item.posts}</span>
          </div>
        ))}
        <div className="show-more">Show more</div>
      </div>
      <div className="who-to-follow">
        <div className="section-title">Who to follow</div>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="follow-item">
            <div className="user-info">
              <span className="name">{user.name}</span>
              <span className="username">{user.username}</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
        <div className="show-more">Show more</div>
      </div>
    </div>
  );
}
