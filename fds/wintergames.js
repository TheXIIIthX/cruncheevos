import { AchievementSet, define as $, RichPresence, orNext, andNext, measuredIf, once, addHits, resetIf } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 39029, title: 'Winter Games' })

function mode(ID) {
    return($(['', 'Mem', '8bit', 0x0295, '=', 'Value', '', ID],))
}

function event(ID) {
    return($(['', 'Mem', '8bit', 0x02a0, '=', 'Value', '', ID],))
}

function istrue() {
    return($(['', 'Value', '', 1, '=', 'Value', '', 1],))
}

function isfalse() {
    return($(['', 'Value', '', 0, '=', 'Value', '', 1],))
}

function loadreset() {
    return($(
        ['AndNext', 'Delta', '8bit', 0xe, '=', 'Value', '', 0],
        ['ResetIf', 'Mem', '8bit', 0xe, '=', 'Value', '', 1],
    ))
}

function eventStart() {
    return($(
        ['', 'Delta', '8bit', 0x000e, '=', 'Value', '' , 1],
        ['', 'Mem', '8bit', 0x000e, '=', 'Value', '', 2],
    ))
}

function eventEnd() {
    return($(
        ['', 'Delta', '8bit', 0x000e, '=', 'Value', '' , 2],
        ['', 'Mem', '8bit', 0x000e, '=', 'Value', '', 0],
    ))
}

set.addAchievement({
    title: 'XV Olympian',
    description: 'Compete in and finish the Olympic Winter Games',
    points: 5,
    type: 'win_condition',
    conditions: {
        core: $(
            measuredIf(mode(0)),
            addHits(
                andNext(
                    event(1), 
                    once(eventEnd()),
            )),
            addHits(
                andNext(
                    event(2), 
                    once(eventEnd()),
            )),
            addHits(
                andNext(
                    event(3), 
                    once(eventEnd()),
            )),
            addHits(
                andNext(
                    event(4), 
                    once(eventEnd()),
            )),
            ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
            ['ResetIf', 'Mem', '8bit', 0x1fd, '=', 'Value', '', 0x67],
        ),
    }
})

set.addAchievement({
    title: 'Aerial Exhibition',
    description: 'Perform all Ski Tricks in a single run of the event, outside of practice',
    points: 3,
    conditions: {
        core: $(
            measuredIf(orNext(mode(0), mode(1))),
            measuredIf(event(1)),
            measuredIf(andNext(once(eventStart()))),
            loadreset(),
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 1, 1],
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 2, 1],
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 3, 1],
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 4, 1],
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 5, 1],
            ['AddHits', 'Mem', '8bit', 0x30c, '=', 'Value', '', 6, 1],
            ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 6],
        ),
    }
})

set.addAchievement({
    title: 'Center Stage',
    description: 'Succesfully perform all Figure Skating tricks in a single run of the event, outside of practice',
    points: 5,
    conditions: {
        core: $(
            measuredIf(orNext(mode(0), mode(1))),
            measuredIf(event(3)),
            measuredIf(andNext(once(eventStart()))),
            loadreset(),
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 4],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 5],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 6],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 7],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 8],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['AndNext', 'Delta', '8bit', 0x309, '=', 'Value', '', 9],
            ['AddHits', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0xb, 1],
            ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 6],
        ),
    }
})

set.addAchievement({
    title: 'Carmen on Ice',
    description: 'Perform the Camel Spin to Sit Spin combo in figure skating',
    points: 2,
    conditions: {
        core: $(
            orNext(mode(0), mode(1), mode(2)),
            event(3),
            ['AndNext', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0x4],
            ['AndNext', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0x5],
            ['ResetNextIf', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0x14],
            ['AndNext', 'Mem', '8bit', 0x309, '=', 'Value', '', 0x4, 1],
            ['', 'Delta', '8bit', 0x309, '=', 'Value', '', 0x5],
            ['', 'Mem', '8bit', 0x309, '!=', 'Value', '', 0x13],
        ),
    }
})

set.addAchievement({
    title: 'Demonstration of Excellence',
    description: 'Set a score of 8.5 or higher in the Hot Dog Aerials event, outside of practice',
    points: 10,
    conditions: {
        core: $(
            orNext(mode(0), mode(1)),
            event(1),
            ['', 'Mem', '8bit', 0x0220, '>=', 'Value', '', 85],
            eventEnd(),
        ),
    }
})

