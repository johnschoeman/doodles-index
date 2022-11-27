import * as ReactDOM from "react-dom/client"

const CAMP_URL = "https://www.doodles.camp/#/doodles/"
const KITCHEN_URL = "https://www.doodles.kitchen/doodles/"

type Doodle = {
  baseUrl: typeof CAMP_URL | typeof KITCHEN_URL
  path: string
  title: string
}

const doodles: Doodle[] = [
  { baseUrl: CAMP_URL, path: "modular-times-table", title: "modular" },
  { baseUrl: CAMP_URL, path: "black-sheep", title: "black sheep" },
  { baseUrl: CAMP_URL, path: "lock-puzzle", title: "lock puzzle" },
  { baseUrl: CAMP_URL, path: "squares", title: "squares" },
  { baseUrl: CAMP_URL, path: "dots", title: "dots" },
  { baseUrl: KITCHEN_URL, path: "b_pad.html", title: "b pad" },
  { baseUrl: KITCHEN_URL, path: "tic_tac_toe.html", title: "tic tac toe" },
  { baseUrl: KITCHEN_URL, path: "recaman.html", title: "recaman" },
  { baseUrl: KITCHEN_URL, path: "solar_system_2.html", title: "system 2" },
  { baseUrl: KITCHEN_URL, path: "asteriods.html", title: "asteriods" },
  { baseUrl: KITCHEN_URL, path: "tree.html", title: "tree" },
  { baseUrl: KITCHEN_URL, path: "solar_system.html", title: "system" },
  { baseUrl: KITCHEN_URL, path: "mandlebrot.html", title: "mandlebrot" },
  { baseUrl: KITCHEN_URL, path: "koch_curve.html", title: "koch curve" },
  { baseUrl: KITCHEN_URL, path: "mirror_prime.html", title: "mirror primes" },
]

const DoodleIndex = () => {
  return (
    <div className="p-4">
      <DoodleIndex.DoodleList />
    </div>
  )
}

DoodleIndex.DoodleList = () => {
  return (
    <ul>
      {doodles.map(({ baseUrl, path, title }, idx) => {
        const url = `${baseUrl}${path}`
        const key = `doodle-${idx}`
        return (
          <DoodleIndex.ListItem key={key} idx={idx} title={title} url={url} />
        )
      })}
    </ul>
  )
}

type ListItemProps = {
  title: string
  url: string
  idx: number
}
DoodleIndex.ListItem = ({ title, url }: ListItemProps) => {
  return (
    <li className="flex flex-row items-center mt-4">
      <a className="lnk align-middle font-semibold text-2xl" href={url}>
        {title}
      </a>
    </li>
  )
}

const rootDiv = document.querySelector("#root") as Element
const root = ReactDOM.createRoot(rootDiv)
root.render(<DoodleIndex />)
