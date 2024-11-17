import ProductDetail from '../components/products/ProductDetail';

function ProductDetailScreen({route}: any) {
  const product = route.params.product;

  return <ProductDetail product={product} />;
}

export default ProductDetailScreen;
