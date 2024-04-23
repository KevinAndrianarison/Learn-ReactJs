import Liste from "./Liste";
import { useState, useEffect, useContext } from "react";
import Form from "./Form";
import axios from "axios";
import { Context } from "../App";

export default function Home() {
  const [url, useUrl] = useContext(Context);
  const [name, setName] = useState("Steeve");
  const [vif, setvif] = useState(false);
  const [TestListAPI, setTestListAPI] = useState("");
  const [newtechno, setNewtechno] = useState("");
  const [techos, setTechno] = useState([
    { id: 1, nom: "VueJs" },
    { id: 2, nom: "ReactJs" },
    { id: 3, nom: "Angular" },
  ]);

  useEffect(() => {
    axios
      .get(`${url}/api/todo`)
      .then((response) => {
        console.log("Succes du GET All :", response.data);
        setTestListAPI(response.data);
      })
      .catch((error) => {
        console.error("Erreur du GET All :", error);
      });
  }, []);

  function changeName() {
    setName("Kevin");
    setvif(!vif);
    console.log(TestListAPI);
  }

  function addTechno(e) {
    let newid = new Date().getTime;
    let newtechnoProvisoir = newtechno;
    let listProvisoir = techos;

    listProvisoir.push({
      id: newid,
      nom: newtechnoProvisoir,
    });

    setTechno(listProvisoir);
    setNewtechno("");
  }

  function deleteList(a) {
    let listCopie = techos;

    let listProvisoir = listCopie.filter((e) => {
      return e.id != a;
    });

    setTechno(listProvisoir);
  }

  return (
    <>
      <p> Hello word ! {name}</p>
      <button onClick={changeName}> X </button>
      <ul>
        {techos.map((techno) => {
          return (
            <Liste techno={techno} deleteList={deleteList} key={techno.id} />
          );
        })}
      </ul>
      <Form
        newtechno={newtechno}
        setNewtechno={setNewtechno}
        addTechno={addTechno}
      />
      {vif && <p>This is the v-if !</p>}
    </>
  );
}
