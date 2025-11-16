import { baseApi } from "../../api/baseApi";

const AttendanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAttendance: builder.mutation({
      query: (addAttendance) => ({
        url: "/attendance",
        method: "POST",
        body: addAttendance,
      }),
      providesTags: ["attendance"],
    }),
    getAttendance: builder.query({
      query: () => ({
        url: "/attendance",
        method: "GET",
      }),
    }),
  }),
});
export const { useAddAttendanceMutation, useGetAttendanceQuery } =
  AttendanceApi;
