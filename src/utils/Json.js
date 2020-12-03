import { Home, Support, Staking, Loan, Lending, Governance, Pool, Karma, Swap } from "../App/common/svg";

const routes = [
  {
    name: "Dashboard",
    Icon: ({title}) => <Home {...{title}} />,
    path: "/"
  },
  {
    name: "Staking",
    Icon: ({title}) => <Staking {...{title}} />,
    path: "/staking"
  },
  {
    name: "Loans",
    Icon: ({title}) => <Loan {...{title}} />,
    path: "/loans"
  },
  {
    name: "Lending",
    Icon: ({title}) => <Lending {...{title}} />,
    path: "/lending"
  },
  {
    name: "Governance",
    Icon: ({title}) => <Governance {...{title}} />,
    path: "/governance"
  },
  {
    name: "MANTRA Pool",
    Icon: ({title}) => <Pool {...{title}} />,
    path: "/mantra pool"
  },
  {
    name: "Karma",
    Icon: ({title}) => <Karma {...{title}} />,
    path: "/karma"
  },
  {
    name: "Swap",
    Icon: ({title}) => <Swap {...{title}} />,
    path: "/swap"
  },
  {
    name: "Support",
    Icon: ({title}) => <Support {...{title}} />,
    path: "/support"
  },
];


export {
  routes
}