player.onChat(".cleareffects", function () {
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
})
player.onChat(".w-thunder", function () {
    gameplay.setWeather(THUNDER)
})
player.onChat(".d-easy", function () {
    gameplay.setDifficulty(EASY)
})
player.onChat(".t-dawn", function () {
    gameplay.timeSet(gameplay.time(DAWN))
})
player.onChat(".gms", function () {
    player.execute(
    "gamemode s"
    )
})
player.onChat(".t-midnight", function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
})
player.onChat(".t-dusk", function () {
    gameplay.timeSet(gameplay.time(DUSK))
})
player.onChat(".gma", function () {
    player.execute(
    "gamemode a"
    )
})
player.onChat(".w-rain", function () {
    gameplay.setWeather(RAIN)
})
player.onChat(".instakill", function () {
    player.execute(
    "effect @s strength 999999 255 true"
    )
})
player.onChat(".fly", function () {
    player.execute(
    "ability @s mayfly true"
    )
})
player.onChat(".d-hard", function () {
    gameplay.setDifficulty(HARD)
})
player.onChat(".xp", function (amount) {
    gameplay.xp(amount, mobs.target(LOCAL_PLAYER))
})
player.onChat(".instamine", function () {
    player.execute(
    "effect @s haste 999999 255 true"
    )
})
player.onChat(".t-midday", function () {
    gameplay.timeSet(gameplay.time(MIDDAY))
})
player.onChat(".d-normal", function () {
    gameplay.setDifficulty(NORMAL)
})
player.onChat(".d-peaceful", function () {
    gameplay.setDifficulty(PEACEFUL)
})
player.onChat(".stopfly", function () {
    player.execute(
    "ability @s mayfly false"
    )
})
player.onChat(".tp", function (X2, Y, Z2) {
    mobs.teleportToPosition(
    mobs.target(LOCAL_PLAYER),
    pos(X2, Y, Z2)
    )
})
player.onChat(".gmc", function () {
    player.execute(
    "gamemode c"
    )
})
player.onChat(".godmode", function () {
    player.execute(
    "effect @s resistance 999999 255 true"
    )
})
player.onChat(".give", function (item, amount) {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.blockById(item),
    amount
    )
})
player.onChat(".help", function () {
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .d-[difficulty]\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .t-[time] (day, dawn, midday, dusk, night, midnight)\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .w-[weather] (clear, rain. thunder)\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .give [item id] [amount]\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .gmc\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .gms\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .gma\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .fly\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .stopfly\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .suicide\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .fullbright\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .instamine\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .instakill\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .godmode\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .cleareffects\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .xp [amount]\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .tp [x] [y] [z]\"}]}"
    )
})
player.onChat(".fullbright", function () {
    player.execute(
    "effect @s night_vision 999999 1 true"
    )
})
player.onChat(".suicide", function () {
    player.execute(
    "gamemode s"
    )
    mobs.kill(
    mobs.target(RANDOM_PLAYER)
    )
})
player.onChat(".t-night", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
player.onChat(".w-clear", function () {
    gameplay.setWeather(CLEAR)
})
player.onChat(".t-day", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
player.execute(
"title @s title §8§lAgent Client V1"
)
player.execute(
"title @s subtitle Type \".help\" for a list of commands"
)
player.execute(
"gamerule sendcommandfeedback false"
)
player.execute(
"kill @c"
)