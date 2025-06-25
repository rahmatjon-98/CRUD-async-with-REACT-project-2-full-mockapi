import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Button, Input, Modal } from "antd";

const Crud = () => {
  // let api = "https://to-dos-api.softclub.tj/api/to-dos";
  let api = "https://683b1f4b43bb370a8674ccd1.mockapi.io/product";

  let [users, setUsers] = useState([]);

  async function get() {
    try {
      let { data } = await axios.get(api);
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function delUser(id) {
    try {
      await axios.delete(`${api}/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  let [addModal, setaddModal] = useState(false);
  let [addImg, setaddImg] = useState("");
  let [addName, setaddName] = useState("");
  let [addWork, setaddWork] = useState("");
  let [addRewiew, setaddRewiew] = useState("");
  let [addStatus, setaddStatus] = useState(true);

  async function addUser() {
    let newUser = {
      img: addImg,
      name: addName,
      work: addWork,
      rewiew: addRewiew,
      status: addStatus,
    };
    try {
      await axios.post(api, newUser);
      get();
      setaddModal(false);
      setaddName("");
      setaddImg("");
      setaddWork("");
      setaddRewiew("");
      setaddStatus(true);
    } catch (error) {
      console.error(error);
    }
  }

  let [editModal, seteditModal] = useState(false);
  let [editImg, seteditImg] = useState("");
  let [editName, seteditName] = useState("");
  let [editWork, seteditWork] = useState("");
  let [editRewiew, seteditRewiew] = useState("");
  let [editStatus, seteditStatus] = useState(true);
  let [idx, setidx] = useState(null);

  function openeditModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditImg(e.img);
    seteditWork(e.work);
    seteditRewiew(e.rewiew);
    seteditStatus(e.status);
    setidx(e.id);
  }

  async function editUser() {
    let newUser = {
      img: editImg,
      name: editName,
      work: editWork,
      rewiew: editRewiew,
      status: editStatus,
      // id:idx
    };
    try {
      await axios.put(`${api}/${idx}`, newUser);
      get();
      seteditModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  let [infoModal, setinfoModal] = useState(false);
  let [infoImg, setinfoImg] = useState("");
  let [infoName, setinfoName] = useState("");
  let [infoWork, setinfoWork] = useState("");
  let [infoRewiew, setinfoRewiew] = useState("");
  let [infoStatus, setinfoStatus] = useState(true);

  function openinfoModal(e) {
    setinfoModal(true);
    setinfoName(e.name);
    setinfoImg(e.img);
    setinfoWork(e.work);
    setinfoRewiew(e.rewiew);
    setinfoStatus(e.status);
    setidx(e.id);
  }

  let [search, setsearch] = useState("");
  let [status, setstatus] = useState("");
  return (
    <div className=" my-20">
      <h1 className="text-3xl">Отзывы о Lujo BlackJet</h1>

      <div className="flex justify-between items-center gap-5 lg:gap-10 my-10">
        <select value={status} onChange={(e) => setstatus(e.target.value)}>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inctive</option>
        </select>
        <Input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search..."
        />
        <Button
          onClick={() => setaddModal(true)}
          color="default"
          variant="solid"
        >
          ADD +
        </Button>
      </div>

      <Modal
        title="Add User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={addModal}
        onOk={addUser}
        onCancel={() => setaddModal(false)}
      >
        <div className="flex flex-col gap-5">
          <Input
            value={addImg}
            onChange={(e) => setaddImg(e.target.value)}
            placeholder="Img Url"
          />
          <Input
            value={addName}
            onChange={(e) => setaddName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={addWork}
            onChange={(e) => setaddWork(e.target.value)}
            placeholder="Work"
          />
          <Input
            value={addRewiew}
            onChange={(e) => setaddRewiew(e.target.value)}
            placeholder="Rewiew"
          />

          <select
            value={addStatus ? "active" : "inactive"}
            onChange={(e) => setaddStatus(e.target.value == "active")}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal>

      <Modal
        title="Edit User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={editModal}
        onOk={editUser}
        onCancel={() => seteditModal(false)}
      >
        <div className="flex flex-col gap-5">
          <Input
            value={editImg}
            onChange={(e) => seteditImg(e.target.value)}
            placeholder="Img Url"
          />
          <Input
            value={editName}
            onChange={(e) => seteditName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={editWork}
            onChange={(e) => seteditWork(e.target.value)}
            placeholder="Work"
          />
          <Input
            value={editRewiew}
            onChange={(e) => seteditRewiew(e.target.value)}
            placeholder="Rewiew"
          />

          <select
            value={editStatus ? "active" : "inactive"}
            onChange={(e) => seteditStatus(e.target.value == "active")}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal>

      <Modal
        title="Info User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={infoModal}
        onOk={() => setinfoModal(false)}
        onCancel={() => setinfoModal(false)}
        centered
        width={1000}
      >
        <div className="flex items-start gap-12">
          <img className="w-1/4" src={infoImg} alt="" />
          <div>

            <ul className="list-disc">
              <li>
                <b>name: </b>
                {infoName}
              </li>
              <li>
                <b>work: </b>
                {infoWork}
              </li>
              <li>
                <b>rewiew: </b>
                {infoRewiew}
              </li>
              <li>
                <b>status: </b>
                {infoStatus ? "Active" : "Inactive"}
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      <div className="flex justify-between gap-5 whitespace-nowrap overflow-x-scroll overHidden">
        {users
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .filter((el) => el.status.toString().includes(status))
          .map((e) => (
            <div
              key={e.id}
              style={{ boxShadow: "0 0 10px #0000000f" }}
              className="flex flex-col justify-between w-[250px] basis-auto grow-0 shrink-0 rounded p-5 whitespace-normal m-1 relative"
            >
              <div>
                <span
                  className={`px-2 py- rounded absolute right-3  ${
                    e.status
                      ? "bg-green-50 text-green-500"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {e.status ? "Active" : "Inactive"}
                </span>
                <img
                  className="w-12 h-12 object-cover rounded-full "
                  src={e.img}
                  alt=""
                />
                <h1 className="font-bold text-[#3E403B] pt-2.5">{e.name}</h1>
                <p className="text-[#8C8F87] text-[8px] pb-2.5 ">{e.work}</p>

                <p className="text-[#3E403B] text-[10px] py-2.5 border-t-2 border-[#E7E7E7] ">
                  {e.rewiew}
                </p>
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={() => openinfoModal(e)}
                  color="orange"
                  variant="filled"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </Button>

                <Button
                  onClick={() => openeditModal(e)}
                  color="blue"
                  variant="filled"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Button>

                <Button
                  onClick={() => delUser(e.id)}
                  color="red"
                  variant="filled"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Crud;
