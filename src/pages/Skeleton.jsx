import PagesLayout from "../layouts/PagesLayout";

export default function Skeleton() {
  return (
    <PagesLayout pageClass="skeleton" title="الهيكل التنظيمي">
      <div className="boxes shadow-sm p-4 rounded-3">
        <div className="d-flex gap-3 justify-content-center row-content">
          <div className="box">
            <img src="/leaders/1.jpeg" alt="Leader" width={200} height={200} className="rounded-3" />
            <div className="title">
              <span>ناظر الوقف</span> / حسين محمد مضر الشريف
            </div>
          </div>
          <div className="box">
            <img src="/leaders/2.jpeg" alt="Leader" width={200} height={200} className="rounded-3" />
            <div className="title">
              <span>ناظر الوقف</span> / يوسف عوض الأحمدي
              <br />
              <span>المدير و الوكيل المفوض</span>
            </div>
          </div>
          <div className="box">
            <img src="/leaders/man.jpg" alt="Leader" width={200} height={200} className="rounded-3" />
            <div className="title">
              <span>مشرف قانوني</span> / محمد حسين الشريف
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center row-content mt-3 pt-3">
          <div className="box">
            <img src="/leaders/man.jpg" alt="Leader" width={170} height={170} className="rounded-3" />
            <div className="title">
              <span>مشرف تعقيب الحكومي</span> / محمد سالم
            </div>
          </div>
          <div className="box">
            <img src="/leaders/3.jpeg" alt="Leader" width={170} height={170} className="rounded-3" />
            <div className="title">
              <span>المشرف المالي</span> / نزار بخش
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center row-content flex-1 mt-3 pt-3">
          <div className="box">
            <img src="/leaders/man.jpg" alt="Leader" width={150} height={150} className="rounded-3" />
            <div className="title">
              <span>مسؤل الإداري و تشغيل</span> / محمد أحمد الشريف
            </div>
          </div>
          <div className="box">
            <img src="/leaders/woman.png" alt="Leader" width={150} height={150} className="rounded-3" />
            <div className="title">
              <span>مسؤل التشغيل للحج</span> / سماح حسين الشريف
            </div>
          </div>
          <div className="box">
            <img src="/leaders/woman.png" alt="Leader" width={150} height={150} className="rounded-3" />
            <div className="title">
              <span>مسؤل التشغيل للحج</span> / خديجة علي الزيد
            </div>
          </div>
          <div className="box">
            <img src="/leaders/man.jpg" alt="Leader" width={150} height={150} className="rounded-3" />
            <div className="title">
              <span>مساعد إداري </span> / بكر 
            </div>
          </div>
          <div className="box">
            <img src="/leaders/man.jpg" alt="Leader" width={150} height={150} className="rounded-3" />
            <div className="title">
              <span>مساعد إداري</span> / إسماعيل منظور بخش
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  )
}