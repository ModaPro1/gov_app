import { useTranslation } from "react-i18next";
import PagesLayout from "../layouts/PagesLayout";

export default function Skeleton() {

  const {t} = useTranslation()

  return (
    <PagesLayout pageClass="skeleton" title={t('nav_6')}>
      <div className="boxes shadow-sm p-4 rounded-3">
      <div className="d-flex gap-3 justify-content-center row-content">
          <div className="box">
            <img src="/leaders/5.jpeg" alt="Leader" width={200} height={200} className="rounded-3" />
            <div className="title">
              <span>الناظر السابق 1417 - 1400هـ </span> / المرحوم محمد مضر الشريف
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center row-content mt-3 pt-3 flex-wrap">
          <div className="box">
            <img src="/leaders/4.jpeg" alt="Leader" width={190} height={190} className="rounded-3" />
            <div className="title">
              <span>ناظر الوقف</span> / يوسف عوض الأحمدي
            </div>
          </div>
          <div className="box">
            <img src="/leaders/1.jpeg" alt="Leader" width={190} height={190} className="rounded-3" />
            <div className="title">
              <span>ناظر الوقف</span> / حسين محمد مضر الشريف
              <br />
              <span>المدير و الوكيل المفوض</span>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center row-content mt-3 pt-3 flex-wrap">
          <div className="box">
            <img src="/leaders/6.jpeg" alt="Leader" width={170} height={170} className="rounded-3" />
            <div className="title">
              <span>مشرف تعقيب الحكومي</span> / محمد سالم
            </div>
          </div>
          <div className="box">
            <img src="/leaders/2.jpeg" alt="Leader" width={170} height={170} className="rounded-3" />
            <div className="title">
              <span>أخصائي الميزانية والمالية</span> / نزار بخش
            </div>
          </div>
          <div className="box">
            <img src="/leaders/3.jpeg" alt="Leader" width={170} height={170} className="rounded-3" />
            <div className="title">
              <span>مشرف العلاقات الحكومية</span> / محمد حسين
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center row-content flex-1 mt-3 pt-3">
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
        </div> */}
      </div>
    </PagesLayout>
  )
}