import * as ReactDOM from "react-dom/client"

const ELM_URL = "https://clinquant-chebakia-3013c1.netlify.app/#/doodles/"
const TS_URL = "https://www.doodles.kitchen/doodles/"

type Doodle = {
  baseUrl: typeof ELM_URL | typeof TS_URL
  path: string
  title: string
}

const doodles: Doodle[] = [
  { baseUrl: ELM_URL, path: "modular-times-table", title: "modular" },
  { baseUrl: ELM_URL, path: "black-sheep", title: "black sheep" },
  { baseUrl: ELM_URL, path: "lock-puzzle", title: "lock puzzle" },
  { baseUrl: ELM_URL, path: "squares", title: "squares" },
  { baseUrl: ELM_URL, path: "dots", title: "dots" },
  { baseUrl: ELM_URL, path: "recaman", title: "recaman" },
  { baseUrl: TS_URL, path: "b_pad", title: "b pad" },
  { baseUrl: TS_URL, path: "tic_tac_toe", title: "tic tac toe" },
  { baseUrl: TS_URL, path: "solar_system_2", title: "system 2" },
  { baseUrl: TS_URL, path: "asteroids", title: "asteroids" },
  { baseUrl: TS_URL, path: "tree", title: "tree" },
  { baseUrl: TS_URL, path: "solar_system", title: "system" },
  { baseUrl: TS_URL, path: "mandlebrot", title: "mandlebrot" },
  { baseUrl: TS_URL, path: "koch_curve", title: "koch curve" },
  { baseUrl: TS_URL, path: "mirror_primes", title: "mirror primes" },
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
