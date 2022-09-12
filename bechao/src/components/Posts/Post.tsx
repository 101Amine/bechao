import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { PostMessage } from "../../shared/types";
import { fetchPosts, postSelector } from "../../store/slices/postSlice";

export const Post = () => {
  const [Data, setData] = useState<PostMessage>();

  const postData = useAppSelector(postSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  console.log("data", Data);

  return <div>data</div>;
};
