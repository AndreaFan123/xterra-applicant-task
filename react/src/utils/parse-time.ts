export function parseTime(time: string) {
  const [hr, min, sec] = time.split(":").map(Number);
  const seconds = hr * 3600 + min * 60 + sec;
  const validTime = seconds !== 0 && seconds !== 86399;

  if (validTime === false) {
    return;
  }
  return seconds;
}

export function formattedParseTime(time: number) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}
