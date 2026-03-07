// window.onload=function(){
// console.log(document.body);
// //document.getElementById("cols").addEventListener("click",changePage(element.name));
// }

var arrList = ['','Tough','Heavy Hitter','Smite','More Feats','Hunter','Smash','Guarded','Custom'];


var lanList = ['','Common','Abyssal','Celestial'];
var senseList = ['','darkvision','blindsight','low-light vision'];
var featList = ['Aberrant Tumor', 'Aberration-Bane Caster', 'Aboleth Deceiver', 'Absorb Spirit', 'Abundant Revelations', 'Accomplished Sneak Attacker', 'Accursed Critical', 'Accursed Hex', 
  'Acrobatic', 'Acrobatic Steps', 'Acupuncture Specialist', 'Acute Shot', 'Additional Affiliations', 'Additional Traits', 'Adept Champion', 'Adept Channel', 'Advanced Gathlain Magic', 'Advanced Ranger Trap', 
  'Agent of Fear', 'Agent of Purity', 'Agonizing Obedience', 'Alertness', 'Alien Mindpaths', 'Align Equipment', 'Aligned Crafting', 'Alignment Channel', 'All General Feats', 'Allied Spellcaster', 'Ally Caller', 
  'Alter Binary Mindscape', 'Altitude Affinity', 'Amateur Investigator', 'Ambuscading Spell', 'Amplified Hex', 'Amplified Radiance', 'Amplified Rage', 'Ancestor\'s Visage', 'Ancestral Scorn', 'Ancient Draconic', 
  'Ancient Tradition', 'Angelbane Strike', 'Animal Affinity', 'Animal Ally', 'Animal Call', 'Animal Disguise', 'Animal Soul', 'Antagonize', 'Aphotic Explorer', 'Aquatic Adaption', 'Aquatic Advantage', 
  'Aquatic Squires', 'Arcane Blast', 'Arcane Insight', 'Arcane Jinxer', 'Arcane School Spirit', 'Arcane Shield', 'Arcane Talent', 'Arcane Trap Suppressor', 'Arcane Vendetta', 'Arcing Lob', 'Arctic Adaptation', 
  'Area Jinx', 'Arithmancy', 'Armored Aegis', 'Armored Rider', 'Aspect of the Beast', 'Assisted Ascension', 'Associate', 'Astrological Timing', 'Atheist Abjurations', 'Athletic', 'Augment Calling', 'Augment Summoning', 
  'Aura Flare', 'Aural Insight', 'Auspicious Birth', 'Aversion Tolerance', 'Babble-Peddler', 'Back to Back', 'Bag of Bones', 'Banish Possessor', 'Basic Harmony', 'Bat Shape', 'Battering Repair', 'Battle Cry', 
  'Battle Planner', 'Battle Singer', 'Beast Speaker', 'Beast Speaker Mastery', 'Beguiling Countenance', 'Believer\'s Boon', 'Believer\'s Hands', 'Bend with the Wind', 'Bestow Hope', 'Betrayer', 'Bewildering Koan', 
  'Bilge Rat', 'Biological Lattice', 'Black Marketeer', 'Blackfire Summoning', 'Blasting Charge', 'Blazing Channel', 'Bless Equipment', 'Blessed by a God or Dragon', 'Blessed Hunter', 'Blessed Hunter\'s Focus', 
  'Blessed Hunter\'s Stride', 'Blessed Striker', 'Blessed Waters', 'Blight Guide', 'Blight Survivalist', 'Blighted Critical', 'Blighted Critical Mastery', 'Blinding Light', 'Bloatmage Initiate', 'Block Chakras', 
  'Block Upper Chakras', 'Blood Disciple', 'Blood Hex', 'Blood of Heroes', 'Blood Tide', 'Blood Ties', 'Bloodletting', 'Bloodmarked Flight', 'Blowout Shot Deed', 'Blustering Bluff', 'Body Control', 'Body Mastery', 
  'Bolster Jinx', 'Bolstered Resilience', 'Bonded Mind', 'Bookish Rogue', 'Boon Companion', 'Born of Frost', 'Bouncing Trick', 'Bounteous Body', 'Branded for Retribution', 'Bravery in Action', 'Breadth of Experience', 
  'Bred Commander', 'Brilliant Planner', 'Brilliant Spell Preparation', 'Brutal Obedience', 'Bully Breed', 'Burn! Burn! Burn!', 'Burning Amplification', 'Butterfly\'s Sting', 'Calculating Mind', 'Call Truce', 'Camouflaged Trap', 
  'Careful Flyer', 'Careful Reader', 'Careful Sneak', 'Careful Speaker', 'Cartogramancer', 'Cartwheel Dodge', 'Cat\'s Fall', 'Caustic Slur', 'Cecaelia Focus Tattoo', 'Celestial Obedience', 'Center of Power', 'Chain Challenge', 
  'Chakra Adept', 'Chakra Initiate', 'Chakra Mandala', 'Chakra Master', 'Chance Death', 'Change of Heart', 'Channel Deific Essence', 'Channel Discord', 'Channel Endurance', 'Channel Hate', 'Channel Ray', 'Channel Spirit', 
  'Channel Surge', 'Channel Viciousness', 'Channeled Blessing', 'Channeled Revival', 'Channeled Shield Wall', 'Channeling Scourge', 'Channeling Variance', 'Charming Performance', 'Charnel Soldiers', 'Child of Two Fates', 
  'Child of Two Worlds', 'Childlike', 'Chilled Rock', 'Chilling Amplification', 'Chimeric Adept', 'Chimeric Master', 'Chosen One', 'Chosen One\'s Determination', 'Chosen One\'s Might', 'Chosen One\'s Resilience', 
  'Chosen One\'s Wrath', 'City Sprinter', 'City-Locked', 'Citystep', 'Clarifying Channel', 'Clarity of Pain', 'Cleansing Burst', 'Climbing Vine', 'Cloak of Stone', 'Close Call', 'Cloud Invocation', 'Cloud Step', 
  'Cold Celerity', 'Collector\'s Boon', 'Combat Advice', 'Combat Casting', 'Combat Distraction', 'Combat Medic', 'Command Animals', 'Command Plants', 'Command Undead', 'Commander of Goblinkind', 'Companion Figurine', 
  'Compelling Harmonies', 'Conceal Scent', 'Conceal Spell', 'Conduit Casting', 'Confabulist', 'Connected', 'Consume Power', 'Contingent Channeling', 'Contingent Trick', 'Controlled Patterns', 'Conversion Channel', 
  'Conviction', 'Convincing Persona', 'Cooperative Counterspelling', 'Cooperative Crafting', 'Cooperative Disabling', 'Coordinated Blast', 'Coordinated Reposition', 'Corpse Companion', 'Corrupted Flesh', 'Corsair', 
  'Cosmic Gate', 'Cosmopolitan', 'Countenanced Carbuncle Feats', 'Counterpoint to Inspiration', 'Coven Caster', 'Cover Tracks', 'Craft Cybernetics', 'Craft Pharmaceutical', 'Craft Shoddy Item', 'Craft Technological Arms and Armor', 
  'Craft Technological Item', 'Cranial Adjustment', 'Cranial Implantation', 'Create Enhanced Firearm', 'Create Reliquary Arms and Shields', 'Create Sanguine Elixir', 'Creature Focus', 'Criminal Reputation', 'Critical Conduit', 
  'Crusader\'s Flurry', 'Cry Challenge', 'Crystalline Cloud', 'Cunning', 'Cunning Caster', 'Cunning Killer', 'Cursed Conduit', 'Cursed Item Detection', 'Cut Your Losses', 'Cutting Humiliation', 'Cypher Magic', 'Cypher Script', 
  'Damned Disciple', 'Damned Soldier', 'Dampen Presence', 'Daring Exploit', 'Dark Adept', 'Dark Affinity', 'Darkness Trick', 'Dawn\'s Blessing', 'Deadly Dealer', 'Deadly Kiss', 'Deadly Trap', 'Deadly Troupe', 'Death\'s Host', 
  'Death\'s Nightmare', 'Deceitful', 'Deceptive Exchange', 'Deconstruct Spell', 'Deep Breath', 'Deep Diver', 'Deep Drinker', 'Deep Toxin', 'Deepsight', 'Defending Eidolon', 'Deft Catcher', 'Deft Hands', 'Deft Shootist Deed', 
  'Deific Obedience', 'Delay Blast', 'Delayed Potion', 'Delectable Feint', 'Deliberate Death', 'Demonic Obedience', 'Deny Death', 'Desert Dweller', 'Destroy Identity', 'Destructive Dispel', 'Detect Expertise', 'Devil Sense', 
  'Die for Your Master', 'Diehard', 'Dilettante', 'Dimensional Agility', 'Dimensional Assault', 'Dimensional Dervish', 'Dimensional Maneuvers', 'Dimensional Savant', 'Dimensional Step Up', 'Diplomatic Ruse', 'Dire Bat Shape', 
  'Disable Dweomer', 'Disciplinary Devotee', 'Disconcerting Knowledge', 'Discordant Voice', 'Dislocate', 'Disorienting Maneuver', 'Dispel Focus', 'Dispel Synergy', 'Dispelling Blood', 'Dispelling Critical', 'Dispelling Fist', 
  'Disposable Weapon', 'Disruptive Recall', 'Distant Delivery', 'Distant Jinx', 'Distant Spell Link', 'Distracting Explosion', 'Diverse Obedience', 'Divination Guide', 'Divine Communion', 'Divine Deception', 'Divine Defiance',
  'Divine Denouncer', 'Divine Interference', 'Divine Protection', 'Diviner\'s Delving', 'Dog Killer, Horse Hunter', 'Double Bane', 'Draconic Defender', 'Draconic Discipline', 'Draconic Magic', 'Dragonbane Aura', 'Dragoncrafting', 
  'Dragonheart', 'Dread Poisoner\'s Lore', 'Dreamed Secrets', 'Dreamwalker', 'Drinking Buddy', 'Druidic Decoder', 'Drunkard\'s Recovery', 'Drunken God\'s Blessings', 'Drunken Sing-Along', 'Dryad\'s Apprentice', 'Dryad\'s Attendant', 
  'Dual Enhancement', 'Duck and Cover', 'Eagle Eyes', 'Eagle\'s Resolve', 'Eagle-Eyed', 'Earth Magic', 'Echoes of the First World', 'Eclipse Strike', 'Edge Runner', 'Efficient Focus Shift', 'Effortless Trickery', 'Eldritch Aid', 
  'Eldritch Assault', 'Eldritch Eye', 'Eldritch Heritage', 'Elemental Channel', 'Elemental Claws', 'Elemental Conversion', 'Elemental Focus', 'Elemental Ki', 'Elemental Knowledge', 'Elemental Overload', 'Elf-Magic Defense', 
  'Elongated Cranium', 'Elusive Redirection', 'Embrace of the Dark Fey', 'Emotional Conduit', 'Empath', 'Empathy', 'Empty Threats', 'Endurance', 'Enduring Might', 'Energized Wild Shape', 'Energy Attunement', 'Energy Channel', 
  'Enhanced Gnome Magic', 'Enlightened Noble', 'Ensemble', 'Entwining Stare', 'Ephemeral Tread', 'Escape Route', 'Eschew Materials', 'Esoteric Advantage', 'Esoteric Linguistics', 'Esufey Healing', 'Esufey Might', 'Esufey Retreat', 
  'Esufey Speed', 'Esufey Wings', 'Esufey Wrath', 'Eternal Enmity', 'Evidence Forger', 'Evolved Companion', 'Evolved Familiar', 'Evolved Summoned Monster', 'Exceptional Aid', 'Exorcising Mutilation', 'Exorcist', 'Exorcist\'s Rebuttal', 
  'Exotic Heritage', 'Expanded Arcana', 'Expanded Enhance Arrows', 'Expanded Metakinesis', 'Expanded Phrenic Pool', 'Expanded Preparation', 'Expanded Spell Kenning', 'Expanded Studies', 'Expanded Summon Monster', 'Expansive Trap Ability', 
  'Expeditious Sleuth', 'Experienced Ghost Hunter', 'Experienced Vagabond', 'Expert Boarder', 'Expert Cartographer', 'Expert Driver', 'Expert Explorer', 'Expert Salvager', 'Expert Trainer', 'Exploit Lore', 'Expressionless', 
  'Exquisite Sneak', 'Extend Resonant Power', 'Extended Animal Focus', 'Extended Aspects', 'Extended Bane', 'Extended Scrying', 'Extended Stare', 'Extended Vampiric Focus', 'Extra Amplification', 'Extra Arcana', 'Extra Arcane Pool', 
  'Extra Arcanist Exploit', 'Extra Bane', 'Extra Bombs', 'Extra Cantrips or Orisons', 'Extra Channel', 'Extra Contingency', 'Extra Croaking', 'Extra Crystalline Dust', 'Extra Discovery', 'Extra Evolution', 'Extra Feature', 'Extra Focus Power', 
  'Extra Gnome Magic', 'Extra Grit', 'Extra Hex', 'Extra Inspiration', 'Extra Investigator Talent', 'Extra Invocation', 'Extra Item Slot', 'Extra Ki', 'Extra Lay On Hands', 'Extra Martial Flexibility', 'Extra Mental Focus', 
  'Extra Mercy', 'Extra Mesmerist Tricks', 'Extra Ninja Trick', 'Extra Performance', 'Extra Rage', 'Extra Rage Power', 'Extra Ranger Trap', 'Extra Reservoir', 'Extra Revelation', 'Extra Rogue Talent', 'Extra Slayer Talent', 
  'Extra Spell Synthesis', 'Extra Spontaneous Spell Mastery', 'Extra Summons', 'Extra Surge', 'Extra Touch Treatment', 'Extra Variance', 'Extra Wild Talent', 'Extraplanar Conjunction', 'Extreme Mood Swings', 'Eye for Ingredients', 
  'Eyes of Judgment', 'Eyes of the Twilight', 'Falcon\'s Cry', 'False Casting', 'False Focus', 'False Trail', 'Familiar Bond', 'Familiar Focus', 'Famine Tolerance', 'Fan-Bearer at the King\'s Right Hand', 'Fanged Crown Massacre', 
  'Far-Roaming Familiar', 'Fascinated by the Mundane', 'Fascination Jinx', 'Fast Change', 'Fast Crawl', 'Fast Drinker', 'Fast Empathy', 'Fast Healer', 'Fateful Channel', 'Favor of the Empress of Torrents', 'Favored Community', 
  'Favored Defense', 'Favored Enemy Spellcasting', 'Favored Judgment', 'Favored Prestige Class', 'Fear Eater', 'Fearless Aura', 'Feign Curse', 'Ferocious Horde', 'Fetid Breath', 'Fey Foundling', 'Fey Insight', 'Fey Performance', 
  'Fey Spell Lore', 'Fey Spell Versatility', 'Fey-Guarded', 'Field Repair', 'Fiendish Darkness', 'Fiendish Facade', 'Fiendish Heritage', 'Fiendish Obedience', 'Fiendish Resilience', 'Fiendish Serpent', 'Fiendish Wings', 'Fight On', 
  'Filth Forager', 'Find the Flaw', 'Fire God\'s Blessing', 'Fire Music', 'First General of the East', 'Fleet', 'Flexible Hex', 'Flexible Shadow Jump', 'Flexible Wizardry', 'Flow of Elements', 'Flumefire Rage', 'Flying Tackle', 
  'Focused Disbelief', 'Focused Eidolon', 'Focused Inspiration', 'Focused Overseer', 'Focused Phantom', 'Focused Worker', 'Foebane Magic', 'Fool Magic', 'Forbidden Magic', 'Force Dash', 'Forceful Channel', 'Forester', 'Formula Recollection', 
  'Fortunate Manager', 'Fortunate Ruler', 'Fortune Teller', 'Fox Shape', 'Free Spirit', 'Friend to Animals', 'Friendly Shroud', 'Friendly Switch', 'Frightful Shape', 'Frozen Skin', 'Furious Finish', 'Galley Slave', 'Gather Might', 
  'Gaze Reflection', 'General Feats', 'Genie-Touched Mount', 'Ghost Hunting Team', 'Ghost Whisperer', 'Ghostbane Ichor', 'Giant-Bane Caster', 'Gifts from the Sea', 'Gilded Weapons', 'Gliding Steps', 'Glorious Blaze', 'Glorious Heat', 
  'Gluttonous Gobbler', 'Gnawer', 'Gnome Trickster', 'Go Unnoticed', 'Godless Healing', 'Golden Legion\'s Stayed Blade', 'Golem\'s Conviction', 'Graceful Athlete', 'Grant Initiative', 'Grappled Caster', 'Grasping Tail', 'Gray Dwarf Magic', 
  'Gray Maiden Initiate', 'Great Expectations', 'Great Fortitude', 'Greater Bless Equipment', 'Greater Blighted Critical', 'Greater Blood Frenzy', 'Greater Channel Smite', 'Greater Clandestine Dealings', 'Greater Cloud Invocation', 
  'Greater Dirge of Doom', 'Greater Dispel Focus', 'Greater Eldritch Heritage', 'Greater Elemental Focus', 'Greater Gathlain Magic', 'Greater Meditation Master Meditation', 'Greater Mercy', 'Greater Planar Mentor', 'Greater Skald\'s Vigor', 
  'Greater Spell Focus', 'Greater Spell Penetration', 'Greater Spell Specialization', 'Greater Spelleater', 'Greater Stylized Spell', 'Greater Weapon Shift', 'Greater Wild Empathy', 'Green Faith Acolyte', 'Green Tongue', 'Grenade Expert', 
  'Groundling', 'Group Deliver Touch Spells', 'Group Shared Spells', 'Growth in Ash', 'Guided Hand', 'Guild Emissary', 'Guild Partner', 'Gunslinger', 'Gunsmithing', 'Hammer Guards the Anvil', 'Hand\'s Autonomy', 'Hand\'s Detachment', 
  'Hand\'s Knowledge', 'Hand\'s Sight', 'Hardy Liver', 'Harmonic Sage', 'Harmonic Spell', 'Harrowed', 'Harrowed Summoning', 'Haruspicy', 'Healing Potion', 'Heavenly Bane', 'Heavy Gravity Acclimation', 'Hell Knight Aegis', 'Hell Knight Obedience', 
  'Hell Knight Obsession', 'Hellcat Stealth', 'Helpless Prisoner', 'Heroic Defiance', 'Heroic Recovery', 'Hero\'s Fortune', 'Hidden Presence', 'Hide Worker', 'Hide-Out', 'High Magic Focus', 'Hindrance Dismissal', 'Horse Whisperer', 'Human Guise', 
  'Hydroponic Adaptation', 'Hymn Singer', 'Ice Climber', 'Icy Stare', 'Imperial Conscript', 'Imperial Knight', 'Imperial Squire', 'Implant Bomb', 'Implement Focus', 'Improved Back to Back', 'Improved Bless Equipment', 'Improved Channel', 
  'Improved Collector\'s Boon', 'Improved Conceal Spell', 'Improved Counterspell', 'Improved Day Job', 'Improved Dirge of Doom', 'Improved Duck and Cover', 'Improved Eldritch Heritage', 'Improved Elemental Counterspell', 'Improved Familiar', 
  'Improved Familiar Bond', 'Improved Fiendish Darkness', 'Improved Fiendish Sorcery', 'Improved Flexible Wizardry', 'Improved Great Fortitude', 'Improved Horse Whisperer', 'Improved Iron Will', 'Improved Lay on Hands', 'Improved Learn Ranger Trap', 
  'Improved Legendary Influence', 'Improved Lightning Reflexes', 'Improved Lookout', 'Improved Monster Lore', 'Improved Mounted Archery', 'Improved Natural Poison Harvester', 'Improved Outflank', 'Improved Planar Mentor', 'Improved Plane Shift', 
  'Improved Share Spells', 'Improved Spell Sharing', 'Improved Stalwart', 'Improved Stonecunning', 'Improved Studied Combatant', 'Improved Toxicological Timing', 'Improved Weapon Shift', 'Improvisational Healer', 'Incorporeal Intuition', 
  'Incredible Healer', 'Ineffable Count of the Clock', 'Infectious Weapons', 'Innate Arcana', 'Innate Flexibility', 'Inner Light', 'Insidious Healing', 'Insightful Advice', 'Insightful Delivery', 'Insightful Gaze', 'Inspirational Commander', 
  'Inspired Alchemy', 'Inspired by Fear', 'Inspired Strike', 'Inspiring Mentor', 'Inspiring Talent', 'Instant Alchemy', 'Instant Judgment', 'Intimidating Bane', 'Intimidating Gaze', 'Intimidating Performance', 'Intoxicating Flattery', 
  'Introspective Performance', 'Intrusive Presence', 'Inured to Draconic Majesty', 'Invoke Primal Instinct', 'Ioun Resonance', 'Iron Will', 'Ironclad Logic', 'Ironguts', 'Ironhide', 'Island Blood', 'Jackal Heritage', 'Jinx Alchemy', 
  'Judgment Surge', 'Juju Way', 'Jungle Survivalist', 'Keen Scent', 'Keif Euphoria', 'Keif Healing', 'Keif Magic', 'Keif Rejuvenation', 'Ki Channel', 'Ki Stand', 'Kinetic Counter', 'Kinetic Crafting', 'Kinetic Invocation', 'Kinetic Leap', 
  'Kinslayer', 'Knight of the Twisted Word', 'Knockout Artist', 'Know Master', 'Knowledgeable Spellcaster', 'Kudzu Grappler', 'Lady Luck\'s Guidance', 'Lay of the Land', 'Leadership', 'Leaf Singer', 'Leaping Shot Deed', 'Learn Ranger Trap', 
  'Lector Priest', 'Legacy Of Heroes', 'Legendary Influence', 'Legionnaire\'s Inspiration', 'Lengthy Potion', 'Lesser Spell Synthesis', 'Letter Fury', 'Liberating Critical', 'Liberation Channel', 'Lie Low', 'Life Lure', 'Life-Dominant Soul',
  'Lifebound', 'Lifeless Gaze', 'Light Gravity Acclimation', 'Light Step', 'Lightning Rager', 'Lightning Reflexes', 'Lingering Breath', 'Lingering Performance', 'Live Off the Land', 'Living Fortress', 'Locked Will', 'Lonely Death', 
  'Lovable Scoundrel', 'Loyal To The Death', 'Lucid Dreamer', 'Luck of Heroes', 'Lucky', 'Lucky Halfling', 'Lunging Spell Touch', 'Mage\'s Tattoo', 'Magic Trick', 'Magical Aptitude', 'Majesty of the Yamaraj', 'Major Spell Expertise', 
  'Malicious Eye', 'Manifested Blood', 'Manipulative Agility', 'Manipulative Presence', 'Marcher-Lord of the Cerulean Abyss', 'Mark of Evil', 'Mask Focus', 'Masked By Fear', 'Masked Intent', 'Masked Renown', 'Masked Symbol', 'Master Alchemist', 
  'Master Craftsman', 'Master of Falconry', 'Master of the Ledger', 'Master of Wonders', 'Master Swimmer', 'Maximized Spellstrike', 'Maze Expert', 'Meditation Master', 'Meditative Concentration', 'Menacing Bane', 'Mental Derail', 'Mental Stare', 
  'Mercenary Company Tattoos', 'Merciful Bane', 'Metamagic Invocation', 'Mighty Boughs', 'Mindful Meditation Meditation', 'Mindfulness Mastery Meditation', 'Minor Spell Expertise', 'Minotaur\'s Charge', 'Mirror Kin', 'Mischievous Tail', 
  'Mobile Acrobat', 'Mobile Gathering', 'Monster Spotter', 'Monstrous Companion', 'Monstrous Disguise', 'Monstrous Mask', 'Monstrous Masquerade', 'Monstrous Mount', 'Monstrous Mount Mastery', 'Moonlight Summons', 'Moontouched', 'Motivated March', 
  'Mountain Eyes', 'Mountaineer', 'Mounted Blade', 'Mounted Onslaught', 'Muddled Morals', 'Mutated Shape', 'Mutilating Ritualist', 'Mystic Stride', 'Nameless One', 'Nanite Disruption', 'Natural Pathseeker', 'Natural Poison Antitoxin', 
  'Natural Poison Harvester', 'Natural Ruler', 'Natural Spell', 'Nature Magic', 'Nature Soul', 'Nature\'s Freedom', 'Nature\'s Wrath', 'Necromantic Affinity', 'Needle in a Haystack', 'Nerve-Racking Negotiator', 'Night Sky Hex', 'Night Stalker', 
  'Nightmare Chains', 'Nimble Moves', 'Nimble Natural Summons', 'No Name', 'Noble Scion', 'Noble Stipend', 'Nosoi\'s Spiritsense', 'Noxious Touch', 'Occult Conduit', 'Ogre Crush', 'Old as Dust', 'Omnipresent Mentor', 'One Eye Open', 'One Mind', 
  'One with the Land', 'Open Conduit', 'Oracular Intuition', 'Orator', 'Order Obedience', 'Ordered Mind', 'Ostentatious Display', 'Out of the Sun', 'Outer Planes Traveler', 'Overpowering Stare', 'Overseer of the Two Treasuries', 'Overwhelming Hate', 
  'Overwhelming Phantom', 'Pacify Animal', 'Pack Rat', 'Pack Tactics', 'Painful Anchor', 'Painful Cures', 'Pantheistic Blessing', 'Parry Spell', 'Parting Blast', 'Pass For Human', 'Passing Grace', 'Pathologist', 'Pattern Message', 'Peacemaker', 
  'Peerless Courtier', 'Personal Chronicler', 'Persuasive', 'Persuasive Bribery', 'Pestilent', 'Phalanx Fighter', 'Phantom Ally', 'Phantom Fighter', 'Phantom Fortification', 'Photosynthetic Healing', 'Piercing Chant', 'Pinch Time', 'Plague Resistance', 
  'Plains Nomad', 'Planar Focus', 'Planar Heritage', 'Planar Hunter', 'Planar Mentor', 'Planar Preservationist', 'Planar Survivor', 'Planar Wanderer', 'Planar Wild Shape', 'Planewalker\'s Insight', 'Planned Spontaneity', 'Play to the Crowd', 
  'Poison Focus', 'Poison Resin', 'Poison Shot Deed', 'Poisoner\'s Channel', 'Poppet Familiar', 'Possessed Hand', 'Potent Holy Symbol', 'Powerful Poisoning', 'Powerful Shape', 'Powerful Tongue', 'Practiced Dreamer', 'Practiced Leadership', 
  'Practiced Ritualist', 'Practiced Tactician', 'Precocious Youth', 'Preferred Spell', 'Pressure Adept', 'Prestigious Spellcaster', 'Primal Ancestry', 'Primal Kineticist', 'Prodigy', 'Profane Studies', 'Prophetic Visionary', 'Protective Channel', 
  'Protector\'s Strike', 'Proxy Summoning', 'Psychic Adept', 'Psychic Defender', 'Psychic Disciple', 'Psychic Healing', 'Psychic Maestro', 'Psychic Sensitivity', 'Psychic Virtuoso', 'Pure Faith', 'Purging Emesis', 'Purifying Channel', 'Putrid Summons', 
  'Quah Bond', 'Quick Channel', 'Quick Favor', 'Quick Preparation', 'Quick Trapper', 'Quick Wild Shape', 'Quicken Blessing', 'Radiant Charge', 'Rage Casting', 'Raging Absorption', 'Raging Blood', 'Raging Brutality', 'Raging Brute', 'Raging Concentration', 
  'Raging Deathblow', 'Raging Hurler', 'Raging Throw', 'Raging Vitality', 'Raking Claws', 'Rallying Blow', 'Ranged Disable', 'Ranged Lay on Hands', 'Ranged Study', 'Rapid Focus Shift', 'Rapid Recovery', 'Rapid Repair', 'Razortusk', 'Reactive Arcane Shield', 
  'Reactive Healing', 'Reactive Reversion', 'Read Spell Traces', 'Read the Room', 'Ready for Battle', 'Ready for Pain', 'Recalcitrant', 'Reckless Rage', 'Recovered Rage', 'Recruits', 'Reflexive Caster', 'Reflexive Crystalline Dust', 'Reflexive Trick', 
  'Regenerate Muscles', 'Reinforce Crafting', 'Reject Poison', 'Relentless Cheer', 'Remote Bomb', 'Renown', 'Repast of Heroes', 'Researcher', 'Resilient Armor', 'Resilient Eidolon', 'Resolute Steed', 'Respectful Prey', 'Retributive Summons', 
  'Revealing Waters', 'Revered Guidance', 'Reviving Channel', 'Reward of Grace', 'Reward of Life', 'Reward of the Faithful', 'Rhabdomancy', 'Rhetorical Flourish', 'Ricochet Shot Deed', 'Ricochet Splash Weapon', 'Righteous Healing', 'Ritual Hex', 
  'Ritual Mask', 'Robot\'s Bane', 'Robust Stench', 'Roof Runner', 'Rouse Emotions', 'Rugged Northerner', 'Run', 'Sabotage Magic Item', 'Sabotage Specialist', 'Sacred Geometry', 'Sacred Pyromania', 'Sacred Summons', 'Sacrificial Adept', 
  'Sacrificial Potency', 'Sacrificial Ritualist', 'Sahir-Afiyun', 'Sandwalker', 'Savage Critical', 'Scale and Skin', 'Scapegoat', 'Scarlet Rose Devotion', 'Scarred Legion', 'Scavenger\'s Luck', 'Scholar', 'Schooled Reserve', 'Scion of the Land', 
  'Scion of the Lost Empire', 'Scribe Spell Equation', 'Scrutinize Spell', 'Scuttle', 'Sea Legs', 'Seasoned Flier', 'Secret Capital', 'Secret Language', 'Secret of Magical Discipline', 'Secret Signs', 'Secret Stash Deed', 'Seductive Channel', 
  'Seeds of Doubt', 'Seeker of the Eternal Emperor', 'Seeping Darkness', 'Selective Channeling', 'Self-Improvement', 'Self-Righteous Fury', 'Self-Sufficient', 'Selfish Channel', 'Sense Allies', 'Sense Assumptions', 'Sense Link', 'Sense Loyalties',
  'Sense Metals and Minerals', 'Sense Relationships', 'Sensory Control Meditation', 'Serpentine Compression', 'Servant in the House of Truth', 'Shade of the Woodlands', 'Shadow Dodge', 'Shadow Gambit', 'Shadow Shroud', 'Shadow\'s Embrace', 'Shake It Off', 
  'Shapechanging Savage', 'Shapeshifter Foil', 'Shapeshifting Hunter', 'Shaping Focus', 'Share Healing', 'Share Spells', 'Shared Insight', 'Shared Judgment', 'Shared Ownership', 'Shared Remembrance', 'Shared Soul', 'Shared Stash', 'Sharp Senses', 
  'Sharptooth', 'Shatter Resolve', 'Sheltering Stubbornness', 'Shielded Caster', 'Shifter\'s Edge', 'Shifter\'s Rush', 'Shifting Patterns', 'Shocking Amplification', 'Shoki\'s Argument', 'Shrouded In Mystery', 'Signature Deed', 'Signature Skill', 
  'Signifer Armor Training', 'Sin Seer', 'Sinister Reputation', 'Sinuous Vines', 'Siphon Channel', 'Siphon Poison', 'Sizzling Shot', 'Skald\'s Vigor', 'Skeleton Summoner', 'Skill Focus', 'Skilled Driver', 'Skilled Rager', 'Slayer\'s Knack', 'Sleeper', 
  'Slow Faller', 'Sluggish Jinx', 'Sly Draw', 'Small But Deadly', 'Smell Fear', 'Smite Evil Magic', 'Smoking Boulder', 'Sneaking Precision', 'Sneaky Vagabond', 'Sniper Shot', 'Sniper\'s Lantern', 'Sociable', 'Sonic Croak', 'Sorcerous Bloodstrike', 
  'Soul-Powered Magic', 'Soured Soul', 'Spark of the Uncanny', 'Spear Dancer', 'Special Delivery', 'Spectrum Sight', 'Spell Bane', 'Spell Bluff', 'Spell Focus', 'Spell Hex', 'Spell Mastery', 'Spell Penetration', 'Spell Perfection', 'Spell Praxis', 
  'Spell Specialization', 'Spell Sponge', 'Spell Synergy', 'Spell Trick', 'Spell-Drinker', 'Spellmirror', 'Spellsong', 'Spider Step', 'Spider\'s Wrappings', 'Spirit Ally', 'Spirit Beacon', 'Spirit Focus', 'Spirit Oni Master', 'Spirit Rebuke', 
  'Spirit Ridden', 'Spirit Sense', 'Spirit Sight', 'Spirit Speaker', 'Spirit Symbiosis', 'Spirit Talker', 'Spirit\'s Gift', 'Spiritual Balance', 'Spiritual Guardian', 'Spiritual Training', 'Spiritualist\'s Call', 'Splash Weapon Mastery', 
  'Splintering Weapon', 'Split Hex', 'Split Major Hex', 'Split Trick', 'Spontaneous Metafocus', 'Spontaneous Nature\'s Ally', 'Sprinting Troll', 'Sproutling', 'Squash Flat', 'Squire', 'Stalker\'s Focus', 'Stalwart', 'Star Initiate', 'Star Scholar', 
  'Starlight Summons', 'Startling Shapechange', 'Steadfast Mind', 'Steadfast Personality', 'Stealth Synergy', 'Stealthy', 'Steel Soul', 'Steelskin Channel', 'Step of the Flighty Fey', 'Stoic', 'Stone Cover', 'Stone Dodger', 'Stone Read', 
  'Stone Sense', 'Stone Shroud', 'Stone Singer', 'Stone to Flesh Savant', 'Stone-Faced', 'Storm Breaker', 'Storm Survivor', 'Storm-Lashed', 'Stouthearted', 'Strange Yield', 'Strangler', 'Street Smarts', 'Strength of Obligation', 'Strength of Wood', 
  'Strong Comeback', 'Strong Implement Link', 'Strongarm', 'Stubborn Curse', 'Student of Aasimar', 'Studied Combatant', 'Studied Expertise', 'Stunning Croak', 'Stylized Spell Mastery', 'Stylized Spontaneity', 'Subconscious Usurpation', 
  'Subjective Mobility', 'Subtle Devices', 'Subtle Enchantments', 'Subtle Poisoner', 'Summon Evil Monster', 'Summon Good Monster', 'Summon Guardian Spirit', 'Summon Neutral Monster', 'Summoner\'s Call', 'Sunblade', 'Sunlight Summons', 'Sunlit Strike', 
  'Superintendant', 'Superior Gathlain Magic', 'Superior Scryer', 'Superior Summoning', 'Supernal Feast', 'Suppress Blight', 'Sure Grasp', 'Sure on Ice', 'Sure-Handed Alchemy', 'Surface Survivor', 'Surprise Maneuver', 'Survivor', 'Swamp Dweller', 
  'Swamper', 'Swap Trick', 'Swift Crystalline Dust', 'Swift Kitsune Shapechanger', 'Swift Swimmer', 'Swing About', 'Sword Oath', 'Sycophant', 'Symbiotic Resilience', 'Tag-Team Interrogation', 'Take the Hit', 'Talented Magician', 'Tapestry Traveler', 
  'Tattoo Attunement', 'Tattoo Conversion', 'Tattoo Transformation', 'Taunt', 'Tavern Regular', 'Team Pickpocketing', 'Technologist', 'Technophobe', 'Telepathic Distraction', 'Telepathic Link', 'Telepathy Tap', 'Tempting Bargain', 
  'Tenacious Transmutation', 'Terrain Celerity', 'Terrifying Assassination', 'Terrifying Mask', 'Terrifying Strike', 'Theurgy', 'Thicket Channel', 'Third Eye', 'Thoughtful Discernment', 'Threatening Negotiator', 'Throat Pouch', 'Timely Coordination', 
  'Tool Optimizer', 'Torch Handling', 'Torchbearer', 'Torrid Tolerance', 'Totem Beast', 'Totem Spirit', 'Totemic Disciple', 'Totemic Initiate', 'Totemic Master', 'Touch of Evil', 'Touch of the Brackish Emperor', 'Tough as Iron', 'Toughness', 
  'Toxic Secretions', 'Toxicological Timing', 'Trade Initiative', 'Trailblazing Channel', 'Train Plants', 'Trapper\'s Setup', 'Treacherous Toxin', 'Treant\'s Call', 'Tree Leaper', 'Trepanation', 'Triangulate', 'Tribal Scars', 'Tribe Mentality', 
  'Triple-Baron', 'Troth of the Forgotten Pharaoh', 'True Breed', 'True Deception', 'Truth in Wine', 'Tundra Stride', 'Turn Undead', 'Twilight Tattoo', 'Twilight Words', 'Twist Away', 'Ultimate Mercy', 'Ultimate Resolve', 'Umbral Shift', 'Unaging', 
  'Unbound Bravery', 'Uncanny Activation', 'Uncanny Alertness', 'Uncanny Ally', 'Uncanny Concentration', 'Undaunted Bravery', 'Undead Master', 'Undermining Exploit', 'Underworld Connections', 'Unfettered Familiar', 'Unfettered Rage', 
  'Unimpeachable Honor', 'Unraveler of Secrets', 'Unraveling Blood', 'Unsanctioned Detection', 'Unsanctioned Knowledge', 'Unseen Poison', 'Urban Forager', 'Vampire Hunter Tradition', 'Vampire Scholar', 'Vampiric Companion', 'Vandal', 'Vanth\'s Scythe', 
  'Vaporous Potion', 'Variant Prayer-Scroll', 'Veiled Contempt', 'Venomous Stare', 'Verdant Step', 'Verify', 'Vermin Heart', 'Versatile Channeler', 'Versatile Jinxer', 'Versatile Spontaneity', 'Versatile Summon Monster', 'Versatile Summon Nature\'s Ally', 
  'Vestigial Head', 'Vigilant Eidolon', 'Vigilant Phantom', 'Vile Leadership', 'Vindictive Fall', 'Vishkanya Perfume', 'Voice of Beasts', 'Voice of the Sibyl', 'Waking Dream', 'Walker Among Evil', 'Walking Sleight', 'Wall of Flesh', 'Wand Dancer', 
  'Wandering Mind', 'War Blessing', 'War Singer', 'Warding Blood', 'Warmonger', 'Warren Digger', 'Warrior Priest', 'Wasp Familiar', 'Waterway Caster', 'Weapon Shift', 'Weather Eye', 'Welcome Pain', 'Well-Prepared', 'Whip-Shot Deed', 'Wicked Valor', 
  'Wild Growth Channel', 'Wild Growth Hex', 'Wild Speech', 'Wild Vigor', 'Wilding', 'Wilding Mind', 'Wilding Senses', 'Wilding Stride', 'Willing Accomplice', 'Willing Death', 'Wind Rider', 'Wind Song', 'Witch Knife', 'Wolf Rider', 'Wood Crafter', 
  'Word of Healing', 'Worst Case Jinx', 'Wrest Charge', 'Xenoglossy', 'Zealous Mind', 'Abeyance', 'Blunt Blade', 'Bull\'s Eye', 'Cataract', 'Consumption', 'Extra Blood Hex', 'Falter', 'Hinder', 'Uncertainty', 'Acrobatic Spellcaster', 'Adder Strike', 
  'Advanced Armor Training', 'Advanced Defensive Combat Training', 'Advanced Weapon Training', 'Aerial Roll', 'Agile Maiden', 'Agile Maneuvers', 'Alchemical Strike', 'All Combat Feats', 'All-Consuming Swing', 'Amateur Gunslinger', 'Amateur Swashbuckler',
  'Ambush Awareness', 'Ambush Sense', 'Ambush Squad', 'Ammo Drop', 'Anatomical Savant', 'Ancestral Enmity', 'Ancestral Weapon Mastery', 'Animal Ferocity', 'Ankle Biter', 'Anticipate Dodge', 'Aquadynamic Focus', 'Aquadynamic Shot', 'Aquatic Combatant', 
  'Arc Slinger', 'Arcane Armor Mastery', 'Arcane Armor Training', 'Arcane Strike', 'Archon Diversion', 'Archon Justice', 'Archon Style', 'Arcing Weapon', 'Arming Grab', 'Armor Adept', 'Armor Focus', 'Armor Proficiency, Heavy', 'Armor Proficiency, Light', 
  'Armor Proficiency, Medium', 'Armor Trick', 'Armored Athlete', 'Artful Dodge', 'Artillery Team', 'Artistry', 'Ascetic Form', 'Ascetic Strike', 'Ascetic Style', 'Asura Sight', 'Asura Spellrend', 'Asura Style', 'Awe-Inspiring Smash', 'Awesome Charge', 
  'Awesome Throw', 'Azata Mischief', 'Azata Sprint', 'Azata Style', 'Balor Whip', 'Baneful Judgment', 'Banishing Critical', 'Banner of Doom', 'Barracuda Dash', 'Barracuda Slam', 'Barracuda Style', 'Barrage of Styles', 'Barroom Brawler', 'Bashing Finish', 
  'Bear Hug', 'Bear\'s Balance', 'Beartrap Bite', 'Beast Hunter', 'Beastmaster Ire', 'Beastmaster Salvation', 'Beastmaster Style', 'Befuddling Strike', 'Betrayal Sense', 'Betraying Blow', 'Binding Throw', 'Black Powder Spectacle', 'Blade Binder', 
  'Bladed Brush', 'Blades Above And Below', 'Blazing Aura', 'Bleeding Attack', 'Bleeding Critical', 'Bleeding Stare', 'Blind-Fight', 'Blinded Blade Style', 'Blinded Competence', 'Blinded Master', 'Blinding Critical', 'Blinding Flash', 
  'Blinding Sneak Attack', 'Blinding Stare', 'Blood Feast', 'Blood Frenzy Assault', 'Blood Frenzy Strike', 'Blood Frenzy Style', 'Blood Spurt', 'Blooded Arcane Strike', 'Bloody Assault', 'Bloody Mess', 'Bloody Sabres', 'Bloody Vengeance', 
  'Bludgeoner', 'Boar Ferocity', 'Boar Shred', 'Boar Style', 'Body Shield', 'Bodyguard', 'Bonebreaker', 'Bounding Hammer', 'Branch Pounce', 'Break Guard', 'Breaker of Barriers', 'Bristling Bull Rush', 'Bristling Drag', 'Broken Wing Gambit', 
  'Brutal Coup de Grace', 'Brutal Grappler', 'Brute Assault', 'Brute Stomp', 'Brute Style', 'Bulette Charge Style', 'Bulette Leap', 'Bulette Rampage', 'Bull Rush Strike', 'Bull-Catcher Style', 'Bull-Catcher Toss', 'Bull-Catcher Wrangler', 'Bullseye Shot', 
  'Burn It Down!', 'Bushwhack', 'But a Scratch', 'Call Out', 'Cannon Master', 'Canny Tumble', 'Casterbane Shot', 'Caster\'s Champion', 'Cat and Mouse', 'Catch Off-Guard', 'Cavalry Formation', 'Censoring Critical', 'Cerberus Crush', 'Cerberus Snare', 
  'Cerberus Style', 'Chain Mastery', 'Chain-flail Master', 'Chairbreaker', 'Channel Smite', 'Channeling Force', 'Charge of the Righteous', 'Charge Through', 'Charging Hurler', 'Charging Stag Style', 'Choir of Blades', 'Chokehold', 'Circling Mongoose', 
  'Circling Offense', 'Circuitous Shot', 'Clambering Escape', 'Claw Wrench', 'Cleave', 'Cleaving Finish', 'Cleaving Sweep', 'Clinging Climber', 'Cloak and Dagger Style', 'Cloak and Dagger Subterfuge', 'Cloak and Dagger Tactics', 'Close-Quarters Thrower', 
  'Clustered Shots', 'Cockatrice Strike', 'Combat Expertise', 'Combat Feats', 'Combat Meditation', 'Combat Patrol', 'Combat Reflexes', 'Combat Rhythm', 'Combat Style Master', 'Combat Vigor', 'Compounded Pain', 'Concentrated Fire', 'Concentrated Splash', 
  'Confusing Stare', 'Consume Essence', 'Cooperative Rend', 'Cooperative Swarmer Combat', 'Coordinated Charge', 'Coordinated Defense', 'Coordinated Distraction', 'Coordinated Maneuvers', 'Coordinated Shot', 'Cornugon Shield', 'Cornugon Smash', 
  'Cornugon Stun', 'Cornugon Trip', 'Counter Reflexes', 'Counterpunch', 'Covering Defense', 'Covering Fire', 'Covering Shield', 'Cracking the Shell', 'Crane Riposte', 'Crane Style', 'Crane Wing', 'Crashing Wave Buffet', 'Crashing Wave Fist', 
  'Crashing Wave Style', 'Creative Armorsmith', 'Creative Weaponsmith', 'Crescent Blade Dervish', 'Crescent Blade Master', 'Crippling Critical', 'Crippling Thrust', 'Critical Feats', 'Critical Focus', 'Critical Mastery', 'Crossbow Mastery', 
  'Crowd Control', 'Crowd of Bullies', 'Crusader\'s Fist', 'Crushing Blow', 'Crushing Impact', 'Cudgeler Style', 'Cudgeler Sweep', 'Cudgeler Takedown', 'Cunning Intuition', 'Dance of Chains', 'Dangerous Tail', 'Darting Retrieval', 'Darting Viper', 
  'Dastardly Finish', 'Dazing Assault', 'Dazing Fist', 'Dazzling Display', 'Deadeye\'s Blessing Combat', 'Deadhand Initiate', 'Deadhand Master', 'Deadhand Style', 'Deadly Aim', 'Deadly Finish', 'Deadly Grappler', 'Deadly Horns', 'Deadly Stroke', 
  'Deafening Critical', 'Death from Above', 'Death From Below', 'Death or Glory', 'Death Roll', 'Deathless Initiate', 'Deathless Master', 'Deathless Zealot', 'Deceitful Incompetence', 'Dedicated Adversary', 'Defensive Combat Training', 
  'Defensive Weapon Training', 'Deflect Arrows', 'Demon Hunter', 'Demonic Momentum', 'Demonic Nemesis', 'Demonic Slaughter', 'Demonic Style', 'Demoralizing Stare', 'Dervish Dance', 'Desperate Battler', 'Destroyer\'s Blessing', 'Destructive Persuasion', 
  'Devastating Strike', 'Diabolic Humiliation', 'Diabolic Judgment', 'Diabolic Style', 'Dimensional Awareness', 'Dimensional Disruption', 'Directed Disarm', 'Dirty Fighting', 'Dirty Trick Master', 'Disarm Partner', 'Disarming Strike', 
  'Disconcerting Stare', 'Disengaging Feint', 'Disengaging Flourish', 'Disengaging Shot', 'Disheartening Display', 'Disorienting Blow', 'Disrupting Fist', 'Disrupting Shot', 'Disruptive', 'Distance Thrower', 'Distracting Charge', 'Diva Advance', 
  'Diva Strike', 'Diva Style', 'Divert Harm', 'Divine Assault', 'Divine Fighting Technique', 'Djinni Spin', 'Djinni Spirit', 'Djinni Style', 'Dodge', 'Dolphin Circle', 'Dolphin Dart', 'Dolphin Style', 'Domain Strike', 'Domino Crash', 
  'Dorn-Dergar Master', 'Double Slice', 'Drag Down', 'Dragon Ferocity', 'Dragon Roar', 'Dragon Shot', 'Dragon Style', 'Dragonfly Flight', 'Dragonfly Style', 'Dragonfly Wings', 'Dragonslayer', 'Draining Strike', 'Dramatic Display', 'Dramatic Slam', 
  'Dreadful Carnage', 'Drunken Brawler', 'Dueling Cape Deed', 'Dueling Disciple', 'Dueling Mastery', 'Dueling Style', 'Dueling Style Aegis', 'Dueling Style Conquest', 'Duelist', 'Duelist of the Falls', 'Duelist of the Shroud', 'Duelist\'s Discipline', 
  'Duelist\'s Masterstroke', 'Dwarven Fury', 'Dwarven Hatred Style', 'Dwarven Seething', 'Earth Child Binder', 'Earth Child Style', 'Earth Child Topple', 'Efreeti Stance', 'Efreeti Style', 'Efreeti Touch', 'Eidolon Mount', 'Eldritch Claws', 
  'Electric Eel Conduit', 'Electric Eel Shock', 'Electric Eel Style', 'Elemental Fist', 'Elemental Strike', 'Elephant Stomp', 'Elven Accuracy', 'Elven Battle Focus', 'Elven Battle Style', 'Elven Battle Torrent', 'Empty Quiver Flexibility', 
  'Empty Quiver Flurry', 'Empty Quiver Style', 'Enfilading Fire', 'Enforcer', 'Engulf Horror', 'Engulf Revulsion', 'Enhanced Ki Throw', 'Enrage Opponent', 'Equipment Trick', 'Eroding Strikes', 'Exceptional Pull', 'Excoriating Stare', 'Exhausting Critical', 
  'Exotic Weapon Proficiency', 'Expanded Hunter Tactics', 'Expert Sniper', 'Explosive Escape', 'Explosive Weapon', 'Exsanguinate', 'Extend The Bulwark', 'Extended Combat Meditation', 'Extra Hail of Arrows', 'Extreme Prejudice', 'Faerie\'s Strike', 
  'Falling Water Gambit', 'False Opening', 'Far Shot', 'Fatiguing Stare', 'Fearsome Finish', 'Feint Partner', 'Feinting Flurry', 'Felling Escape', 'Felling Smash', 'Fencing Grace', 'Feral Combat Training', 'Ferocious Tenacity', 'Fighting Frenzy', 
  'Filthy Weapons', 'Final Embrace', 'Final Embrace Horror', 'Final Embrace Master', 'Finishing Cascade', 'Firebrand', 'Flagbearer', 'Flame Blade Dervish Combat', 'Flanking Foil', 'Flaying Critical', 'Flinging Charge', 'Focused Aberration Expertise', 
  'Focused Animal Expertise', 'Focused Construct Expertise', 'Focused Discipline', 'Focused Dragon Expertise', 'Focused Fey Expertise', 'Focused Magical Beast Expertise', 'Focused Ooze Expertise', 'Focused Outsider Expertise', 'Focused Plant Expertise', 
  'Focused Shot', 'Focused Target', 'Focused Undead Expertise', 'Focused Vermin Expertise', 'Follow-Up Strike', 'Following Step', 'Footslasher', 'Fortified Armor Training', 'Fortuitous Vigor', 'Fox Insight', 'Fox Style', 'Fox Trickery', 'Freeze in Place', 
  'Friendly Fire Maneuvers', 'Friendly Rivalry', 'Frightening Ambush', 'Furious Focus', 'Fury of the Tainted', 'Fury\'s Fall', 'Fury\'s Snare', 'Gang Up', 'Gate Breaker', 'Ghostslayer', 'Giant-Killer Stance', 'Giantslaying Team', 'Gloomstorm', 'Gore Fiend', 
  'Gorgon\'s Fist', 'Gory Finish', 'Got Your Back', 'Grab and Go', 'Grabbing Drag', 'Grabbing Master', 'Grabbing Style', 'Graceful Steal', 'Grasping Strike', 'Gravitational Vital Strike', 'Great Cleave', 'Great Rend', 'Greater Balor Whip', 
  'Greater Beast Hunter', 'Greater Blind-Fight', 'Greater Bull Rush', 'Greater Called Shot', 'Greater Dirty Trick', 'Greater Disarm', 'Greater Drag', 'Greater Feint', 'Greater Grapple', 'Greater Hunter\'s Bond', 'Greater Overrun', 
  'Greater Penetrating Strike', 'Greater Rending Fury', 'Greater Reposition', 'Greater Serpent Lash', 'Greater Shield Focus', 'Greater Shield Specialization', 'Greater Snap Shot', 'Greater Spring Attack', 'Greater Steal', 'Greater Subjective Slam', 
  'Greater Sunder', 'Greater Trip', 'Greater Two-Weapon Fighting', 'Greater Vital Strike', 'Greater Weapon Focus', 'Greater Weapon of the Chosen', 'Greater Weapon Specialization', 'Greater Whip Mastery', 'Greater Wilding Strike', 'Ground-Grabber', 
  'Gruesome Slaughter', 'Guided Star Combat', 'Halfling Slinger', 'Hamatula Grasp', 'Hamatula Strike', 'Hamatulatsu', 'Hammer the Gap', 'Hammer Throw', 'Harder They Fall', 'Harrying Partners', 'Haunted Gnome', 'Haunted Gnome Assault', 
  'Haunted Gnome Shroud', 'Hellcat Pounce', 'Hemorrhaging Venom', 'Heroic Interposition', 'Heroic Leader', 'Hero\'s Display', 'Hex Strike', 'Hold the Blade', 'Hook Fighter', 'Horn of the Criosphinx', 'Horn Rider', 'Horn Rider\'s Charge', 
  'Horrific Gorging', 'Horse Master', 'Hurricane Punch', 'Hurtful', 'Iconoclast', 'Illusive Gnome Bewilderment', 'Illusive Gnome Style', 'Illusive Gnome Surprise', 'Impact Critical Shot', 'Impaling Critical', 'Implacable', 'Improved Armor Focus', 
  'Improved Awesome Blow', 'Improved Balor Whip', 'Improved Beast Hunter', 'Improved Blind-Fight', 'Improved Bravery', 'Improved Bull Rush', 'Improved Called Shot', 'Improved Charging Hurler', 'Improved Cleaving Finish', 'Improved Critical',
  'Improved Devastating Strike', 'Improved Dirty Trick', 'Improved Disarm', 'Improved Disarm Partner', 'Improved Drag', 'Improved Feint', 'Improved Feint Partner', 'Improved Feinting Flurry', 'Improved Fury of the Tainted', 'Improved Grapple', 
  'Improved Hammer Throw', 'Improved Hunter\'s Bond', 'Improved Impaling Critical', 'Improved Initiative', 'Improved Ki Throw', 'Improved Overrun', 'Improved Parry', 'Improved Position of Strength', 'Improved Precise Shot', 'Improved Precise Strike', 
  'Improved Punishing Step', 'Improved Rending Fury', 'Improved Reposition', 'Improved Second Chance', 'Improved Shield Bash', 'Improved Shield Focus', 'Improved Sidestep', 'Improved Snap Shot', 'Improved Spring Attack', 'Improved Steal', 
  'Improved Sunder', 'Improved Swap Places', 'Improved Trip', 'Improved Two-Weapon Feint', 'Improved Two-Weapon Fighting', 'Improved Unarmed Strike', 'Improved Underhanded Teamwork', 'Improved Vital Strike', 'Improved Weapon of the Chosen', 
  'Improved Whip Mastery', 'Improved Wilding Strike', 'Improvisational Focus', 'Improvised Defenses', 'Improvised Weapon Mastery', 'In Harm\'s Way', 'Incite Paranoia', 'Indomitable Mount', 'Indomitable Mountain Avalanche', 'Indomitable Mountain Peak', 
  'Indomitable Mountain Style', 'Infused Spell Cartridges', 'Inspiring Bravery', 'Intense Pain', 'Intercept Charge', 'Intimidate Animals', 'Intimidating Prowess', 'Intrepid Rescuer', 'Jabbing Dancer', 'Jabbing Master', 'Jabbing Style', 'Jaguar Pounce', 
  'Janni Rush', 'Janni Style', 'Janni Tempest', 'Jawbreaker', 'Joyless Toil', 'Juggle Load', 'Juke', 'Just out of Reach', 'Ki Diversity', 'Ki Throw', 'Kick Up', 'Killing Flourish', 'Kirin Path', 'Kirin Strike', 'Kirin Style', 'Kitsune Style', 
  'Kitsune Tricks', 'Kitsune Vengeance', 'Knotted Nets Combat Teamwork', 'Know Weakness', 'Kobold Flood', 'Kobold Groundling', 'Kobold Style', 'Kraken Style', 'Kraken Throttle', 'Kraken Wrack', 'Kudzu Invasion', 'Kudzu Takeover', 'Kyton Cut', 
  'Kyton Shield', 'Kyton Style', 'Landing Roll', 'Lantern Glare', 'Large Target', 'Lashing Tail', 'Latching Horror', 'Lead by Example', 'Lead from the Back', 'Leapfrog', 'Leaping Evasion', 'Let Them Come', 'Lightning Draw', 'Lightning Stance', 
  'Linnorm Hunter Coordination', 'Linnorm Hunter Retreat', 'Linnorm Hunter Style', 'Linnorm Style', 'Linnorm Vengeance', 'Linnorm Wrath', 'Lob Shot', 'Lookout', 'Low Profile', 'Lunge', 'Mad Magic', 'Maddening Obliteration', 'Maddening Strike', 
  'Maddening Style', 'Magical Heart', 'Makeshift Maneuvers', 'Manifold Stare', 'Mantis Style', 'Mantis Torment', 'Mantis Wisdom', 'Manyshot', 'Marid Coldsnap', 'Marid Spirit', 'Marid Style', 'Martial Dominance', 'Martial Focus', 
  'Martial Weapon Proficiency', 'Massed Charge', 'Master Combat Performer', 'Master Hammer Throw', 'Master Siege Engineer', 'Master Sniper', 'Masterful Display', 'Masterful Flourish', 'Measure Foe', 'Measured Response', 'Medusa\'s Wrath', 
  'Merciful Takedown', 'Merciless Beating', 'Merciless Butchery', 'Merciless Rush', 'Meteor Swing', 'Mighty Bite', 'Mind Strike', 'Mirror Move', 'Misdirection Attack', 'Misdirection Redirection', 'Misdirection Tactics', 'Missile Shield', 
  'Mobile Bulwark Style', 'Mobile Fortress', 'Mobile Stronghold', 'Mobility', 'Mocking Dance', 'Modification Mastery', 'Modification Trainer', 'Modified Weapon Proficiency', 'Monastic Legacy', 'Monkey Lunge', 'Monkey Moves', 'Monkey Shine', 
  'Monkey Style', 'Moonlight Stalker', 'Moonlight Stalker Feint', 'Moonlight Stalker Master', 'Motivating Display', 'Mountain-Splitting Strike', 'Mounted Archery', 'Mounted Combat', 'Mounted Shield', 'Mounted Skirmisher', 'Mud in Your Eye', 
  'Multiweapon Fighting', 'Murderer\'s Circle', 'Murderous Sniper', 'Musketeer\'s Daring', 'Musketeer\'s Dodge', 'Musketeer\'s Reposition', 'Mutual Hatred', 'My Blade Is Yours', 'Natural Jouster', 'Nature\'s Weapons', 'Neckbreaker', 'Net Adept', 
  'Net and Trident', 'Net Maneuvering', 'Net Trickery', 'Nightmare Fist', 'Nightmare Striker', 'Nightmare Weaver', 'Notorious Vigilante', 'Numbing Blow', 'Obscuring Beacon', 'Octopus Focus', 'Octopus Style', 'Octopus Thrash', 'One-Inch Punch', 
  'Onslaught', 'Open Up', 'Opening Volley', 'Opportunistic Grappler', 'Orc Fury Style', 'Orc Rampage', 'Orc Snarl', 'Ostentatious Rager', 'Ostentatious Weakness', 'Osyluth Guile', 'Outflank', 'Outslug Sprint', 'Outslug Style', 'Outslug Weave', 
  'Overhead Flip', 'Overwatch Style', 'Overwatch Tactician', 'Overwatch Vortex', 'Overwhelm', 'Owl Dive', 'Owl Style', 'Owl Swoop', 'Pack Attack', 'Pack Flanking', 'Pack Intimidation', 'Painful Collision', 'Paired Opportunists', 'Panther Claw', 
  'Panther Parry', 'Panther Style', 'Paralyzing Strike', 'Parting Shot', 'Passing Trick', 'Patient Strike', 'Penetrating Stare', 'Penetrating Strike', 'Perfect Awareness', 'Perfect Center', 'Perfect Strike', 'Perfect Style', 'Performance Weapon Mastery', 
  'Performing Combatant', 'Pernicious Stab', 'Perturbing Stare', 'Phalanx Formation', 'Phasestrike', 'Piercing Grapple', 'Pile On', 'Pin Down', 'Pinning Knockout', 'Pinning Rend', 'Pinpoint Jab', 'Pinpoint Poisoner', 'Pinpoint Targeting', 'Piranha Strike', 
  'Point Blank Master', 'Point-Blank Shot', 'Porcupine Defense', 'Position of Strength', 'Power Attack', 'Practical Kata', 'Precipice Strike', 'Precise Shot', 'Precise Strike', 'Press to the Wall', 'Primal Strike', 'Prone Shooter', 'Prone Slinger', 
  'Protective Line', 'Psychic Combatant', 'Psychovore Master', 'Psychovore Strike', 'Psychovore Style', 'Pummeling Bully', 'Pummeling Charge', 'Pummeling Style', 'Punch Through', 'Punishing Kick', 'Punishing Step', 'Pursuit of Glory', 'Pushing Assault', 
  'Quarterstaff Master', 'Quick Bull Rush', 'Quick Dirty Trick', 'Quick Drag', 'Quick Draw', 'Quick Reposition', 'Quick Steal', 'Quick Stow', 'Quick Study', 'Quiet Death', 'Quillbreaker Defense', 'Quivering Palm Adept', 'Quivering Palm Versatility', 
  'Raging Regeneration', 'Ranged Disarm', 'Ranged Feint', 'Ranged Trip', 'Rapid Grappler', 'Rapid Reload', 'Rapid Shot', 'Rat Catcher', 'Rat Stack Combat Teamwork', 'Ray Shield', 'Reach Defense', 'Ready for Anything', 'Reap the Infirm', 'Rebounding Leap', 
  'Rebuffing Reduction', 'Recall Ammunition', 'Reckless Aim', 'Redirect Attack', 'Redirected Shot', 'Redistributed Might', 'Relentless Shot', 'Relic Breaker', 'Rending Claws', 'Rending Fury', 'Rending Swarm Combat Teamwork', 'Repositioning Strike', 
  'Resisting Grappler', 'Restorative Vigor', 'Returning Throw', 'Revelation Strike', 'Reverse Somersault Throw', 'Rhino Charge', 'Ride-by Attack', 'Riptide Attack', 'River Raider', 'Riving Strike', 'Roll With It', 'Rubble Skirmisher', 'Runic Charge', 
  'Rushing Winds', 'Ruthless Opportunist', 'Sabotaging Sunder', 'Saddle Shrieker', 'Sand Strike', 'Sap Adept', 'Sap Master', 'Savage Display', 'Savage Leap', 'Savage Slam', 'Savage Surge', 'Saving Shield', 'School Strike', 'Scorpion Style', 
  'Sculpting the River', 'Scurrying Swarmer', 'Searing Distraction', 'Second Chance', 'Second Wind', 'Seething Hatred', 'Seize Advantage', 'Seize the Moment', 'Serpent Lash', 'Shadow Strike', 'Shadows of Fear', 'Shaitan Earthblast', 'Shaitan Skin', 
  'Shaitan Style', 'Shapeshifter Savage', 'Shapeshifter Style', 'Shapeshifter Twist', 'Shared Quarry', 'Shark Leap', 'Shark Style', 'Shark Tear', 'Shatter Control', 'Shatter Defenses', 'Shield Focus', 'Shield Gauntlet Style', 'Shield Master', 
  'Shield of Swings', 'Shield Proficiency', 'Shield Slam', 'Shield Snag', 'Shield Specialization', 'Shield Wall', 'Shielded Gauntlet Attack', 'Shielded Gauntlet Master', 'Shielded Staff Ambush', 'Shielded Staff Master', 'Shielded Staff Style', 
  'Shikigami Manipulation', 'Shikigami Mimicry', 'Shikigami Style', 'Shocking Bellow', 'Shot on the Run', 'Shrapnel Strike', 'Shrewd Tactician', 'Shrug On', 'Sickening Critical', 'Sidestep', 'Siege Commander', 'Siege Engineer', 'Siege Gunner', 
  'Signature Strike Style', 'Signature Strike Taunt', 'Signature Strike Triumph', 'Silent Kill', 'Simple Weapon Proficiency', 'Sin-Sharing Critical', 'Sisterhood Dedication', 'Sisterhood Rampart', 'Sisterhood Style', 'Skyseeker Impact', 
  'Skyseeker Style', 'Skyseeker Thrash', 'Slashing Grace', 'Slayer\'s Feint', 'Slaying Sprint', 'Sleeper Hold', 'Sliding Axe Throw', 'Sliding Dash', 'Sling Flail', 'Slipslinger Bombardment', 'Slipslinger Grenadier', 'Slipslinger Style', 
  'Slow Time', 'Slurk Rider', 'Smash', 'Smashing Crush', 'Smashing Dent', 'Smashing Impact', 'Smashing Style', 'Smiting Reversal', 'Snake Fang', 'Snake Sidewind', 'Snake Style', 'Snap Shot', 'Snapping Flank', 'Snapping Jaws', 'Snapping Turtle Clutch', 
  'Snapping Turtle Shell', 'Snapping Turtle Style', 'Snatch Arrows', 'Snoutgrip', 'Social Bravery', 'Solitary Survivor', 'Solo Maneuvers', 'Sorcerous Strike', 'Soulblade', 'Soulwrecking Strike', 'Spear Dancing Reach', 'Spear Dancing Spiral', 
  'Spear Dancing Style', 'Spectacular Exit', 'Spell Cartridges', 'Spell Chain', 'Spellbreaker', 'Spiked Destroyer', 'Spinning Throw', 'Spirit of the Corps', 'Spirited Charge', 'Spring Attack', 'Spring-Heeled Reaping', 'Spring-Heeled Sprint', 
  'Spring-Heeled Style', 'Squirming Pile Combat Teamwork', 'Stabbing Shot', 'Stag Horns', 'Stag Submission', 'Stage Combatant', 'Staggering Blow', 'Staggering Critical', 'Staggering Fist', 'Stance of the Xorn', 'Stand Still', 'Starry Grace', 
  'Startling Getaway', 'Startoss Comet', 'Startoss Shower', 'Startoss Style', 'Steadfast Slayer', 'Steady Engagement', 'Step Up', 'Step Up and Strike', 'Stick Together', 'Stick-Fighting Counter', 'Stick-Fighting Maneuver', 'Stick-Fighting Style', 
  'Stock-Striker Style', 'Stock-Striker Sweep', 'Stock-Striker Takedown', 'Stone-Handed', 'Stony Rampart', 'Storm of Arrows', 'Storm of Blades', 'Street Carnage', 'Street Style', 'Street Sweep', 'Strength in Defeat', 'Strike Back', 'Strike True Combat', 
  'Structural Strike', 'Stunning Assault', 'Stunning Critical', 'Stunning Fist', 'Stunning Fist Adept', 'Stunning Irruption', 'Stunning Pin', 'Stupefying Strike', 'Subjective Slam', 'Sun Striker', 'Sunder Blessing', 'Sundering Strike', 
  'Suppress Regeneration', 'Suppressive Fire', 'Surprising Combatant', 'Surprising Strategy', 'Swap Places', 'Sweeping Disarm', 'Sweeping Dodge', 'Swift Aid', 'Swift Iron Style', 'Swift Refuge', 'Swift Sprint', 'Sword and Pistol', 'Swordplay Deflection', 
  'Swordplay Style', 'Swordplay Upset', 'Sword\'s Shadow', 'Sympathetic Rage', 'Tactical Reposition', 'Tail Weapon', 'Take a Breather', 'Tandem Evasion', 'Tandem Trip', 'Tangled Limbs', 'Tantrum', 'Target of Opportunity', 'Tatzlwyrm Claw Style', 
  'Tatzlwyrm Grappler', 'Tatzlwyrm Rake', 'Team Up', 'Technology Adept', 'Teleport Tactician', 'Thousand Cuts', 'Thrill of the Hunt', 'Thrilling Vengeance', 'Throat Slicer', 'Throw Anything', 'Throw Back Arrows', 'Thunder and Fang', 'Tiger Claws', 
  'Tiger Pounce', 'Tiger Style', 'Tiring Critical', 'Titan\'s Tangle', 'To the Last', 'Topple Foe', 'Toppling Pileup', 'Torch Fighter', 'Touch of Serenity', 'Tower Shield Proficiency', 'Toxic Spray', 'Tracer Fire', 'Traditional Weapons', 'Trample', 
  'Tribal Hunter', 'Trick Riding', 'Trick Shooter', 'Tripping Staff', 'Tripping Strike', 'Tripping Twirl', 'Tumbling Upset', 'Turbulent Takeoff', 'Twin Fang Lunge', 'Twin Fang Strike', 'Twin Fang Style', 'Twin Thunders', 'Twin Thunders Flurry', 
  'Twin Thunders Master', 'Twinned Feint', 'Two Weapon Drunkard Combat', 'Two-Handed Thrower', 'Two-Weapon Defense', 'Two-Weapon Feint', 'Two-Weapon Fighting', 'Two-Weapon Grace', 'Two-Weapon Rend', 'Unbalancing Blow', 'Unblinking Flame Feint', 
  'Unblinking Flame Fist', 'Unbreakable', 'Unconquerable Resolve', 'Under and Over', 'Underfoot', 'Underfoot Combat', 'Underhanded Teamwork', 'Undersized Mount', 'Unfair Grip', 'Unfolding Wind Rush', 'Unfolding Wind Strike', 'Unseat', 
  'Untwisting Iron Skin', 'Untwisting Iron Strength', 'Unyielding Ferocity', 'Upsetting Shield Style', 'Upsetting Strike', 'Upsetting Vengeance', 'Vanguard Hustle', 'Vanguard Style', 'Vanguard Ward', 'Venomous Spray', 'Vicious Stomp', 
  'Vigilant Charger', 'Vim and Vigor', 'Violent Display', 'Virulent Venom', 'Visceral Threat', 'Viscous Venom', 'Vital Strike', 'Volley Fire', 'Vulpine Pounce', 'Wall\'s Stance', 'Warning Shot', 'Wave Strike', 'Weapon Adept', 'Weapon Finesse', 
  'Weapon Focus', 'Weapon of the Chosen', 'Weapon Specialization', 'Weapon Trick', 'Weapon Versatility', 'Weathered Warrior', 'Wheeling Charge', 'Whip Crack', 'Whip Mastery', 'Whip-Slinger', 'Whirling Hold', 'Whirlwind Attack', 'Wilding Strike', 
  'Wind Stance', 'Wingclipper', 'Wings of the Androsphinx', 'Winter\'s Strike', 'Witchbreaker', 'Witty Feint', 'Wolf Savage', 'Wolf Style', 'Wolf Trip', 'Woodland Wraith', 'Wounded Paw Gambit', 'Wrist Grab', 'Wyvern Fury Style', 'Wyvern Sting', 
  'Wyvern Wing', 'Axiomatic Discourse', 'Chaos Reigns', 'Death Field', 'Flickering Step', 'Greater Planar Infusion', 'Healer\'s Hands', 'Heaven\'s Light', 'Hollow Soul', 'Improved Planar Infusion', 'Last Rites', 'Malleable Form', 'Peace of Mind',
  'Planar Infusion', 'Primal Bloom', 'Shadow\'s Shroud', 'Tidal Swiftness', 'Tyrant\'s Rebuke', 'Wanderer\'s Fortune', 'Wind Leaper', 'Changeling Familiar', 'Curious Companion', 'Devotion against the Unnatural', 'Disruptive Companion', 
  'Favored Animal Focus', 'Feral Grace', 'Ferocious Beast', 'Ferocious Feint', 'Forceful Charge', 'Friendly Face', 'Greater Tenacious Hunter', 'Hefty Brute', 'Improved Forceful Charge', 'Improved Intercept Blow', 'Intercept Blow', 'Jumper', 
  'Lithe Attacker', 'Master of Your Kind', 'Narrow Frame', 'Reflexive Interception', 'Shapeless Familiar', 'Share Feature', 'Stable Gallop', 'Sure-Footed', 'Tenacious Hunter', 'Valiant Steed', 'Well-Trained', 'Fiendskin', 'Maleficium', 
  'Mask of Virtue', 'Soulless Gaze', 'Fabulist', 'Gun Twirling', 'Named Bullet', 'Brew Fleshcrafting Poison', 'Brew Potion', 'Craft Construct', 'Craft Magic Arms and Armor', 'Craft Ooze', 'Craft Poppet', 'Craft Rod', 'Craft Shadow Piercing', 
  'Craft Staff', 'Craft Wand', 'Craft Wondrous Item', 'Cultivate Magic Plants', 'Fleshwarper', 'Fleshwarping', 'Forge Ring', 'Grisly Ornament', 'Grow Plant Creature', 'Harvest Parts', 'Haunt Scavenger', 'Infuse Poison', 'Inscribe Magical Tattoo', 
  'Inscribe Rune', 'Lifecrafting', 'Monstrous Crafter', 'Scribe Scroll', 'Ability Mastery', 'Compulsion Mastery', 'Concealment Mastery', 'Curative Mastery', 'Curse Mastery', 'Dispel Mastery', 'Energy Mastery', 'Flight Mastery', 'Force Shield Mastery', 
  'Illusion Mastery', 'Implement Mastery', 'Racial Item Mastery', 'Resistance Mastery', 'Restoration Mastery', 'Symbolic Mastery', 'Telekinetic Mastery', 'Teleportation Mastery', 'Vision Mastery', 'Weapon Evoker Mastery', 'Apocalyptic Spell', 
  'Aquatic Spell', 'Authoritative Spell', 'Benthic Spell', 'Blissful Spell', 'Bouncing Spell', 'Brackish Spell', 'Brisk Spell', 'Burning Spell', 'Centered Spell', 'Cherry Blossom Spell', 'Coaxing Spell', 'Concussive Spell', 'Conditional Spell', 
  'Consecrate Spell', 'Contagious Spell', 'Contingent Spell', 'Crypt Spell', 'Dazing Spell', 'Delayed Spell', 'Disruptive Spell', 'Echoing Spell', 'Eclipsed Spell', 'Ectoplasmic Spell', 'Elemental Spell', 'Empower Spell', 'Encouraging Spell', 
  'Enlarge Spell', 'Extend Spell', 'Familiar Spell', 'Fearsome Spell', 'Flaring Spell', 'Fleeting Spell', 'Focused Spell', 'Furious Spell', 'Heighten Spell', 'Intensified Spell', 'Intuitive Spell', 'Jinxed Spell', 'Latent Curse', 'Lingering Spell', 
  'Logical Spell', 'Maximize Spell', 'Merciful Spell', 'Murky Spell', 'Persistent Spell', 'Piercing Spell', 'Quicken Spell', 'Reach Spell', 'Rime Spell', 'Scarring Spell', 'Scouting Summons', 'Seeking Spell', 'Selective Spell', 'Shadow Grasp', 
  'Sickening Spell', 'Silent Spell', 'Snuffing Spell', 'Solar Spell', 'Solid Shadows', 'Steam Spell', 'Still Spell', 'Studied Spell', 'Stygian Spell', 'Stylized Spell', 'Tenacious Spell', 'Tenebrous Spell', 'Thanatopic Spell', 'Threatening Illusion', 
  'Threnodic Spell', 'Thundering Spell', 'Toppling Spell', 'Toxic Spell', 'Traumatic Spell', 'Trick Spell', 'Tumultuous Spell', 'Umbral Spell', 'Vast Spell', 'Verdant Spell', 'Widen Spell', 'Yai-Mimic Spell', 'Ascendant Spell', 'Drink Is Life', 
  'Dual Path', 'Extra Mythic Power', 'Extra Path Ability', 'Fabulous Figments', 'Legendary Teamwork', 'Lucky Surge', 'Marked for Glory', 'Maximize Surge', 'Mythic Agile Maneuvers', 'Mythic Arcane Armor Mastery', 'Mythic Armor Proficiency', 
  'Mythic Blinding Critical', 'Mythic Brew Potion', 'Mythic Combat Casting', 'Mythic Companion', 'Mythic Craft Magic Arms And Armor', 'Mythic Craft Rod', 'Mythic Craft Staff', 'Mythic Craft Wand', 'Mythic Craft Wondrous Item', 'Mythic Crafter', 
  'Mythic Deafening Critical', 'Mythic Diehard', 'Mythic Empower Spell', 'Mythic Enlarge Spell', 'Mythic Exhausting Critical', 'Mythic Exotic Weapon Proficiency', 'Mythic Extend Spell', 'Mythic Extra Channel', 'Mythic Extra Ki', 'Mythic Extra Lay On Hands', 
  'Mythic Extra Mercy', 'Mythic Extra Performance', 'Mythic Extra Rage', 'Mythic Forge Ring', 'Mythic Greater Disarm', 'Mythic Greater Feint', 'Mythic Greater Trip', 'Mythic Greater Vital Strike', 'Mythic Heighten Spell', 'Mythic Improved Feint', 
  'Mythic Improved Great Fortitude', 'Mythic Improved Iron Will', 'Mythic Improved Lightning Reflexes', 'Mythic Improved Precise Shot', 'Mythic Improved Shield Bash', 'Mythic Improved Two-Weapon Fighting', 'Mythic Improved Vital Strike', 
  'Mythic Improvised Weapon Mastery', 'Mythic Leadership', 'Mythic Lightning Stance', 'Mythic Martial Weapon Proficiency', 'Mythic Master Craftsman', 'Mythic Maximize Spell', 'Mythic Paragon', 'Mythic Precise shot', 'Mythic Quicken Spell', 
  'Mythic Scribe Scroll', 'Mythic Shield Master', 'Mythic Shield Proficiency', 'Mythic Sickening Critical', 'Mythic Silent Spell', 'Mythic Simple Weapon Proficiency', 'Mythic Spell Lore', 'Mythic Staggering Critical', 'Mythic Stand Still', 
  'Mythic Step Up', 'Mythic Still Spell', 'Mythic Stunning Critical', 'Mythic Tiring Critical', 'Mythic Tower Shield Proficiency', 'Mythic Whirlwind Attack', 'Mythic Widen Spell', 'Mythic Wind Stance', 'Potent Surge', 'Racial Heritage', 
  'Ride-By Attack', 'Titan Strike', 'Two-Fisted Drinker', 'Valiant Vault', 'Adaptive Fortune', 'Agile Tongue', 'Airy Step', 'Angel Wings', 'Angelic Blood', 'Angelic Flesh', 'Aquatic Ancestry', 'Armor of the Pit', 'Attuned to the Wild', 
  'Awakened Hag Heritage', 'Beast Rider', 'Bestow Luck', 'Black Cat', 'Blistering Feint', 'Blood Beak', 'Blood Drinker', 'Blood Feaster', 'Blood Salvage', 'Blood Vengeance', 'Blundering Defense', 'Born Alone', 'Brewmaster', 'Bullying Blow', 
  'Burrowing Teeth', 'Carrion Feeder', 'Casual Illusionist', 'Catfolk Exemplar', 'Cautious Fighter', 'Celestial Servant', 'Channel Force', 'Claw Pounce', 'Cleave Through', 'Cloud Gazer', 'Cloven Helm', 'Courageous Resolve', 'Critical Versatility', 
  'Dark Sight', 'Dauntless Destiny', 'Deafening Explosion', 'Defiant Luck', 'Demoralizing Lash', 'Dented Helm', 'Desperate Swing', 'Discerning Eye', 'Diverse Palate', 'Draconic Aspect', 'Draconic Breath', 'Draconic Glide', 'Draconic Paragon', 
  'Drow Nobility', 'Dwarf Blooded', 'Echoes of Stone', 'Eclectic', 'Eerily Centered', 'Elemental Jaunt', 'Elven Battle Training', 'Elven Spirit', 'Exile\'s Path', 'Expanded Fiendish Resistance', 'Expanded Resistance', 'Extra Elemental Assault', 
  'Fast Learner', 'Fearless Curiosity', 'Feline Grace', 'Ferocious Action', 'Ferocious Resolve', 'Ferocious Summons', 'Fiend Sight', 'Fire Hand', 'Fire Tamer', 'Firesight', 'Flame Heart', 'Focusing Blow', 'Foment the Blood', 'Fortunate One', 
  'Giant Killer', 'Giant Steps', 'Gloom Sight', 'Gloom Strike', 'Gnome Weapon Focus', 'Goblin Cleaver', 'Goblin Gunslinger', 'Great Hatred', 'Greater Channel Force', 'Greater Drow Nobility', 'Grudge Fighter', 'Guardian of the Wild', 'Half-Drow Paragon', 
  'Hard-headed', 'Heavenly Radiance', 'Heroic Will', 'Hobgoblin Discipline', 'Horde Charge', 'Human Spirit', 'Huntmaster', 'Hydraulic Maneuver', 'Improved Channel Force', 'Improved Dark Sight', 'Improved Drow Nobility', 'Improved Improvisation', 
  'Improved Low Blow', 'Improved Surprise Follow-Through', 'Improved Umbral Scion', 'Improvisation', 'Incremental Elemental Assault', 'Inexplicable Luck', 'Inner Breath', 'Inner Flame', 'Intimidating Confidence', 'Kobold Ambusher', 'Kobold Confidence', 
  'Kobold Sniper', 'Ledge Walker', 'Life\'s Blood', 'Lingering Invisibility', 'Long-Nose Form', 'Lucky Healer', 'Lucky Strike', 'Mage of the Wild', 'Magical Tail', 'Martial Mastery', 'Martial Versatility', 'Merciless Magic', 'Merciless Precision', 
  'Metallic Wings', 'Mixed Scales', 'Mother\'s Gift', 'Multitalented Mastery', 'Murmurs of Earth', 'Natural Charmer', 'Neither Elf Nor Human', 'Nimble Striker', 'Noble Spell Resistance', 'Orc Hewer', 'Orc Weapon Expertise', 'Oread Burrower', 
  'Oread Earth Glider', 'Realistic Likeness', 'Redeemed Kobold', 'Resilient Brute', 'Resolute Rager', 'Reverse-Feint', 'Risky Striker', 'Scaled Disciple', 'Scavenger\'s Eye', 'Scorching Weapons', 'Sea Hunter', 'Seen and Unseen', 'Shadow Caster', 
  'Shadow Ghost', 'Shadow Walker', 'Shadowy Dash', 'Shared Manipulation', 'Sharpclaw', 'Shatterspell', 'Sleep Venom', 'Spider Climber', 'Spider Summoner', 'Spirit of the Wild', 'Spit Venom', 'Steam Caster', 'Stoic Pose', 'Stony Step', 'Stretched Wings', 
  'Sure and Fleet', 'Surge of Success', 'Surprise Follow-Through', 'Surprise Strike', 'Tail Terror', 'Tangle Feet', 'Taskmaster', 'Tenacious Survivor', 'Tengu Raven Form', 'Tengu Wings', 'Terrorizing Display', 'Thrill of the Kill', 'Toxic Recovery', 
  'Trap Wrecker', 'Tree Hanger', 'Triton Portal', 'Tunnel Rat', 'Umbral Scion', 'Uncanny Defense', 'Unusual Origin', 'Vast Hatred', 'Water Skinned', 'Wings of Air', 'Obliviating Stare', 'Acadamae Graduate', 'Accursed', 'Arisen', 'Ascendant', 
  'Battlefield Healer', 'Berserker\'s Cry', 'Betrayed', 'Big Game Hunter', 'Champion', 'Conciliator', 'Country Born', 'Crisis of Conscience', 'Cursed Love', 'Damned', 'Dead Inside', 'Deny the Reaper', 'Eldritch Researcher', 'Enemy Cult', 
  'Fearless Zeal', 'Feral Heart', 'Foeslayer', 'Forgotten Past', 'Ghost Guide', 'Giant Vendetta', 'Glimpse Beyond', 'Gruesome Butcher', 'Inerrant Justice', 'Infiltrator', 'Innocent Blood', 'Liberator', 'Lost Legacy', 'Magical Enigma', 'Magnum Opus', 
  'Monument Builder', 'Nation Builder', 'Nemesis', 'Otherworldy Influence', 'Overachiever', 'Prophet', 'Protector of the People', 'Puppet Master', 'Redemption', 'Rival', 'Shamed', 'Stronghold', 'Supernatural Spy', 'Thief of Legend', 'Town Tamer', 
  'True Love', 'Twisted Love', 'Unforgotten', 'Vengeance', 'Vengeful Banisher', 'Wretched Curator', 'Brute Assault.', 'Shield Gauntlet Attack', 'Shield Gauntlet Master', 'All Gnolls Must Die', 'Chainbreaker', 'Devil\'s Foe', 'Endure Pain', 
  'Flame-Tested Survivor', 'Gifted Mesmerist', 'Grave-Risen', 'Healer\'s Touch', 'History of Scars', 'Knights Candidate', 'Lifting Hands of God', 'Relentless Butcher', 'Ally Shield', 'Blades Above and Below', 'Burn it Down!', 'Callous Casting', 
  'Elemental Commixture', 'Friendly Fire', 'Harder they Fall', 'Loyal to the Death', 'Ability Focus', 'Awesome Blow', 'Babau Rogue Talent', 'Blasting Boulder', 'Bouncing Spell-Like Ability', 'Brain Eater', 'Civilized Ghoulishness', 'Consume Undeath', 
  'Demonic Possession', 'Disruptive Spell-Like Ability', 'Earthtouched', 'Empower Spell-Like Ability', 'Fearsome Spell-Like Ability', 'Flame Warrior', 'Flensing Strike', 'Flyby Attack', 'Fortitude of Giants', 'Frost Warrior', 'Giant\'s Crush', 
  'Giant\'s Smash', 'Giant\'s Wallop', 'Gift of Sight', 'Gruesome Shapechanger', 'Hover', 'Impaling Charge', 'Improved Death-Stealing', 'Improved Infuse Weapon', 'Improved Natural Armor', 'Improved Natural Attack', 'Improved Possession', 
  'Improved Stench', 'Intensified Spell-Like Ability', 'Lingering Spell-Like Ability', 'Longshanks', 'Multiattack', 'Multiweapon Defense', 'Multiweapon Specialist', 'Nightstalker', 'Noxious Bite', 'Penetrating Possession', 'Possess Creature', 
  'Possess Location', 'Possess Object', 'Pungent Stench', 'Quick at Hand', 'Quicken Spell-Like Ability', 'Reach Spell-Like Ability', 'Scarring Spell-Like Ability', 'Scent of Fear', 'Sickening Spell-Like Ability', 'Silent as Stone', 'Skin Suit', 
  'Snatch', 'Sow Terror', 'Spawnlink', 'Spirit Vision', 'Stone Awareness', 'Stone Clinger', 'Stone Magic', 'Stone Soul', 'Storm Soul', 'Storm Warrior', 'Toxic Stench', 'Traumatic Spell-Like Ability', 'Will of Giants', 'Wingover'];
