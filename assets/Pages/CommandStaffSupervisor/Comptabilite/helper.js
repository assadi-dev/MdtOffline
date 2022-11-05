export const getTotalHourByWeek = (agent, week) => {
  if (agent.priseDeServices !== null || agent.priseDeServices.length > 0) {
    let servicesOfWeek = agent.priseDeServices.filter(
      (service) => service.week == week
    );

    let servicesAllDuration = servicesOfWeek.map((service) => service.duration);
    return servicesAllDuration.length > 0
      ? servicesAllDuration.reduce((a, b) => parseInt(b) + parseInt(a))
      : 0;
  }
  return 0;
};

export const getIsServiceActive = (agent, week) => {
  if (agent.priseDeServices !== null || agent.priseDeServices.length > 0) {
    let servicesOfWeek = agent.priseDeServices.filter(
      (service) => service.week == week
    );

    let hasServiceActive = servicesOfWeek.find(
      (service) => service.isActive === true
    );
    console.log(hasServiceActive);
    if (hasServiceActive != undefined) return true;
  }
  return false;
};
