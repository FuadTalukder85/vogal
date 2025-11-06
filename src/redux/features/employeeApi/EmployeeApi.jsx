import { baseApi } from "../../api/baseApi";

const EmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addEmployee: builder.mutation({
      query: (addEmployee) => ({
        url: "/employee",
        method: "POST",
        body: addEmployee,
      }),
      providesTags: ["employee"],
    }),
    getEmployee: builder.query({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
    }),

    getSingleEmployee: builder.query({
      query: (_id) => ({
        url: `/employee/${_id}`,
        method: "GET",
      }),
    }),

    updateEmployee: builder.mutation({
      query: ({ id, body }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["employee"],
    }),

    removeEmployee: builder.mutation({
      query: (query) => ({
        url: `/employee/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employee"],
    }),
  }),
});
export const {
  useAddEmployeeMutation,
  useGetEmployeeQuery,
  useGetSingleEmployeeQuery,
  useUpdateEmployeeMutation,
  useRemoveEmployeeMutation,
} = EmployeeApi;
