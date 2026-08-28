import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 0, title: '' })

set.addAchievement({
    title: '',
    description: '',
    points: 0,
    conditions: {
        core: $(

        ),
    }
})

set.addLeaderboard({
    title: '',
    description: '',
    type: 'SCORE',
    lowerIsBetter: true,
    conditions: {
        start: {
            core: $(

            ),
        },
        cancel: {
            core: $(

            ),
        },
        submit: {
            core: $(

            ),
        },
        value: {
            core: $(

            ),
        },
    },
})

export default set