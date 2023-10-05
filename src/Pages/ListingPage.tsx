import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Constants";

const ListingPage: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async () => {
    const { data } = await axios.get(API_URL + "/fetchpostedWork");
    setTasks(data);
  };

  const getExpertiseList = (expertiseRequired: string) => {
    return expertiseRequired
      .split(",")
      .map((i) => i.trim())
      .join(", ");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="pb-4 listing">
      <h2 className="ukg-color">Published Work</h2>
      <div className="mt-4 ms-4">
        {tasks.map((task, index) => {
          return (
            <div key={"task" + index} className="pb-3">
              <h4 className="ukg-color">{task.description}</h4>
              <div>
                Number of days required: <strong>{task.hourstogive}</strong>
              </div>
              <div>
                People Needed: <strong>{task.peoplesNeeded}</strong>
              </div>
              <div>
                Expertise Required:
                <strong>{getExpertiseList(task.expertiseRequired)}</strong>
              </div>

              <div>
                Expertise Required:
                <strong>{getExpertiseList(task.expertiseRequired)}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListingPage;
