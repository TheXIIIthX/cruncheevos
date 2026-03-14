import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 14624, title: 'Puzzle Link 2' })

set.addLeaderboard({
  title: "Stage 10 High Score",
  description: "Get the highest score in Stage 10",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x0],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x0],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x0],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Stage J High Score",
  description: "Get the highest score in Stage J",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x1],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x1],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x1],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Stage Q High Score",
  description: "Get the highest score in Stage Q",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x2],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x2],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x2],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Stage K High Score",
  description: "Get the highest score in Stage K",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x3],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x3],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x3],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Stage A High Score",
  description: "Get the highest score in Stage A",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x4],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x4],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x4],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Stage S High Score",
  description: "Get the highest score in Stage S",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x5],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x250a, '!=', 'Value', '', 0x5],
    ),
    submit: {
      core: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x250a, '=', 'Value', '', 0x5],
      ),
      alt1: $(
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
      alt2: $(
        ['', 'Mem', '8bit', 0x2508, '=', 'Value', '', 0x9],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x3],
      ),
    },
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Endless 2 Targets High Score",
  description: "Get the highest score in Endless 2 Targets mode",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x0],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x1],
      ['', 'Mem', '8bit', 0x250e, '!=', 'Value', '', 0x0],
    ),
    submit: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x0],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Endless 3 Targets High Score",
  description: "Get the highest score in Endless 3 Targets mode",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x1],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x1],
      ['', 'Mem', '8bit', 0x250e, '!=', 'Value', '', 0x1],
    ),
    submit: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x1],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

set.addLeaderboard({
  title: "Endless 4 Targets High Score",
  description: "Get the highest score in Endless 4 Targets mode",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x2],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x2506, '!=', 'Value', '', 0x1],
      ['', 'Mem', '8bit', 0x250e, '!=', 'Value', '', 0x2],
    ),
    submit: $(
        ['', 'Mem', '8bit', 0x2506, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x250e, '=', 'Value', '', 0x2],
        ['', 'Delta', '8bit', 0x2504, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x2504, '=', 'Value', '', 0x4],
      ),
    value: $(
      ['Measured', 'Mem', '32bit', 0x209a]
    ),
  }
})

export default set
