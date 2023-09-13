import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvbcnfjfjfjgjhgj_list = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_list",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_list(payload)
    return response.data
  }
)
export const api_v1_cvbcnfjfjfjgjhgj_create = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_create",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_create(payload)
    return response.data
  }
)
export const api_v1_cvbcnfjfjfjgjhgj_retrieve = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvbcnfjfjfjgjhgj_update = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_update",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_update(payload)
    return response.data
  }
)
export const api_v1_cvbcnfjfjfjgjhgj_partial_update = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_cvbcnfjfjfjgjhgj_destroy = createAsyncThunk(
  "cvbcnfjfjfjgjhgjs/api_v1_cvbcnfjfjfjgjhgj_destroy",
  async payload => {
    const response = await apiService.api_v1_cvbcnfjfjfjgjhgj_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvbcnfjfjfjgjhgjsSlice = createSlice({
  name: "cvbcnfjfjfjgjhgjs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cvbcnfjfjfjgjhgj_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_cvbcnfjfjfjgjhgj_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_cvbcnfjfjfjgjhgj_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_cvbcnfjfjfjgjhgj_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_cvbcnfjfjfjgjhgj_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcnfjfjfjgjhgj_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cvbcnfjfjfjgjhgj_list,
  api_v1_cvbcnfjfjfjgjhgj_create,
  api_v1_cvbcnfjfjfjgjhgj_retrieve,
  api_v1_cvbcnfjfjfjgjhgj_update,
  api_v1_cvbcnfjfjfjgjhgj_partial_update,
  api_v1_cvbcnfjfjfjgjhgj_destroy,
  slice: cvbcnfjfjfjgjhgjsSlice
}
