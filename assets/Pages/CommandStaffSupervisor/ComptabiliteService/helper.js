import { updatePaidUser } from "../../../features/Agents/Agent.slice";

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
    if (hasServiceActive) return true;
  }
  return false;
};

export const getIsServicePaid = (agent, week) => {
  if (agent.priseDeServices !== null || agent.priseDeServices.length > 0) {
    let servicesOfWeek = agent.priseDeServices.filter(
      (service) => service.week == week
    );

    let hasServiceActive = servicesOfWeek.find(
      (service) => service.isPaid === true
    );
    if (hasServiceActive) return true;
  }
  return false;
};

export const getServicebyWeek = (agent, week) => {
  if (agent.priseDeServices !== null || agent.priseDeServices.length > 0) {
    return agent.priseDeServices.filter((service) => service.week == week);
  }
  return [];
};
