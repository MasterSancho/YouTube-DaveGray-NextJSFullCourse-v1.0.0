import Link from 'next/link';

export default function Page() {
 // throw new Error('This is an error');
 return (
  <>
   <h1>About Page</h1>
   <Link href='/'>Link to Home Page</Link>
  </>
 );
}
