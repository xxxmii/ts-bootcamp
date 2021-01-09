import React, { FC } from "react";
import styles from "styles/atoms/button.module.scss";

interface Props {
  label: string;
  onClick: () => void; // 渡ってきた関数をそのまま実行
}

const SearchButton: FC<Props> = React.memo((props) => {
  const { label, onClick } = props;
  return (
    <button className={styles.button__search} onClick={onClick}>
      {label}
    </button>
  );
});

export default SearchButton;
