import { Trophy, Play, Info, Home as HomeIcon, Globe } from 'lucide-react';

export const PLAYERS = [
  { name: 'Lionel Messi', position: 'RW/10', rating: 99, stats: '900+ Goals, 400+ Assists', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
  { name: 'Pelé', position: 'ST/10', rating: 99, stats: '762+ Official Goals (1,279 Total)', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg' },
  { name: 'Cristiano Ronaldo', position: 'ST/LW', rating: 98, stats: '900+ Goals, 250+ Assists', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
  { name: 'Diego Maradona', position: 'CAM/10', rating: 98, stats: '311 Goals, World Cup Winner', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Argentina_celebrando_copa_%28cropped%29.jpg' },
  { name: 'Johan Cruyff', position: 'CF/CAM', rating: 97, stats: '400+ Goals, 3x Ballon d\'Or', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Johan_Cruijff_%281974%29.jpg/500px-Johan_Cruijff_%281974%29.jpg' },
  { name: 'Franz Beckenbauer', position: 'CB/SW', rating: 96, stats: '2x Ballon d\'Or, WC Winner', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Franz_Beckenbauer_%281975%29.jpg/500px-Franz_Beckenbauer_%281975%29.jpg' },
  { name: 'Lev Yashin', position: 'GK', rating: 95, stats: 'Only GK with Ballon d\'Or', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/LevYashin.JPG/500px-LevYashin.JPG' },
  { name: 'Michel Platini', position: 'CAM', rating: 95, stats: '3x Ballon d\'Or, 350+ Goals', image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Michel_Platini_2010_%28cropped%29.jpg' },
  { name: 'Zinedine Zidane', position: 'CAM', rating: 96, stats: 'Ballon d\'Or, WC Winner', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg' },
  { name: 'Paolo Maldini', position: 'LB/CB', rating: 96, stats: '5x UCL Winner', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paolo_Maldini_AC_Milan_Technical_director_2018.jpg/500px-Paolo_Maldini_AC_Milan_Technical_director_2018.jpg' },
];

const LEAGUE_IMAGES = [
  'https://images.unsplash.com/photo-1628891515227-2c9d1df52b1b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508344928928-7691edcd7c60?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518091043644-c1d44579d50e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605335199653-53531b777a82?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551280857-2b9bbe5260fc?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595034638361-9d5111af31df?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614631446501-abce4bd2f293?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518605368461-1ee71c35b6c3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574629810360-7efbb1925845?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1431324155629-1a6fd1d111cb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553152531-dd34afdf09ac?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600250395356-83495d400125?q=80&w=2070&auto=format&fit=crop',
];

const REAL_TEAMS: Record<string, string[]> = {
  'Premier League': ['Arsenal', 'Aston Villa', 'Bournemouth', 'Brentford', 'Brighton & Hove Albion', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Ipswich Town', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Nottingham Forest', 'Southampton', 'Tottenham Hotspur', 'West Ham United', 'Wolverhampton Wanderers'],
  'La Liga': ['Real Madrid', 'Barcelona', 'Atlético Madrid', 'Athletic Club', 'Real Sociedad', 'Real Betis', 'Villarreal', 'Valencia', 'Sevilla', 'Celta Vigo', 'Getafe', 'Osasuna', 'Alavés', 'Girona', 'Rayo Vallecano', 'Mallorca', 'Las Palmas', 'Leganés', 'Real Valladolid', 'Espanyol'],
  'Bundesliga': ['Bayern Munich', 'Borussia Dortmund', 'Bayer Leverkusen', 'RB Leipzig', 'VfB Stuttgart', 'Eintracht Frankfurt', 'SC Freiburg', 'TSG Hoffenheim', 'Werder Bremen', '1. FC Heidenheim', 'FC Augsburg', 'VfL Wolfsburg', 'Mainz 05', 'Borussia Mönchengladbach', 'Union Berlin', 'VfL Bochum', 'FC St. Pauli', 'Holstein Kiel'],
  'Serie A': ['Inter Milan', 'AC Milan', 'Juventus', 'Atalanta', 'Roma', 'Lazio', 'Napoli', 'Fiorentina', 'Torino', 'Bologna', 'Genoa', 'Monza', 'Hellas Verona', 'Lecce', 'Udinese', 'Cagliari', 'Empoli', 'Parma', 'Como', 'Venezia'],
  'Ligue 1': ['Paris Saint-Germain', 'AS Monaco', 'Marseille', 'Lille OSC', 'Olympique Lyonnais', 'OGC Nice', 'RC Lens', 'Stade Rennais', 'Stade de Reims', 'Brest', 'Toulouse', 'Montpellier', 'Strasbourg', 'Nantes', 'Le Havre', 'AJ Auxerre', 'Angers SCO', 'AS Saint-Étienne'],
  'MLS': ['Inter Miami CF', 'LA Galaxy', 'Columbus Crew', 'LAFC', 'FC Cincinnati', 'Seattle Sounders FC', 'New York City FC', 'Atlanta United', 'Portland Timbers', 'Orlando City SC', 'Toronto FC', 'New York Red Bulls', 'Houston Dynamo', 'Real Salt Lake', 'Sporting Kansas City', 'Philadelphia Union', 'Minnesota United'],
  'Eredivisie': ['Ajax', 'PSV Eindhoven', 'Feyenoord', 'AZ Alkmaar', 'FC Twente', 'Sparta Rotterdam', 'FC Utrecht', 'SC Heerenveen', 'Go Ahead Eagles', 'NEC Nijmegen', 'Fortuna Sittard', 'Willem II', 'PEC Zwolle', 'NAC Breda', 'Almere City FC', 'RKC Waalwijk', 'Heracles Almelo', 'FC Groningen'],
  'Primeira Liga': ['Benfica', 'FC Porto', 'Sporting CP', 'SC Braga', 'Vitória de Guimarães', 'Moreirense', 'Arouca', 'Famalicão', 'Casa Pia', 'Farense', 'Rio Ave', 'Gil Vicente', 'Estoril Praia', 'Estrela da Amadora', 'Boavista', 'Nacional', 'Santa Clara', 'AVS']
};

const LEAGUE_LOGOS: Record<string, string> = {
  'Premier League': 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
  'La Liga': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg',
  'Bundesliga': 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg',
  'Serie A': 'https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282022%29.svg',
  'Ligue 1': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1_logo.svg',
  'Eredivisie': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Eredivisie_nieuwe_logo_2017-.svg',
  'MLS': 'https://upload.wikimedia.org/wikipedia/commons/7/76/MLS_crest_logo_RGB_gradient.svg',
  'Primeira Liga': 'https://upload.wikimedia.org/wikipedia/en/d/d4/Liga_Portugal_bwin_logo.svg',
  'Saudi Pro League': 'https://upload.wikimedia.org/wikipedia/en/6/6f/Saudi_Pro_League_logo_2023.svg'
};

export const LEAGUES = [
  { name: 'Premier League', country: 'England', desc: 'The most watched sports league globally, famed for its pace, physicality, and dramatic title races. It features some of the wealthiest clubs and biggest stadiums in world football.' },
  { name: 'La Liga', country: 'Spain', desc: 'Renowned for technical mastery, possession-based football, and producing world-class academies. Home to El Clásico, one of the biggest rivalries in sports.' },
  { name: 'Bundesliga', country: 'Germany', desc: 'Famous for remarkable attendances, intense fan culture, and attacking football. Features the 50+1 rule, ensuring clubs remain largely fan-owned.' },
  { name: 'Serie A', country: 'Italy', desc: 'Historically celebrated for unmatched tactical defending and deeply rooted, iconic clubs. A league where strategic intelligence is just as important as physical ability.' },
  { name: 'Ligue 1', country: 'France', desc: 'A prominent league famous for developing athletic and exceptional young talent. It consistently serves as a stepping stone for future global superstars.' },
  { name: 'Eredivisie', country: 'Netherlands', desc: 'Home to "Total Football" and some of the finest youth academies in the world. It is known for its open, attacking style of play and heavy reliance on homegrown talent.' },
  { name: 'Primeira Liga', country: 'Portugal', desc: 'A traditional gateway for South American talent into major European competitions. The league is dominated by "The Big Three" clubs with massive domestic support.' },
  { name: 'Belgian Pro League', country: 'Belgium', desc: 'Known for nurturing world-class prospects before they hit the biggest stage. A highly competitive league with a complex playoff system.' },
  { name: 'Scottish Premiership', country: 'Scotland', desc: 'Defined by the "Old Firm," one of the fiercest and oldest rivalries in world football. The league is known for its passionate fans and physical style.' },
  { name: 'Süper Lig', country: 'Turkey', desc: 'Home to incredible passion and some of the most intimidating, loudest atmospheres in the world. Istanbul derbies are legendary for their intensity.' },
  { name: 'MLS', country: 'USA / Canada', desc: 'Major League Soccer is expanding vastly in popularity and infrastructure. Characterized by a franchise system, salary caps, and a growing influx of international stars.' },
  { name: 'Liga MX', country: 'Mexico', desc: 'The most dominant league in CONCACAF with enormous, deeply passionate followings. Features a unique Apertura/Clausura split-season format.' },
  { name: 'Brazil Serie A', country: 'Brazil', desc: 'The historic birthplace of "Jogo Bonito" with immense flair and rhythm. Arguably the most competitive league in the world, routinely producing champions from across the country.' },
  { name: 'Argentina Primera División', country: 'Argentina', desc: 'Intense, emotional football that forges some of the greatest players in history. Features the Superclásico, widely considered one of the fiercest matches globally.' },
  { name: 'Categoría Primera A', country: 'Colombia', desc: 'A highly competitive league with emerging talents from South America. Known for its technically gifted players and vibrant stadium atmospheres.' },
  { name: 'Uruguayan Primera División', country: 'Uruguay', desc: 'Tough, physical, and historically rich, having massive influence on early world cups. Dominated by two monumental clubs based in Montevideo.' },
  { name: 'Chilean Primera División', country: 'Chile', desc: 'Vibrant and competitive football across the Andes. The league has a strong identity built on high-energy, pressing tactical styles.' },
  { name: 'J1 League', country: 'Japan', desc: 'Technically gifted players, tactical discipline, and an exceptional family-friendly domestic fan culture. The strongest league in East Asia.' },
  { name: 'K League 1', country: 'South Korea', desc: 'A powerhouse in AFC competitions with disciplined, fast-paced, and athletic football. Known for producing physically robust and hard-working players.' },
  { name: 'Saudi Pro League', country: 'Saudi Arabia', desc: 'Rapidly growing with monumental investments, attracting numerous global superstars. Aiming to establish itself as a premier destination outside of Europe.' },
  { name: 'A-League Men', country: 'Australia/NZ', desc: 'The pinnacle of football in Oceania and Australia. A growing league known for its franchise format and exciting playoff finals series.' },
  { name: 'Chinese Super League', country: 'China', desc: 'A major force in East Asian football, navigating a period of financial restructuring. Known for passionate localized fanbases.' },
  { name: 'Indian Super League', country: 'India', desc: 'A rapidly evolving league bringing passion to a massive new audience. Significantly modernizing the footballing infrastructure within the country.' },
  { name: 'Persian Gulf Pro League', country: 'Iran', desc: 'Dominant clubs featuring regular deep AFC Champions League runs. Known for some of the largest stadium attendances in Asian football.' },
  { name: 'Qatar Stars League', country: 'Qatar', desc: 'Home to world-class, modern stadiums and numerous international veterans. A highly resourced league fostering significant development in the region.' },
  { name: 'UAE Pro League', country: 'UAE', desc: 'Top-tier football in the Emirates with historic regional rivalries. Consistently attracts top talent from the Arab world and South America.' },
  { name: 'Egyptian Premier League', country: 'Egypt', desc: 'The most historic and watched league in the Arab world and Africa. Dominated by fierce Cairo derbies that captivate the entire nation.' },
  { name: 'Botola Pro 1', country: 'Morocco', desc: 'A fiercely competitive league producing many African champions. Renowned for its incredibly passionate ultras and spectacular stadium choreographies.' },
  { name: 'DStv Premiership', country: 'South Africa', desc: 'The richest and most technically advanced league in Sub-Saharan Africa. Characterized by flair, skill (showboating), and a high level of broadcast production.' },
  { name: 'Super League Greece', country: 'Greece', desc: 'Intense rivalries and passionate ultras define this Mediterranean competition. Matches are renowned for fiery atmospheres and high emotional stakes.' },
  { name: 'Russian Premier League', country: 'Russia', desc: 'A traditionally strong league navigating challenging conditions. Historically featured wealthy clubs capable of challenging Europe\'s elite.' },
  { name: 'Ukrainian Premier League', country: 'Ukraine', desc: 'Resilient and historically significant with major European contenders. Teams consistently demonstrate remarkable determination on the continental stage.' },
  { name: 'Swiss Super League', country: 'Switzerland', desc: 'A tightly contested league bordering major European powerhouses. A frequent supplier of well-rounded, tactically astute talent to larger leagues.' },
  { name: 'Austrian Football Bundesliga', country: 'Austria', desc: 'Dominated by highly aggressive and high-pressing styles of football. A key developmental hub for modern footballing tactics.' },
  { name: 'Danish Superliga', country: 'Denmark', desc: 'A tactical and physical league producing extremely strong Scandinavian talent. Focused heavily on data analytics and youth development.' },
  { name: 'Allsvenskan', country: 'Sweden', desc: 'Deeply rooted community clubs and an engaging 50+1 fan ownership model. Famed for its democratic structure and resistance to modern commercialization.' },
  { name: 'Eliteserien', country: 'Norway', desc: 'A competitive league fostering generation-defining striking talents. Known for its physical, direct style of play and challenging weather conditions.' },
  { name: 'Ekstraklasa', country: 'Poland', desc: 'A highly unpredictable league with incredible stadium atmospheres. A physically demanding competition with passionate local support.' },
  { name: 'HNL', country: 'Croatia', desc: 'The domestic foundation of one of the world\'s best national teams. A massive exporter of technically brilliant midfielders to top European sides.' },
  { name: 'SuperLiga', country: 'Serbia', desc: 'Historic giants locked in one of the fiercest derbies in the world (The Eternal Derby). Matches are defined by intense passion and gritty determination.' },
  { name: 'Czech First League', country: 'Czechia', desc: 'Physical and highly organized football with regular European group stage runs. Known for producing tall, dominant defenders and hardworking midfielders.' },
  { name: 'NB I', country: 'Hungary', desc: 'A league with magical, historic roots currently seeing a modern resurgence. Considerable investments are revitalizing club infrastructure across the country.' },
  { name: 'Liga I', country: 'Romania', desc: 'Traditional clubs with passionate fanbases across Eastern Europe. A league steeped in history, trying to reclaim its past continental glories.' },
  { name: 'Efbet Liga', country: 'Bulgaria', desc: 'A tough Balkan competition with a history of giant-killings in Europe. A competitive environment dominated by intense regional rivalries.' },
  { name: 'Canadian Premier League', country: 'Canada', desc: 'A young and rapidly growing league developing domestic Canadian talent. Focused on building a sustainable football pyramid within the country.' },
  { name: 'Primera División', country: 'Costa Rica', desc: 'Central America\'s strongest footballing nation with a thriving domestic league. Characterized by technically sound players and passionate support.' },
  { name: 'Liga Nacional', country: 'Honduras', desc: 'A physically demanding competition producing tough, resilient competitors. Features strong domestic rivalries and competitive fixtures.' },
  { name: 'Peruvian Primera División', country: 'Peru', desc: 'Teams battle from sea level up into extreme high-altitude conditions. A technically focused league with unique geographic challenges.' },
  { name: 'Ecuadorian Serie A', country: 'Ecuador', desc: 'Fast, powerful, and producing massive physical talents for European markets. A highly athletic league that is growing rapidly in international prominence.' },
  { name: 'Paraguayan Primera División', country: 'Paraguay', desc: 'Tough-tackling and resilient, a true reflection of the national spirit. Known for producing exceptional, uncompromising defenders.' }
].map((league, i) => {
  const baseTeamsCount = 16 + (i % 6);
  let teams = REAL_TEAMS[league.name];
  
  if (!teams) {
    const prefixes = ['FC', 'United', 'City', 'Dynamo', 'Sporting', 'Real', 'Atletico', 'Rovers'];
    teams = Array.from({ length: baseTeamsCount }, (_, idx) => {
      if (idx === 0) return `${league.country} City`;
      if (idx === 1) return `Sporting ${league.country}`;
      return `${prefixes[idx % prefixes.length]} ${league.country} ${idx + 1}`;
    });
  }

  return {
    ...league,
    image: LEAGUE_IMAGES[i % LEAGUE_IMAGES.length],
    logo: LEAGUE_LOGOS[league.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(league.name)}&background=111&color=00ff87&size=128&bold=true&rounded=true`,
    founded: 1890 + (i % 30) + (i % 5 > 2 ? 20 : 0),
    teamsCount: teams.length,
    history: `The ${league.name} is the premier football competition in ${league.country}. Founded many decades ago, it has grown to become the focal point of sporting passion in the region. Over its history, the league has produced legendary players, unforgettable matches, and intense rivalries that captivate millions of fans every season. Its continuing evolution has seen massive improvements in infrastructure and global reach.`,
    teams: teams
  };
});

export const TOURNAMENTS = [
  {
    id: 'world-cup',
    title: 'FIFA World Cup 2026',
    category: 'World Stage',
    description: ['For the first time in history, the tournament will be jointly hosted by three North American countries: the United States, Canada, and Mexico. This multi-national approach symbolizes the global unity of the sport.', 'The 2026 edition marks a massive expansion, increasing from 32 to 48 participating nations. Teams will be divided into 12 groups of 4, aiming to advance to an extended knockout phase.']
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    category: 'Club Elite',
    description: ['The UEFA Champions League represents the highest level of club competition globally. It gathers the top-tier teams from European domestic leagues to battle for continental supremacy under the floodlights.', 'Featuring iconic clubs like Real Madrid, Bayern Munich, Manchester City, and Barcelona, the tournament is characterized by high tactical drama, unforgettable comebacks, and the highest concentration of star players.']
  },
  {
    id: 'euro',
    title: 'UEFA European Championship (Euro)',
    category: 'Europe',
    description: ['The UEFA European Football Championship brings together the top national teams of Europe. Known for its intense competitiveness, it is often considered on par with the World Cup in terms of quality.', 'Recent tournaments have showcased incredible tactical battles, penalty drama, and the crowning of champions like Italy and Spain on the grand stage.']
  },
  {
    id: 'copa-america',
    title: 'Copa América',
    category: 'South America',
    description: ['The oldest international continental football competition, Copa América showcases the passion, flair, and fierce rivalries of South American football.', 'Dominated historically by Argentina, Uruguay, and Brazil, the tournament is beloved for its dramatic matches, exceptional individual skill, and intense atmosphere.']
  },
  {
    id: 'afcon',
    title: 'Africa Cup of Nations (AFCON)',
    category: 'Africa',
    description: ['The main international men\'s association football competition in Africa, AFCON is famous for its vibrant atmospheres, spectacular goals, and showcasing incredible talent.', 'The tournament continues to grow in global popularity, uniting a massive continent and highlighting stars who shine both in African national teams and elite European clubs.']
  },
  {
    id: 'asian-cup',
    title: 'AFC Asian Cup',
    category: 'Asia',
    description: ['The Asian Cup is the primary association football competition contested by the senior men\'s national teams of the members of the Asian Football Confederation (AFC).', 'With rapid growth in footballing infrastructure and talent across Asia, recent tournaments have been fiercely competitive, reflecting the rise of nations like Japan, South Korea, Qatar, and Saudi Arabia.']
  },
  {
    id: 'nations-league',
    title: 'UEFA Nations League',
    category: 'Europe',
    description: ['A relatively new biennial international football competition contested by the senior men\'s national teams of the member associations of UEFA.', 'It replaces meaningless friendly matches with competitive, tiered group-stage encounters culminating in a final four tournament, providing extra chances to qualify for major events.']
  },
  {
    id: 'ofc-nations-cup',
    title: 'OFC Nations Cup',
    category: 'Oceania',
    description: ['The OFC Nations Cup is an international association football tournament held among member nations of the Oceania Football Confederation (OFC).', 'While traditionally dominated by New Zealand, the tournament offers vital global exposure and a pathway to World Cup qualification for Pacific island nations.']
  }
];

export const VIDEOS = [
  { id: '1', title: 'World Cup Magic Moments', ytId: 'j7t5j-sTysk', url: 'https://www.youtube.com/embed/j7t5j-sTysk?rel=0' },
  { id: '2', title: 'Lionel Messi Highlights', ytId: 'pPNV3nX7iVs', url: 'https://www.youtube.com/embed/pPNV3nX7iVs?rel=0' },
  { id: '3', title: 'Cristiano Ronaldo Goals', ytId: 'I3MQUL4CYK0', url: 'https://www.youtube.com/embed/I3MQUL4CYK0?rel=0' },
  { id: '4', title: 'Champions League Classics', ytId: 'W9uD1E2V4z8', url: 'https://www.youtube.com/embed/W9uD1E2V4z8?rel=0' }
];

export const TABS = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'leagues', label: 'Leagues', icon: Globe },
  { id: 'tournaments', label: 'Tournaments', icon: Trophy },
  { id: 'highlights', label: 'Highlights', icon: Play },
  { id: 'about', label: 'About', icon: Info },
];
