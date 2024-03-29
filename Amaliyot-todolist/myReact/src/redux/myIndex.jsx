import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './appSlice';
import MyApp from './myApp';


const store = configureStore({
  reducer: rootReducer,
});

const MyIndex = () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  )
}

export default MyIndex

