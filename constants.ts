import { Fruit, Article, Sword } from './types';

export const FRUITS: Fruit[] = [
  // Common
  { name: 'Rocket', rarity: 'Common', type: 'Natural', price: '$5,000', tier: 'D', description: 'The cheapest fruit, replaced the old Kilo. Good for early travel.' },
  { name: 'Spin', rarity: 'Common', type: 'Natural', price: '$7,500', tier: 'D', description: 'Low-tier utility fruit with spinning movement.' },
  { name: 'Chop', rarity: 'Common', type: 'Natural', price: '$30,000', tier: 'C', description: 'Provides passive immunity to all sword attacks.' },
  { name: 'Spring', rarity: 'Common', type: 'Natural', price: '$60,000', tier: 'D', description: 'Allows for quick jumping and high mobility.' },
  { name: 'Bomb', rarity: 'Common', type: 'Natural', price: '$80,000', tier: 'C', description: 'Heavy explosive attacks with decent area damage.' },
  { name: 'Spike', rarity: 'Common', type: 'Natural', price: '$180,000', tier: 'C', description: 'Ground-based spike attacks for crowd control.' },

  // Uncommon
  { name: 'Smoke', rarity: 'Uncommon', type: 'Elemental', price: '$100,000', tier: 'B', description: 'Great for early-game grinding due to its elemental (Logia) status.' },
  { name: 'Flame', rarity: 'Uncommon', type: 'Elemental', price: '$250,000', tier: 'B', description: 'Strong burn damage and high-speed flying.' },
  { name: 'Eagle', rarity: 'Uncommon', type: 'Beast', price: '$300,000', tier: 'C', description: 'The 2026 rework that replaced the old Falcon fruit. High aerial mobility.' },
  { name: 'Ice', rarity: 'Uncommon', type: 'Elemental', price: '$350,000', tier: 'A', description: 'Excellent for freezing enemies and walking on water.' },
  { name: 'Sand', rarity: 'Uncommon', type: 'Elemental', price: '$450,000', tier: 'B', description: 'Strong stuns and area control but weak against water.' },
  { name: 'Dark', rarity: 'Uncommon', type: 'Elemental', price: '$500,000', tier: 'A', description: 'High-tier stun fruit used heavily in PvP combos.' },
  { name: 'Diamond', rarity: 'Uncommon', type: 'Natural', price: '$600,000', tier: 'C', description: 'Significantly increases defensive stats and physical power.' },

  // Rare
  { name: 'Light', rarity: 'Rare', type: 'Elemental', price: '$650,000', tier: 'S', description: 'The undisputed king of the First Sea due to its fast flight and sword.' },
  { name: 'Rubber', rarity: 'Rare', type: 'Natural', price: '$750,000', tier: 'B', description: 'Immune to Rumble and Electric attacks. High physical reach.' },
  { name: 'Ghost', rarity: 'Rare', type: 'Natural', price: '$810,000', tier: 'B', description: 'The spooky rework that replaced the old Revive fruit. Life stealing potential.' },
  { name: 'Magma', rarity: 'Rare', type: 'Elemental', price: '$850,000', tier: 'S', description: 'Highest damage output in the game when awakened.' },
  { name: 'Creation', rarity: 'Rare', type: 'Natural', price: '$800,000', tier: 'B', description: 'The 2026 rework of the old Barrier fruit. Can construct massive constructs to trap foes.' },
  { name: 'Quake', rarity: 'Rare', type: 'Natural', price: '$1,000,000', tier: 'B', description: 'Massive AOE (Area of Effect) attacks that shake the screen.' },

  // Legendary
  { name: 'Buddha', rarity: 'Legendary', type: 'Beast', price: '$1,200,000', tier: 'S+', description: 'The best fruit for grinding in the Second and Third Sea due to hitbox increase.' },
  { name: 'Love', rarity: 'Legendary', type: 'Natural', price: '$1,300,000', tier: 'B', description: 'Summons a best friend to fight with you and has a high fly speed.' },
  { name: 'Spider', rarity: 'Legendary', type: 'Natural', price: '$1,500,000', tier: 'A', description: 'High-skill ceiling PvP fruit with heavy stun strings.' },
  { name: 'Sound', rarity: 'Legendary', type: 'Natural', price: '$1,700,000', tier: 'A', description: 'Musical attacks with high tempo and persistent zone damage.' },
  { name: 'Phoenix', rarity: 'Legendary', type: 'Beast', price: '$1,800,000', tier: 'A', description: 'The premier healing fruit with strong transformation buffs.' },
  { name: 'Portal', rarity: 'Legendary', type: 'Natural', price: '$1,900,000', tier: 'S', description: 'Essential for traveling and "v-spamming" in competitive PvP.' },
  { name: 'Rumble', rarity: 'Legendary', type: 'Elemental', price: '$2,100,000', tier: 'S', description: 'High stun and lightning-fast teleports for competitive play.' },
  { name: 'Blizzard', rarity: 'Legendary', type: 'Elemental', price: '$2,250,000', tier: 'S', description: 'Massive AOE snowstorms that are perfect for crowd control.' },
  { name: 'Pain', rarity: 'Legendary', type: 'Natural', price: '$2,400,000', tier: 'B', description: 'The rework of the old Paw fruit. Heavy focus on shockwaves.' },

  // Mythical
  { name: 'Gravity', rarity: 'Mythical', type: 'Natural', price: '$2,500,000', tier: 'B', description: 'Manipulates the ground and summons meteors from the sky.' },
  { name: 'Mammoth', rarity: 'Mythical', type: 'Beast', price: '$2,700,000', tier: 'S', description: 'High defense and devastating "stampede" attacks.' },
  { name: 'T-Rex', rarity: 'Mythical', type: 'Beast', price: '$2,700,000', tier: 'S', description: 'Heavy physical damage and roar stuns with a transformation.' },
  { name: 'Dough', rarity: 'Mythical', type: 'Natural', price: '$2,800,000', tier: 'S+', description: 'The most popular PvP fruit when awakened. Insane combo potential.' },
  { name: 'Shadow', rarity: 'Mythical', type: 'Natural', price: '$2,900,000', tier: 'A', description: 'Uses "Umbra" meter for massive dark attacks and life drain.' },
  { name: 'Venom', rarity: 'Mythical', type: 'Natural', price: '$3,000,000', tier: 'S', description: 'Passive poison damage that drains HP rapidly over time.' },
  { name: 'Control', rarity: 'Mythical', type: 'Natural', price: '$3,200,000', tier: 'A', description: 'Manipulates objects and players within a massive "Room" dome.' },
  { name: 'Spirit', rarity: 'Mythical', type: 'Natural', price: '$3,400,000', tier: 'S', description: 'Uses Heaven and Hell spirits for different stat buffs and attacks.' },
  { name: 'East Dragon', rarity: 'Mythical', type: 'Beast', price: '$3,500,000', tier: 'S+', description: 'The legendary Azure Dragon from the East. Massive AOE rework and mythical scales.' },
  { name: 'West Dragon', rarity: 'Mythical', type: 'Beast', price: '$3,500,000', tier: 'S+', description: 'The fire-breathing terror of the West. Focused on high single-target burst and flight.' },
  { name: 'Tiger', rarity: 'Mythical', type: 'Beast', price: '$5,000,000', tier: 'S+', description: 'The legendary rework of the old Leopard fruit. Fastest melee fruit in the 2026 meta.' },
  { name: 'Kitsune', rarity: 'Mythical', type: 'Beast', price: '$8,000,000', tier: 'S+', description: 'The highest-priced and fastest fruit in the game with insane dash speed.' },
];

