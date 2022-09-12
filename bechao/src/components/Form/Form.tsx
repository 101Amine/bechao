import React, { useEffect, useState } from "react";
import { Input } from "rsuite";
import { useAppSelector } from "../../Hooks/hooks";
import { postSelector } from "../../store/slices/postSlice";

export const Form = () => {
  const [Data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  const postData = useAppSelector(postSelector);

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const handleSubmit = () => {};

  return (
    <div className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <h6> Creating a memory </h6>

        <input
          value={Data.creator}
          id="creator"
          onChange={(e) => {
            setData({ ...Data, creator: e.target.value });
          }}
        />

        <input
          value={Data.creator}
          id="creator"
          onChange={(e) => {
            setData({ ...Data, creator: e.target.value });
          }}
        />

        <input
          value={Data.creator}
          id="creator"
          onChange={(e) => {
            setData({ ...Data, creator: e.target.value });
          }}
        />

        <input
          value={Data.creator}
          id="creator"
          onChange={(e) => {
            setData({ ...Data, creator: e.target.value });
          }}
        />
      </form>
    </div>
  );
};
