// ...前略
import { careerPosts } from "../data/careerPosts.js";
import QuestCard from "../components/QuestCard.jsx";

const Career = () => {
  return (
    <div className="container pb-5">
      {/* ...標題區塊略... */}
      <div className="row g-4">
        {careerPosts.map((post) => (
          <QuestCard key={post.id} post={post} basePath="/career-logs" />
        ))}
      </div>
    </div>
  );
};
export default Career;
