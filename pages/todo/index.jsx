import { useEffect, useState } from "react";
import todoStyles from "../../styles/todo.module.scss";
import { useSession, getSession, signIn } from "next-auth/react";
import AuthModal from "@/Modals/authModal/AuthModal";
import toDoImage from "../../public/todo.png";
import { useRouter } from "next/router";
import { ToDoModal } from "@/Modals";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "@/compoenents";
import {
  addTodo,
  deleteToDo,
  editToDo,
  updateAction,
  getAllTodos,
} from "@/api";
import {
  addItem,
  edit,
  deletetoDoItem,
  updateisDoneField,
  setItems,
} from "@/redux/reducers/toDoReducer";

export default function Todo({ toDos }) {
  const [isToDoModalOPened, setIsToDoModalOPened] = useState(false);
  const [isOPened, setIsOPened] = useState(false);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const [editableItem, setEditableItem] = useState(null);
  const items = useSelector((state) => state.toDos.items);
  const [filterState, setFilterState] = useState("All");
  const [reason, setReason] = useState("");
  useEffect(() => {
    dispatch(setItems(toDos));
  }, []);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        setIsOPened(false);
      } else {
        setIsOPened(true);
      }
    };
    securePage();
  }, []);

  const closeModal = () => {
    setIsOPened(false);
    router.push("/");
  };
  const SignInGitHub = () => {
    signIn("github");
    setIsOPened(false);
  };
  const openTodoModal = () => {
    setIsToDoModalOPened(true);
  };
  const closeToDoModal = () => {
    setReason("");
    setIsToDoModalOPened(false);
  };
  const addItemtoList = async (item) => {
    const itemInserver = await addTodo(item);
    dispatch(addItem(itemInserver));
    setIsToDoModalOPened(false);
  };
  const upDateTask = async (item) => {
    const editableTodo = await editToDo(item);
    dispatch(edit(editableTodo));
    setIsToDoModalOPened(false);
  };
  const deleteItem = async (el) => {
    const res = await deleteToDo(el.id);
    dispatch(deletetoDoItem(el.id));
  };
  const upDatedone = async (el) => {
    const res = await updateAction(el);
    dispatch(updateisDoneField(res));
  };
  return status === "loading" && status === "authenticated" ? (
    <div className={todoStyles.toDO}>
      <div className={todoStyles.loader}></div>
    </div>
  ) : isOPened ? (
    <AuthModal
      isOpened={isOPened}
      rightBtnText="Signin"
      leftBtnText="cancel"
      text={"if youw ant see to do click signin"}
      image={toDoImage}
      close={closeModal}
      see={SignInGitHub}
    />
  ) : (
    <div className={todoStyles.toDO}>
      <h1
        style={{
          textAlign: "center",
          color: "#753a88",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "20px",
        }}
      >
        TODO LIST APP
      </h1>
      <button
        className={todoStyles.toDObtn}
        onClick={() => {
          openTodoModal();
          setReason("Add");
        }}
      >
        <p className={todoStyles.add}>ADD TASK</p>
      </button>
      <ToDoModal
        text={reason === "Update" ? "Update task" : "Add New Task"}
        isOpened={isToDoModalOPened}
        close={closeToDoModal}
        addItem={addItemtoList}
        toDos={items}
        reason={reason}
        edit={upDateTask}
        editableItem={editableItem}
        btnText={reason === "Update" ? "Edit" : "Add"}
      />
      <Items
        items={items}
        openModal={openTodoModal}
        setReason={setReason}
        setEditableItem={setEditableItem}
        deleteItem={deleteItem}
        upDatedone={upDatedone}
        filterState={filterState}
      />
      <div className={`${todoStyles.filterCont}`}>
        <p
          className={filterState === "All" ? todoStyles.active : null}
          onClick={() => {
            setFilterState("All");
          }}
        >
          All
        </p>
        <p
          className={filterState === "Done" ? todoStyles.active : null}
          onClick={() => {
            setFilterState("Done");
          }}
        >
          Done
        </p>
        <p
          className={filterState === "Don't done" ? todoStyles.active : null}
          onClick={() => {
            setFilterState("Don't done");
          }}
        >
          don't done
        </p>
      </div>
    </div>
  );
}

// this function is for securing page in server side
// export async function getServerSideProps (context){
//     const session = await getSession(context)
//     console.log('session',session)
//     if(!session){
//       return {
//         redirect:{
//           destination:"/api/auth/signin?callbackUrl=http://localhost:3000/todo",
//           permanent:false
//         }
//       }
//     }
//     return {
//       props:{
//         text:session?'asd':"dsa"
//       }
//     }
// }
export async function getServerSideProps() {
  const toDos = await getAllTodos();
  return {
    props: {
      toDos,
    },
  };
}
