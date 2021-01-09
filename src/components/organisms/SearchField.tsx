import React, { ChangeEvent, FC, useState, useCallback } from "react";
import styles from "styles/utility/flex.module.scss";
import TextInput from "components/atoms/TextInput";
import SearchButton from "components/atoms/SearchButton";
import { useStringChangeEvent } from "lib/customHooks";
import { searchHotels } from "lib/hotels";

const SearchField: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const handleKeyword = useStringChangeEvent(setKeyword);

  return (
    <div className={styles.flex__row_center}>
      <TextInput onChange={handleKeyword} type={"text"} value={keyword} />
      <SearchButton label={"Serach"} onClick={() => searchHotels(keyword)} />
    </div>
  );
};

export default SearchField;
