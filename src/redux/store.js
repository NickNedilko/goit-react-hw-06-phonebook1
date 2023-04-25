import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';

// import { contactsReduser } from './contacts/contacts.reducer';
// import { filterContactReduser } from './filterContacts/filterContacts.reduser';
import { filterReducer } from './filterContacts/filterContacts.slice';
import { contactsReducer } from '../redux/contacts/contacts.slice';
// import file from '../redux/contacts/contacts.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
