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
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    getSingleProduct: builder.query({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: "GET",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ _id, productData }) => ({
        url: `/products/${_id}`,
        method: "PUT",
        body: productData,
      }),
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = ProductApi;
