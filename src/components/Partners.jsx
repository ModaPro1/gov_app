import MainTitle from "./MainTitle";

export default function Partners() {
  const partners = [
    {
      image: "1.svg",
      width: 100,
    },
    {
      image: "2.jpeg",
      width: 100,
    },
    {
      image: "4.svg",
      width: 100,
    },
    {
      image: "5.jpeg",
      width: 100,
    },
    {
      image: "6.png",
      width: 100,
    },
    {
      image: "7.jpeg",
      width: 160,
    },
    {
      image: "8.jpeg",
      width: 200,
    },
    {
      image: "9.jpeg",
      width: 120,
    },
    {
      image: "10.jpeg",
      width: 120,
    },
    {
      image: "11.jpeg",
      width: 120,
    },
    {
      image: "12.jpeg",
      width: 80,
    },
    {
      image: "13.jpeg",
      width: 120,
    },
    {
      image: "14.jpeg",
      width: 120,
    },
    {
      image: "15.jpeg",
      width: 140,
    },
    {
      image: "16.png",
      width: 120,
    },
  ];

  return (
    <div className="partners pt-4 pb-5">
      <MainTitle>شركاء النجاح</MainTitle>
      <div className="boxes mt-5">
        <div className="content">
          {partners.map((item) => {
            return (
              <img
                key={item.image}
                src={`/partners/${item.image}`}
                alt="Partner"
                width={item.width}
              />
            );
          })}
        </div>
        <div className="content">
          {partners.map((item) => {
            return (
              <img
                key={item.image}
                src={`/partners/${item.image}`}
                alt="Partner"
                width={item.width}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
