import React from "react";
import Parser from 'html-react-parser';
const Html = (props) => {
  return (
    <>
      <html>
        <head></head>
        <body>
          <div>{Parser(props.content)}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    </>
  )
}

export default Html;
