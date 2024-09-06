var catalog = [
  {
    "items": [
      {
        "background": "backgrounds/common.png",
        "description": "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.",
        "image": "items/repulsion_armor_plate.png",
        "name": "Repulsion Armor Plate"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack). ",
        "image": "items/mocha.png",
        "name": "Mocha"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Gain a temporary barrier on kill for 15 health (+15 per stack).",
        "image": "items/topaz_broach.png",
        "name": "Topaz Broach"
      },
      {
        "background": "backgrounds/common.png",
        "description": "  Chance to block incoming damage stacks hyperbolically, following the equation:\n  ```\n  f(x) = 1 - 1 / (1 + 0.15 * x)\n  ```\n  Where `x` is the number of items.\n\n  With 10 Tougher Times, the chance to be hit with damage is ~60%.\n  Tougher Times is unaffected by luck.\n",
        "image": "items/tougher_times.png",
        "name": "Tougher Times"
      },
      {
        "background": "backgrounds/common.png",
        "description": "10% (+10% per stack) chance to bleed an enemy for 240% base damage",
        "image": "items/tri-tip_dagger.png",
        "name": "Tri-Tip Dagger"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Deal an additional 20% damage (+20% per stack) bosses.",
        "image": "items/armor-piercing_rounds.png",
        "name": "Armor-Piercing Rounds"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.\nLens-Maker's Glasses is affected by luck.\nYou need 10 Lens-Maker's Glasses to achieve 100% chance to 'Critically Strike'.\n",
        "image": "items/lens-makers_glasses.png",
        "name": "Lens-Maker's Glasses"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Deal +75% (+75% per stack) damage to enemies above 90% health.\nTwo stacks of Crowbars is higher damage than a 'Critical Strike'\n",
        "image": "items/crowbar.png",
        "name": "Crowbar"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.",
        "image": "items/bundle_of_fireworks.png",
        "name": "Bundle of Fireworks"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increases maximum health by 25 (+25 per stack).",
        "image": "items/bison_steak.png",
        "name": "Bison Steak"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item.",
        "image": "items/delicate_watch.png",
        "name": "Delicate Watch"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.",
        "image": "items/roll_of_pennies.png",
        "name": "Roll of Pennies"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat",
        "image": "items/cautious_slug.png",
        "name": "Cautious Slug"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.",
        "image": "items/power_elixir.png",
        "name": "Power Elixir"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increases movement speed by 14% (+14% per stack).",
        "image": "items/pauls_goat_hoof.png",
        "name": "Paul's Goat Hoof"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage.\nAdditionally, enemies burn for 150% (+75% per stack) base damage.\n",
        "image": "items/gasoline.png",
        "name": "Gasoline"
      },
      {
        "background": "backgrounds/common.png",
        "description": "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.",
        "image": "items/medkit.png",
        "name": "Medkit"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Standing still for 1 second creates a 3.5m (+1.5m per stack) healing zone.\nThat zone heals for 4.5% (+2.25% per stack) of your health every second to all allies.\n",
        "image": "items/bustling_fungus.png",
        "name": "Bustling Fungus"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increase damage to enemies within 13m by 20% (+20% per stack).",
        "image": "items/focus_crystal.png",
        "name": "Focus Crystal"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increase armor by 100 (+100 per stack) while out of danger.",
        "image": "items/oddly-shaped_opal.png",
        "name": "Oddly-Shaped Opal"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.",
        "image": "items/personal_shield_generator.png",
        "name": "Personal Shield Generator"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Obtained by from a Scrapper.\nPrioritized when used with a 3D Printer, or a Cauldron.\n",
        "image": "items/white_item_scrap.png",
        "name": "White Item Scrap"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Add +1 (+1 per stack) charge of your Secondary skill.",
        "image": "items/backup_magazine.png",
        "name": "Backup Magazine"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Sprint speed is improved by 25% (+25% per stack).",
        "image": "items/energy_drink.png",
        "name": "Energy Drink"
      },
      {
        "background": "backgrounds/common.png",
        "description": "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.",
        "image": "items/sticky_bomb.png",
        "name": "Sticky Bomb"
      },
      {
        "background": "backgrounds/common.png",
        "description": "5% (+5% on stack) chance on hit to stun enemies for 2 seconds.",
        "image": "items/stun_grenade.png",
        "name": "Stun Grenade"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Increases attack speed by 15% (+15% per stack).",
        "image": "items/soldiers_syringe.png",
        "name": "Soldier's Syringe"
      },
      {
        "background": "backgrounds/common.png",
        "description": "Killing an enemy spawns a healing orb.\nThe orb heals for 8 plus an additional 2% (+2% per stack) of maximum health.\n",
        "image": "items/monster_tooth.png",
        "name": "Monster Tooth"
      },
      {
        "background": "backgrounds/common.png",
        "description": "A hidden cache containing an item (80%/20%) will appear in a random location on each stage.\nOpening the cache consumes this item.\n",
        "image": "items/rusted_key.png",
        "name": "Rusted Key"
      },
      {
        "background": "backgrounds/common.png",
        "description": "On level up or starting the Teleporter event, create a 16m (+8m per stack) zone.\nThe zone raises attack and movement speed by 30% for any ally within it.\n",
        "image": "items/warbanner.png",
        "name": "Warbanner"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Gain 5% critical chance. Critical strikes increase attack speed by 12%.\nMaximum cap of 36% (+24% per stack) attack speed.\n",
        "image": "items/predatory_instincts.png",
        "name": "Predatory Instincts"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.",
        "image": "items/bandolier.png",
        "name": "Bandolier"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.",
        "image": "items/ghors_tome.png",
        "name": "Ghor's Tome"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "25% chance to fire chain lightning for 80% TOTAL damage.\nChain lightning hits up to 3 (+2 per stack) targets within 20m (+2m per stack).\n",
        "image": "items/ukulele.png",
        "name": "Ukulele"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Enemies with 4 or more debuffs are marked for death,\nincreasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.\n",
        "image": "items/death_mark.png",
        "name": "Death Mark"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).",
        "image": "items/war_horn.png",
        "name": "War Horn"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Hold an additional equipment charge (+1 per stack). \nEquipment cooldown reduction stacks according to the equation: \n```\nf(c,x) = c * (1 - 0.15) ^ x\n```\nWhere `c` is the initial cooldown of the equipment, and `x` is the number of stacks of Fuel Cell.\n\nWith 5 Fuel Cells, the chance to be hit with damage is ~50%.\n",
        "image": "items/fuel_cell.png",
        "name": "Fuel Cell"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "The instant kill threshold for Old Guillotine stacks hyperbolically, following the equation:\n```\nf(x) = 1 - 1 / (1 + 0.13x)\n\n```\nWhere `x` is the number of stacks of Old Guillotine.\n\nWith 8 Old Guillotines, the threshold becomes ~50%.    \n",
        "image": "items/old_guillotine.png",
        "name": "Old Guillotine"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius.\nThe lava pillar does 350% (+280% per stack) base damage.\n",
        "image": "items/will-o-the-wisp.png",
        "name": "Will-o'-the-wisp"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Gain +1 (+1 per stack) maximum jump count.",
        "image": "items/hopoo_feather.png",
        "name": "Hopoo Feather"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado.\nThe tornado deals 300% (+300% per stack) TOTAL damage over time.\nRecharges every 10 seconds.\n",
        "image": "items/kjaros_band.png",
        "name": "Kjaro's Band"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage.\nChances of rare items increases per stack, by following these probabilities:\n```\np(Legendary) = (0.01 * n^2) / ( (0.01 * n^2) + (0.2 * n) + (0.79) )\np(Uncommon)  = (0.2  * n)   / ( (0.01 * n^2) + (0.2 * n) + (0.79) )\np(Common)    = 0.79         / ( (0.01 * n^2) + (0.2 * n) + (0.79) )\n```\n",
        "image": "items/shipping_request_form.png",
        "name": "Shipping Request Form"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health.",
        "image": "items/harvesters_scythe.png",
        "name": "Harvester's Scythe"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Hits that deal more than 400% damage also blasts enemies with a runic ice blast.\nThe ice blast slows the enemy by 80% for 3s (+3s per stack).\nThe ice blast also deals 250% (+250% per stack) TOTAL damage.\nRecharges every 10 seconds.\"\n",
        "image": "items/runalds_band.png",
        "name": "Runald's Band"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Killing an enemy increases your health permanently by 1 (+1 per stack),\nup to a maximum of 100 (+100 per stack) health.\n",
        "image": "items/infusion.png",
        "name": "Infusion"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Jumping while sprinting boosts you forward by 10m (+10m per stack).",
        "image": "items/wax_quail.png",
        "name": "Wax Quail"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.",
        "image": "items/atg_missile_mk_1.png",
        "name": "AtG Missile Mk. 1"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.",
        "image": "items/hunters_harpoon.png",
        "name": "Hunter's Harpoon"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s.\nRecharges every 30 seconds (-50% per stack).\"\n",
        "image": "items/old_war_stealthsuit.png",
        "name": "Old War Stealthsuit"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage.\nYou can hold up to 3 (+1 per stack) shurikens which all reload over 10 seconds.\n",
        "image": "items/shuriken.png",
        "name": "Shuriken"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Does nothing.\nPrioritized when used with Uncommon 3D Printers.\nAt the start of each stage, it regenerates.\n",
        "image": "items/regenerating_scrap.png",
        "name": "Regenerating Scrap"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Obtained by from a Scrapper.\nPrioritized when used with a 3D Printer, or a Cauldron.\n",
        "image": "items/green_item_scrap.png",
        "name": "Green Item Scrap"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Dealing damage heals you for 1 (+1 per stack) health.",
        "image": "items/leeching_seed.png",
        "name": "Leeching Seed"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).",
        "image": "items/chronobauble.png",
        "name": "Chronobauble"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Increase armor by 30 (+30 per stack) while sprinting.",
        "image": "items/rose_buckler.png",
        "name": "Rose Buckler"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Leaving combat boosts your movement speed by 30% (+30% per stack).",
        "image": "items/red_whip.png",
        "name": "Red Whip"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Activating an interactable summons a Squid Turret.\nSquid Turrets attack nearby enemies at 100% (+100% per stack) attack speed.\nLasts 30 seconds.\n",
        "image": "items/squid_polyp.png",
        "name": "Squid Polyp"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Ignite effects deal +300% (+300% per stack) more damage over time.",
        "image": "items/ignition_tank.png",
        "name": "Ignition Tank"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Release a healing nova during the Teleporter event, healing all nearby\nallies for 50% of their maximum health.\nOccurs 1 (+1 per stack) times.\n",
        "image": "items/lepton_daisy.png",
        "name": "Lepton Daisy"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Getting hit causes you to explode in a burst of razors, dealing 160% damage.\nHits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius.\n",
        "image": "items/razorwire.png",
        "name": "Razorwire"
      },
      {
        "background": "backgrounds/rare.png",
        "description": "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack).\nIncreases movement speed by 50% and attack speed by 100%.\n",
        "image": "items/berzerkers_pauldron.png",
        "name": "Berzerker's Pauldron"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Reduce skill cooldowns by according to the following formula:\n```\nf(c, x) = c * 0.75 ^ x\n```\nWhere `c` is the equipment cooldown, and `x` is the number of Alien Head stacks.\n",
        "image": "items/alien_head.png",
        "name": "Alien Head"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.",
        "image": "items/shattering_justice.png",
        "name": "Shattering Justice"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.",
        "image": "items/aegis.png",
        "name": "Aegis"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60%\nTOTAL damage to nearby enemies.\n",
        "image": "items/brilliant_behemoth.png",
        "name": "Brilliant Behemoth"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Chance on hit to fire homing hooks at based on the hyperbolic formula:\n```\nf(x) = 1 - 1 / (1 + 0.2 * x)\n```\nWhere `x` is the number of Sentient Meat Hook stacks.\n\nHoming hooks fire at up to 10 (+5 per stack) enemies for 100% TOTAL damage.\n\n5 Sentient Meat Hooks allow for ~50% chance to hit.\n",
        "image": "items/sentient_meat_hook.png",
        "name": "Sentient Meat Hook"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds.\nRecharge rate scales with attack speed.\n",
        "image": "items/defensive_microbots.png",
        "name": "Defensive Microbots"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.",
        "image": "items/57_leaf_clover.png",
        "name": "57 Leaf Clover"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Critical Strikes deal an additional 100% damage (+100% per stack).",
        "image": "items/laser_scope.png",
        "name": "Laser Scope"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.",
        "image": "items/ceremonial_dagger.png",
        "name": "Ceremonial Dagger"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies.",
        "image": "items/spare_drone_parts.png",
        "name": "Spare Drone Parts"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.",
        "image": "items/dios_best_friend.png",
        "name": "Dio's Best Friend"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Increase jump height.\nCreates a 5m-100m radius kinetic explosion on hitting the ground.\nThe explosion deals 1000%-10000% base damage that scales up with fall distance.\nRecharges in 10 (-50% per stack) seconds.\n",
        "image": "items/h3ad-5t_v2.png",
        "name": "H3AD-5T v2"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage.\nLasts 30s (+30s per stack).\n",
        "image": "items/happiest_mask.png",
        "name": "Happiest Mask"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Gain the power of any killed elite monster for 8s (+5s per stack).",
        "image": "items/wake_of_vultures.png",
        "name": "Wake of Vultures"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Killing an enemy surrounds you with an ice storm.\nThe storm deals 1200% damage per second and slows enemies by 80% for 1.5s.\nThe storm grows with every kill, increasing its radius by 2m.\nStacks up to 18m (+12m per stack).\n",
        "image": "items/frost_relic.png",
        "name": "Frost Relic"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Whenever you would receive a debuff, prevent it. Increases maximum health by 100 (+100 per stack).",
        "image": "items/bens_raincoat.png",
        "name": "Ben's Raincoat"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Heal +100% (+100% per stack) more.",
        "image": "items/rejuvenation_rack.png",
        "name": "Rejuvenation Rack"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns.",
        "image": "items/brainstalks.png",
        "name": "Brainstalks"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Killing 4 enemies in 7 seconds charges the Resonance Disc.\nThe disc launches itself toward a target for 300% base damage (+300% per stack),\npiercing all enemies it doesn't kill,\nand then explodes for 1000% base damage (+1000% per stack).\nReturns to the user, striking all enemies along the way for 300% base damage (+300% per stack).\n",
        "image": "items/resonance_disk.png",
        "name": "Resonance Disk"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "All missile items and equipment fire an additional 2 missiles.\nIncrease missile damage by 0% (+50% per stack)\n",
        "image": "items/pocket_icbm.png",
        "name": "Pocket I.C.B.M."
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Store 100% (+100% per stack) of healing as Soul Energy.\nAfter your Soul Energy reaches 10% of your maximum health,\nfire a skull that deals 250% of your Soul Energy as damage.\n",
        "image": "items/nkuhanas_opinion.png",
        "name": "N'kuhana's Opinion"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "On hit reduce armor by 2 (+2 per stack) permanently.",
        "image": "items/symbiotic_scorpion.png",
        "name": "Symbiotic Scorpion"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "On kill, plant a healing fruit seed that grows into a plant after 5 seconds.\nThe plant heals for 5% of maximum health every 0.5 second to all allies within 10m (+5.0m per stack).\nLasts 10 seconds.\n",
        "image": "items/interstellar_desk_plant.png",
        "name": "Interstellar Desk Plant"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Trigger a random equipment effect 1 (+1 per stack) time(s).",
        "image": "items/bottled_chaos.png",
        "name": "Bottled Chaos"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Obtained by from a Scrapper.\nPrioritized when used with a 3D Printer, or a Cauldron.\n",
        "image": "items/red_item_scrap.png",
        "name": "Red Item Scrap"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s.\nThe Tesla Coil switches off every 10 seconds.\n",
        "image": "items/unstable_tesla_coil.png",
        "name": "Unstable Tesla Coil"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Kills reduce equipment cooldown by 4s (+2s per stack).",
        "image": "items/soulbound_catalyst.png",
        "name": "Soulbound Catalyst"
      },
      {
        "background": "backgrounds/legendary.png",
        "description": "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.",
        "image": "items/hardlight_afterburner.png",
        "name": "Hardlight Afterburner"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Only dropped when in Bulwark's Ambry to damage the Artifact Reliquary.",
        "image": "items/artifact_key.png",
        "name": "Artifact Key"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health.\nCan have up to 1 (+1 per stack) Guards at a time.\n",
        "image": "items/queens_gland.png",
        "name": "Queen's Gland"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Gain 5% critical chance.\nCritical Strikes bleed enemies for 240% base damage.\nBleeding enemies explode on death for 400% (+400% per stack) damage,\nplus an additional 15% (+15% per stack) of their maximum health.\n",
        "image": "items/shatterspleen.png",
        "name": "Shatterspleen"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.",
        "image": "items/molten_perforator.png",
        "name": "Molten Perforator"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Increase maximum health by 40 (+40 per stack) and base health regeneration\nby +1.6 hp/s (+1.6 hp/s per stack).\n",
        "image": "items/titanic_knurl.png",
        "name": "Titanic Knurl"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.",
        "image": "items/charged_perforator.png",
        "name": "Charged Perforator"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Killing elite monsters spawns an Alpha Construct. Limited to 4 (+4 per stack).",
        "image": "items/defense_nucleus.png",
        "name": "Defense Nucleus"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Falling below 25% health causes you to explode, dealing 6000% base damage.\nRecharges every 30 / (2 +1 per stack) seconds.\n",
        "image": "items/genesis_loop.png",
        "name": "Genesis Loop"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Heal from incoming damage for 15 (+15 per stack).",
        "image": "items/planula.png",
        "name": "Planula"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Increases maximum health by 10% (+10% per stack).",
        "image": "items/pearl.png",
        "name": "Pearl"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.",
        "image": "items/empathy_cores.png",
        "name": "Empathy Cores"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Obtained by from a Scrapper.\nPrioritized when used with a 3D Printer, or a Cauldron.\n",
        "image": "items/yellow_item_scrap.png",
        "name": "Yellow Item Scrap"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Increases ALL stats by 10% (+10% per stack).",
        "image": "items/irradiant_pearl.png",
        "name": "Irradiant Pearl"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will\nbe 'tethered' to you, dealing 100% damage per second, applying tar, and\nhealing you for 100% of the damage dealt.\n",
        "image": "items/mired_urn.png",
        "name": "Mired Urn"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Fire a tracking wisp for 300% (+300% per stack) damage.\nFires every 1.6 seconds while sprinting.\nFire rate increases with movement speed.\n",
        "image": "items/little_disciple.png",
        "name": "Little Disciple"
      },
      {
        "background": "backgrounds/boss.png",
        "description": "Summon Aurelionite during the teleporter event.\nIt has 100% (+50% per stack) damage and 100% (+100% per stack) health.\n",
        "image": "items/halcyon_seed.png",
        "name": "Halcyon Seed"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Used on the obliteration Obelisk to enter the A Moment, Whole\nstage from the A Moment, Fractured.\n",
        "image": "items/beads_of_fealty.png",
        "name": "Beads of Fealty"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "30% chance on hit to gain 2 (+2 per stack) gold.\nScales over time. \nLose gold on taking damage equal to 100% (+100% per stack) of the maximum\nhealth percentage you lost.\n",
        "image": "items/brittle_crown.png",
        "name": "Brittle Crown"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Heal +100% (+100% per stack) more.\nAll healing is applied over time.\nCan heal for a maximum of 10% (-50% per stack) of your health per second.\n",
        "image": "items/corpsebloom.png",
        "name": "Corpsebloom"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.",
        "image": "items/defiant_gouge.png",
        "name": "Defiant Gouge"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates on \nimpact for 360% damage, up to a maximum of 3 bombs (+1 per stack).\nEvery 60 seconds, a random item is converted into this item.\n",
        "image": "items/egocentrism.png",
        "name": "Egocentrism"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Replace your Special Skill with Ruin.\nDealing damage adds a stack of Ruin for 10 (+10 per stack) seconds.\nActivating the skill detonates all Ruin stacks at unlimited range, dealing\n300% damage plus 120% damage per stack of Ruin.\nRecharges after 8 (+8 per stack) seconds.\n",
        "image": "items/essence_of_heresy.png",
        "name": "Essence of Heresy"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Items have a 5% (+5% per stack) chance to become a Lunar item instead.",
        "image": "items/eulogy_zero.png",
        "name": "Eulogy Zero"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Teleporters charge 30% (+30% per stack) faster, but the size of the \nTeleporter zone is 50% (-50% per stack) smaller.\n",
        "image": "items/focused_convergence.png",
        "name": "Focused Convergence"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Reduce Equipment cooldown by 50% (+15% per stack).\nForces your Equipment to activate whenever it is off cooldown.\n",
        "image": "items/gesture_of_the_drowned.png",
        "name": "Gesture of the Drowned"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Replace your Secondary Skill with Slicing Maelstrom.\nCharge up a projectile that deals 875% damage per second to nearby enemies,\nexploding after 3 seconds to deal 700% damage and root enemies for \n3 (+3 per stack) seconds.\nRecharges after 5 (+5 per stack) seconds.\n",
        "image": "items/hooks_of_heresy.png",
        "name": "Hooks of Heresy"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack).",
        "image": "items/light_flux_pauldron.png",
        "name": "Light Flux Pauldron"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Creates a Ward of Power in a random location nearby that buffs both enemies\nand allies within 16m (+50% per stack), causing them to deal +50% damage.\n",
        "image": "items/mercurial_rachis.png",
        "name": "Mercurial Rachis"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "All skill cooldowns are reduced by 2 (+1 per stack) seconds.\nAll random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.\n",
        "image": "items/purity.png",
        "name": "Purity"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Increase base damage by 100% (+100% per stack).\nReduce maximum health by 50% (+50% per stack).\n",
        "image": "items/shaped_glass.png",
        "name": "Shaped Glass"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack).",
        "image": "items/stone_flux_pauldron.png",
        "name": "Stone Flux Pauldron"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Replace your Utility Skill with Shadowfade.\nFade away, becoming intangible and gaining +30% movement speed.\nHeal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.\n",
        "image": "items/strides_of_heresy.png",
        "name": "Strides of Heresy"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.",
        "image": "items/transcendence.png",
        "name": "Transcendence"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).",
        "image": "items/visions_of_heresy.png",
        "name": "Visions of Heresy"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.",
        "image": "items/effigy_of_grief.png",
        "name": "Effigy of Grief"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.",
        "image": "items/glowing_meteorite.png",
        "name": "Glowing Meteorite"
      },
      {
        "background": "backgrounds/lunar.png",
        "description": "Ignite ALL characters within 15m for 12s.\nDeal 5% of your maximum health/second as burning as damage.\nThe burn is 0.5x stronger on yourself, 0.25x stronger on allies, and 24x stronger on enemies.\n",
        "image": "items/helfire_tincture.png",
        "name": "Helfire Tincture"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Drink the Tonic, gaining a boost for 20 seconds.\nIncreases damage by +100%.\nIncreases attack speed by +70%.\nIncreases armor by +20. \nIncreases maximum health by +50%.\nIncreases passive health regeneration by +300%.\nIncreases movespeed by +30%.\nWhen the Tonic wears off, you have a 20% chance to gain a stack of Tonic Affliction.\nTonic Affliction reduces all of your stats by -5% (-5% per stack).\"\n",
        "image": "items/spinel_tonic.png",
        "name": "Spinel Tonic"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Upgrades 3 (+3 per stack) random items to items of the next higher Rarity\nat the start of each stage.\nCorrupts all 57 Leaf Clovers.\n",
        "image": "items/benthic_bloom.png",
        "name": "Benthic Bloom"
      },
      {
        "background": "backgrounds/void.png",
        "description": "A hidden cache containing an item (60%/30%/10%) will appear in a random\nlocation on each stage.\nOpening the cache consumes this item.\nCorrupts all Rusted Keys.\n",
        "image": "items/encrusted_key.png",
        "name": "Encrusted Key"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a \nnon-Boss enemy.\nCorrupts all Lens-Maker's Glasses.\n",
        "image": "items/lost_seers_lenses.png",
        "name": "Lost Seer's Lenses"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Add +1 (+1 per stack) charge of your Special skill.\nReduces Special skill cooldown by 33%.\nCorrupts all Fuel Cells.\n",
        "image": "items/lysate_cell.png",
        "name": "Lysate Cell"
      },
      {
        "background": "backgrounds/void.png",
        "description": "10% (+10% per stack) chance to collapse an enemy for 400% base damage.\nCorrupts all Tri-Tip Daggers.\n",
        "image": "items/needletick.png",
        "name": "Needletick"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Every 60 (-50% per stack) seconds, gain a random Void ally.\nCan have up to 1 (+1 per stack) allies at a time.\nCorrupts all yellow items.\n",
        "image": "items/newly_hatched_zoea.png",
        "name": "Newly Hatched Zoea"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Gain a shield equal to 10% of your maximum health.\nWhile you have a shield, hitting an enemy fires a missile.\nThe missile deals 40% (+40% per stack) TOTAL damage.\nCorrupts all AtG Missile Mk. 1s.\n",
        "image": "items/plasma_shrimp.png",
        "name": "Plasma Shrimp"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Upon death, this item will be consumed and you will return to life with\n3 seconds of invulnerability.\nAll of your items that can be corrupted will be.\nCorrupts all Dio's Best Friends.\n",
        "image": "items/pluripotent_larva.png",
        "name": "Pluripotent Larva"
      },
      {
        "background": "backgrounds/void.png",
        "description": "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times.\nCorrupts all Ukuleles.\n",
        "image": "items/polylute.png",
        "name": "Polylute"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Blocks incoming damage once.\nRecharges after 15 seconds (-10% per stack).\nCorrupts all Tougher Times.\n",
        "image": "items/safer_spaces.png",
        "name": "Safer Spaces"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Hits that deal more than 400% damage also fire a black hole that draws\nenemies within 15m into its center.\nLasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL\ndamage.\nRecharges every 20 seconds.\nCorrupts all Runald's and Kjaro's Bands.\n",
        "image": "items/singularity_band.png",
        "name": "Singularity Band"
      },
      {
        "background": "backgrounds/void.png",
        "description": "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack).\nCorrupts all Chronobaubles.\n",
        "image": "items/tentabauble.png",
        "name": "Tentabauble"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius.\nLava pillar does for 260% (+156% per stack) base damage. \nCorrupts all Will-o'-the-wisps.\n",
        "image": "items/voidsent_flame.png",
        "name": "Voidsent Flame"
      },
      {
        "background": "backgrounds/void.png",
        "description": "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.",
        "image": "items/weeping_fungus.png",
        "name": "Weeping Fungus"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.",
        "image": "items/blast_shower.png",
        "name": "Blast Shower"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Fire a swarm of 12 missiles that deal 12x300% damage.",
        "image": "items/disposable_missile_launcher.png",
        "name": "Disposable Missile Launcher"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.",
        "image": "items/eccentric_vase.png",
        "name": "Eccentric Vase"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Whenever you make a gold purchase, get 10% of the spent gold back.\nIf the purchase is a multishop terminal, the other terminals will remain open.\n",
        "image": "items/executive_card.png",
        "name": "Executive Card"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Instantly heal for 50% of your maximum health.",
        "image": "items/foreign_fruit.png",
        "name": "Foreign Fruit"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds.",
        "image": "items/forgive_me_please.png",
        "name": "Forgive Me Please"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Obtained on the first stage by interacting with the back of an escape pod.\nIf a survivor carrying this equipment gets to 50% health they explode.\n",
        "image": "items/fuel_array.png",
        "name": "Fuel Array"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Gain a Woodsprite follower that heals for 1.5% of your maximum health/second.\nCan be sent to an ally to heal them for 10% of their maximum health.\n",
        "image": "items/gnarled_woodsprite.png",
        "name": "Gnarled Woodsprite"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Spawn a gummy clone that has 170% damage and 170% health. Expires in 30 seconds.",
        "image": "items/goobo_jr.png",
        "name": "Goobo Jr."
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "All allies enter a frenzy for 7 seconds.\nIncreases movement speed by 50% and attack speed by 100%.\n",
        "image": "items/gorags_opus.png",
        "name": "Gorag's Opus"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Gain 500 armor for 5 seconds.",
        "image": "items/jade_elephant.png",
        "name": "Jade Elephant"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.",
        "image": "items/milky_chrysalis.png",
        "name": "Milky Chrysalis"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Throw 6 molotov cocktails that ignites enemies for 500% base damage.\nEach molotov leaves a burning area for 200% damage per second.\n",
        "image": "items/molotov_6-pack.png",
        "name": "Molotov (6-pack)"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Gain +100% Critical Strike Chance for 8 seconds.",
        "image": "items/ocular_hud.png",
        "name": "Ocular HUD"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second.\nOn contact, detonate in an enormous 20m explosion for 4000% damage.\n",
        "image": "items/preon_accumulator.png",
        "name": "Preon Accumulator"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds ",
        "image": "items/primordial_cube.png",
        "name": "Primordial Cube"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Reveal all interactables within 500m for 10 seconds.",
        "image": "items/radar_scanner.png",
        "name": "Radar Scanner"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Transform an Item or Equipment into a different one. Can only be converted into the same tier one time.",
        "image": "items/recycler.png",
        "name": "Recycler"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Request an Eclipse Zero Vending Machine from the UES Safe Travels.\nDelivery guaranteed in 5 seconds, dealing 2000% damage.\nHeal up to 3 targets for 25% of their maximum health.\n",
        "image": "items/remote_caffeinator.png",
        "name": "Remote Caffeinator"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters. ",
        "image": "items/royal_capacitor.png",
        "name": "Royal Capacitor"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Throw three large saw blades that slice through enemies for 3x400% damage.\nAlso deals an additional 3x100% damage per second while bleeding enemies.\nCan strike enemies again on the way back.\n",
        "image": "items/sawmerang.png",
        "name": "Sawmerang"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Heal for 20% of the damage you deal. Lasts 8 seconds.",
        "image": "items/super_massive_leech.png",
        "name": "Super Massive Leech"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Call 4 Strike Drones to fight for you. Lasts 25 seconds.",
        "image": "items/the_back-up.png",
        "name": "The Back-up"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Fires a continuous barrage that deals 100% damage per bullet.\nCosts \\$1 per bullet.\nCost increases over time.\n",
        "image": "items/the_crowdfunder.png",
        "name": "The Crowdfunder"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Execute any enemy capable of spawning a unique reward, and it will drop that item.\nEquipment is consumed on use.\n",
        "image": "items/trophy_hunters_tricorn.png",
        "name": "Trophy Hunter's Tricorn"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Emits \"Ahoy!\" when activated.",
        "image": "items/trophy_hunters_tricorn_consumed.png",
        "name": "Trophy Hunter's Tricorn (Consumed)"
      },
      {
        "background": "backgrounds/equipment.png",
        "description": "Turn into a draconic fireball for 5 seconds.\nDeal 500% damage on impact.\nDetonates at the end for 800% damage.\n",
        "image": "items/volcanic_egg.png",
        "name": "Volcanic Egg"
      }
    ],
    "name": "Items"
  },
  {
    "items": [
      {
        "background": "backgrounds/box_outline.png",
        "description": "Friendly fire is enabled for both survivors and monsters.\n\n● ▲ ●\n● ▲ ●\n● ▲ ●\n",
        "image": "artifacts/artifact_of_chaos.png",
        "name": "Artifact of Chaos"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Choose your items.\n\n■ ■ ■\n■ ■ ■\n▲ ▲ ▲\n",
        "image": "artifacts/artifact_of_command.png",
        "name": "Artifact of Command"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "When one player dies, everyone dies.\n\n● ● ●\n■ ▲ ■\n● ▲ ●\n",
        "image": "artifacts/artifact_of_death.png",
        "name": "Artifact of Death"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Monsters can appear outside their usual environments.\n\n● ■ ■\n■ ■ ■\n■ ■ ●\n",
        "image": "artifacts/artifact_of_dissonance.png",
        "name": "Artifact of Dissonance"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "INSERT ARTIFACT OF DELUSION DESCRIPTION HERE\n\n■ ● ■\n● ● ●\n■ ▲ ■\n",
        "image": "artifacts/artifact_of_delusion.png",
        "name": "Artifact of Delusion"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "INSERT ARTIFACT OF DEVOTION DESCRIPTION HERE\n\n▲ ◊ ▲\n■ ◊ ■\n◊ ▲ ◊\n",
        "image": "artifacts/artifact_of_devotion.png",
        "name": "Artifact of Devotion"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Spawn with a random equipment that changes every time it is activated.\n\n◊ ■ ■\n▲ ■ ▲\n● ◊ ◊\n",
        "image": "artifacts/artifact_of_enigma.png",
        "name": "Artifact of Enigma"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Monsters gain items between stages.\n\n◊ ◊ ◊\n■ ■ ■\n● ● ●\n",
        "image": "artifacts/artifact_of_evolution.png",
        "name": "Artifact of Evolution"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Fall damage is doubled and lethal.\n\n● ● ●\n▲ ● ▲\n▲ ▲ ▲\n",
        "image": "artifacts/artifact_of_frailty.png",
        "name": "Artifact of Frailty"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Allies deal 500% damage, but have 10% health\n\n◊ ◊ ◊\n◊ ◊ ◊\n◊ ◊ ◊\n",
        "image": "artifacts/artifact_of_glass.png",
        "name": "Artifact of Glass"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Enemies can only spawn as elites.\n\n■ ■ ■\n■ ▲ ■\n■ ■ ■\n",
        "image": "artifacts/artifact_of_honor.png",
        "name": "Artifact of Honor"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Monsters will be of only one type per stage.\n\n● ▲ ▲\n◊ ● ▲\n◊ ◊ ●\n",
        "image": "artifacts/artifact_of_kin.png",
        "name": "Artifact of Kin"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Players always spawn as a random survivor.\n\n◊ ■ ●\n◊ ■ ●\n◊ ■ ●\n",
        "image": "artifacts/artifact_of_metamorphosis.png",
        "name": "Artifact of Metamorphosis"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Monsters drop items on death, but chests no longer spawn.\n\n▲ ▲ ▲\n▲ ▲ ▲\n▲ ◊ ▲\n",
        "image": "artifacts/artifact_of_sacrifice.png",
        "name": "Artifact of Sacrifice"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Wisps emerge from defeated monsters.\n\n● ■ ●\n● ◊ ●\n■ ◊ ■\n",
        "image": "artifacts/artifact_of_soul.png",
        "name": "Artifact of Soul"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Enemies drop multiple exploding bombs on death.\n\n▲ ● ▲\n● ● ●\n▲ ● ▲\n",
        "image": "artifacts/artifact_of_spite.png",
        "name": "Artifact of Spite"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Monster spawns are doubled, but monster health is halved.\n\n● ● ▲\n▲ ◊ ▲\n▲ ● ●\n",
        "image": "artifacts/artifact_of_swarms.png",
        "name": "Artifact of Swarms"
      },
      {
        "background": "backgrounds/box_outline.png",
        "description": "Your relentless doppelganger will invade every 10 minutes.\n\n◊ ■ ■\n◊ ● ■\n◊ ■ ■\n",
        "image": "artifacts/artifact_of_vengeance.png",
        "name": "Artifact of Vengeance"
      }
    ],
    "name": "Artifacts"
  }
];
