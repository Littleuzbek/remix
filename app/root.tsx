import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { Provider } from "react-redux";
import store from "./store/store";
import { getProducts, isLogged } from "./firebase";

import AppShell from "./AppShell"

import rootStyles from "./index.css?url";
import responsiveStyles from "./responsive.css?url";
import homePageStyles from "./components/Home/style/home.css?url";
import headerStyles from "./components/Header/style/header.css?url";
import footerStyles from "./components/Footer/footer.css?url";
import cartStyles from "./components/Cart/cart.css?url";
import viewerStyles from "./components/Viewer/viewer.css?url";
import loginStyles from "./components/Auth/log.css?url";
import userStyles from "./components/User/user.css?url";
import userDashboardStyles from "./components/User/dashboard.css?url";
import orderHistoryStyles from "./components/User/ordersHistory/orderHistory.css?url";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Teko&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@1,300&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,300&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital@1&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
  },
  {
    rel: "stylesheet",
    href: rootStyles,
  },
  {
    rel: "stylesheet",
    href: responsiveStyles,
  },
  {
    rel: "stylesheet",
    href: homePageStyles,
  },
  {
    rel: "stylesheet",
    href: headerStyles,
  },
  {
    rel: "stylesheet",
    href: footerStyles,
  },
  {
    rel: "stylesheet",
    href: cartStyles,
  },
  {
    rel: "stylesheet",
    href: viewerStyles,
  },
  {
    rel: "stylesheet",
    href: loginStyles,
  },
  {
    rel: "stylesheet",
    href: userStyles,
  },
  {
    rel: "stylesheet",
    href: userDashboardStyles,
  },
  {
    rel: "stylesheet",
    href: orderHistoryStyles,
  },
];

export const loader = async () => {
  const products = await getProducts();
  await isLogged()
  
  return products;
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <AppShell>{children}</AppShell>
          <ScrollRestoration />
          <Scripts />
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
