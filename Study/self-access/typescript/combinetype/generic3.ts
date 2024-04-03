import { SyntheticEvent } from "react";

interface SubmitEvent<T extends HTMLElement> extends SyntheticEvent<T> {
  submitter: T;
}

const handleSubmit = (e: SubmitEvent<HTMLButtonElement>) => {
  e.submitter.disabled = true;
};
