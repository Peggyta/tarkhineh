import Layout from '@/components/layout/Layout';
import NextAuthProvider from '@/providers/NextAuthProvider';
import './globals.css';

export const metadata = {
  title: 'رستوران‌های زنجیره‌ای ترخینه',
  description: 'سفارس غذا بصورت آنلاین',
  icons: {icon: 'icon.png'},
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
        <body className='text-estedad'>
          <NextAuthProvider>
            <Layout>
              <div className='min-h-screen'>{children}</div>
            </Layout>
          </NextAuthProvider>
        </body>
    </html>
  )
}
