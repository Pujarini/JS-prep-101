import React, { useEffect, useState } from "react";
import "./Toast.css";

const Toast = ({
  toastList,
  position,
  deleteToast,
  autoDelete,
  autoDeleteDelay = 1000,
}) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length > 0 && list.length > 0) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteDelay);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [list]);

  return (
    <div className={`notification-container ${position}`}>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className={`notification toast ${position ? position : "top-left"}`}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <button onClick={() => deleteToast(item.id)}>X</button>
            <div className="notification-img">
              <img src={item.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{item.title}</p>
              <p className="notification-msg">{item.msg}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
