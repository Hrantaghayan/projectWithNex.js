import ItemsStyles from "../../styles/items.module.scss";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Items({
  items,
  openModal,
  setReason,
  setEditableItem,
  deleteItem,
  upDatedone,
  filterState,
}) {
  const filterItems = (arr) => {
    if (filterState === "All") {
      return arr?.map((el) => (
        <div className={ItemsStyles.itemCont} key={el.id}>
          <div className={ItemsStyles.leftPart}>
            <input
              type="checkbox"
              className={ItemsStyles.inp}
              checked={el.isDone}
              onChange={() => {
                upDatedone({
                  id: el.id,
                  task: el.task,
                  isDone: !el.isDone,
                });
              }}
            />
            <p className={ItemsStyles.itemText}>{el.task}</p>
          </div>
          <div className={ItemsStyles.rightPart}>
            <FaRegEdit
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              color="#753a88"
              onClick={() => {
                openModal();
                setReason("Update");
                setEditableItem(el);
              }}
            />
            <RiDeleteBinLine
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              onClick={() => {
                deleteItem(el);
              }}
              color="red"
            />
          </div>
        </div>
      ));
    } else if (filterState === "Done") {
      const doneArr = arr.filter((el) => el.isDone);
      return doneArr?.map((el) => (
        <div className={ItemsStyles.itemCont} key={el.id}>
          <div className={ItemsStyles.leftPart}>
            <input
              type="checkbox"
              className={ItemsStyles.inp}
              checked={el.isDone}
              onChange={() => {
                upDatedone({
                  id: el.id,
                  task: el.task,
                  isDone: !el.isDone,
                });
              }}
            />
            <p className={ItemsStyles.itemText}>{el.task}</p>
          </div>
          <div className={ItemsStyles.rightPart}>
            <FaRegEdit
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              color="#753a88"
              onClick={() => {
                openModal();
                setReason("Update");
                setEditableItem(el);
              }}
            />
            <RiDeleteBinLine
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              onClick={() => {
                deleteItem(el);
              }}
              color="red"
            />
          </div>
        </div>
      ));
    } else if (filterState === "Don't done") {
      const isnotDoneArr = arr.filter((el) => !el.isDone);
      return isnotDoneArr?.map((el) => (
        <div className={ItemsStyles.itemCont} key={el.id}>
          <div className={ItemsStyles.leftPart}>
            <input
              type="checkbox"
              className={ItemsStyles.inp}
              checked={el.isDone}
              onChange={() => {
                upDatedone({
                  id: el.id,
                  task: el.task,
                  isDone: !el.isDone,
                });
              }}
            />
            <p className={ItemsStyles.itemText}>{el.task}</p>
          </div>
          <div className={ItemsStyles.rightPart}>
            <FaRegEdit
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              color="#753a88"
              onClick={() => {
                openModal();
                setReason("Update");
                setEditableItem(el);
              }}
            />
            <RiDeleteBinLine
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
              onClick={() => {
                deleteItem(el);
              }}
              color="red"
            />
          </div>
        </div>
      ));
    }
  };
  return (
    <div className={ItemsStyles.container}>
      <div className={ItemsStyles.description}>
        <p className={ItemsStyles.text}>Task</p>
        <p className={ItemsStyles.text}>Action</p>
      </div>
      <div className={ItemsStyles.itemsCont}>
        {filterItems(items)}
      </div>
    </div>
  );
}
