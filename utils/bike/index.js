const formatBike = (bike) => {
  const { _id, name, model, color, location, rating, available } = bike;
  return {
    id: _id,
    name,
    model,
    color,
    location,
    rating: rating.rateAvg,
    available,
  };
};

module.exports = {
  formatBike,
};
