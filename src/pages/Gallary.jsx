import PagesLayout from "../layouts/PagesLayout";

export default function Gallary() {
  const gallaryData = {
    section1: {
      title: "ارشيف 1404هـ",
      images: [
        "gallary (1).jpeg",
        "gallary (2).jpeg",
        "gallary (3).jpeg",
        "gallary (4).jpeg",
        "gallary (5).jpeg",
        "gallary (6).jpeg",
        "gallary (7).jpeg",
        "gallary (8).jpeg",
        "gallary (9).jpeg",
        "gallary (10).jpeg",
        "gallary (11).jpeg",
        "gallary (12).jpeg",
        "gallary (13).jpeg",
        "gallary (14).jpeg",
        "gallary (15).jpeg",
        "gallary (16).jpeg",
        "gallary (17).jpeg",
        "gallary (18).jpeg",
        "gallary (19).jpeg",
      ],
    },
    section2: {
      title: "ارشيف 1388هـ",
      images: ["gallary (20).jpeg", "gallary (21).jpeg", "gallary (22).jpeg"],
    },
    section3: {
      title: "صور عامة",
      images: [
        "gallary (23).jpeg",
        "gallary (24).jpeg",
        "gallary (25).jpeg",
        "gallary (26).jpeg",
        "gallary (27).jpeg",
        "gallary (28).jpeg",
        "gallary (29).jpeg",
        "gallary (30).jpeg",
        "gallary (31).jpeg",
        "gallary (32).jpeg",
        "gallary (33).jpeg"
      ]
    },
  };
  return (
    <PagesLayout title="مكتبة الصور" pageClass="gallary">
      <div className="boxes">
        <div className="section1">
          <div className="title">{gallaryData.section1.title}</div>
          <div className="content row g-3">
            {gallaryData.section1.images.map((item) => {
              return (
                <div className="col-lg-4" key={item}>
                  <div className="img">
                    <img
                      src={`/gallary/${item}`}
                      alt="IMAGE"
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section2 mt-5">
          <div className="title">{gallaryData.section2.title}</div>
          <div className="content row g-3">
            {gallaryData.section2.images.map((item) => {
              return (
                <div className="col-lg-4" key={item}>
                  <div className="img">
                    <img
                      src={`/gallary/${item}`}
                      alt="IMAGE"
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section3 mt-5">
          <div className="title">{gallaryData.section3.title}</div>
          <div className="content row g-3">
            {gallaryData.section3.images.map((item) => {
              return (
                <div className="col-lg-4" key={item}>
                  <div className="img">
                    <img
                      src={`/gallary/${item}`}
                      alt="IMAGE"
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}
