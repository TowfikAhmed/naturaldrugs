const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "/static/dashboard/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Products & Orders",
    route: "/products",
    pages: [
      {
        heading: "All Products",
        route: "/products",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "My Cart",
        route: "/orders",
        svgIcon: "/static/dashboard/media/icons/duotune/ecommerce/ecm007.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
];

export default DocMenuConfig;
