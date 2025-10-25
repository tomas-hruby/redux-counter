import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types/Post";

export const postsApiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getPosts: builder.query<Post[], { limit: number; offset: number }>({
        query: ({ limit, offset }) => `/posts?_limit=${limit}&_start=${offset}`,
      }),
      createPost: builder.mutation<Post, Omit<Post, "id">>({
        query: (newPost) => ({
          url: "/posts",
          method: "POST",
          body: newPost,
        }),
      }),
    };
  },
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApiSlice;
