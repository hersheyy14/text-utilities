import { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  let handleChange = (e) => {
    setText(e.target.value);
  };
  let handleUpClick = () => {
    setText(text.toUpperCase());
    props.show("Converted to uppercase!", "success");
  };
  let handleLoClick = () => {
    setText(text.toLowerCase());
    props.show("Converted to lowercase!", "success");
  };
  let handleClear = () => {
    setText(" ");
    props.show("Text cleared!", "success");
  };
  let handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.show("Text copied to clipboard!", "success");
  };
  let handleSpace = () => {
    let newText = text.split(/[ ]+/).filter((element) => {
      return element.length !== 0;
    });
    setText(newText.join(" "));
    props.show(" Extra spaces removed!", "success");
  };
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="box">
        <h1 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {props.heading}
        </h1>
      </label>
      <textarea
        className="form-control"
        id="box"
        rows="10"
        value={text}
        onChange={handleChange}
        style={{
          backgroundColor: props.mode === "dark" ? "rgb(19 64 100)" : "white",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      ></textarea>
      <button
        type="button"
        className="btn btn-primary mx-1 my-2"
        onClick={handleUpClick}
        disabled={text.length === 0}
      >
        To Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-2"
        onClick={handleLoClick}
        disabled={text.length === 0}
      >
        To Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-2"
        onClick={handleClear}
        disabled={text.length === 0}
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-2"
        onClick={handleCopy}
        disabled={text.length === 0}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-2"
        onClick={handleSpace}
        disabled={text.length === 0}
      >
        Remove Extra Spaces
      </button>
      <div
        className={"container my-2"}
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </div>
  );
};

export default Form;
