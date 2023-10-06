import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../Constants";
import Loader from "./Loader";

export default function Predict() {
  const [predicts, setPredicts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getPredictionData = async () => {
    const { data } = await axios.get(API_URL + "/predictWorkForce");
    setPredicts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPredictionData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="" style={{ padding: "20px 40px" }}>
          <h4>
            Predicting workforce requirements is essential for efficient
            staffing. Analyzing historical data, industry trends, and
            seasonality can help forecast staffing needs accurately. Utilizing
            advanced analytics and AI can enhance predictions, ensuring that the
            right number of employees is available when needed, reducing costs
            and improving productivity.
          </h4>

          <table className="table table-bordered" style={{ marginTop: 50 }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Skill</th>
                <th scope="col">Expertise Count</th>
                <th scope="col">Prediction</th>
                <th scope="col">Prediction Summary</th>
              </tr>
            </thead>
            <tbody>
              {predicts.map((predict: any, index: number) => {
                return (
                  <tr key={"predict" + index}>
                    <td>{index + 1}</td>
                    <td>{predict.skill}</td>
                    <td>{predict.expertizecountpresent}</td>
                    <td>{predict.prediction}</td>
                    <td>{predict.predictionsummary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
