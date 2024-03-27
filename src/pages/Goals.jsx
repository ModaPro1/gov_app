import { useContext } from "react";
import PagesLayout from "../layouts/PagesLayout";
import { langContext } from "../store/LangContext";

export default function Goals() {
  const { lang } = useContext(langContext);
  return (
    <PagesLayout pageClass="goals" title="الأهداف و المهام">
      {lang == "en" ? (
        <>
          <div className="box goals-box bg-white shadow-sm p-3 rounded-3">
            <div className="title pb-1 mb-1 border-bottom">Mission</div>
            <div className="info text-muted">
              The Nazer is responsible for organizing and managing the Endowment
              in Makkah Al-Mukarramah, developing it and following up on
              alternatives to the Assets, through an institution registered in
              accordance with the regulations and under the supervision of the
              General Authority for Endowments, thus improving Revenues to
              ensure Free Accommodation to selected pilgrims coming from Nizam
              State in India via the Electronic Draw System in coordination with
              the Haj Committee of India.
            </div>
          </div>
          <div className="box missions-box bg-white shadow-sm p-3 rounded-3 mt-3">
            <div className="title pb-1 mb-3 border-bottom">Objectives</div>
            <div className="info text-muted">
              <div>
                <h6 className="fw-bold">1. Real estate management:</h6>
                <p className="mb-0">
                  - Ensuring the long-term sustainability of all Endowment
                  Assets and improving them.
                  <br />
                  - Ensuring selective investments of Assets through Sharia
                  court approvals.
                  <br />
                  - Ideal leasing agreements on Assets in accordance with the
                  law
                  <br />
                  - Management supervision through Human resources systems and
                  rules established by the relevant governmental organization
                  <br />
                  - Ensuring regular maintenance and well-being of all Assets
                  subject to the endowment at all times.
                  <br />
                  - Immediate follow-up of all dues and rents to obtain
                  continuous revenues.
                  <br />
                  - Working under the supervision issued by the Ministry of
                  Justice in the Mecca Court to operate an endowment management
                  institution under the supervision of the General Authority for
                  Endowments.
                  <br />
                  - Recording and following up on all documents related to
                  endowment properties and adhering to the procedures determined
                  by the relevant authority.
                  <br />
                  - Working under the Commercial Registration to operate and
                  manage the Endowments and Associations
                  <br />
                  - Improving the endowment organization according to the
                  required rules and managing administrative functions to meet
                  the defined vision and mission of the institution.
                  <br />
                  - Maintaining financial records for not less than the past ten
                  years, certified by an official Financial Auditor
                  <br />- Securing and updating the appropriate financial system
                  to record all transactions according to the needs of the
                  endowment and in line with the relevant systems.
                </p>
              </div>
              <div className="mt-4">
                <h6 className="fw-bold">
                  {" "}
                  2. Pilgrims Housing Administration:
                </h6>
                <p className="mb-0">
                  - Proper Planning to increase the number of pilgrims each year
                  by improving revenues.
                  <br />
                  - Holding regular meetings in coordination with the Haj
                  Committee to inform them of all pilgrims housing details.
                  <br />
                  - Participate with the Haj Committee in the annual draw in a
                  transparent manner to select pilgrims from the list of
                  eligible persons according to the required number.
                  <br />
                  - Choosing suitable seasonal buildings for pilgrims to stay
                  <br />
                  - Forming a Saudi team who speaks the Hindi language to
                  supervise the services provided to pilgrims during Hajj,
                  according to what was agreed upon.
                  <br />
                  - Receiving pilgrims from India according to the specified
                  arrival dates and accommodating them until their departure to
                  Al-Mashaer
                  <br />
                  - Receiving pilgrims from Al-Mashaer according to their
                  arrival dates and accommodating them until their departure to
                  Medina or back home as per schedule.
                  <br />
                  - Establishing a means of communication with the Mutawif
                  Office to ensure that pilgrims receive comfortable and smooth
                  services during their stay.
                  <br />
                  - Coordinating with the Haj Committee and Indian Mission
                  regarding working on the welfare of pilgrims during their
                  stay.
                  <br />
                  - Conducting regular tours and meetings with pilgrims to
                  ensure that no accidents occur, God forbid, and to ensure
                  their comfort, answer all their queries , and provide for
                  their potential needs.
                  <br />
                  - Providing additional services to pilgrims, if possible, by
                  coordinating and arranging visits for them to all holy places
                  during their stay.
                  <br />- Documenting a list of all pilgrims benefiting from the
                  endowment’s services through the Haj Committee every year.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="box goals-box bg-white shadow-sm p-3 rounded-3">
            <div className="title pb-1 mb-1 border-bottom">المهام</div>
            <div className="info text-muted">
              الناظر هو المسؤول عن تنظيم وإدارة الوقف بمكة المكرمة وتطويره
              ومتابعة بدائل للأصول، من خلال مؤسسة مسجلة وفقا للأنظمة وذلك تحت
              إشراف الهيئة العامة للأوقاف، وبالتالي تحسين الإيرادات وضمان المبلغ
              المنفق على الإقامة المجانية للحجاج القادمين من ولاية حيدر أباد
              بالهند من خلال اختيار المستحقين عبر النظام الإلكتروني بالتنسيق مع
              البعثة الهندية.
            </div>
          </div>
          <div className="box missions-box bg-white shadow-sm p-3 rounded-3 mt-3">
            <div className="title pb-1 mb-3 border-bottom">الأهداف</div>
            <div className="info text-muted">
              <div>
                <h6 className="fw-bold">1. إدارة العقارات :</h6>
                <p className="mb-0">
                  - ضمان الإستدامة على المدى الطويل لجميع أصول الوقف وتحسينها.
                  <br />
                  - ضمان استثمارات انتقائية للأصول من خلال موافقات المحاكم
                  الشرعية.
                  <br />
                  - اتفاقيات تأجير مثالية على الأصول وفقا للقانون
                  <br />
                  - إشراف الإدارة من خلال أنظمة الموارد البشرية والقواعد التي
                  تضعها المنظمه الحكومية المعنية
                  <br />
                  - ضمان الصيانة الدورية ورفاهية جميع الأصول الخاضعة للوقف في
                  جميع الأوقات.
                  <br />
                  - المتابعة الفورية لجميع المستحقات والإيجارات للحصول على
                  إيرادات متواصلة.
                  <br />
                  - العمل بموجب النظارة الصادرة من وزارة العدل بمحكمة مكة
                  المكرمة لتشغيل مؤسسة لإدارة الوقف تحت إشراف الهيئة العامة
                  للأوقاف.
                  <br />
                  - تسجيل و متابعة جميع المستندات المتعلقة بعقارات الوقف
                  والإلتزام بالإجراءات التي تحددها الهيئة ذات العلاقة به.
                  <br />
                  - العمل بموجب السجل التجاري لتشغيل وإدارة مؤسسة اوقاف و أربطة
                  النظام حيدرآباد.
                  <br />
                  - تحسين منظمة الوقف حسب القواعد المطلوبة وإدارة الوظائف
                  الإدارية لتلبية الرؤية والرسالة المحددة للمؤسسة.
                  <br />
                  - الإحتفاظ بسجلات مالية لا تقل عن العشر السنوات الماضية معتمدة
                  من قبل محاسب قانوني رسمي.
                  <br />- تأمين وتحديث النظام المالي المناسب لتسجيل جميع
                  المعاملات حسب احتياجات الوقف وبما يتماشى مع الأنظمة المختصة.
                </p>
              </div>
              <div className="mt-4">
                <h6 className="fw-bold"> 2. إدارة إسكان الحجاج:</h6>
                <p className="mb-0">
                  - التخطيط لزيادة عدد الحجاج في كل عام وذلك من خلال تحسين
                  الإيرادات.
                  <br />
                  - عقد اجتماعات منتظمة بالتنسيق مع السلطات الهندية لإطلاعها على
                  كافة متطلبات إسكان الحجاج.
                  <br />
                  - المشاركة مع البعثة الهندية في السحب السنوي بشكل شفاف وذلك
                  لإختيار الحجاج من قائمة المستحقين حسب العدد المطلوب.
                  <br />
                  - اختيار عمائر موسمية مناسبه لإقامة الحجاج
                  <br />
                  - تشكيل فريق سعودي يتحدثون اللغة الهندية للإشراف على الخدمات
                  المقدمة للحجاج في الحج وذلك حسب المتفق.
                  <br />
                  - استقبال الحجاج من الهند وذلك حسب تواريخ الوصول المحددة
                  وإيوائهم حتى مغادرتهم إلى المشاعر
                  <br />
                  - استقبال الحجاج من المشاعر حسب تواريخ الوصول وإيوائهم حتى
                  مغادرتهم إلى المدينة المنورة
                  <br />
                  - إنشاء وسيلة تواصل بمكتب المطوف لضمان حصول الحجاج على خدمات
                  مريحة وسلسة أثناء فترة الإقامة.
                  <br />
                  - التنسيق مع البعثة الهندية وذلك بشأن العمل على رفاهية الحجاج
                  أثناء فترة إقامتهم.
                  <br />
                  - عمل جولات واجتماعات منتظمة مع الحجاج لضمان عدم وقوع حوادث
                  لاقدر الله وضمان راحتهم و الإجابة على جميع تساؤلاتهم وتوفير
                  احتياجاتهم المحتملة.
                  <br />
                  - توفير خدمات إضافية للحجاج إن أمكن وذلك بتنسيق وترتيب زيارات
                  لهم لجميع الأماكن المقدسة في فترة إقامتهم.
                  <br />- توثيق قائمة بجميع الحجاج المستفيدين من خدمات الوقف
                  وذلك من خلال البعثة الهندية في كل سنة.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </PagesLayout>
  );
}
