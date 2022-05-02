import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "./Date.css";

function Date({ ratesDate }) {
  dayjs.extend(localizedFormat);
  const ratesDateFormatted = dayjs(ratesDate).format("LL");
  return <div className="date">{ratesDateFormatted}</div>;
}

export default Date;
