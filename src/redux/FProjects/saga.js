import { FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL } from './types';
import { getProjects } from './actions';
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

export function fetchProjectsCall() {
	
	return axios.get('https://api.github.com/users/Facebook/repos')
					.then(
							res => {
							 return {response: res.data}
							}
						)
					.catch(
							error => {
								return {error: error.response.data.message}
							}
						)
}

export function* fetchProjects() {
	const { response, error } = yield call(fetchProjectsCall);
	if (response) {
		yield put({type: FETCH_PROJECTS_SUCCESS, payload: response});
	} else {
		yield put({ type: FETCH_PROJECTS_FAIL, payload: error});
	}
}

export default function* rootSaga() {
	
	yield takeLatest(FETCH_PROJECTS, fetchProjects);
}