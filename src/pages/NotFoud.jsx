import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

export default function NotFound() {
  return (
    <PagesLayout pageClass="notfound">
      <h1 className="text-white text-center">الصفحة غير موجودة !</h1>
      <Link to='/'>رجوع</Link>
    </PagesLayout>
  )
}