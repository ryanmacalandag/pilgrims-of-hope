export type PilgrimageSiteType = {
  name: string;
  slug: string;
  diocese: string;
  street: string;
  city: string;
  state: string;
  maplink: string;
  image: string;
  description: string;
  type: string;
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: '',
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: '',
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: '',
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: '',
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/UiR4SZg5RAxybZ3QA',
    image: '/sites/mary-mackillop-memorial-chapel.jpg',
    description: '',
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
    state: 'nsw',
    maplink: 'https://maps.app.goo.gl/HJJQmTpixYJKg5sF9',
    image: '/sites/st-celements-monastery.jpg',
    description: '',
    type: '',
    contact: [ '(02) 8912 4890', 'pastoral.care@mmp.org.au'],
    featured: true,
  },
]