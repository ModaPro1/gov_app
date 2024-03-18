import image from "../assets/logo.png";
import MainTitle from "./MainTitle";

export default function About() {

  return (
    <div className="about" id="about">
      <div className="section-data py-4">
        <MainTitle classes="mt-3">نبذة عن المؤسسة</MainTitle>
        <div className="container">
          <div className="d-flex mt-3 content">
            <div className="image" data-aos="fade-left">
              <img src={image} width={100} alt="IMAGE" />
            </div>
            <div className="info pt-3" data-aos="fade-right">
              <p className="text-muted mb-0">
                وقف خاص في مدينة مكة المكرمة تابع لنظام حيدر آباد بالهند والذي
                يملك عقارات منذ عام 1284هـ وتم تسجيله في محكمة مكة المكرمة وقفاً
                خيرياً وتم تعيين الناظر في عام 1400هـ لإدارة تلك الأوقاف
                والإشراف عليه لإسكان الحجاج القادمين من ولاية النظام حيدر أباد
                بالهند مجانا وذلك حسب شرط الواقف.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
