export const generateMetadata = ({ params }) => {
  const upParams =
    params.productCategory.charAt(0).toUpperCase() +
    params.productCategory.slice(1);

  return {
    title: `ApexShop | ${upParams} | ${params.productId}`,
  };
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
