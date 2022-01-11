# GR-Product-Card

This is a package that helps import a library of a product showing the card and the main goal of this package is for tests purposes.

### Gerardo Rodriguez

## Example

```
import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../gr-product-card';
```

```
	<ProductCard
    product={product}
    initialValues={{
      count: 4,
      // maxCount: 9
    }}
  >
    {({ reset, count, increaseBy, isMaxCountReached }) => (
      <>
        <ProductImage
          className='custom-image'
          style={{
            boxShadow:
              '10px 10px 10px 10px rgba(0,0,0,0.2)',
          }}
        />
        <ProductTitle className='text-bold' />
        <ProductButtons className='custom-buttons' />

        {/* <button onClick={reset}>Reset</button>
        <button onClick={() => increaseBy(-2)}> -2 </button> */}
        {/*if maxcount not reached show otherwise disable */}
        {/* { (!isMaxCountReached) && <button onClick={() => increaseBy(+2)}> +2 </button>}
        <span>{ count }</span> */}
        {/* {JSON.stringify(args,null, 3)} */}
      </>
    )}
  </ProductCard>
```
