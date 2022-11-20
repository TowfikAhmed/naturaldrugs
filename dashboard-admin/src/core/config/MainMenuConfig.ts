const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/administrator",
        svgIcon: "/static/dashboard/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Funds Management",
        route: "/administrator/funds",
        svgIcon: "/static/dashboard/media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
      },
    ],
  },
  {
    heading: "Products & Orders",
    route: "/administrator/products",
    pages: [
      {
        heading: "All Products",
        route: "/administrator/products",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "Orders",
        route: "/administrator/orders",
        svgIcon: "/static/dashboard/media/icons/duotune/ecommerce/ecm007.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
  {
    heading: "Members & Partners",
    route: "/administrator/members",
    pages: [
      {
        heading: "Add User",
        route: "/administrator/adduser",
        svgIcon: "/static/dashboard/media/icons/duotune/general/gen041.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Members",
        route: "/administrator/members",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs032.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Agents",
        route: "/administrator/agents",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs033.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Dealers",
        route: "/administrator/dealers",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs034.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "Depot",
        route: "/administrator/depot",
        svgIcon: "/static/dashboard/media/icons/duotune/abstract/abs038.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
];

export default DocMenuConfig;
