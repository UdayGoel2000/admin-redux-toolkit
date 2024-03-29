import style from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../features/user/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      {data.map((user) => (
        <li key={user.id}>
          {user.name}
          <button className=" btn-delete" onClick={() => deleteUser(user.id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = style.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;

export default DisplayUser;
