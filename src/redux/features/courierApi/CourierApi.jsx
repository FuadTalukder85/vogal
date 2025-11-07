import { baseApi } from "../../api/baseApi";

const CourierApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCourier: builder.mutation({
      query: (addCourier) => ({
        url: "/courier",
        method: "POST",
        body: addCourier,
      }),
      providesTags: ["courier"],
    }),
    getCourier: builder.query({
      query: () => ({
        url: "/courier",
        method: "GET",
      }),
    }),

    getSingleCourier: builder.query({
      query: (_id) => ({
        url: `/courier/${_id}`,
        method: "GET",
      }),
    }),

    updateCourier: builder.mutation({
      query: ({ id, body }) => ({
        url: `/courier/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["courier"],
    }),

    removeCourier: builder.mutation({
      query: (query) => ({
        url: `/courier/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["courier"],
    }),
  }),
});
export const {
  useAddCourierMutation,
  useGetCourierQuery,
  useGetSingleCourierQuery,
  useUpdateCourierMutation,
  useRemoveCourierMutation,
} = CourierApi;
