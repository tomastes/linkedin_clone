import { FiberManualRecord, InfoOutlined } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord  />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_headers">
        <h2>LinkedIn News</h2>
        <InfoOutlined />
      </div>
      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}
      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}

      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}

      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}

      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}

      {newsArticle(
        "tomas is coming out strong",
        "hot trending of this week is that it is nothing but a week!"
      )}
    </div>
  );
};

export default Widgets;
