module.exports.region = 'europe-west2';

// A list of all existing permissions - keep in sync with UI
// src/constants.js
const PERMISSIONS = {
    CREATE_PLAYER: 'CREATE_PLAYER',
    DELETE_PLAYER: 'DELETE_PLAYER',
    CREATE_TEAM: 'CREATE_TEAM',
    DELETE_TEAM: 'DELETE_TEAM',
    SUBMIT_RESULT: 'SUBMIT_RESULT',
    TRIGGER_WEEK: 'TRIGGER_WEEK',
    EDIT_PLAYER: 'EDIT_PLAYER',
    MANAGE_USERS: 'MANAGE_USERS',
    APPROVE_HIGHLIGHTS: 'APPROVE_HIGHLIGHTS',
    ROLL_OVER_YEAR: 'ROLL_OVER_YEAR',
    MANAGE_SUBS: 'MANAGE_SUBS',
    TOGGLE_PAGES: 'TOGGLE_PAGES'
};

module.exports.PERMISSIONS = PERMISSIONS;

// A list of all existing roles - keep in sync with UI
module.exports.ROLES = {
    ADMIN: 'ADMIN',
    MAINTAINER: 'MAINTAINER',
    HIGHLIGHT_APPROVER: 'HIGHLIGHT_APPROVER',
    TREASURER: 'TREASURER'
};

// This dictates what each role is able to do
module.exports.ROLE_PERMISSIONS = {
    ADMIN: [
        PERMISSIONS.MANAGE_USERS, // Admin only
        PERMISSIONS.ROLL_OVER_YEAR, // Admin only
        PERMISSIONS.TOGGLE_PAGES, // Admin only
        PERMISSIONS.CREATE_PLAYER,
        PERMISSIONS.DELETE_PLAYER,
        PERMISSIONS.CREATE_TEAM,
        PERMISSIONS.DELETE_TEAM,
        PERMISSIONS.SUBMIT_RESULT,
        PERMISSIONS.TRIGGER_WEEK,
        PERMISSIONS.EDIT_PLAYER,
        PERMISSIONS.APPROVE_HIGHLIGHTS,
        PERMISSIONS.MANAGE_SUBS],
    MAINTAINER: [
        PERMISSIONS.CREATE_PLAYER,
        PERMISSIONS.DELETE_PLAYER,
        PERMISSIONS.CREATE_TEAM,
        PERMISSIONS.DELETE_TEAM,
        PERMISSIONS.SUBMIT_RESULT,
        PERMISSIONS.TRIGGER_WEEK,
        PERMISSIONS.EDIT_PLAYER,
        PERMISSIONS.APPROVE_HIGHLIGHTS],
    HIGHLIGHT_APPROVER: [
        PERMISSIONS.APPROVE_HIGHLIGHTS
    ],
    TREASURER: [
        PERMISSIONS.MANAGE_SUBS
    ]
};

module.exports.ROLES_LOOKUP = {
    5: {
        bad: 2,
        good: 3
    },
    6: {
        bad: 2,
        good: 4
    },
    7: {
        bad: 3,
        good: 4
    },
    8: {
        bad: 3,
        good: 5
    },
    9: {
        bad: 4,
        good: 5
    },
    10: {
        bad: 4,
        good: 6
    }
};

module.exports.avalonRoles = {
    Merlin: {
        isGood: true,
        name: 'Merlin',
        isSpecial: true
    },
    Percival: {
        isGood: true,
        name: 'Percival',
        isSpecial: true
    },
    Morgana: {
        isGood: false,
        name: 'Morgana',
        isSpecial: true
    },
    Mordred: {
        isGood: false,
        name: 'Mordred',
        isSpecial: true
    },
    Oberon: {
        isGood: false,
        name: 'Oberon',
        isSpecial: true
    },
    RegularGood: {
        isGood: true,
        name: 'RegularGood',
        isSpecial: false
    },
    RegularBad: {
        isGood: false,
        name: 'RegularBad',
        isSpecial: false
    }
};

module.exports.hitlerRoles = {
    Fascist: 'Fascist',
    Hitler: 'Hitler',
    Liberal: 'Liberal'
};

const fivePlayerGame = {
    1: 2,
    2: 3,
    3: 2,
    4: 3,
    5: 3
};

const sixPlayerGame = {
    1: 2,
    2: 3,
    3: 4,
    4: 3,
    5: 4
};

const sevenPlayerGame = {
    1: 2,
    2: 3,
    3: 3,
    4: 4,
    5: 4
};

const eightPlayerGame = {
    1: 3,
    2: 4,
    3: 4,
    4: 5,
    5: 5
};

const ninePlayerGame = {
    1: 3,
    2: 4,
    3: 4,
    4: 5,
    5: 5
};

const tenPlayerGame = {
    1: 3,
    2: 4,
    3: 4,
    4: 5,
    5: 5
};

module.exports.avalonRounds = {
    5: fivePlayerGame,
    6: sixPlayerGame,
    7: sevenPlayerGame,
    8: eightPlayerGame,
    9: ninePlayerGame,
    10: tenPlayerGame
};

module.exports.avalonGameStatuses = {
    Finished: 'Finished',
    GuessingMerlin: 'GuessingMerlin',
    Nominating: 'Nominating',
    Questing: 'Questing',
    Voting: 'Voting'
};

module.exports.hitlerGameStatuses = {
    ChancellorDecidingCards: 'ChancellorDecidingCards',
    Finished: 'Finished',
    Nominating: 'Nominating',
    PresidentDecidingCards: 'PresidentDecidingCards',
    Investigate: 'Investigate',
    Kill: 'Kill',
    Peek: 'Peek',
    Transfer: 'Transfer',
    Voting: 'Voting',
    TemporaryPresident: 'TemporaryPresident'
};


module.exports.whoInHatGameStatuses = {
    MakingTeams: 'MakingTeams',
    PrepareToGuess: 'PrepareToGuess',
    Guessing: 'Guessing',
    RoundSummary: 'RoundSummary'
};

module.exports.historyTypes = {
    Vote: 'Vote',
    Quest: 'Quest',
    TopCardFlipped: 'TopCardFlipped',
    PlayChancellorCard: 'PlayChancellorCard',
    Investigate: 'Investigate',
    TransferPresident: 'TransferPresident',
    Kill: 'Kill',
    Veto: 'Veto',
    Peek: 'Peek'
};

module.exports.gameModes = {
    Avalon: 'Avalon',
    Hitler: 'Hitler'
};

module.exports.initialTeams = [
    {
        name: 'Collywobble Clowns',
        members: [],
        score: 0
    },
    {
        name: 'Electric Boogaloo',
        members: [],
        score: 0
    }
];

module.exports.whoInHatSkipping = {
    Unlimited: 'Unlimited',
    OneSkip: 'One Skip',
    NoSkipping: 'No Skipping'
};

module.exports.gameModes = {
    Avalon: 'Avalon',
    Hitler: 'Hitler',
    WhosInTheHat: 'Who\'s in the Hat?'
};