//put a space after value in a datalist option allows for the text to be displayed along with the value text
var movementList = ['burrow','climb','walk','fly','swim'];
var featsWithInput=['Skill Focus','Weapon Focus'];
var featswithPrereqs = {AberrantTumor:["Aberrant bloodline"],CriticalFocus:[""]}
var rangelessSense = ['scent','low-light vision'];
var racialModifiersList = ['acrobatics','appraise','bluff','climb','craft','diplomacy','disable device','disguise','escape artist','fly','handle animal','heal','intimidate','arcana','dungeoneering','engineering','geography','history','local','nature','nobility','planes','religion','linguistics','perception','perform','profession','ride','sense motive','sleight of hand','spellcraft','stealth','survival','swim','use magic device'];
lanList.sort();
senseList.sort();
featList.sort();
movementList.sort();
racialModifiersList.sort();
var lanArray = [lanList,'language'];
var senseArray = [senseList,'sense'];
var featArray = [featList,'feat'];
var movementArray = [movementList,'speed'];
var racialModifierArray = [racialModifiersList,'racialMod']
var dropDownArray =[lanArray,senseArray,featArray,movementArray,racialModifierArray];

fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadSideNav(jsonList))


    
function loadSideNav(list){
  try{

    var creatureList = document.getElementById("cols");
    let index = -1;
    list.creatures.forEach(element => {
        index++;
        let addCreatures = document.createElement("div");
        addCreatures.classList.add("cols");
        let barName = "";
        if(element.name!="Home"){
          barName+="-"
        }
        barName+=`${element.name}\n(${element.system})`;
        addCreatures.innerHTML = `<a href=${element.path}?creature=${index} onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> <p class="creatures"> ${barName}</p> </a></div>`;
        creatureList.appendChild(addCreatures);
        
    });
  }catch(err){

  }
        //cName = list.creatures[i].name;
    
}

