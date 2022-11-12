const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "/static/dashboard/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Funds Management",
        route: "/funds",
        svgIcon: "/static/dashboard/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
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
        heading: "Orders",
        route: "/orders",
        svgIcon: "/static/dashboard/media/icons/duotune/ecommerce/ecm007.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
  {
    heading: "Members & Partners",
    route: "/members",
    pages: [
      {
        heading: "Add User",
        route: "/members",
        svgIcon: "/static/dashboard/media/icons/duotune/general/gen041.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Members",
        route: "/members",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs032.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Agents",
        route: "/agents",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs033.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Dealers",
        route: "/dealers",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs034.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Depot",
        route: "/depot",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs038.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
];

export default DocMenuConfig;
