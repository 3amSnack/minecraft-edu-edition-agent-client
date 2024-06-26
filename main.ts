player.onChat(".w-lock", function () {
    player.execute(
    "gamerule doweathercycle false"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Weather Cycle Disabled\"}]}"
    )
})
player.onChat(".cleareffects", function () {
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Successfully Cleared all Effects\"}]}"
    )
})
player.onChat(".t-lock", function () {
    player.execute(
    "gamerule dodaylightcycle false"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Daylight Cycle Disabled\"}]}"
    )
})
player.onChat(".water-br", function () {
    player.execute(
    "effect @s water_breathing 999999 0 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Water Breathing\"}]}"
    )
})
player.onChat(".w-thunder", function () {
    gameplay.setWeather(THUNDER)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Weather to Thunder\"}]}"
    )
})
player.onChat(".speed", function () {
    player.execute(
    "effect @s speed 999999 2 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Speed\"}]}"
    )
})
player.onChat(".d-easy", function () {
    gameplay.setDifficulty(EASY)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Difficulty to 1 (Easy)\"}]}"
    )
})
player.onChat(".t-dawn", function () {
    gameplay.timeSet(gameplay.time(DAWN))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Dawn\"}]}"
    )
})
player.onChat(".gms", function () {
    player.execute(
    "gamemode s"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Gamemode to 0 (Survival)\"}]}"
    )
})
player.onChat(".one-hit", function () {
    player.execute(
    "effect @s strength 999999 255 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Strength\"}]}"
    )
})
player.onChat(".t-unlock", function () {
    player.execute(
    "gamerule dodaylightcycle true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Daylight Cycle Enabled\"}]}"
    )
})
player.onChat(".t-midnight", function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Midnight\"}]}"
    )
})
player.onChat(".t-dusk", function () {
    gameplay.timeSet(gameplay.time(DUSK))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Dusk\"}]}"
    )
})
player.onChat(".gma", function () {
    player.execute(
    "gamemode a"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Gamemode to 2 (Adventure)\"}]}"
    )
})
player.onChat(".xp", function (xpamount) {
    gameplay.xp(xpamount, mobs.target(LOCAL_PLAYER))
    player.say("Gave Himself " + xpamount + " XP")
})
player.onChat(".w-rain", function () {
    gameplay.setWeather(RAIN)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Weather to Rain\"}]}"
    )
})
player.onChat(".w-unlock", function () {
    player.execute(
    "gamerule doweathercycle true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Weather Cycle Enabled\"}]}"
    )
})
player.onChat(".fly", function () {
    player.execute(
    "ability @s mayfly true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Flight to True\"}]}"
    )
})
player.onChat(".d-hard", function () {
    gameplay.setDifficulty(HARD)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Difficulty to 3 (Hard)\"}]}"
    )
})
player.onChat(".instamine", function () {
    player.execute(
    "effect @s haste 999999 255 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Haste\"}]}"
    )
})
player.onChat(".t-midday", function () {
    gameplay.timeSet(gameplay.time(MIDDAY))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Midday\"}]}"
    )
})
player.onChat(".d-normal", function () {
    gameplay.setDifficulty(NORMAL)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Difficulty to 2 (Normal)\"}]}"
    )
})
player.onChat(".d-peaceful", function () {
    gameplay.setDifficulty(PEACEFUL)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Difficulty to 0 (Peaceful)\"}]}"
    )
})
player.onChat(".stopfly", function () {
    player.execute(
    "ability @s mayfly false"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Flight to False\"}]}"
    )
})
player.onChat(".gmc", function () {
    player.execute(
    "gamemode c"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Gamemode to 1 (Creative)\"}]}"
    )
})
player.onChat(".godmode", function () {
    player.execute(
    "effect @s resistance 999999 255 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Resistance\"}]}"
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
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .t-[time] (dawn, day, midday, dusk, night, midnight, lock, unlock)\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .w-[weather] (clear, rain. thunder, lock, unlock)\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .give [item id] [amount]\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .gms\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .gmc\"}]}"
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
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .one-hit\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .water-br\"}]}"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lAgent§r> .speed\"}]}"
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
})
player.onChat(".fullbright", function () {
    player.execute(
    "effect @s night_vision 999999 1 true"
    )
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Granted Night Vision\"}]}"
    )
})
player.onChat(".suicide", function () {
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
    player.say("Killed Himself")
})
player.onChat(".t-night", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Night\"}]}"
    )
})
player.onChat(".w-clear", function () {
    gameplay.setWeather(CLEAR)
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Weather to Clear\"}]}"
    )
})
player.onChat(".t-day", function () {
    gameplay.timeSet(gameplay.time(DAY))
    player.execute(
    "tellraw @s {\"rawtext\":[{\"text\":\"<§8§lNotification§r> Set Time to Day\"}]}"
    )
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
