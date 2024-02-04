import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../../util/http";
import PostComponent from "./PostComponent/PostComponent";

export const BlogSection = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost,
  });

  if (isError) {
    return <h1>[-] Error with loading post: {error}</h1>
  }

  const { title, description, category, link, image } = data?.[0] || {};

  return (
    <PostComponent
      title={title}
      description={description}
      category={category}
      link={link}
      image={image}
    />
  );
};
