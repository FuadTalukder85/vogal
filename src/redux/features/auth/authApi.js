import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUsers: builder.mutation({
      query: (users) => ({
        url: "/users/register",
        method: "POST",
        body: users,
      }),
    }),
    loginUsers: builder.mutation({
      query: (loggedUser) => ({
        url: "/users/login",
        method: "POST",
        body: loggedUser,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/currentUser",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useRegisterUsersMutation,
  useLoginUsersMutation,
  useGetUserQuery,
  useGetCurrentUserQuery,
} = authApi;
