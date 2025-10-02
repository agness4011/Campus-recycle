import React from "react";
import BlogCard from "./BlogCard";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";

// API 통신을 통해 받아올 데이터의 임시 버전 (mock data)
const mockPosts = [
  {
    id: 1,
    imageUrl: Logo1,
    category: "Thinking",
    title: "분리배출, 왜 중요할까요?",
    excerpt:
      "지구온난화와 자원 낭비를 막기 위한 분리배출의 중요성에 대해 알아봅니다.",
  },
  {
    id: 2,
    imageUrl: Logo2,
    category: "Analysis",
    title: "대학생들은 과연 분리배출을 잘하고 있을까요?",
    excerpt:
      "직접 물어보았습니다! 대학생들의 분리배출 실태와 인식 조사 결과를 공유합니다.",
  },
  {
    id: 3,
    imageUrl: Logo3,
    category: "Development",
    title: "그래서, 우리는 만들었습니다.",
    excerpt: "다양한 활동들을 소개합니다. 함께 해요, 캠퍼스 리사이클!",
  },
];

function BlogList() {
  return (
    <div className="blog-list">
      {mockPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
