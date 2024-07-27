import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import data from "../data";
const ComponentAccordian = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleAccordianSingle(getCurrentId) {
    {
      console.log(getCurrentId, "clicked");
      setSelectedId(getCurrentId === selectedId ? null : getCurrentId);
    }
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((dataitem) => (
          <div key={dataitem.id}>
            <div class="accordian"
              onClick={() => {
                handleAccordianSingle(dataitem.id);
              }}
            >
              <div className="accordian-inner">
                <h3>{dataitem.question}</h3>

                <span>{selectedId===dataitem.id?<IoIosArrowUp />:<FaAngleDown/>}</span>
              </div>
              {selectedId === dataitem.id ? (
                <div>
                  <p>{dataitem.answer}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComponentAccordian;
