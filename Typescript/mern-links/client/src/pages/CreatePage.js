import { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const CreatePage = () => {
  const { request } = useHttp();
  const [link, setLink] = useState("");
  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request("/api/link/generate", "POST", {
          from: link,
        });
        console.log(data);
      } catch (error) {}
    }
  };
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            id="link"
            placeholder="Enter the link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyDown={pressHandler}
          />
          <label htmlFor="link">Enter the link</label>
        </div>
      </div>
    </div>
  );
};
