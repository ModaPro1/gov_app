import MainTitle from "./MainTitle";

export default function News() {
  return (
    <div className="news py-4">
      <MainTitle classes="border-gray">الأخبار</MainTitle>
      <div className="container">
        <div className="box mt-5 d-flex gap-5 position-relative">
          <div className="position-relative">
            <div className="controls d-flex gap-3">
              <i class="fa-solid fa-arrow-right disabled"></i>
              <i class="fa-solid fa-arrow-left disabled"></i>
            </div>
            <p className="mt-5">
              الناظر / حسين محمد مضر الشريف نحنُ في طور الاستعداد والتأمين لموسم
              حج 1445هـ . ونقوم بالتنسيق مع حكومة تيلانجانا والمسؤول التنفيذي
              للبعثة الهندية للحج لإجراء القرعة الالكترونية في حيدر آباد لترشيح
              الحجاج المستحقين بعناية وضمان جودة شفافية الاقتراع .
            </p>
          </div>
          <img
            src="/news/1.jpeg"
            alt="News"
            width={400}
            className="rounded-2"
          />
        </div>
      </div>
    </div>
  );
}
