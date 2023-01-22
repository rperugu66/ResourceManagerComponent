import React from "react";
import axios from "axios";
import { variables } from "../Variables.js";

function Test() {
  const [post, setPost] = React.useState([]);
  const listItems = post.map((element) => {
    return <div>{element.date}</div>;
  });

  React.useEffect(() => {
    axios.get(variables.API_URL + "WeatherForecast").then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);
  return <div>{listItems}</div>;
}

export default Test;
