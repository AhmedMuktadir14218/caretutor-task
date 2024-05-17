'use client';
import { Provider } from 'react-redux';
import store from '../redux/store';

import './globals.css';
// import ReduxProvider from './reduxProvider';

export const metadata = {
  title: 'Task Manager',
  description: 'A simple task manager built with Next.js and Redux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
