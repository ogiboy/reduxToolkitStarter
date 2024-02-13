import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../store/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    // Yapılacaklar: Arabayı store'a kaydet
    dispatch(addCar({ name, value, id }));
    setName("");
    setValue("");
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Marka</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            pattern="[A-Za-z]+"
            title="Sadece harf giriniz."
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <button className="button is-link">Gönder</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
