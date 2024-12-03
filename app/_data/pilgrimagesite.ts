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
    name: 'St Patrick&#39;s Church East Gosford, with the Relic of St John Paul II',
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
    featured: false,
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
      'https://www.stpatricksalbury.org.au/history/',
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
    name: 'Sacred Heart Church, Griffith',
    slug: 'sacred-heart-church-griffith',
    diocese: 'Diocese of Wagga Wagga',
    street: '11 Warrambool Street',
    city: 'Griffith',
    state: 'NSW',
    lat: -34.662605,
    lng: 149.413599,
    image: '/sites/sacred-heart-church-griffith.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
    featured: true,
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
    featured: true,
  },
  {
    name: 'Basilica of St Patrick, Fremantle',
    slug: 'basilica-of-st-patrick-fremantle',
    diocese: 'Archdiocese of Perth',
    street: '47 Adelaide Street',
    city: 'Fremantle',
    state: 'WA',
    lat: -33.838860249999996,
    lng: 151.20492718586553,
    image: '/sites/basilica-of-st-patrick-fremantle.jpg',
    description: [
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
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
      'Image: ©Silverstone Photography/DWA Architects/Metrocon for St John Paul II Church, Banksia Grove',
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'trail',
    ],
    contact: [
      '',
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    sources: [
      'https://www.monsignorhawes.com',
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
    lat: -41.5263152,
    lng: 146.8323988,
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
    lat: -33.838860249999996,
    lng: 151.20492718586553,
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
    lat: -33.838860249999996,
    lng: 151.20492718586553,
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
      'Information currently unavailable.',
      'Please see diocese or parish website for details. You may also use the contacts listed on this page to inquire.',
    ],
    types: [
      'trail',
    ],
    contact: [
      '',
    ],
    website:
      'https://www.aussiecamino.org/',
    featured: false,
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
    lat: -33.838860249999996,
    lng: 151.20492718586553,
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
    lat: -33.838860249999996,
    lng: 151.20492718586553,
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
    lat: -37.5618795,
    lng: 143.8527784,
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
];