fetch("./systems.json")
    .then(response=>response.json())
    .then(systems=>loadSystemsOptions(systems))
function loadSystemsOptions(list){
  try{
    var systemList = document.getElementById("colis");
    list.systems.forEach(element => {
        let addSystem = document.createElement("div");
        addSystem.classList.add("cols");
        let name = element.name.replace(element.name.charAt(0),element.name[0].toUpperCase());
        addSystem.innerHTML = `<a href=${element.path} onclick="systemPage('${element.name}')"> <p class="system"> ${name}</p> </a></div>`;
        systemList.appendChild(addSystem);
        
    });
  }catch(err){

  }
        //cName = list.creatures[i].name;
    
}

function systemPage(sys){
  sessionStorage.setItem("system",sys);
}

function createCreature(){
  let cinfo ={"path":"./creatureDisplay.html"};
  let cname = document.getElementById("creatureName").value;
  createCreatureJson(cinfo);
  fetch('http://localhost:8080/create',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Fetch error:", err));
  let lengthOfJson = 0;
  fetch("./list.json")
  .then(response=>response.json())
  .then(jsonList=>switchToCreation(jsonList,cname))

}
//editcreaturestuff
  function completeCreatureEdit(){
  let cinfo ={"path":"./creatureDisplay.html"};
  let cname = document.getElementById("creatureName").value;
  let system = sessionStorage.getItem("system");
  createCreatureJson(cinfo);
  let entry = sessionStorage.getItem("creature");
  let param = new URLSearchParams(window.location.search);
  entry = param.get("creature");
  fetch(`http://localhost:8080/update/${entry}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text());
  fetch("./list.json")
  .then(response=>response.json())
  .then(jsonList=>completeEdit(entry,cname,system))
}

function completeEdit(id,name,system){
  callFetch(id,name,system);
  window.location.href = `./creatureDisplay.html?creature=${id}`;
}

function switchToCreation(list,cname){
  let len = list.creatures.length;
  sessionStorage.setItem("creature",len);
  let system = sessionStorage.getItem("system");
  callFetch(len,cname,system);
  window.location.href = `./creatureDisplay.html?creature=${len}`;

}






function search(){
  let input, filter;
  input = document.getElementById("entrySearch");
  filter = input.value.toLowerCase();
  var list = document.getElementById("cols");
  let listlength = list.getElementsByTagName("div").length;
  for(let i=0;i<listlength;i++){
      let a = list.getElementsByTagName("div")[i].getElementsByTagName("a")[0];
      if(a.innerHTML.toLowerCase().indexOf(filter)>-1){
        list.getElementsByTagName("div")[i].style.display="";
      }else{
        list.getElementsByTagName("div")[i].style.display="none";
      }
  }
}


fetch("http://localhost:8080/json")
  .then(response=>response.json())
  .then(givenRes=>displayResponse(givenRes))


function displayResponse(response){
  try{   
      var visted = document.getElementById("rows");
      let index = -1;
      let path = "./creatureDisplay.html";
      response.pages.forEach(element => {
          let addVisits = document.createElement("div");
          addVisits.classList.add("rows");
          let barName = ""
          barName+=`${element.name}\n(${element.system})`;
          index = element.index;
          addVisits.innerHTML = `<div>
          <a href=${path}?creature=${index} class="LastVisit" onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> 
          <p > ${barName}</p> 
          </a>
          </div>`;
          visted.appendChild(addVisits);
          
   });
  }catch(err){

  }
}

function alternativeClick(index,name,system){
  sessionStorage.setItem("creature",index);
  callFetch(index,name,system);
}

function changePage(index,name,system){
  sessionStorage.setItem("creature",index);
  callFetch(index,name,system);
}
function openNav() {
  document.getElementById("sideNav").style.width = "300px";
  document.getElementById("offClick").style.width = "90%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("offClick").style.width = "0";
}
function goHome(){
     window.location.href = "./index.html";
}

function create(){
  window.location.href = "./creationChoice.html";
}

function createCreatureForm(){
  window.location.href = "./creationCreature.html";
}

function createCharacter(){
  window.location.href = "./charactercreation.html";
}

function callFetch(id,name,system){
  let cinfo = { "name":name, "index":id, "system":system}  
  fetch('http://localhost:8080/write',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Fetch error:", err));

}

function deleteEntry(){
  let entry = sessionStorage.getItem("creature");
  let text = "Do you wish to delete this entry?"
 if(confirm(text)==true){
    fetch(`http://localhost:8080/deleteEntry/${entry}`,{
      method: 'DELETE',
     headers: { 'content-type': 'application/json' },
    })
   window.location.href = "./index.html";
  }
}

