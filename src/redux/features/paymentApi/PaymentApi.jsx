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
    getSinglePayment: builder.query({
      query: (_id) => ({
        url: `/payments/${_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddPaymentsMutation,
  useGetPaymentsQuery,
  useGetSinglePaymentQuery,
} = PaymentApi;
