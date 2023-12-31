export const products_url = "https://course-api.com/react-store-products";
export const single_product_url =
  "https://course-api.com/react-store-single-product?id=";


export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') { 
      unique = unique.flat()
  }
  return ["all", ...new Set(unique)];
};


export function capitalizeWords(text) {
  if (!text) {
    return "";
  }

  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}