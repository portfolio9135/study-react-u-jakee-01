import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">T0Pに戻る</Link>
    </div>
  );
};
