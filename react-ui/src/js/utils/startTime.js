export const startTime = () => {
  const today = new Date();
  let h = "0" + ((today.getHours() + 24) % 12) || 12;
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;

  let t = setTimeout(startTime, 500);
};
export const ampm = () => {
  const today = new Date();
  let h = today.getHours();
  let ampm = h >= 12 ? "pm" : "am";
  document.getElementById("clock").innerHTML += " " + ampm;
};
export function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
