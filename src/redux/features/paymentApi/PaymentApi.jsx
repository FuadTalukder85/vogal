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
  }),
});

export const { useAddPaymentsMutation } = PaymentApi;
