import { all } from "redux-saga/effects";
import projectSaga from "./FProjects/saga";

export default function* rootSaga(getState) {
  yield all([projectSaga()]);
}
