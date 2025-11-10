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
  }),
});
export const { useAddAttendanceMutation } = AttendanceApi;
