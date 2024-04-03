import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../css/FillProject.css";

export default function FillProject({
  addProject,
  projectArray,
  CreateProject,
}) {
  const [datePicked, setDatePicked] = useState(new Date());
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  const descriptionRef = useRef("");
  const titleRef = useRef(null);

  function onSubmitHandler(e) {
    e.preventDefault();

    const isTitleMissing = !titleRef.current.value;
    const isDescriptionMissing = !descriptionRef.current.value;

    setIsTitleEmpty(isTitleMissing);
    setIsDescriptionEmpty(isDescriptionMissing);

    if (!isTitleMissing && !isDescriptionMissing) {
      const project = {
        id: Date.now(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        date: datePicked,
        tasks: [],
      };
      addProject(project);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      setDatePicked(new Date());
      // Reset validation states
      setIsTitleEmpty(false);
      setIsDescriptionEmpty(false);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="ProjectFill">
      <label>
        Title {isTitleEmpty ? <span className="required-mark">*</span> : ""}
      </label>
      <input
        type="text"
        placeholder="React Js"
        ref={titleRef}
        className={isTitleEmpty ? "error" : ""}
      />
      <label>
        Description{" "}
        {isDescriptionEmpty ? <span className="required-mark">*</span> : ""}
      </label>
      <textarea
        ref={descriptionRef}
        placeholder="It's easy to learn React"
        rows={4}
        cols={50}
        style={{ resize: "none" }}
      />
      <label>Due Date</label>
      <DatePicker
        selected={datePicked}
        onChange={(date) => setDatePicked(date)}
        id="datepicker-date"
      />
      <div className="cancel-save-buttons">
        <button type="submit" className="save-button">
          Save
        </button>
        <button
          type="reset"
          className="cancel-button"
          onClick={() => CreateProject(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
