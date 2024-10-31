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
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: [
      'The Chapel was built in 1913 at the instigation of Mother Baptista Molloy in memory of Mary MacKillop. The land was donated in memory of the Daly family. The Chapel was dedicated by the Very Rev Michael Kelly, Archbishop of Sydney on 18 January 1914.',
      'On 28 January 1914, Mary’s remains were moved from Gore Hill Cemetery, her original resting place, and reinterred in front of Our Lady’s altar in the vault donated by Mary’s long-time friend, Johanna Barr-Smith.',
      'In 1994, Mary’s remains were moved to what was the original vestry of the Chapel. The Chapel was used by the Sisters of Saint Joseph for many years but since Mary’s beatification in 1995, has become a place of pilgrimage for thousands of people who come to pray and reflect at her tomb now in its own special place.',
    ],
    type: '',
    contact: [ '(02) 8912 4890', 'email@gmail.com' ],
    featured: true,
  },
  {
    name: 'Sacred Hearet Cathedral',
    slug: 'sacred-heart-cathedral-bendigo',
    diocese: 'Archdiocese of Sydney',
    street: '7 Mount Street',
    city: 'North Sydney',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: [
      'The Chapel was built in 1913 at the instigation of Mother Baptista Molloy in memory of Mary MacKillop. The land was donated in memory of the Daly family. The Chapel was dedicated by the Very Rev Michael Kelly, Archbishop of Sydney on 18 January 1914.',
      'On 28 January 1914, Mary’s remains were moved from Gore Hill Cemetery, her original resting place, and reinterred in front of Our Lady’s altar in the vault donated by Mary’s long-time friend, Johanna Barr-Smith.',
      'In 1994, Mary’s remains were moved to what was the original vestry of the Chapel. The Chapel was used by the Sisters of Saint Joseph for many years but since Mary’s beatification in 1995, has become a place of pilgrimage for thousands of people who come to pray and reflect at her tomb now in its own special place.',
    ],
    type: '',
    contact: [ '(02) 8912 4890', 'email@gmail.com' ],
    featured: true,
  },
  {
    name: 'St Clement Monastery',
    slug: 'st-celements-monastery',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: '352 Kalangan Road',
    city: 'Galong',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: [
      'St Clement&#39;s Retreat and Conference Centre, a mission of the Redemptorists, is located in Galong NSW, a little over an hour&#39;s drive from the centre of Canberra.',
      'Set in more than 300 hectares of rural land, the centre&#39;s peaceful location is conducive to reflection, prayer and study, and provides an ideal setting for conferences, workshops, seminars and religious retreats. It has a peaceful ambience that will meet the needs of both individuals and groups.',
      'At St Clement&#39;s we are proud of what we can offer and assure you of a warm welcome should you choose to hold your next retreat or conference with us.',
      'We are close to bus and train routes. Our prices are modest but our service is exceptional; and the setting is truly magnificent.',
      'We recognise the unique position of Aboriginal and Torres Straight Islander people in our culture and history. Aboriginal and Torres Straight Islander people have been the custodians of this Land, including all land occupied by the Congregation of the Most HolyRedeemer in Australia.',
    ],
    type: '',
    contact: [ '(02) 8912 4890', ],
    featured: true,
  },
  {
    name: 'Mary MacKillop Memorial Chapel',
    slug: 'mary-mackillop-memorial-chapel',
    diocese: 'Archdiocese of Sydney',
    street: '7 Mount Street',
    city: 'North Sydney',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: [
      '',
    ],
    type: '',
    contact: [ '(02) 8912 4890', ],
    featured: true,
  },
  {
    name: 'St Clement Monastery',
    slug: 'st-celements-monastery',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: '352 Kalangan Road',
    city: 'Galong',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: [
      '',
    ],
    type: '',
    contact: [ '(02) 8912 4890', ],
    featured: true,
  },
  {
    name: 'Mary MacKillop Memorial Chapel',
    slug: 'mary-mackillop-memorial-chapel',
    diocese: 'Archdiocese of Sydney',
    street: '7 Mount Street',
    city: 'North Sydney',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: [
      '',
    ],
    type: '',
    contact: [ '(02) 8912 4890', ],
    featured: true,
  },
  {
    name: 'St Clement Monastery',
    slug: 'st-celements-monastery',
    diocese: 'Archdiocese of Canberra and Goulburn',
    street: '352 Kalangan Road',
    city: 'Galong',
    state: 'NSW',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: [
      '',
    ],
    type: '',
    contact: [ '(02) 8912 4890', 'pastoral.care@mmp.org.au'],
    featured: true,
  },
]