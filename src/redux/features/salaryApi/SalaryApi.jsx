import { baseApi } from "../../api/baseApi";

const SalaryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSalary: builder.mutation({
      query: (addSalary) => ({
        url: "/salary",
        method: "POST",
        body: addSalary,
      }),
      providesTags: ["attendance"],
    }),
    getSalary: builder.query({
      query: () => ({
        url: "/salary",
        method: "GET",
      }),
    }),
  }),
});
export const { useAddSalaryMutation, useGetSalaryQuery } = SalaryApi;
