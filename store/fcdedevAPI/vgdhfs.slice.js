import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_vgdhf_list = createAsyncThunk("vgdhfs/api_v1_vgdhf_list", async payload => {
  const response = await apiService.api_v1_vgdhf_list(payload);
  return response.data;
});
export const api_v1_vgdhf_create = createAsyncThunk("vgdhfs/api_v1_vgdhf_create", async payload => {
  const response = await apiService.api_v1_vgdhf_create(payload);
  return response.data;
});
export const api_v1_vgdhf_retrieve = createAsyncThunk("vgdhfs/api_v1_vgdhf_retrieve", async payload => {
  const response = await apiService.api_v1_vgdhf_retrieve(payload);
  return response.data;
});
export const api_v1_vgdhf_update = createAsyncThunk("vgdhfs/api_v1_vgdhf_update", async payload => {
  const response = await apiService.api_v1_vgdhf_update(payload);
  return response.data;
});
export const api_v1_vgdhf_partial_update = createAsyncThunk("vgdhfs/api_v1_vgdhf_partial_update", async payload => {
  const response = await apiService.api_v1_vgdhf_partial_update(payload);
  return response.data;
});
export const api_v1_vgdhf_destroy = createAsyncThunk("vgdhfs/api_v1_vgdhf_destroy", async payload => {
  const response = await apiService.api_v1_vgdhf_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const vgdhfsSlice = createSlice({
  name: "vgdhfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_vgdhf_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_vgdhf_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_vgdhf_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_vgdhf_list,
  api_v1_vgdhf_create,
  api_v1_vgdhf_retrieve,
  api_v1_vgdhf_update,
  api_v1_vgdhf_partial_update,
  api_v1_vgdhf_destroy,
  slice: vgdhfsSlice
};