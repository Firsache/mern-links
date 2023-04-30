import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.Context";
import { useHttp } from "../hooks/http.hook";

export const CreatePage = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          { Authorization: `Bearer ${auth.token}` }
        );
        navigate(`/detail/${data.link._id}`);
      } catch (error) {}
    }
  };
  return (
    <div className="row">
      <div
        className="col s8 offset-s2 create-link"
        style={{ paddingTop: "2rem" }}
      >
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