function display(){
  console.log("callback ping!");
}


/**
 * gets json to be used in editing
 */
function editCreature(){

  fetch("./list.json")
  .then(response=>response.json())
  .then(givenRes=>switchToEdit(givenRes))
}
/**
 * changes page to edit creature page and stores needed information
 * @param {json} json 
 */
function switchToEdit(json){
  let id = sessionStorage.getItem("creature");
  let param = new URLSearchParams(window.location.search);
  id = param.get("creature");
  let sys = json.creatures[id].system;
 sessionStorage.setItem("system",sys);
 window.location.href = `./creatureEdit.html?creature=${id}`;

}
/**
 * simply goes to information page
 */
function goToInformation(){
  window.location.href = "./entryKeys.html";
}

/**sends page to display of creature */
function returnToCreature(){
  let param = new URLSearchParams(window.location.search);
  id = param.get("creature");
  window.location.href = `./creatureDisplay.html?creature=${id}`;
}

function displayChange(section){
    document.getElementById("main").style.display = section=="main"? "flex":"none";
    document.getElementById("defensiveTraits").style.display = section=="defensiveTraits"? "flex":"none";
    document.getElementById("skills").style.display = section=="skills"? "block":"none";
    document.getElementById("spell").style.display = section=="spells"? "block":"none";
    document.getElementById("offensiveTraits").style.display = section=="offensiveTraits"? "flex":"none";
    document.getElementById("other").style.display = section=="other"? "flex":"none";
//    document.getElementById("main").style.display = document.getElementById("main").style.display=="block"?"none":"block";
}

