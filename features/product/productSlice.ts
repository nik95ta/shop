import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  data: Product[];
  current: Product | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  data: [],
  current: null,
  status: "idle",
  error: null,
  selectedProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  },
);

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch product");
    }
  },
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (updatedProduct: Product) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${updatedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        },
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to edit product");
      }
    } catch (error) {
      throw new Error("Error editing product");
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        return id;
      } else {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      throw new Error("Error deleting product");
    }
  },
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "idle";
        state.current = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product";
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        // Update data if the product is in the list
        const index = state.data.findIndex((p) => p.id === updatedProduct.id);
        if (index !== -1) {
          state.data[index] = updatedProduct;
        }
        // Update current if it's the current product
        if (state.current && state.current.id === updatedProduct.id) {
          state.current = updatedProduct;
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to edit product";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedProductId = action.payload;
        // Remove from data
        state.data = state.data.filter(
          (product) => product.id !== deletedProductId,
        );
        // Reset current if it's the deleted product
        if (state.current && state.current.id === deletedProductId) {
          state.current = null;
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete product";
      });
  },
});

export const { setCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
