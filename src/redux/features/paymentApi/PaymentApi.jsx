import { baseApi } from "../../api/baseApi";
const PaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPayments: builder.mutation({
      query: (addPayments) => ({
        url: "/payments",
        method: "POST",
        body: addPayments,
      }),
    }),
    getPayments: builder.query({
      query: () => ({
        url: "/payments",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddPaymentsMutation, useGetPaymentsQuery } = PaymentApi;
