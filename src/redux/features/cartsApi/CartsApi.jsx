import { baseApi } from "../../api/baseApi";
const CartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCarts: builder.mutation({
      query: (addCarts) => ({
        url: "/carts",
        method: "POST",
        body: addCarts,
      }),
    }),
    getCarts: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
    }),
    deleteCart: builder.mutation({
      query: (query) => ({
        url: `/carts/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});

export const { useAddCartsMutation, useGetCartsQuery, useDeleteCartMutation } =
  CartsApi;
