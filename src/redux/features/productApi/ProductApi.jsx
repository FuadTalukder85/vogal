import { baseApi } from "../../api/baseApi";

const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (addProduct) => ({
        url: "/create-product",
        method: "POST",
        body: addProduct,
      }),
    }),
  }),
});
export const { useAddProductMutation } = ProductApi;
