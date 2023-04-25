import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    removeContact: (state, { payload }) => {
      return state.filter(contact => contact.contactId !== payload);
    },
  },
});

console.log(contactsSlice);

// const persistConfig = {
//   key: 'telephoneBook',
//   storage,
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
