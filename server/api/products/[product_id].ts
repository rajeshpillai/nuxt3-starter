
export default defineEventHandler(async (event) => {
  const { product_id } = event.context.params
  const data =  await $fetch(`https://fakestoreapi.com/products/${product_id}`)
  return data;
})