export const SWORDS: Sword[] = [
  // Common
  { name: 'Katana', rarity: 'Common', obtained: 'Starter Island', tier: 'D', description: 'The basic starter sword found in the First Sea.' },
  { name: 'Cutlass', rarity: 'Common', obtained: 'Starter Island', tier: 'D', description: 'An alternative basic starter option for new players.' },
  { name: 'Dual Katana', rarity: 'Common', obtained: 'Starter Island Dealer', tier: 'D', description: 'Cheap, multi-hit starter sword for beginners.' },

  // Uncommon
  { name: 'Iron Mace', rarity: 'Uncommon', obtained: 'Marine Island', tier: 'C', description: 'High knockback weapon, often used for PvE early on.' },
  { name: 'Shark Saw', rarity: 'Uncommon', obtained: 'Middle Town (The Saw)', tier: 'C', description: 'Dropped by the Boss "The Saw" at Middle Town.' },
  { name: 'Triple Katana', rarity: 'Uncommon', obtained: 'Frozen Village Dealer', tier: 'C', description: 'The classic "Zoro-style" beginner sword.' },
  { name: 'Twin Hooks', rarity: 'Uncommon', obtained: 'Captain Elephant Drop', tier: 'B', description: 'Surprisingly fast M1 clicks for its rarity.' },

  // Rare
  { name: 'Pipe', rarity: 'Rare', obtained: 'Sabo (Marine Fortress)', tier: 'B', description: 'Based on Sabo’s weapon; excellent for elemental builds.' },
  { name: 'Trident', rarity: 'Rare', obtained: 'Fishman Lord Drop', tier: 'C', description: 'Standard water-based weapon with decent reach.' },
  { name: 'Soul Cane', rarity: 'Rare', obtained: 'Magma Village', tier: 'A', description: 'Found in a secret location; legendary for its stun-locking meta.' },
  { name: 'Dragon Trident', rarity: 'Rare', obtained: 'Tide Keeper Drop', tier: 'B', description: 'High AOE water attacks that sweep enemies.' },
  { name: 'Gravity Blade', rarity: 'Rare', obtained: 'Fajita Drop', tier: 'B', description: 'Dropped by Fajita; its special move pulls enemies in.' },
  { name: 'Dual-Headed Blade', rarity: 'Rare', obtained: 'Skypiea Dealer', tier: 'C', description: 'Provides very fast M1 attack speed.' },
  { name: 'Longsword', rarity: 'Rare', obtained: 'Diamond Drop (Second Sea)', tier: 'B', description: 'A reliable sword with straightforward slash attacks.' },
  { name: 'Jitte', rarity: 'Rare', obtained: 'Smoke Admiral Drop', tier: 'B', description: 'Smoke-based stuns from the Marine Captain.' },
  { name: 'Warden\'s Sword', rarity: 'Rare', obtained: 'Chief Warden (Impel Down)', tier: 'B', description: 'A balanced PvE sword with good knockback.' },

  // Legendary
  { name: 'Saber', rarity: 'Legendary', obtained: 'Saber Expert Boss', tier: 'S', description: 'The best First Sea sword, especially when upgraded to v2.' },
  { name: 'Midnight Blade', rarity: 'Legendary', obtained: 'El Admin (100 Ectoplasm)', tier: 'A', description: 'Shadowy, fast attacks that are great for combos.' },
  { name: 'Rengoku', rarity: 'Legendary', obtained: 'Ice Castle Hidden Chest', tier: 'S', description: 'A fiery blade found in the Second Sea; high burn damage.' },
  { name: 'Koko', rarity: 'Legendary', obtained: 'Order (Raid)', tier: 'A', description: 'Syncs with Control fruit to increase attack range significantly.' },
  { name: 'Shisui', rarity: 'Legendary', obtained: 'Legendary Sword Dealer', tier: 'S', description: 'One of the three blades needed for True Triple Katana.' },
  { name: 'Saddi', rarity: 'Legendary', obtained: 'Legendary Sword Dealer', tier: 'S', description: 'One of the three blades needed for True Triple Katana.' },
  { name: 'Wando', rarity: 'Legendary', obtained: 'Legendary Sword Dealer', tier: 'S', description: 'One of the three blades needed for True Triple Katana.' },
  { name: 'Tushita', rarity: 'Legendary', obtained: 'Longma (Third Sea)', tier: 'S+', description: 'Incredibly high-damage PvP blade; essential for CDK.' },
  { name: 'Yama', rarity: 'Legendary', obtained: 'Elite Hunter Quest', tier: 'S', description: 'The cursed blade of the Third Sea; requires 30 Elite Pirate kills.' },
  { name: 'Canvander', rarity: 'Legendary', obtained: 'Beautiful Pirate Drop', tier: 'A', description: 'A stylish rapier with exceptional mobility moves.' },
  { name: 'Buddy Sword', rarity: 'Legendary', obtained: 'Cake Queen Drop', tier: 'A', description: 'Dropped by the ruler of Totto Land; great for long-range combos.' },
  { name: 'Spikey Trident', rarity: 'Legendary', obtained: 'Dough King Drop', tier: 'S+', description: 'Mimics Dough fruit moves; the ultimate pull-in weapon.' },
  { name: 'Fox Lamp', rarity: 'Legendary', obtained: 'Kitsune Island Event', tier: 'S+', description: 'A mystical glowing sword from the depths of the sea.' },
  { name: 'Shark Anchor', rarity: 'Legendary', obtained: 'Terrorshark (Monster Crafting)', tier: 'S', description: 'The absolute unit of a weapon for monster hunting.' },

  // Mythical
  { name: 'Dark Blade', rarity: 'Mythical', obtained: 'Gamepass / Admin Drop', tier: 'S+', description: 'The legendary Yoru. Massive damage and iconic green slashes.' },
  { name: 'True Triple Katana', rarity: 'Mythical', obtained: 'Crafting (Shisui+Saddi+Wando)', tier: 'S+', description: 'The peak of Zoro-style swordsmanship. 3-sword style mastery.' },
  { name: 'Hallow Scythe', rarity: 'Mythical', obtained: 'Soul Reaper (Haunted Castle)', tier: 'S', description: 'Massive AOE attacks with life-leech properties.' },
  { name: 'Cursed Dual Katana', rarity: 'Mythical', obtained: 'Crafting (Yama+Tushita)', tier: 'S+', description: 'The #1 sword in the game. Combines the best of both worlds.' },
  { name: 'Dragonheart', rarity: 'Mythical', obtained: 'Third Sea Dragon Event (2026)', tier: 'S+', description: 'The newest Mythical added in the 2026 updates. Massive fire AOE.' },
  { name: 'Triple Dark Blade', rarity: 'Mythical', obtained: 'Admin Only', tier: 'S+', description: 'Ultra-rare admin weapon. You cannot obtain this through normal means.' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Ultimate First Sea Guide',
    description: 'Master levels 0-700 with ease. Where to farm, which quests to take, and when to move to the fountain.',
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/how-to-get-to-second-sea-blox-fruits.jpg',
    author: 'SeaPro_99',
    date: 'Oct 12, 2025',
    content: `🌊 The Ultimate First Sea Guide: From Zero to Level 700\n\nWelcome to the beginning of your journey in Blox Fruits. The First Sea (often called the Old World) is where legends are born. Whether you want to be a master swordsman or a powerhouse fruit user, this guide will get you to the Second Sea faster than a Light Fruit flight.\n\n🏗️ Phase 1: The Basics (Levels 1 – 150)\nStarter Island (Lv. 1–15)\nYou start with nothing but your fists.\nThe Goal: Grind the Bandit quest until you reach Level 15.\nPro Tip: Don't buy the Katana or Cutlass yet. Save your money for your first Fruit.\n\nJungle Island (Lv. 15–30)\nThe Gacha: This is the most important island. Locate the Blox Fruits Gacha NPC. This is where you spend Beli to "spin" for a random fruit.\nThe Fruit Goal: Pray for Light, Ice, or Magma. These are "Elemental" (Logia) fruits. They make you immune to physical attacks from NPCs that are lower level than you!\n\nPirate Village & Desert (Lv. 30–90)\nPirate Village: Focus on the Bobby boss. He drops the Dual Katana if you're lucky.\nDesert: The Desert Bandits are spread out. Use a fruit with AOE (Area of Effect) like Bomb or Flame to group them together.\n\n⚔️ Phase 2: Finding Your Power (Levels 150 – 400)\nFrozen Village (Lv. 90–120)\nMANDATORY STEP: Go to the hidden cave here and talk to the Ability Teacher. Buy Aura (Haki), Air Jump (Skyjump), and Flash Step. You cannot survive PvP without these.\n\nMarine Fortress (Lv. 120–190)\nThis is a great place to grind "Vice Admiral." He has a high respawn rate and gives massive XP.\n\nSkylands (The Clouds) (Lv. 150–300)\nIf you have the Light Fruit, this place is a breeze.\nSecret: There is a hidden area behind a destructible cloud. Inside, you can find the Master Swordsman who sells the Triple Katana.\n\n🐅 Phase 3: The Tiger's Path (Levels 400 – 700)\nUnderwater City (Lv. 375–450)\nWatch out for the Fishman Lord. He has two lives! Use the Soul Cane (bought from Magma Village) to stun him if he gets too close.\n\nUpper Skylands (Lv. 450–575)\nThis is where you meet Enel (Thunder God). If you manage to get a Tiger Fruit early, your high speed will allow you to dodge his lightning strikes easily.\n\nFountain City (Lv. 625–700)\nThe final stretch. The Galley Pirates here are tough.\nThe Strategy: Use the "Wall Trick." Stand behind a wall or a house and use long-range fruit moves to hit the NPCs without them touching you.\n\n🎒 The 2026 "Pro" Loadout for First Sea\nIf you want to be "maxed" before entering the Second Sea, aim for this inventory:\n\nBest Fruit: Light (for speed) or Buddha (for reach). If you are lucky, the reworked Eagle fruit is amazing for mobility.\n\nBest Sword: Saber. You get this by completing the Jungle Puzzle and defeating the Saber Expert. It has the highest damage in the First Sea.\n\nBest Accessory: Vice Admiral’s Cape. It gives you extra Energy and Health.\n\nBest Gun: Cannon. It's slow, but the explosion damage helps clear mobs of enemies.\n\n🚨 Final Checklist Before Second Sea\nOnce you hit Level 700, go to the Prison island. Talk to the Military Detective. He will give you a key to fight the Ice Admiral. Beat him, and you will unlock the path to the Second Sea!\n\nSensei's Final Warning: "The Second Sea is full of Bounty Hunters. Make sure your Aura is fully trained (Black skin) before you leave, or you'll get clapped in seconds!"`
  },
  {
    id: '2',
    title: 'Top 5 PvP Fruits for 2026',
    description: 'A deep dive into why Tiger, Kitsune, and Dough dominate the current meta. Learn the best combos for rank 30M bounty.',
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/blox-fruits-tier-list-1.jpg',
    author: 'BountyHunter',
    date: 'Nov 02, 2025',
    content: `🥊 Top 5 PvP Fruits for 2026: The Bounty Hunter's Selection\n\n1. Dough (Awakened) – The Combo King\nEven with all the new updates, Awakened Dough remains the gold standard for combo artists. Its moves have incredible "stickiness," making it almost impossible for enemies to Flash Step away once caught.\n\nBest Move: Piercing Clothesline (extremely long stun).\n\nThe Go-to Combo: Dough V -> Dough C -> Sanguine Art C -> CDK Z -> Dough X.\n\nWhy it’s Top 1: The sheer amount of stun time allows you to cycle through your entire inventory of weapons.\n\n2. Tiger (Leopard Rework) – The Speed Demon\nThe Tiger rework took the old Leopard's speed and added "Bleed" damage and better Instinct-breaking moves. It is the best fruit for aggressive players who like to stay in the opponent's face.\n\nBest Move: Afterimage Assault (unpredictable movement + damage).\n\nThe Go-to Combo: Tiger C (to break Instinct) -> Godhuman Z -> Tiger X -> Soul Guitar Z.\n\nWhy it’s Top 2: Its transformation gives a massive defense buff, allowing you to survive mistakes that would kill other users.\n\n3. Kitsune – The Hit-and-Run Specialist\nKitsune is arguably the most annoying fruit to fight. Its tail-meter mechanic provides a speed boost that makes you nearly unhittable if you know how to move.\n\nBest Move: Swift Assault (C Move) – a high-speed dash that auto-tracks nearby enemies.\n\nThe Go-to Combo: Kitsune C -> Kitsune Z -> Shark Anchor Z -> Kitsune X.\n\nWhy it’s Top 3: It has the highest passive "burn" damage in the game, meaning enemies lose HP even when you aren't hitting them.\n\n4. Portal – The Strategy Master\nPortal isn't about the fruit's damage—it's about positioning. In 2026, Portal users are the most feared bounty hunters because they can disappear and reappear behind you in a split second.\n\nBest Move: Parallel Escape (perfect for avoiding high-damage ultimates).\n\nThe Go-to Combo: Portal V (Dimensional Rift) -> Wait for exit -> CDK X -> Soul Guitar Z -> Godhuman C.\n\nWhy it’s Top 4: It is the ultimate "Sword Main" fruit. It provides the mobility needed to land slow, heavy-hitting sword moves.\n\n5. Fiend Yeti (Valentine’s 2026 Mutation) – The New Powerhouse\nThe Fiend Yeti is the newest "Limited Mutation" for the Yeti fruit. It combines massive physical AOE with purple fire "burn" effects.\n\nBest Move: Infernal Execution (a grab move that slams the enemy for 5k+ damage).\n\nThe Go-to Combo: Yeti Z -> Yeti C -> Dragonheart Z (New 2026 Sword) -> Yeti X.\n\nWhy it’s Top 5: Its 35% passive defense buff makes it the "Tank" of the PvP world.\n\n💡 Sensei’s Pro Tip for Your Build\n"In 2026, don't just rely on your fruit. Every top-tier combo MUST include the Soul Guitar Z-move to reset your cooldowns and the Cursed Dual Katana for the finisher. If you don't have these, you're just a 'Fruit Spammer'—and those get clapped in the Third Sea!"`
  },
  {
    id: '3',
    title: 'How to Awaken Your Fruit',
    description: 'Step-by-step guide on raids, fragments, and the awakening scientist in the Cold and Hot island.',
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/ice-admiral-blox-fruits-1.jpg',
    author: 'RaidMaster',
    date: 'Dec 05, 2025',
    content: `⚡ How to Awaken Your Fruit: The Definitive 2026 Guide\n\nSo, you’ve reached the Second Sea and realized your fruit moves aren't hitting like they used to? It’s time to Awaken. Awakening transforms your basic abilities into Mythical-tier powers, giving them more damage, better range, and insane visual effects.\n\n🏗️ The Basics: How to Start a Raid\nTo awaken a fruit, you must complete Raids.\nRequirement: You must be at least Level 1100 to buy a Raid Chip (though you can join a raid at Level 700+ if someone else hosts).\nThe Secret Lab: Head to Hot and Cold Island in the Second Sea. Inside the large Laboratory on the cold side, enter this code into the computer panels:\n🔴 Red → 🔵 Blue → 🟢 Green → 🔵 Blue\nThe Chip: Talk to the Mysterious Scientist in the secret room that opens.\nCost: 100,000 Beli (every 2 hours) OR trade any physical fruit to skip the timer.\n\n⚔️ Normal vs. Advanced Raids\nNot all awakenings are created equal. In the 2026 meta, there are two distinct paths:\n\n1. Normal Raids\nThese are the standard 5-island raids.\nEligible Fruits: Flame, Ice, Quake, Light, Dark, Spider, Rumble, Magma, Buddha, and Sand.\nDifficulty: Easy to Medium.\nReward: At the end, you are teleported to the Mysterious Entity who sells you the next awakened move for Fragments.\n\n2. Advanced Raids\nThese are much harder and require special puzzles to unlock the "Advanced Chips."\nEligible Fruits: Dough and Phoenix.\nUnlocking Dough Raids: You must defeat the Dough King in the Third Sea to get the Red Key, then talk to the Cake Scientist.\nUnlocking Phoenix Raids: You need 400 Mastery on Phoenix and must talk to the Sick Scientist in the Third Sea.\nRework Note: In the 2026 Tiger Update, some "Mutated" raids have been added for fruits like Tiger and Kitsune—these are currently the hardest content in the game!\n\n🤔 Which One is Good? (The Verdict)\nBuddha: The Best Overall - You only need to awaken the Z-move (Shift). It makes you a giant and is the #1 way to grind to max level.\nMagma: The Damage King - Fully awakened Magma has the highest DPS in the game and lets you walk on water.\nDough: The PvP God - Advanced Awakening is expensive, but its "Piercing Clothesline" move is the best combo starter in 2026.\nLight: The Speedster - Best for First and Second Sea. Its awakened flight is the fastest travel method for questing.\n\n💡 Sensei's Recommendation:\n"If you are below Level 2000, Awaken Buddha FIRST. It makes every other raid 10x easier. Once you have enough fragments, switch to Tiger or Dough for PvP!"\n\n💰 The Cost of Power\nBe prepared to grind! Fully awakening a fruit usually costs around 14,500 to 18,500 Fragments.\nPro Tip: Don't spend your fragments on Stat Resets or Fighting Styles until your main fruit is fully awakened!\n\n💰 Normal Raid Costs\nNormal raids (Flame, Ice, Light, Magma, Buddha, etc.) follow a set pattern. You must unlock them in order: Z → X → C → V → F.\nZ | 1st Move | 500 Fragments\nX | 2nd Move | 3,000 Fragments\nC | 3rd Move | 4,000 Fragments\nV | Ultimate | 5,000 Fragments\nF | Flight/Utility | 2,000 Fragments\nTOTAL: 14,500 Fragments\nNote: Quake only has 4 moves, and Rumble has an extra "Tap" move for 5,000 fragments.\n\n🔥 Advanced Raid Costs (Dough & Phoenix)\nAdvanced fruits are more expensive and harder to complete. They also include a "Tap" move (M1).\nZ | 500 Fragments\nX | 3,000 Fragments\nC | 4,000 Fragments\nV | 5,000 Fragments\nF | 2,000 Fragments\nTAP (M1) | 4,000 Fragments\nTOTAL: 18,500 Fragments\n\n🔓 How to Unlock Advanced Raids\nYou cannot just buy these chips from the start. You have to prove you are worthy.\n\n1. Dough Raid Unlock\nRequirement: Level 1100+ and access to the Third Sea.\nThe Key: You must defeat the Dough King (summoned with 500 kills and a Sweet Chalice). He drops a Red Key with a 100% chance if you deal 10% damage.\nThe Scientist: Take that Red Key to the Cake Scientist in the Candy Castle (Sea of Treats). Once you unlock the door, you can buy the Dough Chip for 1,000 Fragments.\n\n2. Phoenix Raid Unlock\nRequirement: Level 1100+ and 400+ Mastery on the Phoenix Fruit.\nThe Scientist: Find the Sick Scientist in the Third Sea (located in a red building in the Sea of Treats).\nThe Quest: You must have Phoenix equipped and use your "Regeneration Flames" to heal him. Once healed, he allows you to buy the Phoenix Chip for 1,000 Fragments.\n\n🐯 A Note on "Tiger" (Leopard Rework)\nUnlike Dough or Phoenix, the Tiger Fruit (formerly Leopard) cannot be awakened through raids.\nTransformation System: Instead of fragments, you unlock its true power by reaching 300 Mastery to unlock the "Ferocious Feline" form (V-move).\nBlazing Form: You fill a "Fire Meter" by landing hits. At 100%, you press V again to enter Blazing Form, which is essentially its "awakened" state. No fragments needed, just skill!\n\n🚀 Which 1 is Good? (Sensei’s Choice)\nBuddha (Normal): Best for everyone. Just awaken the Z-move (500 Frags) and you're set for life.\nDough (Advanced): Best for PvP. Once you get that V-move, you become a combo god.\nMagma (Normal): Best for damage. It’s cheap (14.5k) and let’s you solo Sea Beasts.`
  },
  {
    id: '4',
    title: 'The Blox Fruits Trading Handbook',
    description: 'Master the February 2026 trading economy. Learn about Buddha units, how to spot scams, and professional value lists.',
    image: 'https://i.ytimg.com/vi/6pX6mN6_q60/maxresdefault.jpg',
    author: 'MarketMaster',
    date: 'Feb 15, 2026',
    content: `💹 The Blox Fruits Trading Handbook (February 2026)\n\n1. Professional Trading Fruit Values\nIn the Second and Third Sea, players don't trade using Beli. Instead, they use "Buddha Units." If a fruit is worth 1.0, it is equal to one Buddha.\n\n🔴 Mythical Tier (The High Values)\nFruit | Value (Buddha Units) | Status\nKitsune | 10.0 | High Demand\nTiger (Rework) | 9.5 | Extremely Hyped\nDragon | 9.0 | Value Rising\nLeopard (Legacy) | 4.0 | Dropping\nDough | 3.5 | Very Stable\nT-Rex | 2.5 | Stable\nSpirit / Venom | 2.0 | Common Mythical\nMammoth | 1.8 | Fair Demand\n\n🟣 Legendary Tier (The Trading Currency)\nFruit | Value (Buddha Units) | Status\nBuddha | 1.0 | The Standard\nPortal | 1.0 | High Demand\nBlizzard / Rumble | 0.8 | Fair\nSound / Shadow | 0.7 | Low Demand\n\n2. How to be a Good Trader\nThe "Buddha" Rule: Always try to keep at least one Buddha or Portal in your inventory. Because their value is exactly 1.0, they are like cash. People will always accept them.\nDon't "Stockpile" Low Tiers: If you have 4 Quakes, trade them all for 1 Buddha. It is better to have one good fruit than four medium ones that nobody wants.\nBe Patient: Scammers use "rush tactics." If someone says "Quick, accept now or I leave," they are usually trying to trick you. Take your time to check the value.\n\n3. How to Deal with Scammers (Stay Safe)\nIn the 2026 meta, scammers are getting clever. Here is how you protect yourself and "beat" them at their own game:\n\nThe "Link" Trick: If someone sends you a link to their "Roblox Profile" to add them, do not click it. It is a fake site designed to steal your password.\nHow to beat them: Tell them, "I don't click links. Give me your username, and I will search for you on the official Roblox app." They will usually block you immediately because they know they can't hack you.\n\nThe "Trust Trade" Trap: They ask you to give your fruit first, and they promise to give a "Permanent Fruit" in the next trade.\nHow to beat them: Say, "If you have a Permanent Fruit, put it in the trade window now. If you can't put it in the window, I don't trade." Never give your items for a promise.\n\nThe "Last Second Switch": You both put good fruits in. Right before you both click "Accept," they quickly remove their fruit and put a "Rocket" or "Spin" fruit, hoping you won't notice.\nHow to beat them: Always wait 5 seconds before clicking the final "Confirm" button. Look at the icons one last time. If they switched it, cancel the trade and report them.\n\n🚀 Sensei’s Choice\nTrade Checker: Always use a 'Win' or 'Loss' mindset before clicking accept. Ensure your inventory value stays above 5 Buddha units for trading liquidity!`
  }
];

export const STOCK_FRUITS = ['Kitsune', 'Tiger', 'Dough', 'Buddha', 'East Dragon', 'West Dragon', 'Portal', 'Blizzard', 'Creation'];

export const SHOP_LINK = 'https://www.roblox.com/games/2753915549/Blox-Fruits';