/**
 * creates form for site to use
 * @param {string} sys
 * @param {string} forumType  
 * @returns string
 */
function getForum(sys,forumType){
  let submitButton = "createCreature()";
  if(forumType==="edit"){
    submitButton = "completeCreatureEdit()";
  }
  let forum = ""
  switch(sys){
    case "pathfinder":
          forum = `<form id="forum">
        <div class="creationDisplay">
        <div class="creationSetup" id="main">
        <div>
        <label class="inputName" for="creatureName">Creature Name:</label><br>
        <input type="text" class="searchBarCreation" name="creatureName" id="creatureName" placeholder="Name" title="Creature Name" value="Mimic"><br>

        <label class="inputName" for="creatureType">Creature Type:</label><br>
        <select class="searchBarCreation" name="creatureType" id="creatureType" placeholder="Type" title="Creature Type"><br>
        <option selected>Aberration</option>
        <option>Animal</option>
        <option>Construct</option>
        <option>Dragon</option>
        <option>Fey</option>
        <option>Humanoid</option>
        <option>Magical Beast</option>
        <option>Monstrous Humanoid</option>
        <option>Ooze</option>
        <option>Outsider</option>
        <option>Plant</option>
        <option>Undead</option>
        <option>Vermin</option>
        <option>Custom</option>
        </select>
        <input type="text" class="searchBarCreation" name="customType" id="customType" style="display: none;" placeholder="customType" title="customType">
        <p class="inputName">Has Subtype<input type="checkbox" id="SubtypeOption" placeholder="toggle" onclick="toggle('Subtype')"></p>
        <input type="text" class="searchBarCreation" name="Subtype" id="Subtype" style="display: none;" placeholder="Subtype" title="Subtype">
        <label class="inputName" for="creatureTitle">Creature Title:</label><br>
        <input type="text" class="searchBarCreation" name="creatureTitle" id="creatureTitle" placeholder="Title" title="Creature Title" value="Mimic"><br>

        <label class="inputName" for="creatureCR">Creature CR:</label><br>
        <select class="searchBarCreation" name="creatureCR" id="creatureCR" placeholder="CR" title="Creature CR">
        <option>1/8</option>
        <option>1/6</option>
        <option>1/4</option>
        <option>1/3</option>
        <option>1/2</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option selected>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        </select>
        <br>

        <label class="inputName" for="creatureLevel">Creature Level:</label><br>
        <input type="number" min="1" class="searchBarCreation" name="creatureLevel" id="creatureLevel" placeholder="Level" title="Creature Level" value="7"><br>
        <label class="inputName" for="creatureHitDice">Creature Hit Dice:</label><br>
        <select class="searchBarCreation" name="creatureHitDice" id="creatureHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        </select><br>
        <label class="inputName" for="creatureHitDice">Creature HP Gain Rate:</label><br>
        <select class="searchBarCreation" name="creatureHitDiceRate" id="creatureHitDiceRate">
        <option>Monster</option>
        <option>Player</option>
        </select><br>
        <p id="calcHealth"></p>
        <p class="inputName">Set HP Information <input type="checkbox" id="setHPInformationOption" placeholder="toggle" onclick="toggle('setHPInformation')"></p>
        <div id="setHPInformation" style="display: none;" class="stairCase">
        <label class="inputName" for="creatureSetHP">Set Creature HP:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSetHP" id="creatureSetHP" placeholder="SetHP" title="Creature SetHP"><br>
        <label class="inputName" for="creatureSetHD">Set Creature hitDice:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSetHD" id="creatureSetHD" placeholder="SetHD" title="Creature SetHD"><br>
        </div>
      </div>
      <div>
        <div>
        <div class=dropDownAddition>
        <div class="speed" id="speedArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('speed')">Add speed</button>
        </div>
        <div id="speedInput" style="display:block;">
        <input type="number" min="0" class="searchBarCreation" name="speedTemp" id="speedTemp" placeholder="Insert speed Here" title="SenseTemp">
        </div>
        <div id="speedChoice"></div>
        </div>
        <label class="inputName" for="creatureStr">Creature Str:</label><br>
        <input type="text" class="searchBarCreation" name="creatureStr" id="creatureStr" placeholder="Str" title="Creature Str" value=19><br>

        <label class="inputName" for="creatureDex">Creature Dexterity:</label><br>
        <input type="text" class="searchBarCreation" name="creatureDex" id="creatureDex" placeholder="Dex" title="Creature Dex" value=12><br>

        <label class="inputName" for="creatureCon">Creature Con:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCon" id="creatureCon" placeholder="Con" title="Creature Con" value=17><br>

        <label class="inputName" for="creatureInt">Creature Intelligence:</label><br>
        <input type="text" class="searchBarCreation" name="creatureInt" id="creatureInt" placeholder="Int" title="Creature Int" value=10><br>

        <label class="inputName" for="creatureWis">Creature Wisdom:</label><br>
        <input type="text" class="searchBarCreation" name="creatureWis" id="creatureWis" placeholder="Wis" title="Creature Wis" value=13><br>

        <label class="inputName" for="creatureCha">Creature Charisma:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCha" id="creatureCha" placeholder="Cha" title="Creature Cha" value=10><br>
        </div>
        <div>
        <label class="inputName" for="creatureBaB">Creature BaB:</label><br>
        <select class="searchBarCreation" name="creatureBaB" id="creatureBaB">
        <option>Fast</option>
        <option Selected>Medium</option>
        <option>Slow</option>
        </select><br>


        <label class="inputName" for="creatureSkillProgression">Creature Skill Progression:</label><br>
        <select class="searchBarCreation" name="creatureSkillProgression" id="creatureSkillProgression">
        <option>High</option>
        <option Selected>Middle</option>
        <option>Low</option>
        </select><br>

        <label class="inputName" for="creatureFort">Creature Fort Bonus:</label><br>
        <select class="searchBarCreation" name="creatureFort" id="creatureFort">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureRef">Creature Ref Bonus:</label><br>
        <select class="searchBarCreation" name="creatureRef" id="creatureRef">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureWill">Creature Will Bonus:</label><br>
        <select class="searchBarCreation" name="creatureWill" id="creatureWill">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureAlignment">Creature Alignment:</label><br>
        <select class="searchBarCreation" name="creatureAlignment" id="creatureAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>

        <label class="inputName" for="creatureSize">Creature Size:</label><br>
        <select class="searchBarCreation" name="creatureSize" id="creatureSize">
        <option>Fine</option>
        <option>Diminutive</option>
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        <option>Colossal</option>
        </select><br>
        <p class="inputName">Long?<input type="checkbox" id="isItLongOption" placeholder="toggle"></p>
        </div>
        </div>
        <div class="creationSetup" id="defensiveTraits" style="display: none;">
        <div>
        <p class="inputName">Has bonuses to AC <input type="checkbox" id="bonusACOption" placeholder="toggle" onclick="arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra'])"></p>
        <div id="bonusACContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="bonusACArmor" style="display: none;">Has Armor <input id="armorOption" type="checkbox" placeholder="toggle" onclick="toggle('armor')"></p> 
        <input type="number" class="searchBarCreation" name="armor" id="armor" style="display: none;" placeholder="armor" title="armor">
        
        <p class="inputName" id="bonusACDeflection" style="display: none;">Has Deflection <input id="deflectionOption" type="checkbox" placeholder="toggle" onclick="toggle('deflection')"></p> 
        <input type="number" class="searchBarCreation" name="deflection" id="deflection" style="display: none;" placeholder="deflection" title="deflection">

        <p class="inputName" id="bonusACDodge" style="display: none;">Has Dodge <input id="dodgeOption" type="checkbox" placeholder="toggle" onclick="toggle('dodge')"></p> 
        <input type="number" class="searchBarCreation" name="dodge" id="dodge" style="display: none;" placeholder="dodge" title="dodge">

        <p class="inputName" id="bonusACShield" style="display: none;">Has Shield <input id="shieldOption" type="checkbox" placeholder="toggle" onclick="toggle('shield')"></p> 
        <input type="number" class="searchBarCreation" name="shield" id="shield" style="display: none;" placeholder="shield" title="shield">

        <p class="inputName" id="bonusACNatural" style="display: none;">Has Natural <input id="naturalOption" type="checkbox" placeholder="toggle" onclick="toggle('natural')"></p> 
        <input type="number" class="searchBarCreation" name="natural" id="natural" style="display: none;" placeholder="natural" title="natural">

        <p class="inputName" id="bonusACExtra" style="display: none;">Has Extra Bonuses <input id="extraBonusesOption" type="checkbox" placeholder="toggle" onclick="toggle('extraBonuses')"></p> 

        <div style="display: none;" id="extraBonuses"><button type="button" class="formButton" onclick="createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')">Add Extra Bonuses</button>
        <div class="extra" id="extraArea"></div></div>
        </div>
        </div>
        <div>
        <p class="inputName">Has Defensive Traits <input type="checkbox" id="defensiveTraitsOption" placeholder="toggle" onclick="arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR'])"></p>
        <div id="defensiveTraitsContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="defensiveTraitsDA" style="display: none;">Has Defensive Abilities <input id="DAOption" type="checkbox" placeholder="toggle" onclick="toggle('DA')"></p> 
        <textarea class="searchBarCreation" name="DA" id="DA" style="display: none;" placeholder="Defensive Ability" title="DA"></textarea>
        
        <p class="inputName" id="defensiveTraitsDR" style="display: none;">Has DR <input id="DROption" type="checkbox" placeholder="toggle" onclick="toggle('DR')"></p> 
        <textarea class="searchBarCreation" name="DR" id="DR" style="display: none;" placeholder="DR" title="DR"></textarea>

        <p class="inputName" id="defensiveTraitsImmune" style="display: none;">Has Immunities <input id="ImmuneOption" type="checkbox" placeholder="toggle" onclick="toggle('Immune')"></p> 
        <textarea class="searchBarCreation" name="Immune" id="Immune" style="display: none;" placeholder="Immune" title="Immune"></textarea>

        <p class="inputName" id="defensiveTraitsResist" style="display: none;">Has Energy Resistances <input id="ResistOption" type="checkbox" placeholder="toggle" onclick="toggle('Resist')"></p> 
        <textarea class="searchBarCreation" name="Resist" id="Resist" style="display: none;" placeholder="Resist" title="Resist"></textarea>

        <p class="inputName" id="defensiveTraitsSR" style="display: none;">Has SR <input id="SROption" type="checkbox" placeholder="toggle" onclick="toggle('SR')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="SR" id="SR" style="display: none;" placeholder="SR" title="SR">
        </div>
        </div>
        <div>

        
        <p class="inputName" id="reachreach_bonus_effects"">Has Reach Bonus Effects<input id="reach_bonus_effectsOption" type="checkbox" placeholder="toggle" onclick="toggle('reach_bonus_effects')"></p> 
        <input type="text" class="searchBarCreation" name="reach_bonus_effects" id="reach_bonus_effects" placeholder="Reach Bonus Effects" title="reach_bonus_effects">

        </div>
        <div>
        <p class="inputName">Has HP Traits<input type="checkbox" id="HPTraitsOption" placeholder="toggle" onclick="toggle('HPTraits')"></p>
        <textarea class="searchBarCreation" name="HPTraits" id="HPTraits" style="display: none;" placeholder="HPTraits" title="HPTraits"></textarea>
        
        <p class="inputName">Has Weakness<input type="checkbox" id="weaknessOption" placeholder="toggle" onclick="toggle('weakness')"></p>
        <textarea class="searchBarCreation" name="weakness" id="weakness" style="display: none;" placeholder="Weakness" title="weakness"></textarea>
        <br><button type="button" class="formButton" onclick="createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount')">Add Save Bonus</button>
        <div class="saveBonus" id="saveBonusArea"></div>
        <br><button type="button" class="formButton" onclick="createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')">Add CMD Modifier</button>
        <div class="cmdMod" id="cmdModArea"></div>


        </div>
        </div>



        <div class="creationSetup" id="offensiveTraits" style="display:none;">
        <div>
        <p class="inputName">Has Special Attack<input type="checkbox" id="special_attacksOption" placeholder="toggle" onclick="toggle('special_attacks')"></p>
        <textarea class="searchBarCreation" name="special_attacks" id="special_attacks" style="display: none;" placeholder="Special Attacks" title="special_attacks"></textarea>
        <br><button type="button" class="formButton" onclick="createDualInformation('SpecialAbility','Name','Details','Special Ability','Special Ability Name','Special Ability Details','text','text',true,true,true,true)">Add Special Ability</button>
        <div class="SpecialAbility" id="specialAbilityArea"></div>
        </div>
        <div>
        <p class="inputName">Has Melee Attack<input type="checkbox" id="meleeOption" placeholder="toggle" onclick="toggle('melee')"></p>
        <div style="display: none;" id="melee"><button type="button" class="formButton" onclick="createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count')">Add Melee Attack</button>
        <div class="meleeAttack" id="meleeAttackArea"></div></div>
        </div>
        <div>
        <p class="inputName">Has Range Attack<input type="checkbox" id="rangeOption" placeholder="toggle" onclick="toggle('range')"></p>
        <div style="display: none;" id="range"><button type="button" class="formButton" onclick="createAttackInformation('rangeAttack','Range Attack Name','Range Attack Dice Count')">Add Range Attack</button>
        <div class="rangeAttack" id="rangeAttackArea"></div></div>
        </div>
        <div>
        <br><button type="button" class="formButton" onclick="createDualInformation('aura','Aura','Radius','Aura','Aura','Radius','text','number',true,false,false,false,true);">Add Aura</button>
        <div class="aura" id="auraArea"></div>
        </div>
        </div>
        <div class="creationSetup"id="other" style="display: none;">
        <div>

        <div class=dropDownAddition>
        <div class="sense" id="senseArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('sense')">Add sense</button>
        </div>
        <div id="senseInput" style="display:block;">
        <input type="number" min="0" class="searchBarCreation" name="senseTemp" id="senseTemp" placeholder="Insert Vision Range Here" title="SenseTemp">
        </div>
        <div id="senseChoice"></div>
        </div>

        <div>
        <p id="featCount"></p><br>


        <div class=dropDownAddition>
        <div class="feat" id="featArea"></div>
        <button type="button" class="formButton" id="featButton" onclick="addDropdownchoice('feat')">Add feat</button>
        </div>
        <div id="featInput" style="display:block;">
        <input type="text"class="searchBarCreation" id="featTemp" name="featTemp" placeholder="Insert Feat Details Here" title="FeatTemp">
        </div>
        <div id="featChoice"></div>
        </div>

        
        <div>
        <p class="inputName">Has Gear<input type="checkbox" id="gearOption" placeholder="toggle" onclick="toggle('gear')"></p>
        <input type="text" class="searchBarCreation" name="gear" id="gear" style="display: none;" placeholder="Gear" title="gear"><br>
        <div class=dropDownAddition>
        <div class="language" id="languageArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('language')">Add language</button>
        </div>
        <div id="languageChoice"></div>
        <div>
        <div class=dropDownAddition>
        <div class="racialMod" id="racialModArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('racialMod')">Add racialMod</button>
        </div>
        <div id="racialModInput" style="display:block;">
        <input type="number" min="0" class="searchBarCreation" name="racialModTemp" id="racialModTemp" placeholder="Insert racial modifier Here" title="SenseTemp">
        </div>
        <div id="racialModChoice"></div>
        </div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('SQ','Special Quality','Special Quality Name')">Add Special Quality</button>
        <div class="SQ" id="SQArea"></div>
        </div>
        
        </div>
        </div>


        <div id="skills" style="display:none;" class="creationDisplay">
        
        <p class="inputName">Has Skills <input type="checkbox" id="skillsOption" placeholder="toggle" onclick="arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'])"></p>
        <div id="skillsContainer" style="display: none;" class="stairCase">
        <p id="skillPoints"></p>
        <p class="inputName" id="skillsAcrobatics" style="display: none;">Has Acrobatics <input id="AcrobaticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Acrobatics')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Acrobatics" id="Acrobatics" style="display: none;" placeholder="Acrobatics" title="Acrobatics">
        
        <p class="inputName" id="skillsAppraise" style="display: none;">Has Appraise <input id="AppraiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Appraise')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Appraise" id="Appraise" style="display: none;" placeholder="Appraise" title="Appraise">

        <p class="inputName" id="skillsBluff" style="display: none;">Has Bluff<input id="BluffOption" type="checkbox" placeholder="toggle" onclick="toggle('Bluff')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Bluff" id="Bluff" style="display: none;" placeholder="Bluff" title="Bluff">

        <p class="inputName" id="skillsClimb" style="display: none;">Has Climb <input id="ClimbOption" type="checkbox" placeholder="toggle" onclick="toggle('Climb')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Climb" id="Climb" style="display: none;" placeholder="Climb" title="Climb">

        <p class="inputName" id="skillsCraft" style="display: none;">Has Craft <input id="CraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Craft')"></p> 
        <div style="display: none;" id="Craft"><button type="button" id="craftButton" class="formButton" onclick="createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number')">Add Craft</button>
        <div class="Craft" id="CraftArea"></div></div>

        <p class="inputName" id="skillsDiplomacy" style="display: none;">Has Diplomacy <input id="DiplomacyOption" type="checkbox" placeholder="toggle" onclick="toggle('Diplomacy')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Diplomacy" id="Diplomacy" style="display: none;" placeholder="Diplomacy" title="Diplomacy">
        
        <p class="inputName" id="skillsDisableDevice" style="display: none;">Has Disable Device <input id="DisableDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('DisableDevice')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="DisableDevice" id="DisableDevice" style="display: none;" placeholder="DisableDevice" title="DisableDevice">

        <p class="inputName" id="skillsDisguise" style="display: none;">Has Disguise <input id="DisguiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Disguise')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Disguise" id="Disguise" style="display: none;" placeholder="Disguise" title="Disguise">

        <p class="inputName" id="skillsEscapeArtist" style="display: none;">Has Escape Artist <input id="EscapeArtistOption" type="checkbox" placeholder="toggle" onclick="toggle('EscapeArtist')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="EscapeArtist" id="EscapeArtist" style="display: none;" placeholder="EscapeArtist" title="EscapeArtist">

        <p class="inputName" id="skillsFly" style="display: none;">Has Fly <input id="FlyOption" type="checkbox" placeholder="toggle" onclick="toggle('Fly')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Fly" id="Fly" style="display: none;" placeholder="Fly" title="Fly">

        <p class="inputName" id="skillsHandleAnimal" style="display: none;">Has Handle Animal <input id="HandleAnimalOption" type="checkbox" placeholder="toggle" onclick="toggle('HandleAnimal')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="HandleAnimal" id="HandleAnimal" style="display: none;" placeholder="HandleAnimal" title="HandleAnimal">

        <p class="inputName" id="skillsHeal" style="display: none;">Has Heal <input id="HealOption" type="checkbox" placeholder="toggle" onclick="toggle('Heal')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Heal" id="Heal" style="display: none;" placeholder="Heal" title="Heal">

        <p class="inputName" id="skillsIntimidate" style="display: none;">Has Intimidate <input id="IntimidateOption" type="checkbox" placeholder="toggle" onclick="toggle('Intimidate')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Intimidate" id="Intimidate" style="display: none;" placeholder="Intimidate" title="Intimidate">

        <p class="inputName" style="display: flex">Has Knowledge<input type="checkbox" id="skillsKnowledgeOption" placeholder="toggle" onclick="arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All'])"></p> 
        <div id="skillsKnowledgeContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="skillsKnowledgeAll" style="display: block;">Has All <input id="AllOption" type="checkbox" placeholder="toggle" onclick="toggle('All')"></p> 

        <p class="inputName" id="skillsKnowledgeArcana" style="display: none;">Has Arcana <input id="ArcanaOption" type="checkbox" placeholder="toggle" onclick="toggle('Arcana')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Arcana" id="Arcana" style="display: none;" placeholder="Arcana" title="Arcana">

        <p class="inputName" id="skillsKnowledgeDungeoneering" style="display: none;">Has Dungeoneering <input id="DungeoneeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Dungeoneering')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Dungeoneering" id="Dungeoneering" style="display: none;" placeholder="Dungeoneering" title="Dungeoneering">

        <p class="inputName" id="skillsKnowledgeEngineering" style="display: none;">Has Engineering <input id="EngineeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Engineering')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Engineering" id="Engineering" style="display: none;" placeholder="Engineering" title="Engineering">

        <p class="inputName" id="skillsKnowledgeGeography" style="display: none;">Has Geography <input id="GeographyOption" type="checkbox" placeholder="toggle" onclick="toggle('Geography')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Geography" id="Geography" style="display: none;" placeholder="Geography" title="Geography">

        <p class="inputName" id="skillsKnowledgeHistory" style="display: none;">Has History <input id="HistoryOption" type="checkbox" placeholder="toggle" onclick="toggle('History')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="History" id="History" style="display: none;" placeholder="History" title="History">

        <p class="inputName" id="skillsKnowledgeLocal" style="display: none;">Has Local <input id="LocalOption" type="checkbox" placeholder="toggle" onclick="toggle('Local')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Local" id="Local" style="display: none;" placeholder="Local" title="Local">

        <p class="inputName" id="skillsKnowledgeNature" style="display: none;">Has Nature <input id="NatureOption" type="checkbox" placeholder="toggle" onclick="toggle('Nature')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Nature" id="Nature" style="display: none;" placeholder="Nature" title="Nature">

        <p class="inputName" id="skillsKnowledgeNobility" style="display: none;">Has Nobility <input id="NobilityOption" type="checkbox" placeholder="toggle" onclick="toggle('Nobility')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Nobility" id="Nobility" style="display: none;" placeholder="Nobility" title="Nobility">

        <p class="inputName" id="skillsKnowledgePlanes" style="display: none;">Has Planes <input id="PlanesOption" type="checkbox" placeholder="toggle" onclick="toggle('Planes')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Planes" id="Planes" style="display: none;" placeholder="Planes" title="Planes">

        <p class="inputName" id="skillsKnowledgeReligion" style="display: none;">Has Religion <input id="ReligionOption" type="checkbox" placeholder="toggle" onclick="toggle('Religion')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Religion" id="Religion" style="display: none;" placeholder="Religion" title="Religion">

                
        </div>

        <p class="inputName" id="skillsLinguistics" style="display: none;">Has Linguistics <input id="LinguisticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Linguistics')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Linguistics" id="Linguistics" style="display: none;" placeholder="Linguistics" title="Linguistics">

        <p class="inputName" id="skillsPerception" style="display: none;">Has Perception <input id="PerceptionOption" type="checkbox" placeholder="toggle" onclick="toggle('Perception')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Perception" id="Perception" style="display: none;" placeholder="Perception" title="Perception">

        <p class="inputName" id="skillsPerform" style="display: none;">Has Perform <input id="PerformOption" type="checkbox" placeholder="toggle" onclick="toggle('Perform')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Perform" id="Perform" style="display: none;" placeholder="Perform" title="Perform">

        <p class="inputName" id="skillsProfession" style="display: none;">Has Profession <input id="ProfessionOption" type="checkbox" placeholder="toggle" onclick="toggle('Profession')"></p> 
        <div style="display: none;" id="Profession"><button type="button" id="professionButton" class="formButton" onclick="createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number')">Add Profession</button>
        <div class="Profession" id="ProfessionArea"></div></div>

        <p class="inputName" id="skillsRide" style="display: none;">Has Ride <input id="RideOption" type="checkbox" placeholder="toggle" onclick="toggle('Ride')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Ride" id="Ride" style="display: none;" placeholder="Ride" title="Ride">

        <p class="inputName" id="skillsSenseMotive" style="display: none;">Has Sense Motive <input id="SenseMotiveOption" type="checkbox" placeholder="toggle" onclick="toggle('SenseMotive')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="SenseMotive" id="SenseMotive" style="display: none;" placeholder="SenseMotive" title="SenseMotive">

        <p class="inputName" id="skillsSleightofHand" style="display: none;">Has Sleight of Hand <input id="SleightofHandOption" type="checkbox" placeholder="toggle" onclick="toggle('SleightofHand')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="SleightofHand" id="SleightofHand" style="display: none;" placeholder="SleightofHand" title="SleightofHand">

        <p class="inputName" id="skillsSpellcraft" style="display: none;">Has Spellcraft <input id="SpellcraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Spellcraft')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Spellcraft" id="Spellcraft" style="display: none;" placeholder="Spellcraft" title="Spellcraft">

        <p class="inputName" id="skillsStealth" style="display: none;">Has Stealth <input id="StealthOption" type="checkbox" placeholder="toggle" onclick="toggle('Stealth')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Stealth" id="Stealth" style="display: none;" placeholder="Stealth" title="Stealth">

        <p class="inputName" id="skillsSurvival" style="display: none;">Has Survival <input id="SurvivalOption" type="checkbox" placeholder="toggle" onclick="toggle('Survival')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Survival" id="Survival" style="display: none;" placeholder="Survival" title="Survival">

        <p class="inputName" id="skillsSwim" style="display: none;">Has Swim <input id="SwimOption" type="checkbox" placeholder="toggle" onclick="toggle('Swim')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Swim" id="Swim" style="display: none;" placeholder="Swim" title="Swim">

        <p class="inputName" id="skillsUseMagicDevice" style="display: none;">Has Use Magic Device <input id="UseMagicDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('UseMagicDevice')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="UseMagicDevice" id="UseMagicDevice" style="display: none;" placeholder="UseMagicDevice" title="UseMagicDevice">
        </div>


        </div>
        <div id="spell" style="display: none;" class="creationDisplay">
        <p class="inputName">Has Spells<input type="checkbox" id="spellsOption" placeholder="toggle" onclick="arrayToggle('spells',['Container','InnateOption','PreparedOption'])"></p>
        <div id="spellsContainer" style="display: none;" class="stairCase">
        

        <p class="inputName" style="display: flex">Has Innate<input type="checkbox" id="spellsInnateOption" placeholder="toggle" onclick="arrayToggle('spellsInnate',['Container','Constant','atWill','xDay'])"></p> 
        <div id="spellsInnateContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="creatureSpellModInnate">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="creatureSpellModInnate" id="creatureSpellModInnate">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="innateCasterLevelZone";">Set Caster Level Innate <input id="innateCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('innateCasterLevel')"></p>
        <div id="innateCasterLevel" style="display: none;" class="stairCase">
        <input type="number" min="0" class="searchBarCreation" name="CLInnate" id="CLInnate" placeholder="CLInnate" title="CLInnate">      
        <input type="number" min="0" class="searchBarCreation" name="ConcentrateInnate" id="ConcentrateInnate"" placeholder="ConcentrateInnate" title="ConcentrateInnate">
        </div>

        <p class="inputName" id="spellsInnateConstant" style="display: none;">Has Constant <input id="constantOption" type="checkbox" placeholder="toggle" onclick="toggle('constant')"></p> 
        <input type="text" class="searchBarCreation" name="constant" id="constant" style="display: none;" placeholder="Constant" title="constant">

        <p class="inputName" id="spellsInnateatWill" style="display: none;">Has atWill <input id="atWillOption" type="checkbox" placeholder="toggle" onclick="toggle('atWill')"></p> 
        <input type="text" class="searchBarCreation" name="atWill" id="atWill" style="display: none;" placeholder="atWill" title="atWill">

        <p class="inputName" id="spellsInnatexDay" style="display: none;">Has xDay <input id="xDayOption" type="checkbox" placeholder="toggle" onclick="toggle('xDay')"></p> 
        <div style="display: none;" id="xDay"><button type="button" class="formButton" onclick="createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text')">Add xDay Spells</button>
        <div class="xDay" id="xDayArea"></div></div>
        </div>


        <p class="inputName" style="display: flex">Has Prepared <input type="checkbox" id="spellsPreparedOption" placeholder="toggle" onclick="arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth'])"></p>
        
        <div id="spellsPreparedContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="creatureSpellModPrepared">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="creatureSpellModPrepared" id="creatureSpellModPrepared">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="preparedCasterLevelZone";">Set Caster Level Prepared <input id="preparedCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('preparedCasterLevel')"></p>
        <div id="preparedCasterLevel" style="display: none;" class="stairCase">
        <input type="number" min="0" class="searchBarCreation" name="CLPrepared" id="CLPrepared" placeholder="CLPrepared" title="CLPrepared">      
        <input type="number" min="0" class="searchBarCreation" name="ConcentratePrepared" id="ConcentratePrepared"" placeholder="ConcentratePrepared" title="ConcentratePrepared">
        </div>


        <p class="inputName" id="spellsPreparedNinth" style="display: none;">Has 9th level Spells<input id="ninthOption" type="checkbox" placeholder="toggle" onclick="toggle('ninth')"></p> 
        <input type="text" class="searchBarCreation" name="ninth" id="ninth" style="display: none;" placeholder="Ninth" title="ninth">

        <p class="inputName" id="spellsPreparedEighth" style="display: none;">Has 8th level Spells<input id="eighthOption" type="checkbox" placeholder="toggle" onclick="toggle('eighth')"></p> 
        <input type="text" class="searchBarCreation" name="eighth" id="eighth" style="display: none;" placeholder="Eighth" title="eighth">

        <p class="inputName" id="spellsPreparedSeventh" style="display: none;">Has 7th level Spells<input id="seventhOption" type="checkbox" placeholder="toggle" onclick="toggle('seventh')"></p> 
        <input type="text" class="searchBarCreation" name="seventh" id="seventh" style="display: none;" placeholder="Seventh" title="seventh">

        <p class="inputName" id="spellsPreparedSixth" style="display: none;">Has 6th level Spells<input id="sixthOption" type="checkbox" placeholder="toggle" onclick="toggle('sixth')"></p> 
        <input type="text" class="searchBarCreation" name="sixth" id="sixth" style="display: none;" placeholder="Sixth" title="sixth">

        <p class="inputName" id="spellsPreparedFifth" style="display: none;">Has 5th level Spells<input id="fifthOption" type="checkbox" placeholder="toggle" onclick="toggle('fifth')"></p> 
        <input type="text" class="searchBarCreation" name="fifth" id="fifth" style="display: none;" placeholder="Fifth" title="fifth">

        <p class="inputName" id="spellsPreparedFourth" style="display: none;">Has 4th level Spells<input id="fourthOption" type="checkbox" placeholder="toggle" onclick="toggle('fourth')"></p> 
        <input type="text" class="searchBarCreation" name="fourth" id="fourth" style="display: none;" placeholder="Fourth" title="fourth">
        
        <p class="inputName" id="spellsPreparedThird" style="display: none;">Has 3rd level Spells<input id="thirdOption" type="checkbox" placeholder="toggle" onclick="toggle('third')"></p> 
        <input type="text" class="searchBarCreation" name="third" id="third" style="display: none;" placeholder="Third" title="third">

        <p class="inputName" id="spellsPreparedSecond" style="display: none;">Has 2nd level Spells<input id="secondOption" type="checkbox" placeholder="toggle" onclick="toggle('second')"></p> 
        <input type="text" class="searchBarCreation" name="second" id="second" style="display: none;" placeholder="Second" title="second">

        <p class="inputName" id="spellsPreparedFirst" style="display: none;">Has 1st level Spells<input id="firstOption" type="checkbox" placeholder="toggle" onclick="toggle('first')"></p> 
        <input type="text" class="searchBarCreation" name="first" id="first" style="display: none;" placeholder="First" title="first">

        <p class="inputName" id="spellsPreparedZeroth" style="display: none;">Has 0 level Spells<input id="zerothOption" type="checkbox" placeholder="toggle" onclick="toggle('zeroth')"></p> 
        <input type="text" class="searchBarCreation" name="zeroth" id="zeroth" style="display: none;" placeholder="Zeroth" title="zeroth">
        </div>
        </div>
        </div>

        </div>
        </div>
        </form>`
        break;
    case "5e":
      forum =`<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Required:</p>
        <label class="inputName" for="creatureName">Creature Name:</label><br>
        <input type="text" class="searchBarCreation" name="creatureName" id="creatureName" placeholder="Name" title="Creature Name" value="Mimic"><br>

        <label class="inputName" for="creatureType">Creature Type:</label><br>
        <input type="text" class="searchBarCreation" name="creatureType" id="creatureType" placeholder="Type" title="Creature Type" value="Aberration(shapechanger)"><br>

        <label class="inputName" for="creatureTitle">Creature Title:</label><br>
        <input type="text" class="searchBarCreation" name="creatureTitle" id="creatureTitle" placeholder="Title" title="Creature Title" value="Mimic"><br>

        <label class="inputName" for="creatureCR">Creature CR:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCR" id="creatureCR" placeholder="CR" title="Creature CR" value="4"><br>

        <label class="inputName" for="creatureXP">Creature XP:</label><br>
        <input type="number" class="searchBarCreation" name="creatureXP" id="creatureXP" placeholder="XP" title="Creature XP" value="1200"><br>

        <label class="inputName" for="creatureLevel">Creature Hit Dice Count:</label><br>
        <input type="number" class="searchBarCreation" name="creatureLevel" id="creatureLevel" placeholder="hit dice" title="Creature Level" value="7"><br>

        <label class="inputName" for="creatureHitDice">Creature Hit Dice:</label><br>
        <select class="searchBarCreation" name="creatureHitDice" id="creatureHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        <option>d20</option>
        </select><br>

        <label class="inputName" for="ac">Creature ac bonus:</label><br>
        <input type="text" class="searchBarCreation" name="ac" id="ac" placeholder="ac" title="Creature ac" value=0><br>
    
        <label class="inputName" for="creatureSpeed">Creature Speed:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSpeed" id="creatureSpeed" placeholder="Speed" title="Creature Speed" value="30"><br>

        <label class="inputName" for="creatureStr">Creature Str:</label><br>
        <input type="number" class="searchBarCreation" name="creatureStr" id="creatureStr" placeholder="Str" title="Creature Str" value=19><br>

        <label class="inputName" for="creatureDex">Creature Dexterity:</label><br>
        <input type="number" class="searchBarCreation" name="creatureDex" id="creatureDex" placeholder="Dex" title="Creature Dex" value=12><br>

        <label class="inputName" for="creatureCon">Creature Con:</label><br>
        <input type="number" class="searchBarCreation" name="creatureCon" id="creatureCon" placeholder="Con" title="Creature Con" value=17><br>

        <label class="inputName" for="creatureInt">Creature Intelligence:</label><br>
        <input type="number" class="searchBarCreation" name="creatureInt" id="creatureInt" placeholder="Int" title="Creature Int" value=10><br>

        <label class="inputName" for="creatureWis">Creature Wisdom:</label><br>
        <input type="number" class="searchBarCreation" name="creatureWis" id="creatureWis" placeholder="Wis" title="Creature Wis" value=13><br>

        <label class="inputName" for="creatureCha">Creature Charisma:</label><br>
        <input type="number" class="searchBarCreation" name="creatureCha" id="creatureCha" placeholder="Cha" title="Creature Cha" value=10><br>

        <label class="inputName" for="creatureProficiency">Creature Proficiency:</label><br>
        <input type="number" class="searchBarCreation" name="creatureProficiency" id="creatureProficiency" placeholder="Proficiency" title="Creature Proficiency" value=5><br>
        <label class="inputName" for="creatureAlignment">Creature Alignment:</label><br>
        <select class="searchBarCreation" name="creatureAlignment" id="creatureAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>
        <label class="inputName" for="creatureSense">Creature Sense:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSense" id="creatureSense" placeholder="Sense" title="Creature Sense" value="Senses"><br>

        <label class="inputName" for="creatureSize">Creature Size:</label><br>
        <select class="searchBarCreation" name="creatureSize" id="creatureSize">
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        </select><br>
        </div>
        <div>
        <p class="Title">Choices:</p>
        <p class="inputName">Str Saving Throw Proficiency<input type="checkbox" id="StrSavingThrowProficiencyOption" placeholder="StrSavingThrowProficiency"></p>
        <p class="inputName">Dex Saving Throw Proficiency<input type="checkbox" id="DexSavingThrowProficiencyOption" placeholder="DexSavingThrowProficiency"></p>
        <p class="inputName">Con Saving Throw Proficiency<input type="checkbox" id="ConSavingThrowProficiencyOption" placeholder="ConSavingThrowProficiency"></p>
        <p class="inputName">Int Saving Throw Proficiency<input type="checkbox" id="IntSavingThrowProficiencyOption" placeholder="IntSavingThrowProficiency"></p>
        <p class="inputName">Wis Saving Throw Proficiency<input type="checkbox" id="WisSavingThrowProficiencyOption" placeholder="WisSavingThrowProficiency"></p>
        <p class="inputName">Cha Saving Throw Proficiency<input type="checkbox" id="ChaSavingThrowProficiencyOption" placeholder="ChaSavingThrowProficiency"></p>
        <p class="inputName">Has Damage Vulnerabilities<input type="checkbox" id="damage_vulnerabilitiesOption" placeholder="toggle" onclick="toggle('damage_vulnerabilities')"></p>
        <input type="text" class="searchBarCreation" name="damage_vulnerabilities" id="damage_vulnerabilities" style="display: none;" placeholder="Damage Vulnerabilities" title="damage_vulnerabilities">
        <p class="inputName">Has Damage Resistances<input type="checkbox" id="damage_resistancesOption" placeholder="toggle" onclick="toggle('damage_resistances')"></p>
        <input type="text" class="searchBarCreation" name="damage_resistances" id="damage_resistances" style="display: none;" placeholder="Damage Resistances" title="damage_resistances">
        <p class="inputName">Has Damage Immunities<input type="checkbox" id="damage_immunitiesOption" placeholder="toggle" onclick="toggle('damage_immunities')"></p>
        <input type="text" class="searchBarCreation" name="damage_immunities" id="damage_immunities" style="display: none;" placeholder="Damage Immunities" title="damage_immunities">
        <p class="inputName">Has Condition Immunities<input type="checkbox" id="condition_immunitiesOption" placeholder="toggle" onclick="toggle('condition_immunities')"></p>
        <input type="text" class="searchBarCreation" name="condition_immunities" id="condition_immunities" style="display: none;" placeholder="Condition Immunities" title="condition_immunities">
        <p class="inputName">Has Legendary Actions<input id="legendaryAbilitiesOption" type="checkbox" placeholder="toggle" onclick="toggle('legendaryAbilities')"></p> 
        <div id="legendaryAbilities" style="display: none;" class="stairCase">
        <input type="text" class="searchBarCreation" name="legendary_details" id="legendary_details" placeholder="Legendary Details" title="legendary_details">
        <div id="legendaryActions"><button type="button" class="formButton" onclick="createDualInformation('legendaryActions','name','details','legendary Action','Legendary Action Name','Legendary Action Details','text','text')">Add Legendary Action</button>
        <div class="legendaryActions" id="legendaryActionsArea"></div></div>
        </div>

        </div>
        <div>
        <p class="Title">Infinite Extras and Skills:</p>
                <br><button type="button" class="formButton" onclick="createDualInformation('Ability','name','details','Ability','Ability Name','Ability Details','text','text')">Add Ability</button>
        <div class="Ability" id="AbilityArea"></div>
                <br><button type="button" class="formButton" onclick="createDualInformation('Action','name','details','Action','Action Name','Action Details','text','text')">Add Action</button>
        <div class="Action" id="ActionArea"></div>
        <p class="inputName">Acrobatics Proficiency<input type="checkbox" id="AcrobaticsProficiencyOption" placeholder="AcrobaticsProficiency"></p>
        <p class="inputName">Animal Handling Proficiency<input type="checkbox" id="AnimalHandlingProficiencyOption" placeholder="Animal HandlingProficiency"></p>
        <p class="inputName">Arcana Proficiency<input type="checkbox" id="ArcanaProficiencyOption" placeholder="ArcanaProficiency"></p>
        <p class="inputName">Athletics Proficiency<input type="checkbox" id="AthleticsProficiencyOption" placeholder="AthleticsProficiency"></p>
        <p class="inputName">Deception Proficiency<input type="checkbox" id="DeceptionProficiencyOption" placeholder="DeceptionProficiency"></p>
        <p class="inputName">History Proficiency<input type="checkbox" id="HistoryProficiencyOption" placeholder="HistoryProficiency"></p>
        <p class="inputName">Insight Proficiency<input type="checkbox" id="InsightProficiencyOption" placeholder="InsightProficiency"></p>
        <p class="inputName">Intimidation Proficiency<input type="checkbox" id="IntimidationProficiencyOption" placeholder="IntimidationProficiency"></p>
        <p class="inputName">Investigation Proficiency<input type="checkbox" id="InvestigationProficiencyOption" placeholder="InvestigationProficiency"></p>
        <p class="inputName">Medicine Proficiency<input type="checkbox" id="MedicineProficiencyOption" placeholder="MedicineProficiency"></p>
        <p class="inputName">Nature Proficiency<input type="checkbox" id="NatureProficiencyOption" placeholder="NatureProficiency"></p>
        <p class="inputName">Perception Proficiency<input type="checkbox" id="PerceptionProficiencyOption" placeholder="PerceptionProficiency"></p>
        <p class="inputName">Performance Proficiency<input type="checkbox" id="PerformanceProficiencyOption" placeholder="PerformanceProficiency"></p>
        <p class="inputName">Persuasion Proficiency<input type="checkbox" id="PersuasionProficiencyOption" placeholder="PersuasionProficiency"></p>
        <p class="inputName">Religion Proficiency<input type="checkbox" id="ReligionProficiencyOption" placeholder="ReligionProficiency"></p>
        <p class="inputName">Sleight of Hand Proficiency<input type="checkbox" id="SleightofHandProficiencyOption" placeholder="SleightofHandProficiency"></p>
        <p class="inputName">Stealth Proficiency<input type="checkbox" id="StealthProficiencyOption" placeholder="StealthProficiency"></p>
        <p class="inputName">Survival Proficiency<input type="checkbox" id="SurvivalProficiencyOption" placeholder="SurvivalProficiency"></p>
        </div>
        </div>
        <br><input type="Submit" class="formButton" onclick="${submitButton}">
        </form>
        `;
      break;
  }
  return forum;

}