set.addAchievement({
    title: 'Oval Flyer',
    description: 'Set a time of 40 seconds or faster in the Speed Skating event, outside of practice',
    points: 10,
    conditions: {
        core: $(
            orNext(mode(0), mode(1)),
            event(2),
            ['', 'Mem', '8bit', 0x0222, '=', 'Value', '', 0],
            eventEnd(),
        ),
        alt1: $(
            ['', 'Mem', '8bit', 0x0223, '=', 'Value', '', 4],
            ['', 'Mem', '8bit', 0x0224, '=', 'Value', '', 0],
            ['', 'Mem', '8bit', 0x0225, '=', 'Value', '', 0],
        ),
        alt2: $(
            ['', 'Mem', '8bit', 0x0223, '<', 'Value', '', 4],
        ),
    }
})

set.addAchievement({
    title: 'Standing Ovation',
    description: 'Set a score of 4.0 or higher in the Figure Skating event, outside of practice',
    points: 10,
    conditions: {
        core: $(
            orNext(mode(0), mode(1)),
            event(3),
            ['', 'Mem', '8bit', 0x022a, '>=', 'Value', '', 40],
            eventEnd(),
        ),
    }
})

set.addAchievement({
    title: 'Canada Olympic Park',
    description: 'Set a time of 35 seconds or faster in the Bobsled event, outside of practice',
    points: 10,
    conditions: {
        core: $(
            orNext(mode(0), mode(1)),
            event(4),
            eventEnd(),
            ['OrNext', 'Mem', '8bit', 0x022c, '!=', 'Value', '', 0],
            ['OrNext', 'Mem', '8bit', 0x022d, '!=', 'Value', '', 0],
            ['', 'Mem', '8bit', 0x022e, '=', 'Value', '', 0],
        ),
        alt1: $(
            ['', 'Mem', '8bit', 0x022c, '=', 'Value', '', 35],
            ['', 'Mem', '8bit', 0x022d, '=', 'Value', '', 0],
            ['', 'Mem', '8bit', 0x022e, '=', 'Value', '', 0],
        ),
        alt2: $(
            ['', 'Mem', '8bit', 0x022c, '<', 'Value', '', 35],
        ),
    }
})

set.addLeaderboard({
    title: 'Calgary Freestyle Records',
    description: 'Set the highest score in the Hot Dog Aerial event, outside of practice',
    type: 'FIXED1',
    lowerIsBetter: false,
    conditions: {
        start: {
            core: $(
                orNext(mode(0), mode(1)),
                event(1),
                eventEnd(),
            ),
        },
        cancel: {
            core: $(
                isfalse(),
            ),
        },
        submit: {
            core: $(
                istrue(),
            ),
        },
        value: {
            core: $(
                ['Measured', 'Mem', '8bit', 0x0220],
            ),
        },
    },
})

set.addLeaderboard({
    title: 'Olympic Oval Records',
    description: 'Set the fastest time in the Speed Skating event, outside of practice',
    type: 'MILLISECS',
    lowerIsBetter: true,
    conditions: {
        start: {
            core: $(
                orNext(mode(0), mode(1)),
                event(2),
                eventEnd(),
            ),
        },
        cancel: {
            core: $(
                isfalse(),
            ),
        },
        submit: {
            core: $(
                istrue(),
            ),
        },
        value: {
            core: $(
                ['AddSource', 'Mem', '8bit', 0x222, '*', 'Value', '', 6000],
                ['AddSource', 'Mem', '8bit', 0x223, '*', 'Value', '', 1000],
                ['AddSource', 'Mem', '8bit', 0x224, '*', 'Value', '', 100],
                ['Measured', 'Mem', '8bit', 0x225, '*', 'Value', '', 10],
            ),
        },
    },
})

set.addLeaderboard({
    title: 'Ice Palace Records',
    description: 'Set the highest score in the Figure Skating event, outside of practice',
    type: 'FIXED1',
    lowerIsBetter: false,
    conditions: {
        start: {
            core: $(
                orNext(mode(0), mode(1)),
                event(3),
                eventEnd(),
            ),
        },
        cancel: {
            core: $(
                isfalse(),
            ),
        },
        submit: {
            core: $(
                istrue(),
            ),
        },
        value: {
            core: $(
                ['Measured', 'Mem', '8bit', 0x022a],
            ),
        },
    },
})

set.addLeaderboard({
    title: 'Sliding Centre Records',
    description: 'Set the fastest time in the Bobsled event, outside of practice',
    type: 'MILLISECS',
    lowerIsBetter: true,
    conditions: {
        start: {
            core: $(
                orNext(mode(0), mode(1)),
                event(4),
                eventEnd(),
            ),
        },
        cancel: {
            core: $(
                isfalse(),
            ),
        },
        submit: {
            core: $(
                istrue(),
            ),
        },
        value: {
            core: $(
                ['AddSource', 'Mem', '8bit', 0x22c, '*', 'Value', '', 100],
                ['AddSource', 'Mem', '8bit', 0x22d, '*', 'Value', '', 10],
                ['Measured', 'Mem', '8bit', 0x22e],
            ),
        },
    },
})

export default set
