/* Meridian's illustrative catalog. Copy counts and lending status are sample data. */
window.MERIDIAN_CATEGORIES = [
  {name:"Literature & Fiction", descriptor:"Novels, short stories & poetry", icon:"01"},
  {name:"Science Fiction & Fantasy", descriptor:"Other worlds & new futures", icon:"02"},
  {name:"Engineering & Computing", descriptor:"Build, design & understand", icon:"03"},
  {name:"Science & Nature", descriptor:"The living and physical world", icon:"04"},
  {name:"History & Society", descriptor:"People, places & movements", icon:"05"},
  {name:"Art & Design", descriptor:"Creative practice & visual culture", icon:"06"},
  {name:"Business & Ideas", descriptor:"Economics, leadership & habits", icon:"07"},
  {name:"Young Readers", descriptor:"Stories for the next generation", icon:"08"},
  {name:"Reference & Research", descriptor:"Dictionaries, writing & study", icon:"09"}
];

const rows = [
  ["Literature & Fiction", [
    ["Pride and Prejudice","Jane Austen",1813,3,"A witty, enduring romance about first impressions, family, and the search for a good match.",97],
    ["Jane Eyre","Charlotte Brontë",1847,2,"An independent young woman seeks love and purpose while holding fast to her convictions.",89],
    ["The Great Gatsby","F. Scott Fitzgerald",1925,1,"A glittering portrait of ambition, longing, and the fragile promise of reinvention.",93],
    ["The God of Small Things","Arundhati Roy",1997,2,"A richly layered family story set in Kerala, shaped by memory, love, and social boundaries.",91],
    ["The Namesake","Jhumpa Lahiri",2003,4,"A Bengali American family navigates identity, belonging, and the meanings carried by a name.",88],
    ["The Book Thief","Markus Zusak",2005,0,"A girl discovers the power of words and small acts of courage in wartime Germany.",94],
    ["One Hundred Years of Solitude","Gabriel García Márquez",1967,2,"The Buendía family and the town of Macondo unfold across generations in a landmark novel.",86]
  ]],
  ["Science Fiction & Fantasy", [
    ["Dune","Frank Herbert",1965,3,"On a desert planet, a young heir enters a struggle over power, ecology, and destiny.",99],
    ["The Hobbit","J. R. R. Tolkien",1937,2,"A comfort-loving hobbit joins an unlikely journey to reclaim a lost mountain home.",98],
    ["The Left Hand of Darkness","Ursula K. Le Guin",1969,1,"An envoy on an unfamiliar world questions how culture shapes loyalty and identity.",88],
    ["Kindred","Octavia E. Butler",1979,2,"A modern Black woman is repeatedly transported to a Maryland plantation before the Civil War.",92],
    ["Project Hail Mary","Andy Weir",2021,4,"A lone astronaut wakes far from Earth with a mission to solve a threat to the Sun.",96],
    ["The Fifth Season","N. K. Jemisin",2015,1,"In a world remade by seismic catastrophes, three lives converge around survival and power.",90],
    ["Foundation","Isaac Asimov",1951,0,"A mathematician tries to shorten a galactic dark age through a bold plan to preserve knowledge.",87]
  ]],
  ["Engineering & Computing", [
    ["Introduction to Algorithms","Thomas H. Cormen et al.",2022,4,"A rigorous reference to algorithms, data structures, and the analysis behind them.",95],
    ["Computer Networking: A Top-Down Approach","James Kurose & Keith Ross",2025,2,"A layered introduction to networking, from applications down to the physical infrastructure.",93],
    ["Clean Code","Robert C. Martin",2008,1,"Practical principles for making software easier to read, change, and maintain.",92],
    ["Design Patterns","Erich Gamma et al.",1994,2,"A classic guide to reusable object-oriented design patterns and their tradeoffs.",86],
    ["Fundamentals of Electric Circuits","Charles K. Alexander & Matthew Sadiku",2021,3,"A clear path through circuit analysis, network theorems, and core electrical principles.",88],
    ["Engineering Mechanics: Statics","R. C. Hibbeler",2021,1,"Worked examples introduce equilibrium, forces, structures, and engineering problem solving.",84],
    ["The Pragmatic Programmer","David Thomas & Andrew Hunt",2019,3,"A field guide to adaptable habits and thoughtful decisions throughout a software career.",94],
    ["Manufacturing Engineering and Technology","Serope Kalpakjian & Steven Schmid",2025,2,"An overview of modern manufacturing processes, materials, systems, and production technology.",82]
  ]],
  ["Science & Nature", [
    ["A Brief History of Time","Stephen Hawking",1988,2,"A welcoming introduction to the origin, structure, and possible future of the universe.",92],
    ["The Gene","Siddhartha Mukherjee",2016,1,"A sweeping history of heredity and the scientific effort to understand what makes us.",90],
    ["Silent Spring","Rachel Carson",1962,2,"A landmark account of how pesticides affect ecosystems and the lives within them.",89],
    ["Cosmos","Carl Sagan",1980,1,"A journey through the universe and the people who have tried to understand it.",91],
    ["Entangled Life","Merlin Sheldrake",2020,3,"Fungi reveal surprising connections across forests, food, medicine, and the living world.",87],
    ["The Body","Bill Bryson",2019,4,"A curious, accessible tour of the remarkable systems that keep the human body going.",90],
    ["Immune","Philipp Dettmer",2021,2,"An illustrated guide to the immune system and its intricate defenses.",86]
  ]],
  ["History & Society", [
    ["India After Gandhi","Ramachandra Guha",2007,2,"A broad history of how a diverse democracy took shape in the decades after independence.",93],
    ["The Warmth of Other Suns","Isabel Wilkerson",2010,1,"Three lives illuminate the Great Migration and its lasting reshaping of American life.",91],
    ["The Silk Roads","Peter Frankopan",2015,3,"A history that places the crossroads of Asia at the center of global events.",89],
    ["Caste","Isabel Wilkerson",2020,2,"A comparative look at how inherited social hierarchies shape everyday life and institutions.",90],
    ["The Dawn of Everything","David Graeber & David Wengrow",2021,1,"A fresh account of early human societies and the many ways people organized together.",84],
    ["The Anarchy","William Dalrymple",2019,0,"The East India Company’s rise is told through a vivid history of trade and empire.",88],
    ["Guns, Germs, and Steel","Jared Diamond",1997,2,"An influential attempt to explain long-term differences in power across world societies.",87]
  ]],
  ["Art & Design", [
    ["Ways of Seeing","John Berger",1972,2,"A concise, provocative look at how images shape what we see and believe.",91],
    ["The Design of Everyday Things","Don Norman",2013,2,"Design principles show how products can make everyday actions clearer and less frustrating.",95],
    ["Understanding Comics","Scott McCloud",1993,1,"A playful visual study of comics, storytelling, symbols, and the art of seeing between panels.",88],
    ["Interaction of Color","Josef Albers",1963,3,"A classic set of visual exercises exploring how color changes in context.",86],
    ["Steal Like an Artist","Austin Kleon",2012,2,"Short, encouraging prompts help creative people build a practice from their influences.",89],
    ["The Story of Art","E. H. Gombrich",1950,1,"A richly illustrated introduction to the changing forms and ideas of art history.",90]
  ]],
  ["Business & Ideas", [
    ["Thinking, Fast and Slow","Daniel Kahneman",2011,2,"A Nobel laureate explores the quick intuitions and slower reasoning behind our choices.",95],
    ["The Psychology of Money","Morgan Housel",2020,4,"Short stories reveal how behavior, patience, and perspective influence financial decisions.",96],
    ["The Lean Startup","Eric Ries",2011,1,"A method for testing business ideas through small experiments and continuous learning.",87],
    ["Poor Economics","Abhijit V. Banerjee & Esther Duflo",2011,2,"Research and field experiments offer a close-up view of decisions in low-income communities.",90],
    ["Good Strategy / Bad Strategy","Richard Rumelt",2011,3,"A practical framework for identifying the real challenge and focusing effort on a response.",88],
    ["The Innovator’s Dilemma","Clayton M. Christensen",1997,0,"Why successful organizations can miss disruptive change—and how leaders can recognize it.",85]
  ]],
  ["Young Readers", [
    ["Matilda","Roald Dahl",1988,3,"A brilliant child finds friendship, courage, and a little magic in an unkind world.",93],
    ["Charlotte’s Web","E. B. White",1952,2,"An unlikely friendship between a pig and a spider becomes a tender story of care.",92],
    ["Wonder","R. J. Palacio",2012,4,"A boy entering school for the first time helps classmates discover kindness and perspective.",94],
    ["Anne of Green Gables","L. M. Montgomery",1908,1,"An imaginative orphan brings warmth, mischief, and a new sense of home to Avonlea.",90],
    ["The Little Prince","Antoine de Saint-Exupéry",1943,2,"A pilot meets a young traveler whose questions invite readers to see with the heart.",96],
    ["The Wild Robot","Peter Brown",2016,1,"A robot learns to live on a remote island and care for a young gosling.",89]
  ]],
  ["Reference & Research", [
    ["The Chicago Manual of Style","University of Chicago Press",2024,2,"A comprehensive reference for editing, citation, grammar, and publishing conventions.",89],
    ["The Craft of Research","Wayne C. Booth et al.",2016,3,"A step-by-step guide to turning questions into evidence-based research and clear arguments.",92],
    ["They Say / I Say","Gerald Graff & Cathy Birkenstein",2021,2,"Flexible templates help writers enter academic conversations and develop their own claims.",90],
    ["The Elements of Style","William Strunk Jr. & E. B. White",1999,1,"A compact guide to clear, direct English prose and common writing principles.",87],
    ["The Oxford English Dictionary","Oxford University Press",2025,0,"A historical record of English words, meanings, usage, and change across centuries.",85],
    ["How to Read a Book","Mortimer J. Adler & Charles Van Doren",1972,2,"A practical approach to reading actively, understanding arguments, and learning from books.",88]
  ]]
];

const coverColors = ["#673943","#2d4552","#7a6a44","#536650","#876055","#334b62","#8b4c4b","#5d6659","#74586f"];
window.MERIDIAN_BOOKS = rows.flatMap(([category, books], group) => books.map(([title,author,year,copies,summary,popularity], index) => ({
  id:`M-${String(group+1).padStart(2,"0")}${String(index+1).padStart(2,"0")}`,
  title, author, category, year, copies, available:copies>0, summary, popularity,
  color:coverColors[group],
  label:category.split(" ")[0].toUpperCase(),
  featured:popularity>=93
})));
