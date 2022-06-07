import { ReactComponent as SearchIcon } from "../../assets/svg/magnify.svg"
import "./SearchInput.css"
const SearchInput = () => {
  return (
    <label className="search-input__ctn">
      <SearchIcon className="search-input__icon" width="16" height="16" />
      <input className="search-input__input" type="text" />
    </label>
  )
}

export default SearchInput
