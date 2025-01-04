```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;

//pages/products/[id].js

export default function ProductDetails({params}){
  const {id} = params;
  const cleanedId = id.endsWith('/') ? id.slice(0, -1) : id;
  return <p>Product ID: {cleanedId}</p>;
}
```