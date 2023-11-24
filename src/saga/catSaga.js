import {call, put, takeEvery} from 'redux-saga/effects';
import { successAPIFetch } from '../features/catAPISlice';

//cat API: https://api.thecatapi.com/v1/breeds

function* workgetAPIFetch() {
    const fetchData = yield call(()=>fetch("https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB9AE380Fpv7BfJt1HDb5cuR63GS9C4Uzg&maxResults=40"));
    const jsonData = yield fetchData.json();
    // const resData = jsonData.slice(0,10);
    yield put(successAPIFetch(jsonData.items));
}

function* catSaga() {
    yield takeEvery('cats/getAPIFetch', workgetAPIFetch);
}

export default catSaga;