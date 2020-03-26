import {
    all, takeEvery, put, call, delay
} from 'redux-saga/effects';
import * as actions from './actions';
import * as overviewApi from './api';
import * as constants from '../constants';
import * as gameActions from '../game/actions';

export function* createAvalonGame(api, action) {
    try {
        if (action.mode === constants.gameModes.Avalon) {
            yield call(api.createAvalonGame, ({
                mode: action.mode,
                name: action.gameName,
                numberOfPlayers: action.numberOfPlayers,
                roles: action.roles
            }));
            yield put(actions.createGameSuccess());
        }
    } catch (error) {
        yield put(actions.stopCreateGame());
        yield put(gameActions.gameError(error, 'Create Game Error'));
    }
}

export function* joinGame(api, action) {
    try {
        if (action.mode === constants.gameModes.Avalon) {
            yield call(api.joinAvalonGame, ({
                gameId: action.gameId
            }));
            yield put(actions.createGameSuccess());
        }
        yield delay(5000);
        yield put(actions.stopJoinGame());
    } catch (error) {
        yield put(gameActions.gameError(error, 'Join Game Error'));
        yield put(actions.stopJoinGame());
    }
}

export default function* overviewSaga() {
    yield all([
        takeEvery(actions.CREATE_AVALON_GAME_REQUEST, createAvalonGame, overviewApi),
        takeEvery(actions.JOIN_GAME_REQUEST, joinGame, overviewApi)
    ]);
}
