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
        heading: "Balance Request",
        route: "/dashboard",
        svgIcon: "/static/dashboard/media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Products & Orders",
    route: "/",
    pages: [
      {
        heading: "All Products",
        route: "/dashboard/products",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "My Products",
        route: "/dashboard/myproducts",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "My Purchases",
        route: "/apps/customers/customers-listing",
        svgIcon: "/static/dashboard/media/icons/duotune/ecommerce/ecm007.svg",
        fontIcon: "bi-cart",
      },
    ],
  },
  {
    heading: "Account & Reporting",
    route: "/",
    pages: [
      {
        heading: "My Account",
        route: "/crafted/account/settings",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "My Withdraws",
        route: "/apps/customers/customers-listing",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "Bonus Reports",
        route: "/apps/customers/customers-listing",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "Re-Purchase Sales Reports",
        route: "/apps/customers/customers-listing",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
      {
        heading: "Joining Sales Reports",
        route: "/apps/customers/customers-listing",
        svgIcon: "/static/dashboard/media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-layers",
      },
    ],
  },
];

export default DocMenuConfig;
