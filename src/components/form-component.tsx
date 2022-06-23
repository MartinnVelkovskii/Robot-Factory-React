import React, { FormEvent, useState } from "react";
import "../App.css";
import Robot from "../Classes/Robot";

function Form({ setRobots }: any) {
  const [canTalkCheckbox, setCanTalkCheckbox] = useState<boolean>(false);

  const [isNameValid, setNameValid] = useState<boolean>(true);

  const [isTypeValid, setTypeValid] = useState<boolean>(true);

  const errorMessage: string = "This field is required";

  function onCanTalkCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setCanTalkCheckbox(event.target.checked);
  }

  function createRobot(event: FormEvent): void {
    const target: any = event.target;

    const nameInvalid: boolean = !target.name.value || target.name.value == "";
    setNameValid(!nameInvalid);    

    const typeInvalid: boolean = !target.type.value || target.type.value == "";
    setTypeValid(!typeInvalid);


    function isCreateFormInvalid(): boolean {
      return nameInvalid || typeInvalid ;
    }


    if (!isCreateFormInvalid()) {
      const robot = new Robot(
        target.name.value,
        target.type.value,
        target.color.value,
        target.textarea.value,
        target.option1.checked,
        target.option2.checked,
        target.option3.checked,
        Date.now()
      );
      setRobots(robot);
      console.log(robot);
    }

    event.preventDefault();
  }

  return (
    <section id="slide-2" className="create-robot-section">
      <div className="create-robot-title">Create robot</div>
      <hr />
      <form
        id="create-form"
        className="form-container"
        onSubmit={(e: FormEvent<HTMLFormElement>) => createRobot(e)}
      >
        <div className="input-fileds">
          <div>
            <label className="create-robot-label" htmlFor="robot-name-input">
              Name
            </label>
            <input
              className="input-style"
              name="name"
              placeholder="Robot name"
            />
            {!isNameValid && (
              <label
                htmlFor="robot-name-input"
                id="robot-name-validation"
                className="error-message"
              >
                {errorMessage}
              </label>
            )}
          </div>
          <div>
            <label className="create-robot-label" htmlFor="robot-select-type">
              Select type
            </label>
            <select defaultValue={""} className="select-style" name="type">
              <option value="" disabled hidden></option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {!isTypeValid && (
              <label
                htmlFor="robot-type-input"
                id="robot-type-validation"
                className="error-message"
              >
                {errorMessage}
              </label>
            )}
          </div>
          <div>
            <label className="create-robot-label" htmlFor="robot-select-color">
              Select color
            </label>
            <input
              className="color-style"
              type="color"
              name="color"
              defaultValue="#e96126"
            />
            <label
              htmlFor="robot-color-input"
              id="robot-color-validation"
              className="error-message"
            ></label>
          </div>
          <div>
            <label className="create-robot-label">Select options</label>
            <div>
              <input type="checkbox" name="option1" />
              <label htmlFor="option1">can jump</label>
            </div>
            <div>
              <input
                checked={canTalkCheckbox}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onCanTalkCheckboxChange(e)
                }
                type="checkbox"
                name="option2"
              />
              <label htmlFor="option2">can talk</label>
            </div>
            <div>
              <input type="checkbox" name="option3" />
              <label htmlFor="option3">can blink</label>
            </div>
          </div>
          <div>
            <label className="create-robot-label" htmlFor="textarea">
              Phrase
            </label>
            <textarea
              className="text-area-style"
              name="textarea"
              placeholder="text area"
              disabled={!canTalkCheckbox}
            ></textarea>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="first-button">
            Create
          </button>
        </div>
      </form>
      <hr />
    </section>
  );
}

export default Form;
