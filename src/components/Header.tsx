import { BRAND_NAME, HOME_LINK } from "../globals"

export function Header() {
    return (
      <header className="absolute top-0 left-0 w-full p-6 z-10">
        <a href={HOME_LINK} className="block w-fit">
          <div className="text-blue-400 font-semibold text-lg tracking-wide">
              {BRAND_NAME}
          </div>
        </a>
      </header>
    )
  }