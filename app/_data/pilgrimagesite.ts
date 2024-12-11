export type PilgrimageSiteType = {
  name: string;
  slug: string;
  diocese: string;
  street: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  image: string;
  description: string[];
  sources?: string[];
  types?: string[];
  contact: string[];
  website?: string;
  featured: boolean;
};

export const pilgrimageSites: PilgrimageSiteType[] = [
  {
    name: 'Mary MacKillop Memorial Chapel',
    slug: 'mary-mackillop-memorial-chapel',
    diocese: 'Archdiocese of Sydney',
    street: '7 Mount Street',
    city: 'North Sydney',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: [
      'The Chapel was built in 1913 at the instigation of Mother Baptista Molloy in memory of Mary MacKillop. The land was donated in memory of the Daly family. The Chapel was dedicated by the Very Rev Michael Kelly, Archbishop of Sydney on 18 January 1914.',
      'On 28 January 1914, Mary&#39;s remains were moved from Gore Hill Cemetery, her original resting place, and reinterred in front of Our Lady&#39;s altar in the vault donated by Mary&#39;s long-time friend, Johanna Barr-Smith.',
      'In 1994, Mary&#39;s remains were moved to what was the original vestry of the Chapel. The Chapel was used by the Sisters of Saint Joseph for many years but since Mary&#39;s beatification in 1995, has become a place of pilgrimage for thousands of people who come to pray and reflect at her tomb now in its own special place.',
    ],
    sources: [
      'https://www.marymackillopplace.org.au/chapel/the-mary-mackillop-memorial-chapel/',
    ],
    types: [
      'chapel',
    ],
    contact: ['(02) 8912 4890', 'pastoral.care@mmp.org.au'],
    website: '',
    featured: true,
  },
  {
    name: 'Sacred Heart Cathedral Bendigo',
    slug: 'sacred-heart-cathedral-bendigo',
    diocese: 'Diocese of Sandhurst',
    street: 'Cnr Wattle and Mackenzie Streets',
    city: 'Bendigo',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/sacred-heart-cathedral-bendigo.jpg',
    description: [
      'The formal laying of the foundation stone occurred on Friday, June 25, 1897 - the feast of the Sacred Heart of Jesus - by Bishop Reville, Bishop Crane being too infirm to be present. A stone with 13 Roman numerals and the Alpha and Omega is to the right hand side of the great west doors (as you face them). The stone has the X symbol for Christ with AD surrounding it and MDCCCLXXXXVII below.',
      'On September 28, 1901 Bishop Reville blessed the new building (the nave of the present building) and on Sunday September 29, 1901 His Eminence Patrick Francis Cardinal Moran formally opened the building.',
      'In 1953 Bishop Bernard Stewart decided to finish the cathedral. Workers dug for days and finally unearthed the foundations which has been laid in the 1890’s. His Eminence Norman Cardinal Gilroy, Archbishop of Sydney, laid a commemorative stone on October 16, 1955.',
      'The interior was completed by October 1973 and formally opened by Bishop Stewart. The spire was finished by 1977. The building was consecrated by Archbishop Thomas Vincent Cahill, archbishop of Canberra-Goulburn (a former Bendigo boy) and formally opened by His Eminence James Cardinal Freeman, Archbishop of Sydney.',
    ],
    sources: [
      'https://www.sandhurst.catholic.org.au/aboutcathedral/cathedral-tour-notes',
    ],
    types: [
      'cathedral',
    ],
    contact: ['(02) 8912 4890', 'email@gmail.com'],
    website: '',
    featured: true,
  },
  {
    name: 'St Clement&#39;s Monastery',
    slug: 'st-celements-monastery',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: '352 Kalangan Road',
    city: 'Galong',
    state: 'NSW',
    lat: -34.5620966,
    lng: 148.5530654,
    image: '/sites/st-celements-monastery.jpg',
    description: [
      'St Clement&#39;s Retreat and Conference Centre, a mission of the Redemptorists, is located in Galong NSW, a little over an hour&#39;s drive from the centre of Canberra.',
      'Set in more than 300 hectares of rural land, the centre&#39;s peaceful location is conducive to reflection, prayer and study, and provides an ideal setting for conferences, workshops, seminars and religious retreats. It has a peaceful ambience that will meet the needs of both individuals and groups.',
      'At St Clement&#39;s we are proud of what we can offer and assure you of a warm welcome should you choose to hold your next retreat or conference with us.',
      'We are close to bus and train routes. Our prices are modest but our service is exceptional; and the setting is truly magnificent.',
      'We recognise the unique position of Aboriginal and Torres Straight Islander people in our culture and history. Aboriginal and Torres Straight Islander people have been the custodians of this Land, including all land occupied by the Congregation of the Most HolyRedeemer in Australia.',
    ],
    types: [
      'retreat and conference center',
    ],
    contact: ['(02) 8912 4890', 'info@stclement.com.au'],
    website: '',
    featured: false,
  },
  {
    name: 'St Christopher&#39;s Cathedral',
    slug: 'st-christophers-cathedral',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: 'Cnr Canberra Avenue and Furneaux Street',
    city: 'Forrest',
    state: 'ACT',
    lat: -35.3188961,
    lng: 149.1324451550468,
    image: '/sites/st-christophers-cathedral.jpg',
    description: [
      'St Christopher&#39;s was built as the first parish church in Canberra by the first priest, Father Patrick Haydon, although the beginnings of Catholic life in the district go back to 1862 when the Diocese of Goulburn was erected.',
      'Following the Depression, Fr Haydon decided to build a church for Canberra, and the foundation stone was laid on 8 May 1938 by Archbishop Gilroy of Sydney. The ceremony was attended by the then Prime Minister, Joseph Lyons, and the former Prime Minister, James Scullin (Australia&rsquo;s first Roman Catholic Prime Minister). The church was dedicated to St Christopher because it was recognised that Canberra (which means &amp;#x22;meeting place&amp;#x22;) would be a place to which many travellers would come. On 4 June 1939, the parish church of St Christopher was officially opened by the Apostolic Delegate, Archbishop Panico, in the presence of the new Prime Minister, Robert Menzies.',
      'St Christopher&#39;s striking Spanish Romanesque style was the work of the Sydney architect Clement Glancy.',
    ],
    sources: [
      'https://saintchristopher.org.au/history',
      'https://ryanmacalandag.com'
    ],
    types: [
      'cathedral',
    ],
    contact: ['02) 6239 9846', 'cathedral@cg.org.au'],
    website: 'https://cgcatholic.org.au/parishes/cathedral/',
    featured: true,
  },
  {
    name: 'St Peter and Paul&#39;s Goulburn',
    slug: 'st-peter-and-pauls-goulburn',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: '36 Verner Street',
    city: 'Goulburn',
    state: 'NSW',
    lat: -34.755578,
    lng: 149.715009,
    image: '/sites/st-peter-and-pauls-goulburn.jpg',
    description: [
      'Sts Peter and Paul&#39;s Old Cathedral is a significant example of 19th century Gothic ecclesiastical design and craftsmanship. The Cathedral is constructed from diorite porphyrite (greenstone) and is the only church of this stone in Australia, possibly the world. The organ is the only unaltered William Hill organ in Australia, and is the second most important of his organs after the Sydney Town Hall organ.',
      'The parish was established in 1839 with the first church constructed on the current site in 1848. The construction of the Cathedral began in 1871 with Mr Andrea Stombuco the architect. During construction of the nave the old church was used as the sanctuary. The foundations for the transepts, sanctuary, tower and sacristy commenced in 1887 and the Cathedral was completed in 1890 with a large bell (cast in Ireland) installed in the tower. Renovations took place in 1927 where the marble floor, high altar and extensive timber joinery were added.',
    ],
    sources: [
      'https://www.nsw.gov.au/visiting-and-exploring-nsw/locations-and-attractions/sts-peter-and-pauls-old-cathedral)',
    ],
    types: [
      'cathedral',
    ],
    contact: ['(02) 6239 9863', 'goulburn@cg.org.au'],
    website: '',
    featured: false,
  },
  {
    name: 'Our Lady Star of the Sea',
    slug: 'our-lady-star-of-the-sea',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: 'Chandos Street',
    city: 'Eden',
    state: 'NSW',
    lat: -35.8194507,
    lng: 145.3361988,
    image: '/sites/our-lady-star-of-the-sea.jpg',
    description: [
      'The original church was built in 1863 and was in use until 1992. St Mary MacKillop visited and then established a school there in 1891. The present church was dedicated in December 1992 and involved a generous input by local businesses and individual volunteers as well as a substantial loan from the Catholic Development Fund.',
      'After the tragic wreck of the "lyee moon" at Greencape and the drowning of flora mackillop in 1886. Mary Mackillop in 1891 established a school utilising the church building until 1912. mother Mary Mackillop visited the school Sunday 26 march 1899 to spend eight days examining the school children and equipment and again in august 1901. The association between the our lady star of the sea" old church building being used as school and Australia&apos;s blessed Mary Mackillop is of great historic significance to the catholic church and the people of Eden.',
      'A plaque on the bell reads, This bell tolls in memory - of the generations of the Hopkins Family, originally from Enniscrone, Co. Sligo and their contributions to the Catholic Church and the community of Eden."',
    ],
    sources: [
      'http://cg.org.au/pambula/History.aspx',
    ],
    types: [
      'church',
    ],
    contact: ['0435 036 236 (Pambula Parish)', 'pambula@cg.org.au'],
    website: 'http://cg.org.au/pambula/home.aspx',
    featured: true,
  },
  {
    name: 'The Cathedral of St Michael and St John',
    slug: 'the-cathedral-of-st-michael-and-st-john',
    diocese: 'Diocese of Bathurst',
    street: 'Cnr Keppel and William Streets',
    city: 'Bathurst',
    state: 'NSW',
    lat: -33.4199541,
    lng: 149.5746016,
    image: '/sites/the-cathedral-of-st-michael-and-st-john.jpg',
    description: [
      'The Foundation Stone of St Michael&#39;s, located on the corner George and Keppel Streets, the first Catholic Church in Bathurst, was laid by Bishop Polding in 1840. St Michael&#39;s Church was in use by 1841 and building completed 1848, with leadlight windows. Due to subsidence, the building became unsafe within a decade.',
      'In 1852, Bishop Polding came to Bathurst with a plan for a large Roman Catholic church. Fundraising began in 1854 for a new church, coordinated by Dean Grant. In 1857, the Foundation Stone of the new church of St Michael and St John was laid by Bishop Polding. On 11 April 1861 the dedication of the new St Michael and St John Church took place, by Father Phelan and Dean Grant.',
      'The Dedication of the Cathedral took place on 29 June 1865 by Archbishop Polding. From this date forward, the Cathedral was known as the Cathedral of St Michael and St John. In the 1890s, the grand high altar was sculpted by James Pearce, ecclesiastical sculptor of Dublin. The altar was constructed from Sicilian marble and was dedicated on 3 February 1897. Relics of Saints Laurence and Vincent were placed in the Altar and dedicated in honour of the Sacred Heart of Jesus, in memory of Saint Michael and St John.',
    ],
    sources: [
      'https://bathurst.catholic.org.au/about-us/cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 6331 3066',
      'office.cathedral@cdob.org.au',
      'www.cathedralparish.org.au',
    ],
    website:
      'https://bathurst.catholic.org.au/parishes-and-mass-times/cathedral-parish-of-st-michael-and-st-john-bathurst/',
    featured: false,
  },
  {
    name: 'Diocesan Shrine of Our Lady of the Immaculate Conception', 
    slug: 'diocesan-shrine-of-our-lady-of-the-immaculate-conception',
    diocese: 'Diocese of Bathurst',
    street: 'Collins Street',
    city: 'Carcoar',
    state: 'NSW',
    lat: -33.4187619,
    lng: 144.4036928,
    image: '/sites/diocesan-shrine-of-our-lady-of-the-immaculate-conception.jpg',
    description: [
      'The Immaculate Conception Catholic Church, Carcoar, was proclaimed a shrine of the Diocese of Bathurst in 2022 by Bishop Michael McKenna.',
      'Part of the Parish of Blayney, the church building designed by Edward Gell was erected in 1870.',
      'A nearby convent was built in 1874.',
    ],
    sources: [
      'https://www.churchesaustralia.org/list-of-churches/locations/new-south-wales/directory/2284-the-immaculate-conception-catholic-church',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 6331 3066 (Blayney Parish)',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Our Lady of the Rosary Cathedral',
    slug: 'our-lady-of-the-rosary-cathedral-broken-bay',
    diocese: 'Diocese of Broken Bay',
    street: '23 Yardley Avenue',
    city: 'Waitara',
    state: 'NSW',
    lat: -33.7133234,
    lng: -33.7133234,
    image: '/sites/our-lady-of-the-rosary-cathedral-broken-bay.jpg',
    description: [
      'On 10 February 2008, Our Lady of the Rosary was elevated as the Cathedral of the Diocese of Broken Bay succeeding Corpus Christi, the parish church of St Ives. On 25 August 1991, the foundation stone of Our Lady of the Rosary was laid by the Most Rev. Patrick Murphy.',
      'The main attraction of the new church (previous location of the church community was on Pacific Highway) is the large basalt stone wall with the stained glass window set in it. This gives the Church a traditional feel whilst having a modern design. The symbolism of the stone wall is that the stones represent the members of the parish as living stones fitting together neatly but in an irregular pattern, just as the parish members come from diverse backgrounds. We are all different but fit together as a cohesive community.',
    ],
    sources: [
      'http://www.im.va/content/gdm/en/mondo/porte-della-misericordia.event.cathedral-our-lady-of-the-rosary-diocese-of-broken-bay.html',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 8379 1700',
      'cathedral@bbcatholic.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Patrick&#39;s Church East Gosford with the Relic of St John Paul II',
    slug: 'st-patricks-church-east-gosford-with-the-relic-of-st-john-paul-ii-broken-bay',
    diocese: 'Diocese of Broken Bay',
    street: '76 York Street',
    city: 'East Gosford',
    state: 'NSW',
    lat: -33.4370366,
    lng: 151.3497348,
    image: '/sites/st-patricks-church-east-gosford-with-the-relic-of-st-john-paul-ii-broken-bay.jpg',
    description: [
      'St Patrick&#39;s Parish started its life as Our Lady of the Rosary Parish in Donnison Street, Gosford in 1876, and comprised of a church, presbytery, convent and school which was opened by the Sisters of St Joseph in 1910.',
      'As the population of Gosford and surrounding areas grew, Our Lady of the Rosary Church became an island bordered by busy roads and a railway line and was far too small.',
      'Fr Patrick McManus took the decision to purchase land at East Gosford and erect St. Patrick&#39;s Church for over 600 congregants which were opened on 28 February 1965.',
    ],
    sources: [
      'https://www.bbcatholic.org.au/gosford/our-parish/history',
      'https://catholic-parish-of-st-patricks-gosford.square.site/',
    ],
    types: [
      'church',
      'relic',
    ],
    contact: [
      '(02) 4325 1042',
      'patsgos@acs.net.au ',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Our Lady of Dolours Church Chatswood with the Relic of Blessed Carlo Acutis',
    slug: 'our-lady-of-dolours-church-chatswood-with-the-relic-of-blessed-carlo-acutis',
    diocese: 'Diocese of Broken Bay',
    street: '94 Archer St',
    city: 'Chatswood',
    state: 'NSW',
    lat: -33.7940921,
    lng: 151.1793841,
    image: '/sites/our-lady-of-dolours-church-chatswood-with-the-relic-of-blessed-carlo-acutis.jpg',
    description: [
      'A first-class relic of Blessed Carlo Acutis, who will be the Church’s first millennial saint when he is canonised in 2025, was installed at a Vigil Mass at Our Lady of Dolours, Chatswood, in October 2024.',
      'The church has a chapel for Eucharistic Adoration which is home to the Carlo Acutis reliquary with the relic – two strands of hair from the young computer enthusiast and web designer who died of leukemia in Italy in 2006 aged 15.',
      'Carlo Acutis grew up in Milan where his faith inspired him to create websites displaying Catholic miracles, encouraging people to return to the Eucharist. While he also loved computer games, he spent many hours helping the homeless and poor.',
      'He died within a week of his diagnosis on 12 October 2006 and is buried in Assisi.',
    ],
    sources: [
      'https://catholicweekly.com.au/carlo-acutis-relic-installation-chatswood/',
    ],
    types: [
      'church',
      'relic'
    ],
    contact: [
      '(02) 9410 9000',
      'chatswoodoffice@bbcatholic.org.au ',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Mary&#39;s Church Manly, with the Relic of St John Vianney',
    slug: 'st-marys-church-manly-with-the-relic-of-st-john-vianney',
    diocese: 'Diocese of Broken Bay',
    street: '6 Raglan Street',
    city: 'Manly',
    state: 'NSW',
    lat: -33.7952586,
    lng: 151.2837963,
    image: '/sites/st-marys-church-manly-with-the-relic-of-st-john-vianney.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
      sources: [
        'https://www.churchhistories.net.au/church-catalog/manly-nsw-st-marys-catholic',
      ],
    types: [
      'church',
      'relic',
    ],
    contact: [
      '(02) 8379 1720',
      'manlyfreshwaterparish@bbcatholic.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Michael&#39;s Cathedral, Wagga Wagga',
    slug: 'st-michaels-cathedral-wagga-wagga',
    diocese: 'Diocese of Wagga Wagga',
    street: '9 Church Street',
    city: 'Wagga Wagga',
    state: 'NSW',
    lat: 147.373451,
    lng: -35.106724,
    image: '/sites/st-michaels-cathedral-wagga-wagga.jpg',
    description: [
      "The original St Michael's Church was built in the late 1850s, with the foundation stone laid on 27 September 1858 by Reverend Michael McAlroy of the Yass Diocese  (now the Archdiocese of Canberra-Goulburn).",
      "A new church was consecrated on 2 October 1887.",
      "Joseph Wilfrid Dwyer was consecrated the first bishop of Wagga Wagga on 13 October 1918 and transform it from a parish church to a diocesan cathedral.",
      "The cathedral was opened and blessed on 22 March 1925 by the Apostolic Delegate to Australia Archbishop Bartholomeo Cattaneo.  ",
    ],
    sources: [
      "St Michael's Cathedral, Wagga Wagga",
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 6921 2164',
      'cathedral@wagga.catholic.org.au',
    ],
    website:
      'www.stpatricksalbury.org.au',
    featured: true,
  },
  {
    name: 'St Patrick&#39;s Church Albury',
    slug: 'st-patricks-church-albury',
    diocese: 'Diocese of Wagga Wagga',
    street: '515 Smollett Street',
    city: 'Albury',
    state: 'NSW',
    lat: -33.86293,
    lng: 151.20634,
    image: '/sites/st-patricks-church-albury.jpg',
    description: [
      'St. Patrick&#39;s Church was blessed and opened on November 24, 1872. The priest who formulated, planned and supervised its building was buried behind the altar. He was Dr. Michael McAlroy, Albury&#39;s parish priest from 1868 to his death in 1880, and was known as the “Apostle of the South”.',
      'Dr. McAlroy built the church when Albury had a population of around 2600. The gothic arches he preferred pointed upwards like a pair of hands in prayer, a reminder that the church is a working building dedicated to the worship of God.',
      'The church is truly international, with a strong Irish influence. It honours the patron Saint of Ireland. A chancel window depicting St. Patrick is matched by one showing St. Brigid, to whom the first Albury church and convent were dedicated.',
      'Dr. McAlroy and his builder, James Walsh, were both Irish; the architect, John Gordon, was English; and the original stained glass windows were made by John Falconer, a Scot. As for the rest of the church, the west window has an Aboriginal theme, much of the timber came from North America and the roof tiles were from Wales. The marble altar and the present day organ were from Italy.',
      'St. Patrick&#39;s was Albury&#39;s second Catholic church. The first church, St. Brigid&#39;s, was built in 1858 as a brick schoolroom. It continued as a school after St. Patrick&#39;s was completed and was demolished in 1938.',
    ],
    sources: [
      'https://www.stpatricksalbury.org.au',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6041 2588',
      'admin@stpatricksalbury.org.au',
    ],
    website:
      'https://www.stpatricksalbury.org.au',
    featured: false,
  },
  {
    name: 'Sacred Heart Church Griffith',
    slug: 'sacred-heart-church-griffith',
    diocese: 'Diocese of Wagga Wagga',
    street: '11 Warrambool Street',
    city: 'Griffith',
    state: 'NSW',
    lat: -34.662605,
    lng: 149.413599,
    image: '/sites/sacred-heart-church-griffith.jpg',
    description: [
      'Sacred Heart Parish was founded in 1921.',
    ],
    sources: [
      'https://wagga.catholic.org.au/directory/listing/griffith-parish/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6962 1533',
      'info@griffithsacredheart.org',
    ],
    website:
      'https://www.facebook.com/sacredheartgriffith/',
    featured: false,
  },
  {
    name: 'The plinth on the old road (causeway)',
    slug: 'the-plinth-on-the-old-road-causeway',
    diocese: 'Diocese of Wagga Wagga',
    street: '-36.10412696094545, 146.89646957380847',
    city: 'C319 Gateway Island',
    state: 'VIC',
    lat: -36.10412696094545,
    lng: 146.89646957380847,
    image: '/sites/the-plinth-on-the-old-road-causeway.jpg',
    description: [
      'Linking the two cities commemorating the stay by Mary MacKillop in the hotel there (after she was refused bed and lodging at the Mercy Sisters in Albury by the then Vicar General).',
    ],
    types: [
      'commemorative',
    ],
    contact: [
      '(02) 6024 3366 (Wodonga Parish)',
      'wodcath@bigpond.net.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Mel&#39;s Church, Narrandera',
    slug: 'st-mels-church-narrandera',
    diocese: 'Diocese of Wagga Wagga',
    street: '62 Audley Street',
    city: 'Narrandera',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-mels-church-narrandera.jpg',
    description: [
      'St Mel’s Parish was founded in 1908.',
    ],
    sources: [
      "https://www.churchesaustralia.org",
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6959 2080',
      'narranderaparish@gmail.com',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Joseph&#39;s Church, Leeton',
    slug: 'st-josephs-church-leeton',
    diocese: 'Diocese of Wagga Wagga',
    street: '4 Wade Avenue',
    city: 'Leeton',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-josephs-church-leeton.jpg',
    description: [
      'St Joseph’s church was opened in May 1955.',
    ],
    sources: [
      'https://www.facebook.com/p/St-Josephs-Parish-Leeton-100083052244807/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6953 2099',
      'leetonparish@gmail.com',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Grave of Rev. Dr Henry Backhaus',
    slug: 'grave-of-rev-dr-henry-backhaus',
    diocese: 'Diocese of Sandhurst',
    street: '161 McCrae Street',
    city: 'Bendigo',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/grave-of-rev-dr-henry-backhaus.jpg',
    description: [
      'Pioneer priest on Bendigo goldfields, at St Kilian&#39;s Church, Bendigo',
    ],
    types: [
      'grave',
    ],
    contact: [
      '(03) 5441 6244',
      'stkilians@sandhurst.catholic.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Grave of Rev. George Galen',
    slug: 'grave-of-rev-george-galen',
    diocese: 'Diocese of Sandhurst',
    street: '25 Ford Street',
    city: 'Wangaratta',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/grave-of-rev-george-galen.jpg',
    description: [
      'Pioneer priest of north-east Victoria, at St Patrick&#39;s Church, Wangaratta.',
      'Rev. George Galen is buried inside St Patrick’s Church, Wangaratta (need to visit when Church is open or prearrange).',
    ],
    sources: [
      "https://stainedglassaustralia.wordpress.com",
    ],
    types: [
      'grave',
    ],
    contact: [
      '(03) 5722 1970',
      'wangaratta@sandhurst.catholic.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Wagunyah Mass Tree',
    slug: 'wagunyah-mass-tree',
    diocese: 'Diocese of Sandhurst',
    street: 'Reserve Road',
    city: 'Wahgunyah',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/wagunyah-mass-tree.jpg',
    description: [
      'A 600-year old red gum where Dean Tierney celebrated the first Wagunyah Mass in 1869.',
      'A two-kilometre track winding along the Murray River starts near the tree. A plaque was placed at the site in 1946 by the Catholic Women&#39;s Guild.',
    ],
    types: [
      'commemorative',
    ],
    contact: [
      '',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Mary MacKillop Indigenous Gardens and Historic Trail',
    slug: 'mary-mackillop-indigenous-gardens-and-historic-trail',
    diocese: 'Diocese of Wagga Wagga',
    street: '20A Tocumwal Road',
    city: 'Numurkah',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/mary-mackillop-indigenous-gardens-and-historic-trail.jpg',
    description: [
      'Mary MacKillop was present at Numurkah for the institute&#39;s expansion into Victoria in 1890. Mary also stayed 3 nights at Numurkah in 1896 and one night in 1899. She founded St Joseph&#39;s School, Numurkah, as the first Josephite school in Victoria.',
      'The gardens are on Parish land between the Church and the School. St John the Baptist Catholic Church.',
    ],
    types: [
      'commemorative',
      'trail',
    ],
    contact: [
      '',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Basilica of St Patrick, Fremantle',
    slug: 'basilica-of-st-patrick-fremantle',
    diocese: 'Archdiocese of Perth',
    street: '47 Adelaide Street',
    city: 'Fremantle',
    state: 'WA',
    lat: -32.0508629,
    lng: 115.7500751,
    image: '/sites/basilica-of-st-patrick-fremantle.jpg',
    description: [
      "St Patrick's, Fremantle was established around 1850, the third Catholic community in Western Australia after St Mary's Cathedral Parish, Perth and the Benedictine community of New Norcia.",
      "Until 1894 the Parish was served by Diocesan and Benedictine Priests.",
      "Since 1894 the Parish has been entrusted to the Missionary Oblates of Mary Immaculate. It was their first foundation in Australia and they have now been responsible for its pastoral care for more than 125 years.",
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 9335 2268',
      'fremantle@perthcatholic.org.au',
    ],
    website:
      'https://fremantlestpatricks.org.au/',
    featured: false,
  },
  {
    name: 'Carmelite Monastery, Nedlands',
    slug: 'carmelite-monastery-nedlands',
    diocese: 'Archdiocese of Perth',
    street: '100 Adelma Road',
    city: 'Dalkeith',
    state: 'WA',
    lat: -31.9921065, 
    lng: 115.7992628,
    image: '/sites/carmelite-monastery-nedlands.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'monastery',
      'church',
    ],
    contact: [
      '(08) 9386 3672',
      'deborahocd@multiline.com.au',
    ],
    website:
      'https://www.holytrinitycarmel.com.au/',
    featured: false,
  },
  {
    name: 'St John Paul II Catholic Church, Banksia Grove',
    slug: 'st-john-paul-ii-catholic-church-banksia-grove',
    diocese: 'Archdiocese of Perth',
    street: '6 Kurrajong Boulevard',
    city: 'Banksia Grove',
    state: 'WA',
    lat: -31.6967124,
    lng: 115.8050431,
    image: '/sites/st-john-paul-ii-catholic-church-banksia-grove.jpg',
    description: [
      'Building plans of St John Paul II Banksia Grove commenced in 2015.',
      'Image: ©Silverstone Photography/DWA Architects/Metrocon for St John Paul II Church, Banksia Grove',
    ],
    sources: [
      'https://therecord.com.au/news/local/perths-newest-church-of-st-john-paul-ii-banksia-grove-dedicated-and-opened-on-australia-day/',
    ],
    types: [
      'church',
    ],
    contact: [
      '0422 422 773',
      'banksia.grove@perthcatholic.org.au',
    ],
    website:
      'https://www.facebook.com/SJP2BanksiaGrove',
    featured: false,
  },
  {
    name: 'St Mary&#39;s Cathedral Perth',
    slug: 'st-marys-cathedral-perth',
    diocese: 'Archdiocese of Perth',
    street: 'Victoria Square',
    city: 'Perth',
    state: 'WA',
    lat: -31.9554177,
    lng: 115.8667088,
    image: '/sites/st-marys-cathedral-perth.jpg',
    description: [
      'On 8 February 1863, Bishop Salvado laid the foundation stone of the Cathedral of the Immaculate Conception of the Blessed Virgin Mary on a reserve of land known as Victoria Square. Fr Martin Griver, later Bishop of Perth, was responsible for the building. The architect and master mason was Joseph Ascione. The Cathedral of the Immaculate Conception of the Blessed Virgin Mary was blessed and opened on 29 January 1865. Two porches and the spire were added by Bishop Matthew Gibney in 1905.',
      'Bishop Patrick Clune CSsR, first Archbishop of Perth, set out to build a new Cathedral, the foundation stone of which was laid on 25 April 1926. It was opened at the height of the “Great Depression” on 4 May 1930. The original plan envisaged the present apse and transepts with a nave extending towards Murray Street. The intention was to finish it in Gothic style. Due to the events of the Depression, World War Two and its aftermath, no funds were ever available for this undertaking. For years, the iron bars stood out ready to link the two parts of the Cathedral.',
      'On 27 August 2006, the Cathedral was closed by Archbishop Barry James Hickey, fifth Archbishop of Perth, for construction to begin on the conservation and completion of the Cathedral. The Cathedral was reopened on 8 December 2009, the Feast of the Immaculate Conception of the Blessed Virgin Mary which is the Patronal Feast of the Cathedral.',
    ],
    sources: [
      'https://stmaryscathedralperth.com.au/history-of-the-cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 9223 1350',
      'cathedral@perthcatholic.org.au',
    ],
    website:
      'https://stmaryscathedralperth.com.au/',
    featured: false,
  },
  {
    name: 'Schoenstatt Shrine',
    slug: 'schoenstatt-shrine',
    diocese: 'Archdiocese of Perth',
    street: '9 Talus Drive',
    city: 'Mt Richon',
    state: 'WA',
    lat: -32.1663894,
    lng: 116.0185165,
    image: '/sites/schoenstatt-shrine.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'shrine',
      'chapel',
    ],
    contact: [
      '(08) 9399 2349',
      'schoenstattwa@gmail.com',
    ],
    website:
      'https://schoenstattwa.org.au/about-us/#the-shrine',
    featured: false,
  },
  {
    name: 'Monsignor Hawes Heritage Trail',
    slug: 'monsignor-hawes-heritage-trail',
    diocese: 'Diocese of Geraldton',
    street: '',
    city: 'Geraldton',
    state: 'WA',
    lat: -28.7768917,
    lng: 114.6112318,
    image: '/sites/monsignor-hawes-heritage-trail.jpg',
    description: [
      "Monsignor John Hawes was a priest and architect who designed and built many inspirational churches and other buildings in Western Australia's Mid-West, Gascoyne and Murchison areas  between 1915 and 1939.  He was a kind, passionate, and determined man who struggled daily to balance his architectural work with his religious duties.",
      'The Hawes Heritage Trail takes you on a journey to the buildings he created where you will discover the fascinating story of his life and work.',
      "The Trail takes you through diverse landscapes ranging from  stunning beaches to the edges of the outback and colourful spring wildflowers.   Step back in time and imagine this countryside as it would have been in John Hawes' day.",
    ],
    sources: [
      'https://www.monsignorhawes.com/hawes-heritage-trail/',
    ],
    types: [
      'trail',
    ],
    contact: [
      '(08) 99379504',
      'mhhc@geraldtoncatholic.org,au',
    ],
    website:
      'https://www.monsignorhawes.com/hawes-heritage-trail/',
    featured: false,
  },
  {
    name: 'Camino San Francisco',
    slug: 'camino-san-francisco',
    diocese: 'Diocese of Geraldton',
    street: '',
    city: 'Geraldton',
    state: 'WA',
    lat: -28.7757068,
    lng: 114.6112014,
    image: '/sites/camino-san-francisco.jpg',
    description: [
      "The Perenjori/Morawa Route is new territory for the Camino and will take us to 3 unique Hawes buildings - two churches and the Priest's Lodge in Morawa.",
      "Depending on the winter rains, it promises to take in some beautiful wildflower country.",
      "The group will be based at the Perenjori Caravan Park where they will have a choice of accommodation options from camping under the stars  to powered sites to cabins with ensuites.",
      "The walk will begin at St Joseph's  Church  Perenjori on Saturday 27th  and finish at the Church of the Holy Cross in Morawa on Sunday 28th. Walkers will be transported back to Perenjori by coach for overnight stay on Saturday afternoon.",
    ],
    sources: [
      'https://www.monsignorhawes.com/camino-san-francisco-2024-information-for-registration/',
      'https://therecord.com.au/news/local/the-camino-san-francisco-in-search-of-western-australias-spiritual-heritage/',
    ],
    types: [
      'camino',
      'trail',
    ],
    contact: [
      '',
    ],
    website:
      'https://www.monsignorhawes.com/camino-san-francisco-2024-information-for-registration/',
    featured: true,
  },
  {
    name: 'St Maroun&#39;s Cathedral',
    slug: 'st-marouns-cathedral',
    diocese: 'Maronite Eparchy',
    street: '627 Elizabeth Street',
    city: 'Redfern',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-marouns-cathedral.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 9318 2148',
      'secretary@maronitecathedralredfern.org.au',
    ],
    website:
      'https://maronitecathedralredfern.org.au/',
    featured: false,
  },
  {
    name: 'Our Lady of Lebanon Co-Cathedral',
    slug: 'our-lady-of-lebanon-cocathedral',
    diocese: 'Maronite Eparchy',
    street: '40 Alice Street',
    city: 'Harris Park',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/our-lady-of-lebanon-cocathedral.jpg',
    description: [
      'The 12th of January 1968 marked the beginning of the history of Our Lady of Lebanon Church in Sydney, Australia. On this day, Monsignor Peter Amin Ziade returned from Lebanon with the intention of building a Church with a presbytery, school and hall in Parramatta. After searching for a suitable property, the Church Committee successfully located a piece of land with a beautiful elevated view in Harris Park.',
      'Once the construction of the Church had begun in 1970, it established an overwhelming sense of enthusiasm in the hearts of many Maronite people. On Palm Sunday, the 22nd of March 1970, more than 10,000 Maronites gathered on the site of the Church to welcome Cardinal Gilroy and to acclaim him with palms, olive branches and candles. It was on this day that Mgr Ziade and the Cardinal blessed and laid the foundation stone.',
      'On the 10th of December 1972, Our Lady of Lebanon&#39;s hall and school was blessed and officially opened. From December 1972 until 1978, the hall was used as a Church while the development of the Church complex continued. On August 6th 1978, the Church was officially opened and blessed by Archbishop Abdo Khalifé.',
      'On the 11th of October 2014, the Church officially elevated its status to a co-cathedral in the presence of Bishop Antoine-Charbel Tarabay and Archbishop Paul Gallagher, Apostolic Nuncio to Australia.',
    ],
    sources: [
      'https://www.olol.org.au/about-us/about-olol-church',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 9689 2899',
      'info@olol.org.au',
    ],
    website:
      'https://olol.org.au/',
    featured: false,
  },
  {
    name: 'St Charbel&#39;s Church',
    slug: 'st-charbels-church',
    diocese: 'Maronite Eparchy',
    street: '142 Highclere Avenue',
    city: 'Punchbowl',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-charbels-church.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 9740 0998',
      'info.church@stcharbel.nsw.edu.au',
    ],
    website:
      'https://stcharbel.org.au/',
    featured: true,
  },
  {
    name: 'Our Lady of Lebanon Church',
    slug: 'our-lady-of-lebanon-church',
    diocese: 'Maronite Eparchy',
    street: '230 Normanby Avenue',
    city: 'Thornbury',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/our-lady-of-lebanon-church.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9480 2059',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Holy Trinity Catholic Church, Westbury',
    slug: 'holy-trinity-catholic-church-westbury',
    diocese: 'Archdiocese of Hobart',
    street: '94 Meander Valley Road',
    city: 'Westbury',
    state: 'TAS',
    lat: -41.5264317,
    lng: 146.8323988,
    image: '/sites/holy-trinity-catholic-church-westbury.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 6393 1263',
      'meandervalley@aohtas.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Our Lady of the Sacred Heart Catholic Church, Ross',
    slug: 'our-lady-of-the-sacred-heart-catholic-church-ross',
    diocese: 'Archdiocese of Hobart',
    street: '42 Church St',
    city: 'Ross',
    state: 'TAS',
    lat: -42.0307528,
    lng: 147.4918955,
    image: '/sites/our-lady-of-the-sacred-heart-catholic-church-ross.jpg',
    description: [
      'The Church of Our Lady of the Sacred Heart occupies a prominent site at the heart of the Northern Midlands village of Ross, a beautiful settlement which, with its historic bridge, sandstone buildings and convict history, is listed on Australia&#39;s Register of the National Estate. ',
      'Opened in 1920, the church was a brilliant conversion of an existing store room by the eminent Launceston architect Alexander North (1858 to 1945), the visual impact of his design being perfect for its setting at the village&#39;s principal street intersection. North designed a number of Catholic churches, including those at Burnie, Mangana and Glengarry, as well as the liturgical east half of the Church of the Apostles, Launceston, but the Ross church in its ingenuity is unique amongst his works and thus of significance given his reputation as a major Australian architect.',
      'Father John Graham built the church during his period as Parish Priest of Campbell Town. A former Missionary of the Sacred Heart, his great love for the Sacred Heart of Jesus is evident in its title and in the building&#39;s stained glass cycle. No less than eleven stained glass panels, either as windows or the upper sections of interior doors, are by the major Melbourne stained glass artist William Montgomery (1850 to 1927), who also designed beautiful windows for Fr Graham&#39;s other churches at Fingal, Campbell Town and Mangana.',
    ],
    sources: [
      'https://hobart.catholic.org.au/2019/05/08/heritage-treasures-our-lady-of-the-sacred-heart-catholic-church-ross/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 6381 1122',
      'campbelltowncatholic.parish@aohtas.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St John the Evangelist Church, Richmond',
    slug: 'st-john-the-evangelist-church-richmond',
    diocese: 'Archdiocese of Hobart',
    street: '38 St John&#39;s Circle',
    city: 'Richmond',
    state: 'TAS',
    lat: -42.7318109,
    lng: 147.4411007,
    image: '/sites/st-john-the-evangelist-church-richmond.jpg',
    description: [
      'In its setting beyond the historic 1825 bridge spanning the Coal River, St John the Evangelist Church in the hugely popular tourist destination of Richmond can justly claim the title of Tasmania&#39;s most visited and photographed church. It also has the distinction of being the oldest continuously-used Catholic church in Australia, having been opened on 31 December 1837.',
      'The roots of St John&#39;s Church can be traced back to Australia&#39;s first Catholic bishop, John Bede Polding OSB (1794 to 1877), who visited Van Diemen&#39;s Land—as Tasmania was then known—in August 1835 on route to taking up his posting in Sydney. Before leaving, Polding travelled to Richmond where he blessed the foundation stone for a new church, making this the first formal act of an Australian Catholic bishop, and left plans for the building by the Bath architect Henry Edmund Goodridge (c.1800 to 63). This small rectangular box served the community well for over twenty years until its pastor Fr William Dunne, having just erected the charming St Patrick&#39;s, Colebrook, from plans by the great English architect Pugin (1812 to 52), decided in 1858 to enlarge it using elements from another Pugin design by adding a chancel, sacristy and steeple. The old church became the nave of the augmented building which was opened on 15 February 1859. In the hands of the local supervising architect Frederick Thomas (1817 to 85), Pugin&#39;s elegant details lost a little in the process of being grafted onto Goodridge&#39;s simple box, but the resulting ensemble has delighted locals and visitors alike for over 160 years.',
      'By 1880 the spire, a wooden structure, had developed a dangerous lean. Whether it fell down or was dismantled is not known, but it was replaced in 1893 by a much shorter one. This was in turn replaced in 1972 by the present copper-clad spire, a shorter version of the original to better match the proportions of the tower below it.',
      'St John&#39;s Church has much of interest in its fittings and furnishings. The crosses atop the nave and chancel are based by Pugin on those of medieval English churches, and the baptismal font, another Pugin design, is of limestone and was brought out to Australia by Bishop Willson in 1844, the year he took up his position as first Bishop of Hobart Town. To the rear of the altar is a vibrant 1859 stained glass window, the only known Australian work of Joseph Bell, an artist based in Bristol, England, and to its left is a large painting of 1828 depicting the Adoration of the Magi. It is by Mather Brown (1761 to 1831), a major early American artist.',
    ],
    sources: [
      'https://hobart.catholic.org.au/2019/10/08/heritage-treasures-st-john-the-evangelist-church-richmond/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 6260 2189',
      'richmond@aohtas.org.au',
    ],
    website:
      'https://hobart.catholic.org.au',
    featured: true,
  },
  {
    name: 'Diocesan Shrine of Our Lady of Victories, Lutana',
    slug: 'diocesan-shrine-of-our-lady-of-victories-lutana',
    diocese: 'Archdiocese of Hobart',
    street: '12 Ashbolt Crescent',
    city: 'Lutana',
    state: 'TAS',
    lat: -42.8432506,
    lng: 147.3091423,
    image: '/sites/diocesan-shrine-of-our-lady-of-victories-lutana.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
      'shrine',
    ],
    contact: [
      '(03) 9412 8471',
      'moonahlutana@aohtas.org.au',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'Sts Peter and Paul Ukrainian Cathedral',
    slug: 'sts-peter-and-paul-ukrainian-cathedral',
    diocese: 'Ukrainian Eparchy',
    street: '35 Canning Street',
    city: 'North Melbourne',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/sts-peter-and-paul-ukrainian-cathedral.jpg',
    description: [
      'Ukrainians who came to Australia did not have their own church. That is why on 4 June 1950, two priests Fr. Pavlo Smal and Fr. Dr. Ivan Prasko gathered the faithful to start fundraising for the purchase of a plot of land and the construction of their own church in Melbourne.',
      'After 8 years, in 1958, a plot of land was bought in North Melbourne, on which a new church for Ukrainians in Australia was to be built. On 18 October of the same year, the site was consecrated. This event was attended by Metropolitan Maksym Hermanyuk, CSsR, Archbishop Ivan Buchko, Bishop Izidor Boretskyi, parish priest Fr. Dr. Ivan Prasko and all Ukrainian priests in Australia: Fr. Dr. Petro Diachyshyn, Fr. Mykola Kopyakivskyi, CSsR, Fr. Dmytro Kaczmar, Fr. John Bowden, Fr. Yuriy Spolitakevych, Fr. Stefan Maslo, CSsR, and Fr. Mykola Ivanco.',
      'On 11 April 1959, a meeting of the faithful was held in the People&#39;s House in Melbourne to choose a project for the construction of the church. After this meeting, Orion Wenhrynowycz&#39;s project was chosen. The plan of the future Cathedral was prepared by the firm Smith and Tracy, and the construction of the temple was to be started by the firm Clemens Lang Ford after the competition.',
      'Construction began in December 1961, and on 26 August 1962, the cornerstone was laid and consecrated by Archbishop Ivan Buchko and Bishop Ivan Prasko.',
      'The blessing of the Cathedral took place on Easter, 14 April 1963, which was attended by more than 3,000 people.',
      'The solemn consecration of the Cathedral with the iconostasis took place on 3 December 1967, which was attended by many faithful. A procession with the relics of St. Martyr Josaphat took place around the church, and later the relics were invested in the altar.',
    ],
    sources: [
      'https://catholicukes.au/eparchy/cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(03) 9320 2566',
      'melbourneparish@catholicukes.org.au',
    ],
    website:
      'https://catholicukes.au/eparchy/cathedral/',
    featured: false,
  },
  {
    name: 'St Volodymyr&#39;s Church',
    slug: 'st-volodymyrs-church',
    diocese: 'Ukrainian Eparchy',
    street: '82 Archibald Street',
    city: 'Lyneham',
    state: 'ACT',
    lat: -35.2440203,
    lng: 149.1186057,
    image: '/sites/st-volodymyrs-church.jpg',
    description: [
      'The memorial church of St. Volodymyr in Canberra is the newest Ukrainian Church in Australia and was built in 1988 to mark the Millennium of Christianity in Ukraine.',
      'Prior to the Church&#39;s opening, Ukrainian Catholic parishioners attended services conducted by the local parish priest in a chapel within a house, which also served as the presbytery. The house had been purchased through local parishioner donation in 1972. Shortly afterwards, the Church Brotherhood was established with Ivan Pojdynec as the first president.',
      'In 1973, Patriarch Cardinal Joseph Slipyj visited Australia to attend the Eucharistic Congress in Melbourne. He also visited Ukrainian Catholic parishes throughout Australia. During his visit to the Canberra-Queanbeyan parish, Cardinal Slipyj decided that the capital city of Australia should have a Ukrainian Catholic Church and centre to represent the Ukrainian people. He immediately established a church building fund with a substantial personal contribution.',
      'The Bishop of Australia and New Zealand, Ivan Prasko appointed Father Ivan Shewciw of the Sydney parish as project manager. Local parishioners successfully applied to the ACT Government for a grant of a suitable parcel of land for the new centre and over the following years, Ukrainians from all parishes in Australia and New Zealand donated to the building fund. An Australian building company was subsequently engaged to commence construction.',
      'A blessing ceremony was held on the land on 14th June 1982 and on 25th December of the same year, the foundation stone was laid. Just on a year later, on 16th December 1983, over one thousand people attended a special blessing of the new church of St. Volodymyr.',
      'Following the blessing of the church in 1983, almost ten years elapsed before it was consecrated. It was as if through God&#39;s Will that the important Church was consecrated by the Confessor of the Faith, Bishop Pawlo Wasylyk. This was significant since both Bishop Pawlo and Patriarch Cardinal Joseph Slipyj, the founder of St. Volodymyr&#39;s, had together endured imprisonment and persecution by the occupying Soviets in the gulags of Siberia. The consecration of the church occurred on Sunday, 28th July 1991 and this date, which is also the feast day of St. Volodymyr, has become an important day in the Church&#39;s calendar.',
    ],
    sources: [
      'https://volodymyrparish.ucoz.org/index/st_volodymyr_39_s_church/0-11',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6247 2141',
      'st.volodymyr.parish@gmail.com',
    ],
    website:
      'https://www.volodymyrparish.ucoz.org/ ',
    featured: false,
  },
  {
    name: 'Our Lady Queen of Peace Cathedral',
    slug: 'our-lady-queen-of-peace-cathedral',
    diocese: 'Diocese of Broome',
    street: '32 Weld Street',
    city: 'Broome',
    state: 'WA',
    lat: -17.9600003,
    lng: 122.238615,
    image: '/sites/our-lady-queen-of-peace-cathedral.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 9193 5888',
      'broomeparish@broomediocese.org',
    ],
    website:
      'https://broomediocese.org',
    featured: false,
  },
  {
    name: 'Beagle Bay &#39;Mother of Pearl&#39; Church',
    slug: 'sacred-heart-church-beagle-bay',
    diocese: 'Diocese of Broome',
    street: 'PMB 90',
    city: 'Broome',
    state: 'WA',
    lat: -15.4852204,
    lng: 128.1241439,
    image: '/sites/sacred-heart-church-beagle-bay.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(08) 9192 4917',
      'dampierpeninsulaparish@broomediocese.org',
    ],
    website:
      '',
    featured: true,
  },
  {
    name: 'Our Lady of the Assumption Church',
    slug: 'our-lady-of-the-assumption-church',
    diocese: 'Diocese of Broome',
    street: 'PMB 293',
    city: 'Wyndham',
    state: 'WA',
    lat: -14.2961607,
    lng: 126.6422389,
    image: '/sites/our-lady-of-the-assumption-church.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(08) 9161 4342',
      'kalumburuparish@broomediocese.org',
    ],
    website:
      '',
    featured: false,
  },
  {
    name: 'St Mary&#39;s Cathedral, Sale',
    slug: 'st-marys-cathedral-sale',
    diocese: 'Diocese of Sale',
    street: '47 Foster Street',
    city: 'Sale',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-marys-cathedral-sale.jpg',
    description: [
      'St Mary&#39;s Cathedral, Sale is the cathedral church of the diocese, under the patronage of Our Lady of Perpetual Help. Purpose-built as a cathedral, St Mary&#39;s boasts a Romanesque onyx high altar, notable stained glass windows and a large statue of Mary Help of Christians as its features. Four of Sale&#39;s bishops are buried in the cathedral: Bishop Corbett lies in the main section of the church beneath the front rows of pews on the right hand side and Bishops Ryan, Lyons and Fox are interred in the Lady Chapel.',
      'The main part of St Mary&#39;s Cathedral with its distinctive east-facing Gothic windows was constructed in 1886 by pioneer priest Fr James Hegarty. He initiated work on this red brick church when it was rumoured that Sale would become the seat of a Gippsland-based diocese and he wanted to ensure that the town had a church worthy of being called a cathedral.',
      'This Cathedral Church, built in 1886-1887 to the design of Barker and Henderson, is notable for the broad polygonal plaster-vaulted apse which, together with the side chapel, is elaborately pained and decorated. The interior also includes marble fittings with mosaic panels, stained glass windows and an anonymous pipe organ in the rear gallery. Originally of brick with decorated Gothic window tracery of Waurn Ponds stone, the church is now cement faced. The first Bishop of Sale, Dr James Corbett, was appointed to the see in 1857, having previously been parish priest of St Mary&#39;s, East St Kilda, where he was closely associated with the architect William Wardell.',
    ],
    sources: [
      'https://www.stmaryscathedralsale.com.au/testimonials/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(03) 5144 4100',
      'sale@cdsale.org.au',
    ],
    website:
      'https://www.stmaryscathedralsale.com.au/',
    featured: false,
  },
  {
    name: 'St Mary&#39;s Church Bairnsdale',
    slug: 'st-marys-church-bairnsdale',
    diocese: 'Diocese of Sale',
    street: '23 Pyke Street',
    city: 'Bairnsdale',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-marys-church-bairnsdale.jpg',
    description: [
      'St. Mary&#39;s is one of the most notable landmarks of Bairnsdale. Construction of the Church commenced in 1913, replacing an earlier brick church which had been built thirty years earlier in 1883.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 5152 2942',
      'stmarybairnsdale@gmail.com',
    ],
    website:
      'https://stmarysbairnsdale.au/',
    featured: false,
  },
  {
    name: 'The Mary MacKillop Walk',
    slug: 'the-mary-mackillop-walk',
    diocese: 'Diocese of Ballarat',
    street: '',
    city: 'Ballarat',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/the-mary-mackillop-walk.jpg',
    description: [
      'The Aussie Camino® is a pilgrimage route running from Portland in Victoria to Penola in South Australia, inspired by the life and journeys of Australia’s Saint Mary of the Cross MacKillop and her mentor Fr Julian Tenison Woods. Based on the traditions of the Camino de Santiago de Compostela, pilgrims receive a guidebook, passport, scallop shell and stay in the local towns along the way.',
    ],
    sources: [
      'http://www.lifestyletravel.com.au/aussie-camino',
    ],
    types: [
      'trail',
    ],
    contact: [
      '',
    ],
    website:
      'https://www.aussiecamino.org/',
    featured: true,
  },
  {
    name: 'St Patrick&#39;s Cathedral',
    slug: 'st-patricks-cathedral-ballarat',
    diocese: 'Diocese of Ballarat',
    street: '3 Lyons Street South',
    city: 'Ballarat',
    state: 'VIC',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-patricks-cathedral-ballarat.jpg',
    description: [
      'On February 7th, 1858, Bishop James Alipius Goold OSA laid the foundation stone for the church. Use commenced on a regular basis for Mass in 1863.',
      'In 1887 a High Altar, which can be seen still today, as well as Stations of the Cross were purchased from Rome. The Altar is made from Carrara marble',
      'The stained glass windows were introduced in 1883, the first being that in the Sanctuary.',
      'An extensive renovation and liturgical re-ordering of the Cathedral took place in 1999.',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(03) 5331 2933',
      'ballarat@ballarat.catholic.org.au',
    ],
    website:
      'https://stpatscathedral.weebly.com/',
    featured: false,
  },
  {
    name: 'St Francis Xavier&#39;s Cathedral',
    slug: 'st-francis-xavier-cathedral',
    diocese: 'Diocese of Wollongong',
    street: '36 Harbour Street',
    city: 'Wollongong',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-francis-xavier-cathedral.jpg',
    description: [
      'Saint Francis Xavier&#39;s church was established by Monsignor John Rigney in 1838. This was the first Catholic place of worship in the Illawarra. Archbishop Polding had a fondness for the Illawarra. The existing church was begun in 1848, was extended at the turn of the century and, again, in the 1930s. In 1951 the church was raised to cathedral status when Wollongong was declared a diocese by Pope Pius XII. The first Bishop, Thomas McCabe and his successor, William Murray, had plans for the construction of a new cathedral. However, after the restoration projects of Bishop Philip Wilson in 1999 and Bishop Peter Ingham in 2009, the current Bishop decided not to proceed with this plan. With a rapidly expanding region in the Macarthur and the downturn in the world economy Bishop Peter confirmed his decision by dedicating the Cathedral of Saint Francis Xavier on 16th March, 2010, on the death anniversary of Archbishop John Bede Polding, one hundred and sixty-two years after the church was begun.',
      'Over the years the Wollongong parish has given birth to other parishes. In this sense, Saint Francis Xavier is truly the mother church of all the parishes in the Illawarra. In 2006 there were approximately 4,300 Catholics in the parish . It has an ageing population. One feature of the parish is the high percentage of visitors who come to the Masses.',
      'The Saint Francis Xavier Assets Committee has been formed to examine ways in which the existing school premises can be used once the school has moved to the Fairy Meadow site. One of the urgent challenges for the parish is the ongoing funding required for the maintenance of the Cathedral.',
      'In May 2020, the Cathedral was internally renewed.',
    ],
    sources: [
      'https://www.lumenchristi.org.au/item/23-st-francis-xavier-cathedral-wollongong',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 4211 0500',
      'wollongong@dow.org.au',
    ],
    website:
      'http://www.lumenchristi.org.au/',
    featured: false,
  },
  {
    name: 'Our Lady Help of Christians Catholic Church',
    slug: 'our-lady-help-of-christians-catholic-church',
    diocese: 'Diocese of Wollongong',
    street: '80 Demetrius Road',
    city: 'Rosemeadow',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/our-lady-help-of-christians-catholic-church.jpg',
    description: [
      'In 1984, Masses began to be celebrated in the Ambarvale area by priests from St. John&#39;s Parish, Campbelltown.',
      'The Catholic community of Our Lady Help Of Christians began to take shape in 1985 when Fr. Paul Ryan took up permanent residence in Ambarvale. Although Mass was being celebrated prior to Fr. Ryan&#39;s arrival, his move to Ambarvale was the first formal step towards the development of the Parish Centre at Rosemeadow, as the area soon after came to be known.',
      'In 1986, Fr. Adrian Van Klooster became the area&#39;s second priest. During Fr. Adrian&#39;s time, the church was built and officially blessed and opened by Bishop W E Murray, Bishop of Wollongong, on March 1, 1987.',
      'In August, 1992, Fr. Christopher Sarkis was appointed proper pastor, taking up residence in Donalbain Circuit. With the restoration of the Presbytery completed in 1994, Fr. Sarkis moved there in May of that year.',
      'On 8 December, 1994, the Parish Of Our Lady Help Of Christians, incorporating St. Bede&#39;s Church at Appin, was canonically erected by Bishop W.E. Murray, Bishop of Wollongong. Fr. Sarkis was appointed as the Parish&#39;s first Parish Priest.',
      'Since his arrival at Rosemeadow, Fr. Sarkis had a dream for a new church for the parish. This dream became a reality with the Solemn Dedication of the new Our Lady Help of Christians Parish Church on Friday 8 March, 2019.',
      'Planning for the new church began in 1994. In 2003 the development of surplus parish land began with the aim of providing funds for the new church. In 2008, this land was rezoned for residential development. The parish entered into a joint venture with Miltonbrook Developments as the managing agent for the parish. A Development Application was granted in June 2010 and first sales of the rezoned land began in 2012.',
      'The first official announcement of the building of the new church appeared in the Parish Bulletin of 30 October 2016. In it, Father announced the approval of a Development Application by Campbelltown Council. This was the culmination of 15 years of planning and negotiation with various government departments, both local and state, from rezoning of land, to planning, development and sales. Fr. Sarkis further noted that discussion and planning of the actual church with architects, together with the various requirements and permissions needed from the Diocese of Wollongong, had been ongoing. Work on the new church was expected to begin on March 2017.',
      'On 29 June 2017, the final building plans and contract were signed with FAL Construction as the successful builder for the new church.',
      'Work on the new church began in July 2017 and was completed in early 2019.',
      'On Sunday 3 September 2017, the parish celebrated Foundation Day with the Blessing of the land on which the church was to be built. The Most Reverend Bishop Peter Ingham - Bishop of Wollongong celebrated the 10.00am Mass, after which parishioners processed up to the land for the official blessing and dedication of the site for the new church.',
      'The first Mass was celebrated in the church on 23 February, 2019. Friday 8 March, 2019, saw the Solemn Dedication of Our Lady Help of Christians Parish Church. The Principal Celebrant was The Most Reverend Bishop Brian Mascord - Bishop of Wollongong. Fr. Sean Cullen acted as Master of Ceremonies. Over 1,100 people were in attendance at the Mass.',
    ],
    sources: [
      'https://www.olhcrosemeadow.org.au/about/parish-history/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 4628 1385',
      'rosemeadow@dow.org.au',
    ],
    website:
      'http://www.olhcrosemeadow.org.au/',
    featured: false,
  },
  {
    name: 'Immaculate Conception Catholic Church',
    slug: 'immaculate-conception-catholic-church',
    diocese: 'Diocese of Wollongong',
    street: '48-50 Princes Highway',
    city: 'Unanderra',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/immaculate-conception-catholic-church.jpg',
    description: [
      'The Parish of Unanderra was established on 16 November 1952. The first parish priest was Fr Tarcisius Prevedello who was assisted by Brother John Setti. They belonged to the Scalabrinian Missionaries, which at that time was known as the Pious Society of Saint Charles.',
      'On 21 November 1954 the beautiful Parish Church of the Immaculate Conception was blessed and opened by Bishop McCabe. The architects were Hirst & Kennedy of Wollongong. The Scalabrinian Order provided £15,000 for the building of the church.',
      'The parish church was solemnly dedicated by Bishop William Murray on 14 November 1992, and on 25 March 1993 was declared the diocesan shrine to Our Lady.',
      'On 21 December 1997 extensions to the church, including two new confessionals and the portico, were blessed by Bishop Philip Wilson.',
      'The parish observed its golden jubilee of establishment in November and December 2002.',
      'The 50th anniversary of the opening of Immaculate Conception Church was observed on 21 November 2004 with Bishop Peter Ingham leading a celebration of Mass with Solemn Evening Prayer, followed by a parish dinner in St Pius X school hall in Unanderra.',
    ],
    sources: [
      'https://www.unanderraparish.org.au/history.html',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 4271 1068',
      'unanderra@dow.org.au',
    ],
    website:
      'http://www.unanderraparish.org.au/',
    featured: false,
  },
  {
    name: 'St Joseph&#39;s Catholic Church',
    slug: 'st-josephs-catholic-church',
    diocese: 'Diocese of Wollongong',
    street: '130 Moss Vale Road',
    city: 'Kangaroo Valley',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-josephs-catholic-church.jpg',
    description: [
      '',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 4423 1712',
      'nowra@dow.org.au',
    ],
    website:
      'http://nowraparish.au/',
    featured: false,
  },
  {
    name: 'Shrine of Our Lady of Mercy',
    slug: 'shrine-of-our-lady-of-mercy',
    diocese: 'Diocese of Wollongong',
    street: '120 Hanging Rock Road',
    city: 'Sutton Forest',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/shrine-of-our-lady-of-mercy.jpg',
    description: [
      'Fr. Augustine Lazur arrived in Australia in 1981 and established the Shrine of our Lady of Mercy in the Southern Highlands of New South Wales in 1984. The Shrine Church is dedicated to Our Lady under the title of Our Lady of Mercy, as represented by a replica of the icon of the Black Madonna. The original icon of the Black Madonna has been under the custodianship of the Pauline Fathers since 1382, and they promote devotion to her where ever they go. So naturally, when building a new shrine, she becomes the centre of devotion.',
      'But the Shrine has grown much since its founding and now has many smaller shrines built by pilgrims and devoted to the best-loved saints of all over the world. People of many different nationalities come to Penrose Park to visit their shrines for days of prayer.',
      'The Shrine has several days when many pilgrims come to visit the Shrine. Particularly popular is the Fatima Day devotions, on the 13th of Every Month, which sometimes draws crowds of over a thousand pilgrims. Visit our events page to see more about what happens at the Shrine.',
    ],
    sources: [
      'https://penrosepark.com.au/',
    ],
    types: [
      'shrine',
      'church',
    ],
    contact: [
      '(02) 4878 9192',
      'penrosepark@osppe.org.au',
    ],
    website:
      'http://www.penrosepark.com.au/',
    featured: false,
  },
  {
    name: 'St Mary Star of the Sea Catholic Church',
    slug: 'st-mary-star-of-the-sea-catholic-church',
    diocese: 'Diocese of Wollongong',
    street: 'Lot 1 Corks Lane',
    city: 'Milton',
    state: 'NSW',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/st-mary-star-of-the-sea-catholic-church.jpg',
    description: [
      '',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 4455 1313',
      'milton@dow.org.au',
    ],
    website:
      'http://www.milton.dow.org.au/',
    featured: false,
  },
  {
    name: 'Sacred Heart Cathedral',
    slug: 'sacred-heart-cathedral-townsville',
    diocese: 'Diocese of Townsville',
    street: '270 Stanley Street',
    city: 'Townsville',
    state: 'QLD',
    lat: -19.2586302,
    lng: 146.811542,
    image: '/sites/sacred-heart-cathedral-townsville.jpg',
    description: [
      'In January 1892, the Church of St Joseph on the Strand collapsed into a small creek, which had become a raging torrent after a downpour, described as "practically a waterspout", struck Townsville. It was after this, and a series of other calamities, that the decision was made to build the main church in Townsville on the foundation of rock on Castle Hill. The foundation stone for the new Church of the Sacred Heart was laid on 7 October 1900 and the church was completed and opened on 16 November 1902. It remained the parish church until it was consecrated as a Cathedral in 1930, when the Diocese of Townsville was divided from the Diocese of Rockhampton.',
      'To mark the 75th Jubilee of the Diocese, Bishop Michael Putney commenced the $3 million project to refurbish the Sacred Heart Cathedral. The Cathedral was closed on 1 August, 2004 and reopened 23 June, 2006.',
    ],
    sources: [
      'https://www.tsv.catholic.org.au/cathedral-parish-sacred-heart-cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(07) 4771 4461',
      'cathedralparish@tsv.catholic.org.au',
    ],
    website:
      'https://www.tsv.catholic.org.au/cathedral-parish-sacred-heart-cathedral/',
    featured: false,
  },
  {
    name: 'St Mary&#39;s Cathedral',
    slug: 'st-marys-cathedral-darwin',
    diocese: 'Diocese of Darwin',
    street: '90 Smith Street',
    city: 'Darwin',
    state: 'NT',
    lat: -12.4591432,
    lng: 130.8381873,
    image: '/sites/st-marys-cathedral-darwin.jpg',
    description: [
      'St Mary&#39;s Star of the Sea Cathedral is situated in the heart of the central business district of Darwin, and is the principal church of the Diocese of Darwin.',
      'It serves a congregation that varies in numbers on a seasonal basis. In the Dry Season (April to September) it attracts a substantial number of visitors, both from other Parishes within the Diocese, and from interstate and overseas, who visit the Cathedral both for weekend Masses, and as part of the tourists&#39; exploration of Darwin. ',
      'In September 1882, four Jesuit priests, led by Fr Anthony Strele, established a Catholic Mission Station, and within a few years built a church on the site of the current Presbytery.',
      'The existing Cathedral grew out of a need for a new and larger church, as Darwin grew after the end of the 2nd World War.',
      'The idea of the War Memorial Cathedral in Darwin was actually first mooted by war troops stationed there after St. Mary&#39;s Church had been severely damaged in an air-raid in 1942.  The troops had a close affinity with St. Mary&#39;s while they were in Darwin.  Some of the Chaplains were MSCs and the troops worshipped at St. Mary&#39;s which was, and still is, the garrison Church.',
      'As Darwin grew after the war, the need for a new St. Mary&#39;s became more evident.  Mr Ian Ferrier, of the firm J.P. Donoghue, Cusick and Edwards of Brisbane, designed the new building.',
      'The first sod was turned on 16th December, 1957, and the foundation stone was blessed by Bishop O&#39;Loughlin on 13th July, 1958.  This stone was cut from a piece of crystalline metamorphosed rock from Rum Jungle, the site of the first uranium mine in the Territory.  The stone shows extensive silification.  It is rich in symbolism, uniting as it does what was a powerful centre of Territory development with the vital centre of spiritual inspiration.  Mr Carl Johansson was in charge of building operations until 1962 when Mr John D&#39;Arcy took over.',
      'The Cathedral was blessed and opened by Bishop O&#39;Loughlin on 19th August, 1962, and consecrated on 20th August, 1972.  It is dedicated as St. Mary&#39;s, Star of the Sea, and is the centre of the Church&#39;s activity in the Diocese of Darwin.  At the same time the Cathedral is a war memorial to those servicemen, Australian, American, British and Dutch, who lost their lives in the area during the war, and to the civilian residents who died in the war.  The memorial character is reflected in a series of stained glass panels in the west window donated by the Australian and American Armed forces, and depicting their respective emblems.',
      'The lines of the Cathedral&#39;s contemporary neo-gothic design are majestic.  Special features are a series of parabolic arches, 16 metres high, and the extensive use of local sawn stone.  The white porcellanite stone was cut from the cliffs of Darwin Harbour in the Church&#39;s own quarry at Larrakeyah.  Apart from the walls, porcellanite was used in the baptismal font and pulpit.',
      'The Cathedral is dominated at the main entrance by a 26 metre tower, topped by a cross 6 metres high.  The graceful tower sets off the building contours.  A spiral staircase gives access to a gallery at the top, commanding a panoramic view of the city of Darwin.  The roof of the Cathedral is copper.',
      'Designed to meet local tropical needs, the entire length of both nave walls can be opened up by a series of glass panel doors.  Windows in the walls above provide further ventilation and are protected by the broad roofing overhang and concrete grille.',
    ],
    sources: [
      'https://darwin.catholic.org.au/history/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 8981 2863',
      'cathedral@darwin.catholic.org.au',
    ],
    website:
      'https://stmaryscathedral.com.au/ ',
    featured: true,
  },
  {
    name: 'St Francis Xavier Cathedral',
    slug: 'st-francis-xavier-cathedral-adelaide',
    diocese: 'Archdiocese of Adelaide',
    street: '39 Wakefield St',
    city: 'Adelaide',
    state: 'SA',
    lat: -34.9290207,
    lng: 138.6013943,
    image: '/sites/st-francis-xavier-cathedral-adelaide.jpg',
    description: [
      'The Cathedral is dedicated to the great 16th century Spanish Jesuit missionary saint who is also a patron of the Church in Australia and patron of our first bishop Francis Murphy (1844-58). Initial construction began in 1851 and there have been various phases of activity leading to the installation of the tower in 1996. The building of the Cathedral began in 1851, making it the oldest cathedral in Australia. The tower was not completed until 1996 – 145 years almost to the day after workers had dug the first sod for the beginning of work on the Cathedral site.',
      'The Cathedral is usually a busy place with several daily Masses, Rosary and confessions as well as weddings, baptisms and funerals. It is both a Cathedral and a parish church, so there are usually many diocesan and parish events held here.',
    ],
    sources: [
      'https://www.adelcathparish.org/find-a-church-mass?church=1706',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '8210 8155',
      'acp@acp.adelaide.catholic.org.au',
    ],
    website:
      'https://www.adelcathparish.org/',
    featured: true,
  },
  {
    name: 'Mary MacKillop Penola Centre',
    slug: 'mary-mackillop-penola-centre',
    diocese: 'Archdiocese of Adelaide',
    street: 'Corner Portland Street and Petticoat Ln',
    city: 'Penola',
    state: 'SA',
    lat: -37.3792195,
    lng: 140.839399,
    image: '/sites/mary-mackillop-penola-centre.jpg',
    description: [
      'This museum centre was erected to highlight the impressive life of St. Mary MacKillop, a religious sister who founded the Sisters of St Joseph of the Sacred Heart (known as the Josephites) in 1866 to establish numerous schools for the poor throughout Australia and New Zealand. The centre contains two sections – one that focuses on St. Mary MacKillop, and the other on Fr. Julian Tenison Woods, the co-founder of the order.',
    ],
    sources: [
      'http://www.mackilloppenola.org.au/',
    ],
    types: [
      'museum',
      'historical'
    ],
    contact: [
      '0887372092',
    ],
    website:
      'http://www.mackilloppenola.org.au/',
    featured: false,
  },
  {
    name: 'Sevenhill Winery and Ignatian Spirituality Centre',
    slug: 'sevenhill-winery-and-ignatian-spirituality-centre',
    diocese: 'Archdiocese of Adelaide',
    street: '111B College Rd',
    city: 'Sevenhill',
    state: 'SA',
    lat: -33.8833869,
    lng: 138.6379937,
    image: '/sites/sevenhill-winery-and-ignatian-spirituality-centre.jpg',
    description: [
      'Jesuit and Ignatian Spirituality Australia (JISA) runs a retreat centre in Clare Valley known as Sevenhill, which was established in 1851 and is considered the birthplace of the Jesuits in Australia.',
      'The centre offers a space for prayer and contemplation according to the spiritual principles of St. Ignatius. It is also connected to one of Australia&#39;s oldest and most famous wineries, originally constructed by the Jesuits to produce sacramental wine.',
    ],
    sources: [
      'jisa.org.au/sa-sevenhill/',
    ],
    types: [
      'retreat',
      'historical',
    ],
    contact: [
      '0888435935',
    ],
    website:
      'jisa.org.au/sa-sevenhill/',
    featured: false,
  },
  {
    name: "St Patrick's Cathedral",
    slug: 'st-patricks-cathedral-melbourne',
    diocese: 'Archdiocese of Melbourne',
    street: '1 Cathedral Place',
    city: 'East Melbourne',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-patricks-cathedral-melbourne.jpg',
    description: [
      'The chief draw card might be the ascending basalt columns, the gleaming mosaics and marble which highlight architect William Wardell’s wonderful design. But for the Catholic community this building holds Archbishop Peter A Comensoli’s chair (Latin: cathedra) on the sanctuary, which represents his prayerful leadership of our sacramental celebrations and pastoral life. Our parishes are connected to, and look towards, the cathedral for spiritual inspiration and connection to the Church of Rome.',
      'Our cathedral is dedicated to St Patrick, the pioneering Irish bishop who faithfully and courageously led the Church in Ireland and who initiated many changes to that society.',
      'Our cathedral also enjoys a rare distinction in design. The windows in the nave, unlike the usual stained-glass style, are made of translucent alabaster that gives the body of the building a golden glow. The lay people who pray and celebrate the sacred mysteries at ‘St Pat’s’ are placed in a luminous clearing and bathed in a glorious tint. The dignity of their baptism, friendship with Christ and membership of his body is affirmed in this unique hue.',
      'The central spire is no longer the tallest structure in the Melbourne cityscape, nevertheless, for the friends of Christ, everything we celebrate about God’s love for us in the cathedral is meant to be heard throughout our city and state.',
    ],
    sources: [
      'https://melbournecatholic.org/about/st-patricks-cathedral',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '9662 2233',
      'cathedral@cam.org.au',
    ],
    website:
      'http://www.cam.org.au/cathedral',
    featured: false,
  },
  {
    name: "St Mary Star of the Sea (Archdiocesan Shrine of the Holy Family)",
    slug: 'st-mary-star-of-the-sea-archdiocesan-shrine-of-the-holy-family',
    diocese: 'Archdiocese of Melbourne',
    street: '33 Howard Street',
    city: 'West Melbourne',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-mary-star-of-the-sea-archdiocesan-shrine-of-the-holy-family.jpg',
    description: [
      "Saint Mary Star of the Sea is one of the most strikingly beautiful churches in Australia.",
      "Since 2001, this parish has been entrusted to the care of priests of Opus Dei. In 2012, St Mary's became Melbourne Archdiocesan Shrine of the Holy Family.",
    ],
    sources: [
      'https://www.stmaryswestmelbourne.org/about',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9328 3474',
      'melbournewest@cam.org.au',
    ],
    website:
      'http://www.stmaryswestmelbourne.org/',
    featured: false,
  },
  {
    name: "St Mary MacKillop",
    slug: 'st-mary-mackillop-keilor-downs',
    diocese: 'Archdiocese of Melbourne',
    street: '152 Odessa Avenue',
    city: 'Keilor Downs',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-mary-mackillop-keilor-downs.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    sources: [
      'https://www.stmaryoftheassumption.org.au/',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9364 0440',
      'reception@stma.com.au',
    ],
    website:
      'http://www.stmaryoftheassumption.org.au/ ',
    featured: false,
  },
  {
    name: "St Luke's Lalor",
    slug: 'st-lukes-lalor',
    diocese: 'Archdiocese of Melbourne',
    street: '1A David Street',
    city: 'Lalor',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-lukes-lalor.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9465 2180',
      'lalor@cam.org.au',
    ],
    website:
      'https://www.stlukesparishlalor.com/',
    featured: false,
  },
  {
    name: "St Mary Magdalen’s Trentham",
    slug: 'st-mary-magdalens-trentham',
    diocese: 'Archdiocese of Melbourne',
    street: '1-3 Bridge Street',
    city: 'Trentham',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-mary-magdalens-trentham.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 5422 1261',
      'kyneton@cam.org.au',
    ],
    website:
      'https://www.melbcatholic.org/s/kyneton-trentham',
    featured: false,
  },
  {
    name: "Polish Marian Shrine Essendon",
    slug: 'polish-marian-shrine-essendon',
    diocese: 'Archdiocese of Melbourne',
    street: '6-8 Aberfeldie Street',
    city: 'Essendon',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/polish-marian-shrine-essendon.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9337 6395',
    ],
    featured: false,
  },
  {
    name: "St Dominic's Camberwell",
    slug: 'st-dominics-camberwell',
    diocese: 'Archdiocese of Melbourne',
    street: '816 Riversdale Road',
    city: 'Camberwell',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-dominics-camberwell.jpg',
    description: [
      'Ever since the first public Mass was celebrated for the first 29 people in the parlour of Holyrood House on 16 March 1924, countless parishioners and worshippers have made St Dominic’s their home.',
      'Our beautiful church was begun in 1936 with the turning of the first sod and dedicated by Archbishop Justin Symonds on 31 March 1960. The altar contains relics of Pope St Clement and St Dominic.',
      'Visitors to the Church will be able to appreciate William Patrick Connolly’s elegant design and Henry Clarke’s magnificent windows.  Finally completed in 1958 and consecrated in 1960, St Dominic’s Church has been described as “a defiant finale to the Gothic Revival in Australia”. Even more importantly, St Dominic’s Church is a sign of eternal hope and an oasis of abiding peace in Melbourne’s eastern suburbs.',
    ],
    sources: [
      "https://www.stdominics.org.au/aboutus",
      "http://www.stdominics.org.au",
    ],
    types: [
      'church',
    ],
    contact: [
      '0468 584 309',
      'camberwelleast@cam.org.au',
    ],
    website:
      'http://www.stdominics.org.au',
    featured: false,
  },
  {
    name: "St Francis Xavier Mansfield",
    slug: 'st-francis-xavier-mansfield',
    diocese: 'Archdiocese of Melbourne',
    street: '54 Hunter Street',
    city: 'Mansfield',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-francis-xavier-mansfield.jpg',
    description: [
      'Mansfield Catholic Parish is situated in the High Country in Victoria including parts of the Victorian Alps.',
      'The Parish was established when Melbourne was a Diocese under the newly established Archdiocese of Sydney and before the Dioceses of Sale and Sandhurst had been set up.',
      "The early parishioners were mostly Irish Catholics, who settled here since the 1840's. The descendants of these setters still live in the parish. A lot of them are farmers, a few of them are professionals as well.",
      'The present Catholic Parish of Mansfield, with churches at Mansfield, Woods Point, Jamieson, Bonnie Doon, Tolmie and Mount Buller, is in the Archdiocese of Melbourne and shares its borders with Sale and Sandhurst Dioceses.',
    ],
    sources: [
      "https://www.melbcatholic.org/s/articles/a198w0000001CI3AAM/mansfield-catholic-parish-history",
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 5775 2005',
      'mansfield@cam.org.au',
    ],
    website:
      'https://www.melbcatholic.org/mansfield',
    featured: false,
  },
  {
    name: "Sacred Heart Catholic Parish Croydon",
    slug: 'sacred-heart-catholic-parish-croydon',
    diocese: 'Archdiocese of Melbourne',
    street: '35 Wicklow Avenue',
    city: 'Croydon',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/sacred-heart-catholic-parish-croydon.jpg',
    description: [
      'Sacred Heart Catholic parish is located within the old Sacred Heart Monastery, which was owned by the Missionaries of the Sacred Heart and opened by Archbishop Mannix in April 1939.',
      'The complex included a chapel, library, cloisters, classrooms, refectory, kitchens and domestic offices. Accommodation was provided for 65 students, 10 priests and several lay brothers. Due to declining numbers, at the end of 1985, the location for seminary studies was changed to apartments in Drummoyne, Sydney.',
      'In 1991 the monastery and a surrounding parcel of 5 hectares of land was sold to the Archdiocese of Melbourne to serve as the parish centre of Croydon and East Ringwood. In 1993 the new parish of Sacred Heart, Croydon, was established using the monastery and chapel as its centre of worship and community activities.',
      'The original chapel was extended in 2000 to handle the greater number of people attending Mass from the merged Croydon and East Ringwood parishes. It now seats 500.',
      'The monastery building is heritage listed and the parish hopes to maintain the heritage of the monastery as a place of learning, spiritual living and a communal hub for the surrounding district.',
    ],
    sources: [
      "https://www.sacredheartcroydon.org/history/a-brief-history",
    ],
    types: [
      'church',
    ],
    contact: [
      '0416 923 484',
      'croydon@cam.org.au',
    ],
    website:
      'http://www.sacredheartcroydon.org/',
    featured: false,
  },
  {
    name: "Divine Mercy Shrine Keysborough",
    slug: 'divine-mercy-shrine-keysborough',
    diocese: 'Archdiocese of Melbourne',
    street: '337-343 Greens Road',
    city: 'Keysborough',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/divine-mercy-shrine-keysborough.jpg',
    description: [
      'The idea of buying a plot of land in Keysborough on Greens Road was born from the initiative of Father Maksymilian Szura SChr in May 1998. The purchased land was very quickly tidied up and developed, and the metal shed was converted into a temporary chapel. In a letter dated 17 June 1998, Archbishop George Pell gave permission to open the Polish Catholic Centre and to celebrate Holy Mass in the temporary chapel.',
      'On December 6, 1998, Archbishop Stefan Wesoły consecrated the chapel and the grounds.',
      'Efforts were made to obtain permission to build a church at the Dandenong City Council, where plans by Canberra architect Jacek Łukaszyk were presented. After many adventures and prohibitions, to the joy of the ministering priests and the faithful, construction began two years later.',
      'On November 23, 2003, Bishop Christopher Prowse blessed the foundations for the future sanctuary. The following year, also on the feast of Christ the King, on November 21, 2004, he blessed the Cornerstone brought from the grave of St. Faustina.',
      'On April 22, 2006, on the eve of the Feast of Divine Mercy, the long-awaited moment came, the Consecration of the Shrine of Divine Mercy. The liturgy was led by Archbishop Denis Hart, assisted by the shepherd of the Polish community, Bishop Ryszard Karpiński, who came from Poland, and Bishop Hilton Deakin, the local guardian of emigrants and refugees.',
    ],
    sources: [
      "https://dms.org.au/",
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9701 6071',
      'dms@cam.org.au',
    ],
    website:
      'https://dms.org.au/',
    featured: false,
  },
  {
    name: "Our Lady of La Vang Shrine",
    slug: 'our-lady-of-la-vang-shrine',
    diocese: 'Archdiocese of Melbourne',
    street: '225 Hutton Road',
    city: 'Keysborough',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/our-lady-of-la-vang-shrine.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9701 6033',
      'ttlavang225@gmail.com',
    ],
    website:
      'https://trungtamthanhmaulavang.org.au/',
    featured: false,
  },
  {
    name: "St Patrick's Mentone",
    slug: 'st-patricks-mentone',
    diocese: 'Archdiocese of Melbourne',
    street: '10 Rogers Street',
    city: 'Mentone',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-patricks-mentone.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9583 2103',
      'mentoneparkdaleeast@cam.org.au',
    ],
    website:
      'https://www.sspjv.org/',
    featured: false,
  },
  {
    name: "St Macartan’s Mornington",
    slug: 'st-macartans-mornington',
    diocese: 'Archdiocese of Melbourne',
    street: '4 Drake Street',
    city: 'Mornington',
    state: 'VIC',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-macartans-mornington.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 5975 2200',
      'mornington@cam.org.au',
    ],
    website:
      'https://www.melbcatholic.org/s/mornington',
    featured: false,
  },
  {
    name: "Sacred Heart Cathedral Broken Hill",
    slug: 'sacred-heart-cathedral-broken-hill',
    diocese: 'Diocese of Wilcannia-Forbes',
    street: '235 Lane Street',
    city: 'Broken Hill',
    state: 'NSW',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/sacred-heart-cathedral-broken-hill.jpg',
    description: [
      'In June 1903, a meeting of over 800 people took place on the grounds of the Bishops house to discuss the building of a Cathedral for the diocese. Additionally it would also serve as the cities parish church.',
      'The Sisters of Mercy donated the corner land of their new convent for the Cathedral to be built on. Mr Knox of Broken Hill was employed as the architect under the supervision of Bishop Dunne. What made this Cathedral unique was the decision to use the silver quarry stone leftover from the silver mines; this meant the Cathedral would be made out of a silver stone a priceless gem that could never be replaced. The stone was donated to the diocese by the North silver mines of Broken Hill. On December 6th 1903, Bishop John Dunne laid the foundation stone of the new Cathedral of the Sacred Heart of Jesus in the presence of various visiting Bishops and the Catholic faithful.',
      'Two years later and after 7,000 pounds spent, the Cathedral of the Sacred Heart was opened and consecrated by Bishop Dunne on July 2nd 1905. In attendance were various bishops from Australia. Noted prelates in attendance were the Archbishop of Melbourne, Archbishop Carr and Coadjutor Archbishop Kelly of Sydney.',
      'An estimated 1,500 people were in attendance to witness this wonderful occasion for the diocese and it was noted as the largest gathering seen in western outback New South Wales.',
      'The Sacred Heart Cathedral building is a living reminder of Bishop Dunne’s durable work and care for his diocese, sadly eleven years later, on Christmas Day 1916, Bishop John Dunne passed away aged 71. Bishop Dunne was praised for his 29 years of apostolic service and, in building up the newly established diocese.',
    ],
    sources: [
      'https://www.wf.catholic.org.au/our-diocese/cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 8087 3198',
      'parish.brokenhill@wf.catholic.org.au ',
    ],
    website:
      'https://www.wf.catholic.org.au',
    featured: false,
  },
  {
    name: "St Laurence O’Toole Church",
    slug: 'st-laurence-otoole-church',
    diocese: 'Diocese of Wilcannia-Forbes',
    street: '13 Johnson Street',
    city: 'Forbes',
    state: 'NSW',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-laurence-otoole-church.jpg',
    description: [
      'In 1880 St. Laurence O’Toole Church of Gothic design was consecrated and opened, it consisted of the present nave only.',
      'Other additions consist in: 1905 Sanctuary and Sacristy, 1923 Gallery, 1936 Copper sheeting replaced and shingle roof, and 1958 Confessionals.',
      'More recently the whole church was air-conditioned and a new organ was purchased. This was partly funded by a deceased estate and the parishioners helped by purchasing an organ key. In 2017 the Gallery was updated making it more secure and beautiful.',
    ],
    sources: [
      'https://www.catholicforbes.org/our-parish',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6852 2213',
      'parish.forbes@wf.catholic.org.au',
    ],
    website:
      'https://www.catholicforbes.org/ ',
    featured: false,
  },
  {
    name: "St Michael’s Church Deniliquin",
    slug: 'st-michaels-church-deniliquin',
    diocese: 'Diocese of Wilcannia-Forbes',
    street: '366 Harrison Street',
    city: 'Deniliquin',
    state: 'NSW',
    lat: -36.7600488,
    lng: 144.2714712,
    image: '/sites/st-michaels-church-deniliquin.jpg',
    description: [
      'No information currently available.', 
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 5881 1482',
      'parish.deniliquin@wf.catholic.org.au',
    ],
    website:
      'https://wf.catholic.org.au',
    featured: false,
  },
  {
    name: "St Stephen’s Cathedral Brisbane",
    slug: 'st-stephens-cathedral-brisbane',
    diocese: 'Archdiocese of Brisbane',
    street: '3249 Elizabeth Street',
    city: 'Brisbane',
    state: 'QLD',
    lat: -27.4687648,
    lng: 153.0290513,
    image: '/sites/st-stephens-cathedral-brisbane.jpg',
    description: [
      'Work began on this little stone church in 1848, using a design of Gothic revival architect, AWN Pugin. Fr James Hanly celebrated the first Mass in the church on 12 May 1850 when there were just sixty Catholic families in town.',
      'In 1859, with the appointment of Bishop James Quinn, Brisbane became a diocese and the church a cathedral. When the new cathedral was opened in 1874 this church became a school room. During the past century it was used for school, church offices and storage, and was several times threatened with demolition.',
      'Based on painstaking historical research and heritage reports, the bell tower has been rebuilt, the stone tracery in the windows reconstructed, and a timber shingle roof reinstated. In fact, it has been enhanced with treasures our ancestors could not have imagined: the West window is now filled with magnificent stained glass depicting Christ in glory and the story of St Stephen.',
      'The building now provides the cathedral with a small-scale worship space. The seating and sanctuary can be rearranged so that it is suitable for the Liturgy of the Hours, small group Masses, meditation groups, and weddings. The occasional spiritual talks or musical performances will also find a home in this sacred space.',
      'The whole of the worship space is located in the nave which is divided off from the apse by four solid timber panels and a rood bar with a crucifix in the midpoint. The apse space has been devoted to the diocesan shrine of Mary MacKillop.',
      'Archbishop John Bathersby solemnly dedicated the restored St Stephen’s Chapel on 5 February 1999.',
    ],
    sources: [
      'https://www.cathedralofststephen.org.au/st-stephens-chapel.html',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(07) 3324 3030',
      'cathedral@bne.catholic.net.au ',
    ],
    website:
      'https://www.cathedralofststephen.org.au/ ',
    featured: false,
  },
  {
    name: "St Monica's Cathedral Cairns",
    slug: 'st-monicas-cathedral-cairns',
    diocese: 'Diocese of Cairns',
    street: '181 Abbott Street',
    city: 'Cairns',
    state: 'QLD',
    lat: -16.9170834,
    lng: 145.7725937,
    image: '/sites/st-monicas-cathedral-cairns.jpg',
    description: [
      'On 10th January 1886, Cairns’ first catholic church and priory, St Monica’s, was opened on the corner of Abbott and Minnie Streets.',
      'Sadly, it was destroyed in the 1927 cyclone, but was rebuilt in 1928. This building is now home to Catholic Services.',
      'St Monica’s was not the first church in the diocese, nor – at the time - was it a Cathedral. In 1886 other churches had already been established at Cooktown, Herberton, Port Douglas, Normanton and Croydon.',
      'In 1941, Cairns became a diocese, and the most recent incarnation of St Monica’s Cathedral was blessed and opened in July 1968. It can be found at 181 Abbott Street, Cairns.',
    ],
    sources: [
      'https://cairns.catholic.org.au/about/st-monicas-cathedral',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(07) 4046 5285',
      'cathedral@cairns.catholic.org.au',
    ],
    website:
      'https://cairns.catholic.org.au',
    featured: false,
  },
  {
    name: "St Carthage’s Cathedral",
    slug: 'st-carthages-cathedral',
    diocese: 'Diocese of Lismore',
    street: '6 Leycester Street',
    city: 'Lismore',
    state: 'NSW',
    lat: -28.8043722,
    lng: 153.2817061,
    image: '/sites/st-carthages-cathedral.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 6626 0200',
      'admin@stcarthages.org.au',
    ],
    website:
      'http://www.stcarthages.org.au/',
    featured: false,
  },
  {
    name: "Sacred Heart Catholic Church Murwillumbah",
    slug: 'sacred-heart-catholic-church-murwillumbah',
    diocese: 'Diocese of Lismore',
    street: '143 Murwillumbah St',
    city: 'Murwillumbah',
    state: 'NSW',
    lat: -28.8043722,
    lng: 153.2817061,
    image: '/sites/sacred-heart-catholic-church-murwillumbah.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6672 1118',
      'murwillumbah@lismore.catholic.org.au',
    ],
    website:
      'https://shpmurwillumbah.com.au/',
    featured: false,
  },
  {
    name: "St Augustine's Catholic Church",
    slug: 'st-augustines-catholic-church',
    diocese: 'Diocese of Lismore',
    street: '21 Gordon Street',
    city: 'Coffs Harbour',
    state: 'NSW',
    lat: -28.8043722,
    lng: 153.2817061,
    image: '/sites/st-augustines-catholic-church.jpg',
    description: [
      "St. Augustine's Catholic Parish of Coffs Harbour in the Diocese of Lismore, was formed on December 9, 1906. The original parish embraced a stretch of country skirting the coast including the townships of Coffs Harbour and Woolgoolga, as well as the districts of Moonee and Corindi.",
      'The Parish of Sawtell was formed on July 1, 1983, when the towns of Sawtell, Boambee and Bonville areas were transferred from the Parish of Coffs Harbour.',
      "The Coffs Harbour Parish Church is St. Augustine's War Memorial Church built in 1962 and is located in Gordon Street overlooking the city centre. December 9, 2006 marked the Centenary of the establishment of Coffs Harbour Parish.",
    ],
    sources: [
      'https://www.coffscatholic.com/History-of-St-Augustines-Catholic-Parish',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6651 0000',
      'parish@coffscatholic.com',
    ],
    website:
      'https://www.coffscatholic.com',
    featured: false,
  },
  {
    name: "St Agnes' Catholic Church",
    slug: 'st-agnes-catholic-church',
    diocese: 'Diocese of Lismore',
    street: '47 Hay Street',
    city: 'Port Macquarie',
    state: 'NSW',
    lat: -28.8043722,
    lng: 153.2817061,
    image: '/sites/st-agnes-catholic-church.jpg',
    description: [
      'No information currently available.',
    ],
    types: [
      'church',
    ],
    contact: [
      '(02) 6588 7444',
      'communications@stagnesparish.org.au',
    ],
    website:
      'https://stagnesparish.org.au/',
    featured: false,
  },
  {
    name: "St Patrick’s Cathedral Parramatta",
    slug: 'st-patricks-cathedral-parramatta',
    diocese: 'Diocese of Parramatta',
    street: '1 Marist Place',
    city: 'Parramatta',
    state: 'NSW',
    lat: -33.8086466,
    lng: 151.0035436,
    image: '/sites/st-patricks-cathedral-parramatta.jpg',
    description: [
      'Rev James Dixon celebrated the first Mass in Parramatta near the present-day St Patrick’s on 22 May 1803.',
      'After the Vinegar Hill Rebellion of 1804, Mass privileges were withdrawn. Rev Therry’s arrival in 1820 reinstated Mass celebrations. Rev Daniel Power started the first church in Parramatta in 1827. Archbishop Polding OSB laid the Foundation Stone on 17 March 1836, and the church was consecrated on 28 May 1837.',
      'A larger church was commissioned in 1854, and the Foundation Stone was laid on 13 August. The Pugin Tower’s Foundation Stone was laid on 10 November 1878, and the tower was consecrated on 17 March 1880.',
      'A new church was built in 1936, incorporating the tower and spire. The Cathedral was destroyed by fire on 19 February 1996, and rebuilt to its current form, dedicated on 29 November 2003.',
    ],
    sources: [
      'https://parracatholic.org/about/st-patricks-cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 8839 8400',
      'enquiry@stpatscathedral.com.au',
    ],
    website:
      'https://stpatscathedral.com.au',
    featured: false,
  },
  {
    name: "Mt Shoenstatt Shrine",
    slug: 'mt-shoenstatt-shrine',
    diocese: 'Diocese of Parramatta',
    street: '230 Fairlight Road',
    city: 'Mulgoa',
    state: 'NSW',
    lat: -33.8086466,
    lng: 151.0035436,
    image: '/sites/mt-shoenstatt-shrine.jpg',
    description: [
      'No information currently available.',
    ],
    sources: [
      'https://schoenstatt.org.au/',
    ],
    types: [
      'shrine',
    ],
    contact: [
      '(02) 4773 8338',
      'bookings@schoenstatt.org.au',
    ],
    website:
      'https://schoenstatt.org.au',
    featured: false,
  },
  {
    name: "Shrine of the Holy Innocents",
    slug: 'shrine-of-the-holy-innocents',
    diocese: 'Diocese of Parramatta',
    street: '8 Greyfriar Place',
    city: 'Kellyville',
    state: 'NSW',
    lat: -33.8086466,
    lng: 151.0035436,
    image: '/sites/shrine-of-the-holy-innocents.jpg',
    description: [
      "The building of the new shrine dedicated to the Holy Innocents began in November 2011. It has taken two years to see the dream become a reality after more than $500,000 was raised by the residents of the parish of Our Lady of the Rosary and the wider community, including major sponsor Kenthurst businessman Walter Bachmann of BAC Systems. Donations came from people all over Australia who learnt of the project through the Franciscan order’s newsletter, 'The Little Troubadour'.",
      'In the interior, artist Theodore Velin, originally from Bulgaria, has painted a beautiful fresco on the chapel’s impressive domed ceiling and also created four religious mosaics for the chapel. Each mosaic took three months to complete.',
      "His icons of St Clare and St Francis flank the entrance to the shrine. The fresco on the dome features the Virgin Mary and St Maximilian Kolbe, who established the Marian apostolate the 'Militia Immaculata' or Knights of the Immaculate; he is also a patron saint of the Pro-Life movement. The Franciscans consider the shrine a place of holy beauty and are continuing to landscape the surrounding grounds.",
      'The walk through the garden is modelled on the 14 Stations of the Cross, depicting Jesus’ path to His crucifixion with sculptural representations in almost life-size figures.',
    ],
    sources: [
      'https://www.franciscanfriarsaustralia.org/shrineoftheholyinnocents',
    ],
    types: [
      'shrine',
    ],
    contact: [
      '0429 441 955',
      'kellyville.shrine@franciscanfriarsaustralia.org',
    ],
    website:
      'https://www.franciscanfriarsaustralia.org/shrineoftheholyinnocents',
    featured: false,
  },
  {
    name: "St Joseph’s Cathedral Rockhampton",
    slug: 'st-josephs-cathedral-rockhampton',
    diocese: 'Diocese of Rockhampton',
    street: '169 William Street',
    city: 'Rockhampton',
    state: 'NSW',
    lat: -33.8086466,
    lng: 151.0035436,
    image: '/sites/st-josephs-cathedral-rockhampton.jpg',
    description: [
      "St Joseph’s Catholic Cathedral has stood for over a century on the inner city corner of William and West Streets, Rockhampton. Its architecture and beauty and the magnitude of its stature, make it a focal point of the Rockhampton Diocese. It is as much for the people of the Diocese as visitors.",
      "St Joseph’s features a particularly fine black and white chequered Italian marble floor, sandstone block construction and authentic leadlight windows hand-crafted in England. These windows depict themes from the New Testament. Balancing the sandstone and tile construction is the deliberate use of timber, creating a warm and natural atmosphere. Compared to modern church design, the design of St Joseph’s and its character remind us of the transcendence of God.",
      "On 21 May 1882, Bishop John Cani was consecrated the first Bishop of Rockhampton. Plans were completed for the cathedral by 1892. The architect was FDG Stanley of Brisbane. Two years later tenders were called and construction began on 11 June 1894.",
      "On Sunday 15 October 1899, Cardinal Moran, Archbishop of Sydney, celebrated a Pontifical High Mass and preached to open the Cathedral. St Joseph’s has occupied much time and energy of subsequent Rockhampton Bishops. Many of the Cathedral’s historic stained glass windows were commissioned and installed during Bishop Higgins’ six years episcopacy.",
    ],
    sources: [
      'https://rok.catholic.net.au/our-diocese/st-josephs-cathedral/',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(07) 4927 6744',
      'CPOSJ.Admin@rok.catholic.net.au',
    ],
    website:
      'www.rockhamptoncatholics.org.au',
    featured: false,
  },
  {
    name: "St Mark’s Cathedral",
    slug: 'st-marks-cathedral',
    diocese: 'Diocese of Port Pirie',
    street: '107 Gertrude Street',
    city: 'Port Pirie',
    state: 'SA',
    lat: -33.1791144,
    lng: 138.007966,
    image: '/sites/st-marks-cathedral.jpg',
    description: [
      "Since 1875 there has been a Church on this site. In 1881 a more permanent Church was built. The stone on the north side of the Church dated 1911 marked the extension and completion of St Mark’s Church. ",
      "St Mark’s Church in Port Pirie was destroyed in a disastrous fire in 1947. Because of rigorous post-war building restrictions, nothing could be done immediately to restore the church and when this became possible, it was decided to rebuild it as the Cathedral of the Diocese.",
      "The Cathedral stands on the exact site of the old church, the walls of the church and the hall behind becoming the walls of the Cathedral.",
      "The Diocese of Port Pirie began as the Diocese of Port Augusta in 1887, under Bishop O’Reily. Successive Bishops lived at Pekina and Peterborough and it was in 1951 that Bishop McCabe announced the change of name of the Diocese, that the Bishop’s official residence would be at Port Pirie and that St. Mark’s would become the Cathedral.",
      "Before this could be carried out, Bishop McCabe was transferred to the Diocese of Wollongong and it was left to his successor, Bishop Gallagher, to take up residence in Port Pirie and to oversee the completion of the Cathedral which was blessed and opened on 1st March 1953 by a former Bishop of the Diocese, Cardinal Gilroy of Sydney.",
    ],
    sources: [
      'https://piriecathparish.org.au/st-marks-cathedral',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(08) 8632 3977',
      'saintmarkscatholic@pp.catholic.org.au',
    ],
    website:
      'www.piriecathparish.org.au',
    featured: false,
  },
  {
    name: "Sts Peter and Paul Church",
    slug: 'sts-peter-and-paul-church',
    diocese: 'Diocese of Port Pirie',
    street: '27 Hutchison Street',
    city: 'Coober Pedy',
    state: 'SA',
    lat: -29.0121714,
    lng: 134.7553371,
    image: '/sites/sts-peter-and-paul-church.jpg',
    description: [
      "No information currently available.",
    ],
    types: [
      'church',
    ],
    contact: [
      '(08) 8672 5011',
      'inlandmission@pp.catholic.org.au',
    ],
    website:
      'https://ppcatholic.org/parishes/coober-pedy',
    featured: false,
  },
];
