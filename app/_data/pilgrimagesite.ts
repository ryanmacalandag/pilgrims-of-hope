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
  type?: string;
  contact: string[];
  website?: string;
  featured: boolean;
}

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
    type: 'chapel',
    contact: [ '(02) 8912 4890', 'pastoral.care@mmp.org.au' ],
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
      'Sacred Heart Cathedral is the principal Church of the Diocese of Sandhurst and the home Church of the Cathedral Parish serving the people of central and north west parts of the city of Bendigo and many visitors to the church and the city.',
      'The cathedral was designed in the Gothic Revival style in 1895 by an architect of the firm Reed, Barnes and Tappin. It was listed on the Victorian Heritage Register on 4 September 1997.',
      'In 1895, Martin Crane, an Augustinian and the first bishop of the diocese, called for competitive designs for a cathedral from several architects. The winning architect was William Tappin of the firm Reed, Barnes and Tappin, a firm established by Joseph Reed, one of Melbourne&#39;s most significant architects. It was built in the Gothic Revival style from sandstone quarried from the Geelong area.',
    ],
    type: 'cathedral',
    contact: [ '(02) 8912 4890', 'email@gmail.com' ],
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
    type: 'retreat and conference center',
    contact: [ '(02) 8912 4890','info@stclement.com.au', ],
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
      'The parish was originally part of St Gregory&#39;s Parish, Queanbeyan, until 1912. Following the erection of the Diocese of Wagga Wagga in 1918, the parish was transferred to the Diocese of Goulburn.',
      'A foundation stone was laid by Archbishop Kelly in 1927 for a church and school. The following year St Christopher&#39;s became an independent parish with the first classes taught in the adjacent school, and the open day attended by the Prime Minister, Bruce. Father Patrick Haydon was appointed as parish priest of the new St Christopher&#39;s Parish at Manuka in 1928. In 1930 a large cathedral was proposed for the site behind Regatta Point, but economic circumstances and World War II made this impractical. A foundation stone for the cathedral was laid in 1938 by Archbishop of Sydney Gilroy in a ceremony which included Joseph Lyons and James Scullin. The choice of St Christopher as patron saint was selected on the basis that Canberra would be a place to which many travellers would come. In the presence of Robert Menzies, the Apostolic Delegate, Archbishop Panico, opened the parish church in 1939.',
    ],
    type: 'cathedral',
    contact: [ '02) 6239 9846','cathedral@cg.org.au', ],
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
      'St Peter and Paul&#39;s Old Cathedral is a heritage-listed former Catholic cathedral and now parish church at 42 Verner Street, Goulburn, Goulburn Mulwaree Council, New South Wales, Australia. It was designed by Andrea Stombuco and Charles Spadacini and built from 1871 to 1890 by C. J. O&#39;Brien and Wilkie Bros. It is also known as St. Peter and Paul&#39;s Former Cathedral and St Peter and Paul&#39;s Catholic Cathedral; Saints Peter and Paul&#39;s Catholic Cathedral. It was added to the New South Wales State Heritage Register on 20 April 2009.',
      'The former cathedral is a Victorian Gothic Revival building built in two stages around the original 1843 church. It has a classical cruciform plan with aisles flanking the nave, and a tower in the north east corner. Footings are of rubble stone, rendered above ground level. The base stringcourses and quoins use sandstone from the Morowollen quarries near Wingello, Marulan. Tracery of all windows, jambs, arches, turrets and crosses are of "Piedmont" stone from Sydney and are generally in good condition, indicating the durability of the material. The walls are constructed from green porphyry, a particularly hard igneous rock that has been squared and brought to courses of 300 millimetres (12 in) in height. The CMP notes that the greenstone, diorite porphyrite, is from a quarry on the Bungonia Road and is only found in very limited quantities and in one place near Goulburn.',
    ],
    type: 'cathedral',
    contact: [ '(02) 6239 9863','goulburn@cg.org.au', ],
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
      'A plaque on the old church reads, A temporary wooden church built in Eden [circa 18601 damaged by strong winds in September of 1860. Rebuilt November 1860. Land granted 27 July 1863 for the establishment of church presbytery and school reported in &quot;freeman&apos;s journal&quot; catholic church in Eden destroyed by fire 14 April 1877.',
      'After the tragic wreck of the "lyee moon" at Greencape and the drowning of flora mackillop in 1886. Mary Mackillop in 1891 established a school utilising the church building until 1912. mother Mary Mackillop visited the school Sunday 26 march 1899 to spend eight days examining the school children and equipment and again in august 1901. The association between the our lady star of the sea" old church building being used as school and Australia&apos;s blessed Mary Mackillop is of great historic significance to the catholic church and the people of Eden.',
      'A plaque on the bell reads, “ This bell tolls in memory - of the generations of the Hopkins Family, originally from Enniscrone, Co. Sligo and their contributions to the Catholic Church and the community of Eden.',
    ],
    type: 'church',
    contact: [ '0435 036 236 (Pambula Parish)','pambula@cg.org.au', ],
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
      'Cathedral of St Michael and St John is a heritage-listed Roman Catholic cathedral at 107 William Street, Bathurst, Bathurst Region, New South Wales, Australia. It was designed by Charles Hansom and built from 1857 to 1861 by Edward Gell. It is also known as Cathedral of Saints Michael and John. The cathedral is the episcopal see of the Roman Catholic Bishop of Bathurst. The property is owned by the Roman Catholic Diocese of Bathurst. It was added to the New South Wales State Heritage Register on 5 June 2012.',
      'The first Mass held in Bathurst was performed some time between 30 October 1830 and 2 November 1830. The Reverend John Therry (1794-1877) travelled inland from Sydney to minister to a group of "convicts about to be executed at Bathurst". Sloman surmised that at this time there may have been 120 to 130 Catholics in the region "who had not seen a priest for two to three years or longer". During his visit Therry baptized an infant daughter of Michael and Susan Keenan.',
      'By 1839 the number of Roman Catholics in communion at Bathurst had increased to 300. In that year work commenced on a permanent church building located on the corner of George and Keppel Streets. St Michael&apos;s Church was a Victorian Gothic style building constructed in brick. It was in use by 1841 but appears not to have been completed until 1846 when leadlight windows were installed.',
      'Bishop John Bede Polding (1794-1877), first Catholic Archbishop of Sydney, was interested in fostering the English Gothic style of architecture in his diocese. He arranged for plans for significant churches to be prepared by English architects including William Wardell (1823-1899) who was responsible for the design of St Mary&apos;s Cathedral in Sydney. In 1852 Polding brought to Bathurst a plan for a large church that had been prepared by English architect Charles Hansom. It is apparent that this plan became the basis of discussions regarding the construction of a new Roman Catholic church in Bathurst.',
    ],
    type: 'cathedral',
    contact: [ '(02) 6331 3066','office.cathedral@cdob.org.au','www.cathedralparish.org.au' ],
    website: 'https://bathurst.catholic.org.au/parishes-and-mass-times/cathedral-parish-of-st-michael-and-st-john-bathurst/',
    featured: true,
  },
]