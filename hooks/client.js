// SPDX-License-Identifier: MIT

// react
import React from "react";

/**
 * ブラウザでのレンダリング時かを判定するフック
 * window が定義されているかどうかで調べます。
 * @return {boolean} レンダリング時かどうか
 */
const useClient = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);
  return isClient;
};

export default useClient;
