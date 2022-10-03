import { ReactComponent as SearchIcon } from "../../assets/svg/magnify.svg"
import "./SearchInput.css"
const SearchInput = ({ onChange, value, placeholder, maxWidth }) => {
	const style = {
		maxWidth: maxWidth || "unset",
	}
	return (
		<label className="search-input__ctn" style={style}>
			<SearchIcon className="search-input__icon" width="16" height="16" />
			<input
				className="search-input__input"
				type="text"
				value={value}
				onChange={(e) => {
					onChange(e.target.value)
				}}
				placeholder={placeholder}
			/>
		</label>
	)
}

export default SearchInput
