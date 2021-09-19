import { takeEvery, put, takeLatest, all, call } from "redux-saga/effects";

function* handleInc(data) {
  console.log(data);
  yield put({ type: "ADD_COUNT" });
}

export function* get() {
  yield takeEvery("INC", handleInc);
}

function* handleAddUser({ payload }) {
  yield new Promise((resolve) => setTimeout(resolve, 2000));
  yield put({ type: "ADD_USERS", payload });
}

function* addUser() {
  yield takeEvery("ADD_USER_ACTION", handleAddUser);
}

function* editUser() {
  yield takeEvery("INC", handleInc);
}

function* deleteUser() {
  yield takeEvery("INC", handleInc);
}

export default function* watcherSagas() {
  yield all([addUser(), editUser(), deleteUser()]);
}
