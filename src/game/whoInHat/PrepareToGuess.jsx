import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import defaultStyles from './PrepareToGuess.module.scss';
import * as helpers from '../helpers';
import TeamsAndScore from './TeamsAndScore';
import Fade from '../../common/Fade/Fade';
import StyledButton from '../../common/StyledButton/StyledButton';
import { remainingCards } from './Guessing';
import JoinTeamModal from './JoinTeamModal';

const teamHasOnlyMe = (game, myId) => {
    if (!game || !game.teams) {
        return false;
    }
    const myTeam = game.teams.find(team => team.members && team.members.includes(myId));
    if (!myTeam) {
        return false;
    }
    return myTeam.members && myTeam.members.length === 1;
};

const PrepareToGuess = props => {
    const [viewingTeams, setViewingTeams] = useState(false);
    const toggleViewingTeams = useCallback(() => {
        setViewingTeams(!viewingTeams);
    }, [viewingTeams, setViewingTeams]);

    const [joiningNewTeam, setJoiningNewTeam] = useState(false);
    const [teamToJoin, setTeamToJoin] = useState('');

    const joinTeam = useCallback(() => {
        props.joinWhoInHatTeamMidgameRequest(props.currentGameId, teamToJoin);
        setJoiningNewTeam(false);
        setTeamToJoin('');
        // eslint-disable-next-line
    }, [teamToJoin, props.joinWhoInHatTeamMidgameRequest, props.currentGameId])


    return (
        <div className={props.styles.prepareToGuessWrapper}>
            <div className={props.styles.prepareToGuessHeader}>
                {`Next team: ${props.currentGame.activeTeam}`}
            </div>
            <div className={props.styles.remainingWords}>
                {`Remaining cards: ${remainingCards(props.currentGame)}`}
            </div>
            {props.auth.uid !== props.currentGame.activeExplainer
        && (
            <div className={props.styles.waitingToStart}>
                {`Waiting for ${helpers.mapUserIdToName(props.users, props.currentGame.activeExplainer)} to start`}
            </div>
        )}

            <div className={props.styles.buttonsWrapper}>
                {props.auth.uid === props.currentGame.activeExplainer && (
                    <div className={props.styles.startRoundButton}>
                        <StyledButton
                            onClick={() => props.startWhoInHatRoundRequest(props.currentGameId)}
                            text="Start round"
                        />
                    </div>
                )}

                {teamHasOnlyMe(props.currentGame, props.auth.uid) && (
                    <>
                        <div className={props.styles.joinTeamNewTeamButton}>
                            <StyledButton
                                onClick={() => setJoiningNewTeam(true)}
                                text="Join New Team"
                            />
                        </div>
                        <JoinTeamModal
                            closeModal={() => setJoiningNewTeam(false)}
                            isOpen={joiningNewTeam}
                            onChange={setTeamToJoin}
                            value={teamToJoin}
                            teams={props.currentGame.teams.filter(team => !team.members
                                .includes(props.auth.uid))}
                            onConfirm={joinTeam}
                        />
                    </>
                )}
            </div>

            <div className={props.styles.viewTeamsWrapper}>
                <Fade
                    checked={viewingTeams}
                    onChange={toggleViewingTeams}
                    includeCheckbox
                    label="View teams"
                >
                    <TeamsAndScore
                        auth={props.auth}
                        currentGame={props.currentGame}
                        showScore
                        users={props.users}
                    />
                </Fade>
            </div>
        </div>
    );
};

PrepareToGuess.defaultProps = {
    auth: {
        uid: ''
    },
    currentGame: {
        activeExplainer: '',
        activeTeam: '',
        finishTime: '',
        words: [],
        host: '',
        isCustomNames: false,
        teams: []
    },
    currentGameId: '',
    joinWhoInHatTeamMidgameRequest: noop,
    startWhoInHatRoundRequest: noop,
    styles: defaultStyles,
    users: {}
};

PrepareToGuess.propTypes = {
    auth: PropTypes.shape({
        uid: PropTypes.string
    }),
    currentGame: PropTypes.shape({
        activeExplainer: PropTypes.string,
        activeTeam: PropTypes.string,
        finishTime: PropTypes.string,
        words: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.string,
        isCustomNames: PropTypes.bool,
        teams: PropTypes.arrayOf(PropTypes.shape({
            members: PropTypes.arrayOf(PropTypes.string),
            name: PropTypes.string,
            score: PropTypes.number
        }))
    }),
    currentGameId: PropTypes.string,
    joinWhoInHatTeamMidgameRequest: PropTypes.func,
    startWhoInHatRoundRequest: PropTypes.func,
    styles: PropTypes.objectOf(PropTypes.string),
    users: PropTypes.shape({})
};

export default PrepareToGuess;