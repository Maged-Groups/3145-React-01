import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      id: null,
      email: "",
      firstName: "Guest",
      lastName: "",
      gender: "",
      image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      accessToken: "",
    },
  },
  reducers: {
    loginUser: (state, { payload }) => {
      console.log("state ", state);
      console.log(" payload ", payload);

      state.user = payload;
    },
    logoutUser: (state) => {
      state.user = {
        id: null,
        email: "",
        firstName: "Guest",
        lastName: "",
        gender: "",
        image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
        accessToken: "",
      };
    },
  },
});

export default userSlice.reducer;

export const { loginUser, logoutUser } = userSlice.actions;
