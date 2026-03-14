import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22605, title: 'Tarzan Untamed' })

function binaryGenerator(len) {
    let binary = []
    let n
    for (let i=0; i < 2**len; i++) {
        n = i.toString(2)
        while(n.length < len) {
            n = "0" + n;
        }
        binary.push(n)
    }
    return(binary)
}

let bananaChains = ["/", ...binaryGenerator(8)]

function pointerMaker(address) {
    return($(['AddAddress', 'Mem', '32bit', address, '&', 'Value', '', 0x1ffffff]))
}

function bananaPointer(chain) {
    let logic = []
    let offset
    logic.push(pointerMaker(0x4ca030))
    logic.push(pointerMaker(0xC))
    for (let i = 0; i < chain.length; i++) {
        if (chain[i] == 0) {
            offset = 0x0
        }
        else if (chain[i] == 1){
            offset = 0x4
        }
        else {
            break
        }
        logic.push($(pointerMaker(offset)))
    }
    logic.push(pointerMaker(0x10))
    return(logic)
}

for (let i = 0; i < bananaChains.length; i++) {
    set.addAchievement({
        title: "[VOID] Lives test " + i,
        points: 0,
        conditions: $(
            ...bananaPointer(bananaChains[i]),
            ['', 'Delta', '32bit', 0xf8, '!=', 'Mem', '32bit', 0xf8],
        )
    })
}

export default set
