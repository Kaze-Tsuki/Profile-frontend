import { useState } from "react";
import Template from "../controls/template";
import { DefaultHeader, DefaultFooter } from "../controls/headers";

function reqButton(reqFunc)
{
  return (
    <div>
      <button onClick={reqFunc}>
        Clicked To Fetch
      </button>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState(null);

  let tryReq = async () => {
    try {
      const response = await fetch("http://localhost:5000/api");
      const tmp = await response.json();
      setData(tmp.message);
    } catch (err) {
      console.error("錯誤：", err);
    }
  };

  return (
    <Template 
      head={<DefaultHeader />}
      child={<div>
        <h1>Welcome to React</h1>
        <p>Click the button to fetch data from the backend:</p>
        {reqButton(tryReq)}
        <p>{data ? data : "無資料"}</p>
      </div>}
      foot={<DefaultFooter />}
    />
  );
}