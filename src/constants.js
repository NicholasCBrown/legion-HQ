const data = {
  unitTemplate: {
    cost: 0,
    isUnique: false,
    faction: '',
    name: '',
    type: '',
    rank: '',
    upgradeBar: [],
    products: []
  },
  upgradeTemplate: {
    cost: 0,
    isUnique: false,
    name: '',
    type: '',
    requirements: [],
    products: [],
    faction: '',
    rank: 'upgrade'
  },
  commandTemplate: {
    pips: 0,
    name: '',
    commander: '',
    faction: '',
    products: []
  },
  cards: [
    {
      cost: 26,
      isUnique: false,
      name: 'Proton Charge Saboteur',
      type: 'heavy weapon',
      requirements: ['Rebel Commandos'],
      products: [],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Overcharged Generator',
      type: 'generator',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Improvised Orders',
      type: 'command',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'HQ Uplink',
      type: 'comms',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 8,
      isUnique: false,
      name: 'Emergency Stims',
      type: 'gear',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 8,
      isUnique: false,
      name: 'Duck and Cover',
      type: 'training',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 28,
      isUnique: false,
      name: 'DH-447 Sniper',
      type: 'heavy weapon',
      requirements: ['Rebel Commandos'],
      products: [],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Barrage Generator',
      type: 'generator',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 60,
      isUnique: false,
      faction: 'rebels',
      name: 'Rebel Commandos',
      type: 'trooper',
      rank: 'special',
      upgradeBar: ['heavy weapon', 'training', 'comms', 'gear', 'grenades'],
      products: []
    },
    {
      cost: 16,
      isUnique: false,
      faction: 'rebels',
      name: 'Rebel Commandos Strike Team',
      type: 'trooper',
      rank: 'special',
      upgradeBar: ['heavy weapon', 'training', 'comms', 'gear', 'grenades'],
      products: []
    },
    {
      cost: 90,
      isUnique: true,
      faction: 'rebels',
      name: 'Leia Organa',
      type: 'trooper',
      rank: 'commander',
      upgradeBar: ['command', 'command', 'gear'],
      products: []
    },
    {
      cost: 120,
      isUnique: true,
      faction: 'rebels',
      name: 'Han Solo',
      type: 'trooper',
      rank: 'commander',
      upgradeBar: ['command', 'training', 'gear'],
      products: []
    },
    {
      cost: 55,
      isUnique: false,
      faction: 'empire',
      name: 'E-Web Heavy Blaster Team',
      type: 'emplacement trooper',
      rank: 'support',
      upgradeBar: ['comms', 'generator'],
      products: []
    },
    {
      cost: 70,
      isUnique: false,
      faction: 'rebels',
      name: '1.4 Laser Cannon Team',
      type: 'emplacement trooper',
      rank: 'support',
      upgradeBar: ['comms', 'generator'],
      products: []
    },
    {
      cost: 160,
      isUnique: true,
      faction: 'rebels',
      name: 'Luke Skywalker',
      type: 'trooper',
      rank: 'commander',
      upgradeBar: ['force', 'force', 'gear'],
      products: ['swl01']
    },
    {
      cost: 40,
      isUnique: false,
      faction: 'rebels',
      name: 'Rebel Troopers',
      type: 'trooper',
      rank: 'corps',
      upgradeBar: ['heavy weapon', 'personnel', 'gear', 'grenades'],
      products: ['swl01', 'swl05']
    },
    {
      cost: 44,
      isUnique: false,
      faction: 'rebels',
      name: 'Fleet Troopers',
      type: 'trooper',
      rank: 'corps',
      upgradeBar: ['heavy weapon', 'personnel', 'gear', 'grenades'],
      products: []
    },
    {
      cost: 55,
      isUnique: false,
      faction: 'rebels',
      name: 'AT-RT',
      type: 'ground vehicle',
      rank: 'support',
      upgradeBar: ['pilot', 'hardpoint', 'hardpoint', 'hardpoint', 'comms'],
      products: ['swl01', 'swl04']
    },
    {
      cost: 175,
      isUnique: false,
      faction: 'rebels',
      name: 'T-47 Airspeeder',
      type: 'repulsor vehicle',
      rank: 'heavy',
      upgradeBar: ['pilot', 'hardpoint', 'comms'],
      products: ['swl09']
    },
    {
      cost: 200,
      isUnique: true,
      faction: 'empire',
      name: 'Darth Vader',
      type: 'trooper',
      rank: 'commander',
      upgradeBar: ['force', 'force', 'force'],
      products: ['swl01']
    },
    {
      cost: 80,
      isUnique: true,
      faction: 'empire',
      name: 'General Veers',
      type: 'trooper',
      rank: 'commander',
      upgradeBar: ['command', 'command', 'gear'],
      products: []
    },
    {
      cost: 44,
      isUnique: false,
      faction: 'empire',
      name: 'Stormtroopers',
      type: 'trooper',
      rank: 'corps',
      upgradeBar: ['heavy weapon', 'personnel', 'gear', 'grenades'],
      products: ['swl01', 'swl07']
    },
    {
      cost: 48,
      isUnique: false,
      faction: 'empire',
      name: 'Snowtroopers',
      type: 'trooper',
      rank: 'corps',
      upgradeBar: ['heavy weapon', 'personnel', 'gear', 'grenades'],
      products: []
    },
    {
      cost: 90,
      isUnique: false,
      faction: 'empire',
      name: '74-Z Speeder Bikes',
      type: 'repulsor vehicle',
      rank: 'support',
      upgradeBar: ['comms'],
      products: ['swl01', 'swl06']
    },
    {
      cost: 195,
      isUnique: false,
      faction: 'empire',
      name: 'AT-ST',
      type: 'ground vehicle',
      rank: 'heavy',
      upgradeBar: ['pilot', 'hardpoint', 'hardpoint', 'hardpoint', 'comms'],
      products: ['swl08']
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Battle Meditation',
      type: 'force',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Force Push',
      type: 'force',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 15,
      isUnique: false,
      name: 'Force Reflexes',
      type: 'force',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Saber Throw',
      type: 'force',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: false,
      name: 'Force Choke',
      type: 'force',
      requirements: ['dark side'],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: false,
      name: 'Jedi Mind Trick',
      type: 'force',
      requirements: ['light side'],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 6,
      isUnique: false,
      name: 'Targeting Scopes',
      type: 'gear',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 3,
      isUnique: false,
      name: 'Grappling Hooks',
      type: 'gear',
      requirements: [],
      products: ['swl07'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 3,
      isUnique: false,
      name: 'Environmental Gear',
      type: 'gear',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 32,
      isUnique: false,
      name: 'MPL-57 Ion Trooper',
      type: 'heavy weapon',
      requirements: ['Rebel Troopers'],
      products: ['swl01', 'swl05'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 22,
      isUnique: false,
      name: 'Z-6 Trooper',
      type: 'heavy weapon',
      requirements: ['Rebel Troopers'],
      products: ['swl01', 'swl05'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Rebel Trooper',
      type: 'personnel',
      requirements: ['Rebel Troopers'],
      products: ['swl01', 'swl05'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 24,
      isUnique: false,
      name: 'DLT-19 Stormtrooper',
      type: 'heavy weapon',
      requirements: ['Stormtroopers'],
      products: ['swl01', 'swl07'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 34,
      isUnique: false,
      name: 'HH-12 Stormtrooper',
      type: 'heavy weapon',
      requirements: ['Stormtroopers'],
      products: ['swl01', 'swl07'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 11,
      isUnique: false,
      name: 'Stormtrooper',
      type: 'personnel',
      requirements: ['Stormtroopers'],
      products: ['swl01', 'swl07'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: false,
      name: 'Impact Grenades',
      type: 'grenades',
      requirements: [],
      products: ['swl05', 'swl07'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: false,
      name: 'Concussion Grenades',
      type: 'grenades',
      requirements: [],
      products: ['swl01'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 15,
      isUnique: false,
      name: 'Comms Jammer',
      type: 'comms',
      requirements: [],
      products: ['swl04', 'swl06', 'swl08'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Long-Range Comlink',
      type: 'comms',
      requirements: [],
      products: ['swl01', 'swl04', 'swl06', 'swl08'],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 30,
      isUnique: false,
      name: 'AT-RT Rotary Blaster',
      type: 'hardpoint',
      requirements: ['AT-RT'],
      products: ['swl01', 'swl04'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 25,
      isUnique: false,
      name: 'AT-RT Flamethrower',
      type: 'hardpoint',
      requirements: ['AT-RT'],
      products: ['swl01', 'swl04'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: true,
      name: 'Wedge Antilles',
      type: 'pilot',
      requirements: ['repulsor vehicle', 'rebels'],
      products: ['swl09'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 20,
      isUnique: false,
      name: 'Ax-108 Ground Buzzer',
      type: 'hardpoint',
      requirements: ['T-47 Airspeeder'],
      products: ['swl09'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 8,
      isUnique: false,
      name: 'Mo/Dk Power Harpoon',
      type: 'hardpoint',
      requirements: ['T-47 Airspeeder'],
      products: ['swl09'],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: true,
      name: 'General Weiss',
      type: 'pilot',
      requirements: ['ground vehicle', 'empire'],
      products: ['swl08'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 20,
      isUnique: false,
      name: '88 Twin Light Blaster Cannon',
      type: 'hardpoint',
      requirements: ['AT-ST'],
      products: ['swl08'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'AT-ST Mortar Launcher',
      type: 'hardpoint',
      requirements: ['AT-ST'],
      products: ['swl08'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 15,
      isUnique: false,
      name: 'DW-3 Concussion Grenade Launcher',
      type: 'hardpoint',
      requirements: ['AT-ST'],
      products: ['swl08'],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 10,
      isUnique: false,
      name: 'Commanding Presence',
      type: 'command',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 5,
      isUnique: false,
      name: 'Esteemed Leader',
      type: 'command',
      requirements: [],
      products: [],
      faction: '',
      rank: 'upgrade'
    },
    {
      cost: 11,
      isUnique: false,
      name: 'Fleet Trooper',
      type: 'personnel',
      requirements: ['Fleet Troopers'],
      products: [],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 23,
      isUnique: false,
      name: 'Scatter Gun Trooper',
      type: 'heavy weapon',
      requirements: ['Fleet Troopers'],
      products: [],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 33,
      isUnique: false,
      name: 'MPL-57 Barrage Trooper',
      type: 'heavy weapon',
      requirements: ['Fleet Troopers'],
      products: [],
      faction: 'rebels',
      rank: 'upgrade'
    },
    {
      cost: 12,
      isUnique: false,
      name: 'Snowtrooper',
      type: 'personnel',
      requirements: ['Snowtroopers'],
      products: [],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 34,
      isUnique: false,
      name: 'T-7 Ion Snowtrooper',
      type: 'heavy weapon',
      requirements: ['Snowtroopers'],
      products: [],
      faction: 'empire',
      rank: 'upgrade'
    },
    {
      cost: 20,
      isUnique: false,
      name: 'Flametrooper',
      type: 'heavy weapon',
      requirements: ['Snowtroopers'],
      products: [],
      faction: 'empire',
      rank: 'upgrade'
    }
  ],
  commands: [
    {
      pips: 3,
      name: 'Assault',
      commander: '',
      faction: '',
      products: ['swl01']
    },
    {
      pips: 2,
      name: 'Push',
      commander: '',
      faction: '',
      products: ['swl01']
    },
    {
      pips: 1,
      name: 'Ambush',
      commander: '',
      faction: '',
      products: ['swl01']
    },
    {
      pips: 3,
      name: 'Master of Evil',
      commander: 'Darth Vader',
      faction: 'empire',
      products: ['swl01']
    },
    {
      pips: 3,
      name: 'Imperial Discipline',
      commander: 'General Veers',
      faction: 'empire',
      products: []
    },
    {
      pips: 2,
      name: 'New Ways to Motivate Them',
      commander: 'Darth Vader',
      faction: 'empire',
      products: ['Darth Vader']
    },
    {
      pips: 2,
      name: 'Evasive Maneuvers',
      commander: 'General Veers',
      faction: 'empire',
      products: []
    },
    {
      pips: 1,
      name: 'Maximum Firepower',
      commander: 'General Veers',
      faction: 'empire',
      products: []
    },
    {
      pips: 1,
      name: 'Implacable',
      commander: 'Darth Vader',
      faction: 'empire',
      products: ['swl01']
    },
    {
      pips: 3,
      name: 'Return of the Jedi',
      commander: 'Luke Skywalker',
      faction: 'rebels',
      products: ['swl01']
    },
    {
      pips: 3,
      name: 'Somebody Has to Save Our Skins',
      commander: 'Leia Organa',
      faction: 'rebels',
      products: []
    },
    {
      pips: 2,
      name: 'My Ally is the Force',
      commander: 'Luke Skywalker',
      faction: 'rebels',
      products: ['swl01']
    },
    {
      pips: 2,
      name: 'No Time for Sorrows',
      commander: 'Leia Organa',
      faction: 'rebels',
      products: []
    },
    {
      pips: 1,
      name: 'Son of Skywalker',
      commander: 'Luke Skywalker',
      faction: 'rebels',
      products: ['swl01']
    },
    {
      pips: 1,
      name: 'Coordinated Bombardment',
      commander: 'Leia Organa',
      faction: 'rebels',
      products: []
    },
    {
      pips: 3,
      name: 'Change of Plans',
      commander: 'Han Solo',
      faction: 'rebels',
      products: []
    },
    {
      pips: 0,
      name: 'Sorry About the Mess',
      commander: 'Han Solo',
      faction: 'rebels',
      products: []
    },
    {
      pips: 1,
      name: 'Whipcord Launcher',
      commander: 'Boba Fett',
      faction: 'empire',
      products: []
    },
    {
      pips: 3,
      name: 'Notorious Scoundrels',
      commander: 'Chewbacca',
      faction: 'rebels',
      products: []
    },
    {
      pips: 3,
      name: 'An Entire Legion',
      commander: 'Emperor Palpatine',
      faction: 'empire',
      products: []
    }
  ]
};

export default data;
