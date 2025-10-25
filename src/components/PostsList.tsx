import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsApiSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({ limit: 5, offset: 1 });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  const handleClick = () => {
    const post = { title: "New Post" };
    createPostMutation(post);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isCreatingPost}>
        Create Post
      </button>
      {isCreatingPost && <div>Creating...</div>}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
