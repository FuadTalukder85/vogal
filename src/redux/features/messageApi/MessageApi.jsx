import { baseApi } from "../../api/baseApi";
const MessageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMessage: builder.mutation({
      query: (addMessage) => ({
        url: "/message",
        method: "POST",
        body: addMessage,
      }),
    }),

    getMessage: builder.query({
      query: () => ({
        url: "/message",
        method: "GET",
      }),
    }),

    removeMessage: builder.mutation({
      query: (query) => ({
        url: `/message/${query}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useAddMessageMutation,
  useGetMessageQuery,
  useRemoveMessageMutation,
} = MessageApi;
