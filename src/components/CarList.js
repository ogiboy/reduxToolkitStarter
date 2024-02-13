import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/carsSlice";
import { useEffect } from "react";

function CarList() {
  // Yapılacaklar: Store'dan arabaları alın
  const { data } = useSelector((state) => state.cars);
  const cars = data;
  const dispatch = useDispatch();

  const onClick = (car) => {
    // Yapılacak: Arabayı silin
    dispatch(removeCar(car));
  };

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const renderedCars = cars.map((car, i) => {
    return (
      <div key={i} className="panel">
        <p>
          {car.name} - ${car.value}
        </p>
        <button className="button" onClick={() => onClick(car)}>
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
