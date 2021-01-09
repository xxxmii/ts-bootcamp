import { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";

type UseChangeEvent<T> = {
  (update: Dispatch<SetStateAction<T>>): (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

/*
 UseCallbackについて
  ・関数を返す
  ・memo化でレンタリングしたときに関数を作り直すことを防げる
*/

export const useStringChangeEvent: UseChangeEvent<string> = (update) => {
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      update(event.target.value);
    },
    [update]
  );
};

export const useNumberChangeEvent: UseChangeEvent<number> = (update) => {
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (/^[0-9]+$/.test(event.target.value)) {
        update(Number(event.target.value));
      }
    },
    [update]
  );
};
