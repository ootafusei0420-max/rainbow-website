export const getTelHref = (phone) => `tel:${String(phone).replace(/[^\d+]/g, '')}`;

export const formatPhoneNumber = (phone) => {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('0120')) {
    return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
  }

  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  return String(phone);
};

export const isMobileDevice = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
};

export const isWithinCallHours = (startHour, endHour, now = new Date()) => {
  const currentHour = now.getHours();
  return currentHour >= startHour && currentHour < endHour;
};
