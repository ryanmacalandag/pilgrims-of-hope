export type PilgrimageSiteType = {
  name: string;
  slug: string;
  diocese: string;
  street: string;
  city: string;
  state: string;
  maplink?: string;
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
    featured: true,
  },
  {
    name: 'St Christopher&#39;s Cathedral',
    slug: 'st-christophers-cathedral',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: 'Cnr Canberra Avenue and Furneaux Street',
    city: 'Forrest',
    state: 'ACT',
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
    featured: true,
  },
  {
    name: 'Our Lady Star of the Sea',
    slug: 'our-lady-star-of-the-sea',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: 'Chandos Street',
    city: 'Eden',
    state: 'NSW',
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
    name: 'The Cathedral of St Michael and St John ',
    slug: 'the-cathedral-of-st-michael-and-st-john',
    diocese: 'Diocese of Bathurst',
    street: 'Cnr Keppel and William Streets',
    city: 'Bathurst',
    state: 'NSW',
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
    featured: true,
  },
  {
    name: 'Diocesan Shrine of Our Lady of the Immaculate Conception', 
    slug: 'diocesan-shrine-of-our-lady-of-the-immaculate-conception',
    diocese: 'Diocese of Bathurst',
    street: 'Collins Street',
    city: 'Carcoar',
    state: 'NSW',
    image: '/sites/diocesan-shrine-of-our-lady-of-the-immaculate-conception.jpg',
    description: [
      'No description available',
    ],
    types: [
      'cathedral',
    ],
    contact: [
      '(02) 6331 3066 (Blayney Parish)',
    ],
    website:
      '',
    featured: true,
  },
  {
    name: 'Our Lady of the Rosary Cathedral',
    slug: 'our-lady-of-the-rosary-cathedral-broken-bay',
    diocese: 'Diocese of Broken Bay',
    street: '23 Yardley Avenue',
    city: 'Waitara',
    state: 'NSW',
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
    featured: true,
  },
  {
    name: 'St Patrick&#39;s Church East Gosford, with the Relic of St John Paul II',
    slug: 'st-patricks-church-east-gosford-with-the-relic-of-st-john-paul-ii-broken-bay',
    diocese: 'Diocese of Broken Bay',
    street: '76 York Street',
    city: 'East Gosford',
    state: 'NSW',
    image: '/sites/st-patricks-church-east-gosford-with-the-relic-of-st-john-paul-ii-broken-bay.jpg',
    description: [
      'St Patrick&#39;s Parish started its life as Our Lady of the Rosary Parish in Donnison Street, Gosford in 1876, and comprised of a church, presbytery, convent and school which was opened by the Sisters of St Joseph in 1910.',
      'As the population of Gosford and surrounding areas grew, Our Lady of the Rosary Church became an island bordered by busy roads and a railway line and was far too small.',
      'Fr Patrick McManus took the decision to purchase land at East Gosford and erect St. Patrick&#39;s Church for over 600 congregants which were opened on 28 February 1965.',
    ],
    sources: [
      'https://www.bbcatholic.org.au/gosford/our-parish/history',
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
    featured: true,
  },
  {
    name: 'Our Lady of Dolours Church Chatswood with the Relic of Blessed Carlo Acutis',
    slug: 'our-lady-of-dolours-church-chatswood-with-the-relic-of-blessed-carlo-acutis',
    diocese: 'Diocese of Broken Bay',
    street: '94 Archer St',
    city: 'Chatswood',
    state: 'NSW',
    image: '/sites/our-lady-of-dolours-church-chatswood-with-the-relic-of-blessed-carlo-acutis.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'St Mary&#39;s Church Manly, with the Relic of St John Vianney',
    slug: 'st-marys-church-manly-with-the-relic-of-st-john-vianney',
    diocese: 'Diocese of Broken Bay',
    street: '6 Raglan Street',
    city: 'Manly',
    state: 'NSW',
    image: '/sites/st-marys-church-manly-with-the-relic-of-st-john-vianney.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'St Michael&#39;s Cathedral, Wagga Wagga',
    slug: 'st-michaels-cathedral-wagga-wagga',
    diocese: 'Diocese of Wagga Wagga',
    street: '9 Church Street',
    city: 'Wagga Wagga',
    state: 'NSW',
    image: '/sites/st-michaels-cathedral-wagga-wagga.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Sacred Heart Church, Griffith',
    slug: 'sacred-heart-church-griffith',
    diocese: 'Diocese of Wagga Wagga',
    street: '11 Warrambool Street',
    city: 'Griffith',
    state: 'NSW',
    image: '/sites/sacred-heart-church-griffith.jpg',
    description: [
      'No description available',
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
    image: '/sites/st-mels-church-narrandera.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'St Joseph&#39;s Church, Leeton',
    slug: 'st-josephs-church-leeton',
    diocese: 'Diocese of Wagga Wagga',
    street: '4 Wade Avenue',
    city: 'Leeton',
    state: 'NSW',
    image: '/sites/st-josephs-church-leeton.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Grave of Rev. Dr Henry Backhaus',
    slug: 'grave-of-rev-dr-henry-backhaus',
    diocese: 'Diocese of Sandhurst',
    street: '161 McCrae Street',
    city: 'Bendigo',
    state: 'VIC',
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
    featured: true,
  },
  {
    name: 'Grave of Rev. George Galen',
    slug: 'grave-of-rev-george-galen',
    diocese: 'Diocese of Sandhurst',
    street: '25 Ford Street',
    city: 'Wangaratta',
    state: 'VIC',
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
    featured: true,
  },
  {
    name: 'Wagunyah Mass Tree',
    slug: 'wagunyah-mass-tree',
    diocese: 'Diocese of Sandhurst',
    street: 'Reserve Road',
    city: 'Wahgunyah',
    state: 'VIC',
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
    featured: true,
  },
  {
    name: 'Mary MacKillop Indigenous Gardens and Historic Trail',
    slug: 'mary-mackillop-indigenous-gardens-and-historic-trail',
    diocese: 'Diocese of Wagga Wagga',
    street: '20A Tocumwal Road',
    city: 'Numurkah',
    state: 'VIC',
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
    image: '/sites/basilica-of-st-patrick-fremantle.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Carmelite Monastery, Nedlands',
    slug: 'carmelite-monastery-nedlands',
    diocese: 'Archdiocese of Perth',
    street: '100 Adelma Road',
    city: 'Dalkeith',
    state: 'WA',
    image: '/sites/carmelite-monastery-nedlands.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'St John Paul II Catholic Church, Banksia Grove',
    slug: 'st-john-paul-ii-catholic-church-banksia-grove',
    diocese: 'Archdiocese of Perth',
    street: '6 Kurrajong Boulevard',
    city: 'Banksia Grove',
    state: 'WA',
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
    featured: true,
  },
  {
    name: 'St Mary&#39;s Cathedral Perth',
    slug: 'st-marys-cathedral-perth',
    diocese: 'Archdiocese of Perth',
    street: 'Victoria Square',
    city: 'Perth',
    state: 'WA',
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
    featured: true,
  },
  {
    name: 'Schoenstatt Shrine',
    slug: 'schoenstatt-shrine',
    diocese: 'Archdiocese of Perth',
    street: '9 Talus Drive',
    city: 'Mt Richon',
    state: 'WA',
    image: '/sites/schoenstatt-shrine.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Monsignor Hawes Heritage Trail',
    slug: 'monsignor-hawes-heritage-trail',
    diocese: 'Diocese of Geraldton',
    street: '',
    city: '',
    state: '',
    image: '/sites/monsignor-hawes-heritage-trail.jpg',
    description: [
      'No description available',
    ],
    types: [
      'trail',
    ],
    contact: [
      '',
    ],
    website:
      'https://www.monsignorhawes.com/hawes-heritage-trail/',
    featured: true,
  },
  {
    name: 'Camino San Francisco',
    slug: 'camino-san-francisco',
    diocese: 'Diocese of Geraldton',
    street: '',
    city: '',
    state: '',
    image: '/sites/camino-san-francisco.jpg',
    description: [
      'No description available',
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
    image: '/sites/st-marouns-cathedral.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Our Lady of Lebanon Co-Cathedral',
    slug: 'our-lady-of-lebanon-cocathedral',
    diocese: 'Maronite Eparchy',
    street: '40 Alice Street',
    city: 'Harris Park',
    state: 'NSW',
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
    featured: true,
  },
  {
    name: 'St Charbel&#39;s Church',
    slug: 'st-charbels-church',
    diocese: 'Maronite Eparchy',
    street: '142 Highclere Avenue',
    city: 'Punchbowl',
    state: 'NSW',
    image: '/sites/st-charbels-church.jpg',
    description: [
      'No description available',
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
    image: '/sites/our-lady-of-lebanon-church.jpg',
    description: [
      'No description available',
    ],
    types: [
      'church',
    ],
    contact: [
      '(03) 9480 2059',
    ],
    website:
      '',
    featured: true,
  },
  {
    name: 'Holy Trinity Catholic Church, Westbury',
    slug: 'holy-trinity-catholic-church-westbury',
    diocese: 'Archdiocese of Hobart',
    street: '94 Meander Valley Road',
    city: 'Westbury',
    state: 'TAS',
    image: '/sites/holy-trinity-catholic-church-westbury.jpg',
    description: [
      'No description available',
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
    featured: true,
  },
  {
    name: 'Our Lady of the Sacred Heart Catholic Church, Ross',
    slug: 'our-lady-of-the-sacred-heart-catholic-church-ross',
    diocese: 'Archdiocese of Hobart',
    street: '42 Church St',
    city: 'Ross',
    state: 'TAS',
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
    featured: true,
  },
];
