import { useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { Button, ListGroup } from "react-bootstrap";

function PlayList({ videos, currentVid, setCurrenVid }) {
  const { darkMode, setDarkMode } = useThemeContext();
  let varBtn = darkMode ? "light" : "dark";

  return (
    <div className="videolist">
      <ListGroup as="ul" className="playlist">
        {videos.map((entry, id) => {
          let btnDisable = currentVid === id ? "disabled" : "";
          return (
            <ListGroup.Item as="li" key={id}>
              <Button
                variant={varBtn}
                onClick={() => setCurrenVid(id)}
                disabled={btnDisable}
              >
                {entry.title}
              </Button>
              <br />
              <small>{entry.subtitle}</small>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default PlayList;
