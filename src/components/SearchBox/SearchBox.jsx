import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filterId = nanoid();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.search}>
      <label className={css["search-label"]}>
        <span>Find contacts by name:</span>
        <input className={css["search-input"]} type="text" id={filterId} placeholder="Enter your characters..." autoComplete="off" value={filter} onChange={handleSearch} />
      </label>
    </div>
  );
}
