import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "./Date.css";

function Date({ date, format }) {
  dayjs.extend(localizedFormat);
  const ratesDateFormatted = dayjs(date).format(format);
  return <div className="date">{ratesDateFormatted}</div>;
}

export default Date;