/**
 * creates form for site to use
 * @param {string} sys
 * @param {string} forumType  
 * @returns string
 */
function getForumCharacter(sys,forumType){
  let submitButton = "createCharacter()";
  if(forumType==="edit"){
    submitButton = "completeCharacterEdit()";
  }
  let forum = ""
  switch(sys){
    case "pathfinder":
          forum = `<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Required:</p>
        <label class="inputName" for="characterName">character Name:</label><br>
        <input type="text" class="searchBarCreation" name="characterName" id="characterName" placeholder="Name" title="CHaracter Name" value="Mimic"><br>

        <label class="inputName" for="characterRace">Character Type:</label><br>
        <select class="searchBarCreation" name="Character race" id="characterRace" placeholder="Type" title="Character Race"><br>
        <option selected>Human</option>
        <option>Elf</option>
        <option>Half-Elf</option>
        <option>Custom</option>
        </select>
        <input type="text" class="searchBarCreation" name="customCharacterType" id="customType" style="display: none;" placeholder="customCharacterType" title="customCharacterType">
        <p class="inputName">Has Subtype<input type="checkbox" id="SubtypeOption" placeholder="toggle" onclick="toggle('Subtype')"></p>
        <input type="text" class="searchBarCreation" name="Subtype" id="Subtype" style="display: none;" placeholder="Subtype" title="Subtype">
        <label class="inputName" for="characterTitle">character Title:</label><br>
        <input type="text" class="searchBarCreation" name="characterTitle" id="characterTitle" placeholder="Title" title="Character Title" value="Mimic"><br>


        <label class="inputName" for="characterLevel">character Level:</label><br>
        <input type="number" class="searchBarCreation" name="characterLevel" id="characterLevel" placeholder="Level" title="character Level" value="7"><br>
        <label class="inputName" for="characterHitDice">character Hit Dice:</label><br>
        <select class="searchBarCreation" name="characterHitDice" id="characterHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        </select><br>
        <label class="inputName" for="characterHitDice">character HP Gain Rate:</label><br>
        <select class="searchBarCreation" name="characterHitDiceRate" id="characterHitDiceRate">
        <option>Monster</option>
        <option>Player</option>
        </select><br>

        <label class="inputName" for="characterSpeed">character Speed:</label><br>
        <input type="text" class="searchBarCreation" name="characterSpeed" id="characterSpeed" placeholder="Speed" title="Character Speed" value="30"><br>

        <label class="inputName" for="characterStr">Character Str:</label><br>
        <input type="text" class="searchBarCreation" name="characterStr" id="characterStr" placeholder="Str" title="Character Str" value=19><br>

        <label class="inputName" for="characterDex">Character Dexterity:</label><br>
        <input type="text" class="searchBarCreation" name="characterDex" id="characterDex" placeholder="Dex" title="Character Dex" value=12><br>

        <label class="inputName" for="characterCon">Character Con:</label><br>
        <input type="text" class="searchBarCreation" name="characterCon" id="characterCon" placeholder="Con" title="Character Con" value=17><br>

        <label class="inputName" for="characterInt">Character Intelligence:</label><br>
        <input type="text" class="searchBarCreation" name="characterInt" id="characterInt" placeholder="Int" title="Character Int" value=10><br>

        <label class="inputName" for="characterWis">Character Wisdom:</label><br>
        <input type="text" class="searchBarCreation" name="characterWis" id="characterWis" placeholder="Wis" title="Character Wis" value=13><br>

        <label class="inputName" for="characterCha">Character Charisma:</label><br>
        <input type="text" class="searchBarCreation" name="characterCha" id="characterCha" placeholder="Cha" title="Character Cha" value=10><br>
        
        <label class="inputName" for="characterBaB">Character BaB:</label><br>
        <select class="searchBarCreation" name="characterBaB" id="characterBaB">
        <option>Fast</option>
        <option Selected>Medium</option>
        <option>Slow</option>
        </select><br>


        <label class="inputName" for="characterSkillProgression">Character Skill Progression:</label><br>
        <select class="searchBarCreation" name="characterSkillProgression" id="characterSkillProgression">
        <option>High</option>
        <option Selected>Middle</option>
        <option>Low</option>
        </select><br>

        <label class="inputName" for="characterFort">Character Fort Bonus:</label><br>
        <select class="searchBarCreation" name="characterFort" id="characterFort">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterRef">Character Ref Bonus:</label><br>
        <select class="searchBarCreation" name="characterRef" id="characterRef">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterWill">Character Will Bonus:</label><br>
        <select class="searchBarCreation" name="characterWill" id="characterWill">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterAlignment">Character Alignment:</label><br>
        <select class="searchBarCreation" name="characterAlignment" id="characterAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>

        <label class="inputName" for="characterSize">Character Size:</label><br>
        <select class="searchBarCreation" name="characterSize" id="characterSize">
        <option>Fine</option>
        <option>Diminutive</option>
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        <option>Colossal</option>
        </select><br>

        </div>
        <div>
        <p class="Title">Choices:</p>
        <p class="inputName">Has bonuses to AC <input type="checkbox" id="bonusACOption" placeholder="toggle" onclick="arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra'])"></p>
        <div id="bonusACContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="bonusACArmor" style="display: none;">Has Armor <input id="armorOption" type="checkbox" placeholder="toggle" onclick="toggle('armor')"></p> 
        <input type="number" class="searchBarCreation" name="armor" id="armor" style="display: none;" placeholder="armor" title="armor">
        
        <p class="inputName" id="bonusACDeflection" style="display: none;">Has Deflection <input id="deflectionOption" type="checkbox" placeholder="toggle" onclick="toggle('deflection')"></p> 
        <input type="number" class="searchBarCreation" name="deflection" id="deflection" style="display: none;" placeholder="deflection" title="deflection">

        <p class="inputName" id="bonusACDodge" style="display: none;">Has Dodge <input id="dodgeOption" type="checkbox" placeholder="toggle" onclick="toggle('dodge')"></p> 
        <input type="number" class="searchBarCreation" name="dodge" id="dodge" style="display: none;" placeholder="dodge" title="dodge">

        <p class="inputName" id="bonusACShield" style="display: none;">Has Shield <input id="shieldOption" type="checkbox" placeholder="toggle" onclick="toggle('shield')"></p> 
        <input type="number" class="searchBarCreation" name="shield" id="shield" style="display: none;" placeholder="shield" title="shield">

        <p class="inputName" id="bonusACNatural" style="display: none;">Has Natural <input id="naturalOption" type="checkbox" placeholder="toggle" onclick="toggle('natural')"></p> 
        <input type="number" class="searchBarCreation" name="natural" id="natural" style="display: none;" placeholder="natural" title="natural">

        <p class="inputName" id="bonusACExtra" style="display: none;">Has Extra Bonuses <input id="extraBonusesOption" type="checkbox" placeholder="toggle" onclick="toggle('extraBonuses')"></p> 

        <div style="display: none;" id="extraBonuses"><button type="button" class="formButton" onclick="createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')">Add Extra Bonuses</button>
        <div class="extra" id="extraArea"></div></div>
        </div>

        <p class="inputName">Has Defensive Traits <input type="checkbox" id="defensiveTraitsOption" placeholder="toggle" onclick="arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR'])"></p>
        <div id="defensiveTraitsContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="defensiveTraitsDA" style="display: none;">Has Defensive Abilities <input id="DAOption" type="checkbox" placeholder="toggle" onclick="toggle('DA')"></p> 
        <input type="text" class="searchBarCreation" name="DA" id="DA" style="display: none;" placeholder="Defensive Ability" title="DA">
        
        <p class="inputName" id="defensiveTraitsDR" style="display: none;">Has DR <input id="DROption" type="checkbox" placeholder="toggle" onclick="toggle('DR')"></p> 
        <input type="text" class="searchBarCreation" name="DR" id="DR" style="display: none;" placeholder="DR" title="DR">

        <p class="inputName" id="defensiveTraitsImmune" style="display: none;">Has Immunities <input id="ImmuneOption" type="checkbox" placeholder="toggle" onclick="toggle('Immune')"></p> 
        <input type="text" class="searchBarCreation" name="Immune" id="Immune" style="display: none;" placeholder="Immune" title="Immune">

        <p class="inputName" id="defensiveTraitsResist" style="display: none;">Has Energy Resistances <input id="ResistOption" type="checkbox" placeholder="toggle" onclick="toggle('Resist')"></p> 
        <input type="text" class="searchBarCreation" name="Resist" id="Resist" style="display: none;" placeholder="Resist" title="Resist">

        <p class="inputName" id="defensiveTraitsSR" style="display: none;">Has SR <input id="SROption" type="checkbox" placeholder="toggle" onclick="toggle('SR')"></p> 
        <input type="number" class="searchBarCreation" name="SR" id="SR" style="display: none;" placeholder="SR" title="SR">
        </div>

        <p class="inputName">Has Spells<input type="checkbox" id="spellsOption" placeholder="toggle" onclick="arrayToggle('spells',['Container','InnateOption','PreparedOption'])"></p>
        <div id="spellsContainer" style="display: none;" class="stairCase">
        

        <p class="inputName" style="display: flex">Has Innate<input type="checkbox" id="spellsInnateOption" placeholder="toggle" onclick="arrayToggle('spellsInnate',['Container','Constant','atWill','xDay'])"></p> 
        <div id="spellsInnateContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="characterSpellModInnate">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="characterSpellModInnate" id="characterSpellModInnate">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="innateCasterLevelZone";">Set Caster Level Innate <input id="innateCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('innateCasterLevel')"></p>
        <div id="innateCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLInnate" id="CLInnate" placeholder="CLInnate" title="CLInnate">      
        <input type="number" class="searchBarCreation" name="ConcentrateInnate" id="ConcentrateInnate"" placeholder="ConcentrateInnate" title="ConcentrateInnate">
        </div>

        <p class="inputName" id="spellsInnateConstant" style="display: none;">Has Constant <input id="constantOption" type="checkbox" placeholder="toggle" onclick="toggle('constant')"></p> 
        <input type="text" class="searchBarCreation" name="constant" id="constant" style="display: none;" placeholder="Constant" title="constant">

        <p class="inputName" id="spellsInnateatWill" style="display: none;">Has atWill <input id="atWillOption" type="checkbox" placeholder="toggle" onclick="toggle('atWill')"></p> 
        <input type="text" class="searchBarCreation" name="atWill" id="atWill" style="display: none;" placeholder="atWill" title="atWill">

        <p class="inputName" id="spellsInnatexDay" style="display: none;">Has xDay <input id="xDayOption" type="checkbox" placeholder="toggle" onclick="toggle('xDay')"></p> 
        <div style="display: none;" id="xDay"><button type="button" class="formButton" onclick="createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text')">Add xDay Spells</button>
        <div class="xDay" id="xDayArea"></div></div>
        </div>


        <p class="inputName" style="display: flex">Has Prepared <input type="checkbox" id="spellsPreparedOption" placeholder="toggle" onclick="arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth'])"></p>
        
        <div id="spellsPreparedContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="characterSpellModPrepared">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="characterSpellModPrepared" id="characterSpellModPrepared">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

         <p class="inputName" id="preparedCasterLevelZone";">Set Caster Level Prepared <input id="preparedCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('preparedCasterLevel')"></p>
        <div id="preparedCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLPrepared" id="CLPrepared" placeholder="CLPrepared" title="CLPrepared">      
        <input type="number" class="searchBarCreation" name="ConcentratePrepared" id="ConcentratePrepared"" placeholder="ConcentratePrepared" title="ConcentratePrepared">
        </div>


        <p class="inputName" id="spellsPreparedNinth" style="display: none;">Has 9th level Spells<input id="ninthOption" type="checkbox" placeholder="toggle" onclick="toggle('ninth')"></p> 
        <input type="text" class="searchBarCreation" name="ninth" id="ninth" style="display: none;" placeholder="Ninth" title="ninth">

        <p class="inputName" id="spellsPreparedEighth" style="display: none;">Has 8th level Spells<input id="eighthOption" type="checkbox" placeholder="toggle" onclick="toggle('eighth')"></p> 
        <input type="text" class="searchBarCreation" name="eighth" id="eighth" style="display: none;" placeholder="Eighth" title="eighth">

        <p class="inputName" id="spellsPreparedSeventh" style="display: none;">Has 7th level Spells<input id="seventhOption" type="checkbox" placeholder="toggle" onclick="toggle('seventh')"></p> 
        <input type="text" class="searchBarCreation" name="seventh" id="seventh" style="display: none;" placeholder="Seventh" title="seventh">

        <p class="inputName" id="spellsPreparedSixth" style="display: none;">Has 6th level Spells<input id="sixthOption" type="checkbox" placeholder="toggle" onclick="toggle('sixth')"></p> 
        <input type="text" class="searchBarCreation" name="sixth" id="sixth" style="display: none;" placeholder="Sixth" title="sixth">

        <p class="inputName" id="spellsPreparedFifth" style="display: none;">Has 5th level Spells<input id="fifthOption" type="checkbox" placeholder="toggle" onclick="toggle('fifth')"></p> 
        <input type="text" class="searchBarCreation" name="fifth" id="fifth" style="display: none;" placeholder="Fifth" title="fifth">

        <p class="inputName" id="spellsPreparedFourth" style="display: none;">Has 4th level Spells<input id="fourthOption" type="checkbox" placeholder="toggle" onclick="toggle('fourth')"></p> 
        <input type="text" class="searchBarCreation" name="fourth" id="fourth" style="display: none;" placeholder="Fourth" title="fourth">
        
        <p class="inputName" id="spellsPreparedThird" style="display: none;">Has 3rd level Spells<input id="thirdOption" type="checkbox" placeholder="toggle" onclick="toggle('third')"></p> 
        <input type="text" class="searchBarCreation" name="third" id="third" style="display: none;" placeholder="Third" title="third">

        <p class="inputName" id="spellsPreparedSecond" style="display: none;">Has 2nd level Spells<input id="secondOption" type="checkbox" placeholder="toggle" onclick="toggle('second')"></p> 
        <input type="text" class="searchBarCreation" name="second" id="second" style="display: none;" placeholder="Second" title="second">

        <p class="inputName" id="spellsPreparedFirst" style="display: none;">Has 1st level Spells<input id="firstOption" type="checkbox" placeholder="toggle" onclick="toggle('first')"></p> 
        <input type="text" class="searchBarCreation" name="first" id="first" style="display: none;" placeholder="First" title="first">

        <p class="inputName" id="spellsPreparedZeroth" style="display: none;">Has 0 level Spells<input id="zerothOption" type="checkbox" placeholder="toggle" onclick="toggle('zeroth')"></p> 
        <input type="text" class="searchBarCreation" name="zeroth" id="zeroth" style="display: none;" placeholder="Zeroth" title="zeroth">
        </div>
        </div>

        <p class="inputName">Has HP Traits<input type="checkbox" id="HPTraitsOption" placeholder="toggle" onclick="toggle('HPTraits')"></p>
        <input type="text" class="searchBarCreation" name="HPTraits" id="HPTraits" style="display: none;" placeholder="HPTraits" title="HPTraits">
        
        <p class="inputName">Has Weakness<input type="checkbox" id="weaknessOption" placeholder="toggle" onclick="toggle('weakness')"></p>
        <input type="text" class="searchBarCreation" name="weakness" id="weakness" style="display: none;" placeholder="Weakness" title="weakness">

        <p class="inputName">Has Melee Attack<input type="checkbox" id="meleeOption" placeholder="toggle" onclick="toggle('melee')"></p>
        <div style="display: none;" id="melee"><button type="button" class="formButton" onclick="createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count')">Add Melee Attack</button>
        <div class="meleeAttack" id="meleeAttackArea"></div></div>

        <p class="inputName">Has Range Attack<input type="checkbox" id="rangeOption" placeholder="toggle" onclick="toggle('range')"></p>
        <div style="display: none;" id="range"><button type="button" class="formButton" onclick="createAttackInformation('rangeAttack','Range Attack Name','Range Attack Dice Count')">Add Range Attack</button>
        <div class="rangeAttack" id="rangeAttackArea"></div></div>

        

       <p class="inputName">Has Gear<input type="checkbox" id="gearOption" placeholder="toggle" onclick="toggle('gear')"></p>
        <input type="text" class="searchBarCreation" name="gear" id="gear" style="display: none;" placeholder="Gear" title="gear">

        <p class="inputName">Has Skills <input type="checkbox" id="skillsOption" placeholder="toggle" onclick="arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'])"></p>
        <div id="skillsContainer" style="display: none;" class="stairCase">
        <p id="skillPoints"></p>
        <p class="inputName" id="skillsAcrobatics" style="display: none;">Has Acrobatics <input id="AcrobaticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Acrobatics')"></p> 
        <input type="number" class="searchBarCreation" name="Acrobatics" id="Acrobatics" style="display: none;" placeholder="Acrobatics" title="Acrobatics">
        
        <p class="inputName" id="skillsAppraise" style="display: none;">Has Appraise <input id="AppraiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Appraise')"></p> 
        <input type="number" class="searchBarCreation" name="Appraise" id="Appraise" style="display: none;" placeholder="Appraise" title="Appraise">

        <p class="inputName" id="skillsBluff" style="display: none;">Has Bluff<input id="BluffOption" type="checkbox" placeholder="toggle" onclick="toggle('Bluff')"></p> 
        <input type="number" class="searchBarCreation" name="Bluff" id="Bluff" style="display: none;" placeholder="Bluff" title="Bluff">

        <p class="inputName" id="skillsClimb" style="display: none;">Has Climb <input id="ClimbOption" type="checkbox" placeholder="toggle" onclick="toggle('Climb')"></p> 
        <input type="number" class="searchBarCreation" name="Climb" id="Climb" style="display: none;" placeholder="Climb" title="Climb">

        <p class="inputName" id="skillsCraft" style="display: none;">Has Craft <input id="CraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Craft')"></p> 
        <div style="display: none;" id="Craft"><button type="button" id="craftButton" class="formButton" onclick="createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number')">Add Craft</button>
        <div class="Craft" id="CraftArea"></div></div>

        <p class="inputName" id="skillsDiplomacy" style="display: none;">Has Diplomacy <input id="DiplomacyOption" type="checkbox" placeholder="toggle" onclick="toggle('Diplomacy')"></p> 
        <input type="number" class="searchBarCreation" name="Diplomacy" id="Diplomacy" style="display: none;" placeholder="Diplomacy" title="Diplomacy">
        
        <p class="inputName" id="skillsDisableDevice" style="display: none;">Has Disable Device <input id="DisableDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('DisableDevice')"></p> 
        <input type="number" class="searchBarCreation" name="DisableDevice" id="DisableDevice" style="display: none;" placeholder="DisableDevice" title="DisableDevice">

        <p class="inputName" id="skillsDisguise" style="display: none;">Has Disguise <input id="DisguiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Disguise')"></p> 
        <input type="number" class="searchBarCreation" name="Disguise" id="Disguise" style="display: none;" placeholder="Disguise" title="Disguise">

        <p class="inputName" id="skillsEscapeArtist" style="display: none;">Has Escape Artist <input id="EscapeArtistOption" type="checkbox" placeholder="toggle" onclick="toggle('EscapeArtist')"></p> 
        <input type="number" class="searchBarCreation" name="EscapeArtist" id="EscapeArtist" style="display: none;" placeholder="EscapeArtist" title="EscapeArtist">

        <p class="inputName" id="skillsFly" style="display: none;">Has Fly <input id="FlyOption" type="checkbox" placeholder="toggle" onclick="toggle('Fly')"></p> 
        <input type="number" class="searchBarCreation" name="Fly" id="Fly" style="display: none;" placeholder="Fly" title="Fly">

        <p class="inputName" id="skillsHandleAnimal" style="display: none;">Has Handle Animal <input id="HandleAnimalOption" type="checkbox" placeholder="toggle" onclick="toggle('HandleAnimal')"></p> 
        <input type="number" class="searchBarCreation" name="HandleAnimal" id="HandleAnimal" style="display: none;" placeholder="HandleAnimal" title="HandleAnimal">

        <p class="inputName" id="skillsHeal" style="display: none;">Has Heal <input id="HealOption" type="checkbox" placeholder="toggle" onclick="toggle('Heal')"></p> 
        <input type="number" class="searchBarCreation" name="Heal" id="Heal" style="display: none;" placeholder="Heal" title="Heal">

        <p class="inputName" id="skillsIntimidate" style="display: none;">Has Intimidate <input id="IntimidateOption" type="checkbox" placeholder="toggle" onclick="toggle('Intimidate')"></p> 
        <input type="number" class="searchBarCreation" name="Intimidate" id="Intimidate" style="display: none;" placeholder="Intimidate" title="Intimidate">

        <p class="inputName" style="display: flex">Has Knowledge<input type="checkbox" id="skillsKnowledgeOption" placeholder="toggle" onclick="arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All'])"></p> 
        <div id="skillsKnowledgeContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="skillsKnowledgeArcana" style="display: none;">Has Arcana <input id="ArcanaOption" type="checkbox" placeholder="toggle" onclick="toggle('Arcana')"></p> 
        <input type="number" class="searchBarCreation" name="Arcana" id="Arcana" style="display: none;" placeholder="Arcana" title="Arcana">

        <p class="inputName" id="skillsKnowledgeDungeoneering" style="display: none;">Has Dungeoneering <input id="DungeoneeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Dungeoneering')"></p> 
        <input type="number" class="searchBarCreation" name="Dungeoneering" id="Dungeoneering" style="display: none;" placeholder="Dungeoneering" title="Dungeoneering">

        <p class="inputName" id="skillsKnowledgeEngineering" style="display: none;">Has Engineering <input id="EngineeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Engineering')"></p> 
        <input type="number" class="searchBarCreation" name="Engineering" id="Engineering" style="display: none;" placeholder="Engineering" title="Engineering">

        <p class="inputName" id="skillsKnowledgeGeography" style="display: none;">Has Geography <input id="GeographyOption" type="checkbox" placeholder="toggle" onclick="toggle('Geography')"></p> 
        <input type="number" class="searchBarCreation" name="Geography" id="Geography" style="display: none;" placeholder="Geography" title="Geography">

        <p class="inputName" id="skillsKnowledgeHistory" style="display: none;">Has History <input id="HistoryOption" type="checkbox" placeholder="toggle" onclick="toggle('History')"></p> 
        <input type="number" class="searchBarCreation" name="History" id="History" style="display: none;" placeholder="History" title="History">

        <p class="inputName" id="skillsKnowledgeLocal" style="display: none;">Has Local <input id="LocalOption" type="checkbox" placeholder="toggle" onclick="toggle('Local')"></p> 
        <input type="number" class="searchBarCreation" name="Local" id="Local" style="display: none;" placeholder="Local" title="Local">

        <p class="inputName" id="skillsKnowledgeNature" style="display: none;">Has Nature <input id="NatureOption" type="checkbox" placeholder="toggle" onclick="toggle('Nature')"></p> 
        <input type="number" class="searchBarCreation" name="Nature" id="Nature" style="display: none;" placeholder="Nature" title="Nature">

        <p class="inputName" id="skillsKnowledgeNobility" style="display: none;">Has Nobility <input id="NobilityOption" type="checkbox" placeholder="toggle" onclick="toggle('Nobility')"></p> 
        <input type="number" class="searchBarCreation" name="Nobility" id="Nobility" style="display: none;" placeholder="Nobility" title="Nobility">

        <p class="inputName" id="skillsKnowledgePlanes" style="display: none;">Has Planes <input id="PlanesOption" type="checkbox" placeholder="toggle" onclick="toggle('Planes')"></p> 
        <input type="number" class="searchBarCreation" name="Planes" id="Planes" style="display: none;" placeholder="Planes" title="Planes">

        <p class="inputName" id="skillsKnowledgeReligion" style="display: none;">Has Religion <input id="ReligionOption" type="checkbox" placeholder="toggle" onclick="toggle('Religion')"></p> 
        <input type="number" class="searchBarCreation" name="Religion" id="Religion" style="display: none;" placeholder="Religion" title="Religion">

        <p class="inputName" id="skillsKnowledgeAll" style="display: none;">Has All <input id="AllOption" type="checkbox" placeholder="toggle" onclick="toggle('All')"></p> 
                
        </div>

        <p class="inputName" id="skillsLinguistics" style="display: none;">Has Linguistics <input id="LinguisticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Linguistics')"></p> 
        <input type="number" class="searchBarCreation" name="Linguistics" id="Linguistics" style="display: none;" placeholder="Linguistics" title="Linguistics">

        <p class="inputName" id="skillsPerception" style="display: none;">Has Perception <input id="PerceptionOption" type="checkbox" placeholder="toggle" onclick="toggle('Perception')"></p> 
        <input type="number" class="searchBarCreation" name="Perception" id="Perception" style="display: none;" placeholder="Perception" title="Perception">

        <p class="inputName" id="skillsPerform" style="display: none;">Has Perform <input id="PerformOption" type="checkbox" placeholder="toggle" onclick="toggle('Perform')"></p> 
        <input type="number" class="searchBarCreation" name="Perform" id="Perform" style="display: none;" placeholder="Perform" title="Perform">

        <p class="inputName" id="skillsProfession" style="display: none;">Has Profession <input id="ProfessionOption" type="checkbox" placeholder="toggle" onclick="toggle('Profession')"></p> 
        <div style="display: none;" id="Profession"><button type="button" id="professionButton" class="formButton" onclick="createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number')">Add Profession</button>
        <div class="Profession" id="ProfessionArea"></div></div>

        <p class="inputName" id="skillsRide" style="display: none;">Has Ride <input id="RideOption" type="checkbox" placeholder="toggle" onclick="toggle('Ride')"></p> 
        <input type="number" class="searchBarCreation" name="Ride" id="Ride" style="display: none;" placeholder="Ride" title="Ride">

        <p class="inputName" id="skillsSenseMotive" style="display: none;">Has Sense Motive <input id="SenseMotiveOption" type="checkbox" placeholder="toggle" onclick="toggle('SenseMotive')"></p> 
        <input type="number" class="searchBarCreation" name="SenseMotive" id="SenseMotive" style="display: none;" placeholder="SenseMotive" title="SenseMotive">

        <p class="inputName" id="skillsSleightofHand" style="display: none;">Has Sleight of Hand <input id="SleightofHandOption" type="checkbox" placeholder="toggle" onclick="toggle('SleightofHand')"></p> 
        <input type="number" class="searchBarCreation" name="SleightofHand" id="SleightofHand" style="display: none;" placeholder="SleightofHand" title="SleightofHand">

        <p class="inputName" id="skillsSpellcraft" style="display: none;">Has Spellcraft <input id="SpellcraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Spellcraft')"></p> 
        <input type="number" class="searchBarCreation" name="Spellcraft" id="Spellcraft" style="display: none;" placeholder="Spellcraft" title="Spellcraft">

        <p class="inputName" id="skillsStealth" style="display: none;">Has Stealth <input id="StealthOption" type="checkbox" placeholder="toggle" onclick="toggle('Stealth')"></p> 
        <input type="number" class="searchBarCreation" name="Stealth" id="Stealth" style="display: none;" placeholder="Stealth" title="Stealth">

        <p class="inputName" id="skillsSurvival" style="display: none;">Has Survival <input id="SurvivalOption" type="checkbox" placeholder="toggle" onclick="toggle('Survival')"></p> 
        <input type="number" class="searchBarCreation" name="Survival" id="Survival" style="display: none;" placeholder="Survival" title="Survival">

        <p class="inputName" id="skillsSwim" style="display: none;">Has Swim <input id="SwimOption" type="checkbox" placeholder="toggle" onclick="toggle('Swim')"></p> 
        <input type="number" class="searchBarCreation" name="Swim" id="Swim" style="display: none;" placeholder="Swim" title="Swim">

        <p class="inputName" id="skillsUseMagicDevice" style="display: none;">Has Use Magic Device <input id="UseMagicDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('UseMagicDevice')"></p> 
        <input type="number" class="searchBarCreation" name="UseMagicDevice" id="UseMagicDevice" style="display: none;" placeholder="UseMagicDevice" title="UseMagicDevice">
        </div>
        </div>
        <div>
        <p class="Title">Infinite Extras:</p>
        <br><button type="button" class="formButton" onclick="createArrayChoice('sense','Sense','Sense')">Add Sense</button>
        <div class="sense" id="senseArea"></div>


        <br><button type="button" class="formButton" onclick="createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount')">Add Save Bonus</button>
        <div class="saveBonus" id="saveBonusArea"></div>
        <p id="featCount"></p>
        <br><button type="button" id="featButton" class="formButton" onclick="createArrayChoice('feat','Feat','Feat Name')">Add feat</button>
        <div class="feat" id="featArea"></div>

        <br><button type="button" class="formButton" onclick="createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')">Add CMD Modifier</button>
        <div class="cmdMod" id="cmdModArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('language','Language','Language Name')">Add language</button>
        <div class="language" id="languageArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('SQ','Special Quality','Special Quality Name')">Add Special Quality</button>
        <div class="SQ" id="SQArea"></div>

        </div>
        <br><input type="Submit" class="formButton" onclick="${submitButton}">
        </div></form>`
        break;
  }
  return forum;
}


const observer = new MutationObserver(function(MutationList,config){
  for(const mutation of MutationList){
    if(mutation.type==='childList'){
     setFeatsAvailable();
    }
  }
})


function notInputFeat(input){
  let inputlessFeat = featList.filter(item=>!featsWithInput.includes(item));
  inputlessFeat = inputlessFeat.map(element=>element.toLowerCase());
  if(inputlessFeat.includes(input.toLowerCase())){
    return true;
  }else{
    return false;
  }
}