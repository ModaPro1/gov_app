import MainTitle from "./MainTitle";

export default function Numbers() {
  return (
    <div className="numbers pt-4 pb-5">
      <MainTitle classes="margin">الارقاف في أرقام</MainTitle>
      <div className="boxes d-flex gap-5 mt-5 mx-auto">
        <div className="box">
          <div className="title">25</div>
          <div className="text">عدد سنوات الوقف</div>
        </div>
        <div className="box">
          <div className="title">111,035</div>
          <div className="text">عدد اجمالي الحجاج</div>
        </div>
        <div className="box">
          <div className="title">15</div>
          <div className="text">عدد الاوقاف </div>
        </div>
      </div>
    </div>
  );
}