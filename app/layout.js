// global css document
import './globals.css';

// components
import MainHeader from '@/components/main-header/main-header';

// meta datas
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

// main layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
