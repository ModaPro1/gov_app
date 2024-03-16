import PagesLayout from "../layouts/PagesLayout";

export default function Gallary() {
  return (
    <PagesLayout title="مكتبة الصور" pageClass="gallary">
      <div className="row g-3 boxes">
        <div className="col-lg-4">
          <div className="img">
            <img
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F112%2F1591112%2FhhsGih0t%2Fbc930e4bb7e847f8bd9e50b5907a16f2&methods=resize%2C600%2C5000"
              alt="IMAGE"
              className="w-100"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="img">
            <img
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F112%2F1591112%2FhhsGih0t%2Fbc930e4bb7e847f8bd9e50b5907a16f2&methods=resize%2C600%2C5000"
              alt="IMAGE"
              className="w-100"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="img">
            <img
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F112%2F1591112%2FhhsGih0t%2Fbc930e4bb7e847f8bd9e50b5907a16f2&methods=resize%2C600%2C5000"
              alt="IMAGE"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}
