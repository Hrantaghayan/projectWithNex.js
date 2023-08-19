import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
export default function ToDoModal({
  close,
  text,
  addItem,
  isOpened,
  toDos,
  reason,
  edit,
  editableItem,
  btnText
}) {
  const [val, setVal] = useState("");
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (reason === "Add") {
          addItem({
            isDone: false,
            task: val,
            id: `${toDos.length + 1}`,
          });
          setVal("");
        } else {
          edit({
            id: editableItem.id,
            task: val,
            isDone: editableItem?.isDone,
          });
          setVal("");
        }
      }
    };
    if (isOpened) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpened, val]);
  useEffect(() => {
    if (reason === "Update") {
      setVal(editableItem?.task);
    } else {
      setVal("");
    }
  }, [reason,isOpened]);
  return isOpened ? (
    <div className="ToDoModal-cont" onClick={close}>
      <div
        className="ToDoModal-cont__Content"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="ToDoModal-cont__Content__text">{text}</p>
        <div className="ToDoModal-cont__Content__inpWrapper">
          <input
            type="text"
            className="ToDoModal-cont__Content__inpWrapper__inp"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            className="ToDoModal-cont__Content__inpWrapper__btn"
            onClick={() => {
              if (reason === "Add") {
                addItem({
                  isDone: false,
                  task: val,
                  id: `${toDos.length + 1}`,
                });
                setVal("");
              } else {
                edit({
                  isDone: editableItem.isDone,
                  task: val,
                  id: editableItem.id,
                });
                setVal("");
              }
            }}
          >
            <p className="ToDoModal-cont__Content__inpWrapper__btn__text">
              {btnText}
            </p>
          </button>
        </div>
        <IoCloseOutline
          size={24}
          color="white"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={close}
        />
      </div>
    </div>
  ) : null;
}
