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
        {/* <ReduxProvider> */}
          {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
