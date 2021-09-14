import {takeEvery, put} from 'redux-saga/effects';

function* handleInc(data){
    console.log(data)
    yield put({type: 'ADD_COUNT'})
}

export default function* get(){
    yield takeEvery("INC", handleInc)
}