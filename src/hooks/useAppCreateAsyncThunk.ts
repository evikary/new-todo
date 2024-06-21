import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState, UnitApi } from "../types/types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: UnitApi;
}>();
