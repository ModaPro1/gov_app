import image1 from "../assets/services/1.png";
import image2 from "../assets/services/2.png";
import image3 from "../assets/services/3.png";
import image4 from "../assets/services/4.png";
import MainTitle from "./MainTitle";

export default function Services() {
  return (
    <div className="services py-4" id="services">
      <div className="content">
        <div className="container">
          <MainTitle classes="mt-3 border-gray">الخدمات</MainTitle>
          <div className="boxes mt-5 row g-3">
          <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="500">
                <img src={image4} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">برنامج الاقتراع </h4>
                <p className="mb-0 text-muted font-semibold">
                  قرعة شفافه مع البعثة الهندية في مدينة حيدر اباد لاختيار
                  المستحق حسب شرط الواقف .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="700">
                <img src={image3} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">الاستقبال</h4>
                <p className="mb-0 text-muted font-semibold">
                  تخصيص فريق لتوديع لاستقبال الحجاج من المشاعر مع تأكيد من طرف
                  كل جهات المختصة .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="900">
                <img src={image1} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">برنامج الاسكان</h4>
                <p className="mb-0 text-muted font-semibold">
                  توفير عمائر (سكن) لاستقبال الحجاج المختارين في مكة المكرمة و
                  التنسيق مع المطوف و السفارة و اعطائهم أفضل سكن مع الخدمات
                  لفترة الحج
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="1100">
                <img src={image2} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">برنامج سياحي</h4>
                <p className="mb-0 text-muted font-semibold">
                  توفر إدارة الأوقاف باصات خاصة لزيارة الأماكن والمشاعر المقدسة
                  قبل الحج ومعرفة الحاج مناسك الحج .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
