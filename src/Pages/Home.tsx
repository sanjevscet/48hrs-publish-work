import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import SkillGap from "./SkillGap";
import axios from "axios";
import { API_URL } from "../Constants";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");
  if (!role) {
    navigate("/login");
  }

  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const { data } = await axios.get(API_URL + "/getcurrentskills");
    setApiData(data);
  };

  const labels: string[] = apiData.map((d) => {
    const label = d[0] as string;
    return label;
  });
  const values: number[] = apiData.map((d) => d[1] as number);

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {values.length > 0 ? (
        <div className="mt-4 d-flex">
          <div className="w-50">
            <PieChart labels={labels} values={values}></PieChart>
          </div>
          <div className="d-flex flex-end">
            <SkillGap />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
