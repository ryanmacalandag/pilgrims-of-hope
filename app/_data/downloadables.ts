export type downloadablesType = {
  name: string;
  type: string;
  link: string;
  date: string;
  imageurl?: string;
  pinned?: boolean;
}

const downloadables: downloadablesType[] = [
  {
    name: "Opening of the Holy Door of St Peter's Basilica",
    type: "pdf",
    link: "https://acbcsecure.sharepoint.com/:b:/s/ConferenceExternalSharing/EUHZ2ifwoLFAhcQpOBKW6G0BAiOZCAbGR3WNP2QHK9ddYA?e=9XCiHn",
    date: "24-12-2024",
    pinned: true,
  },
  {
    name: "24 Hours for the Lord",
    type: "pdf",
    link: "https://acbcsecure.sharepoint.com/:b:/s/ConferenceExternalSharing/ER8v3nLmQYVEvwAUqz_F2z0Bx5PRf2UpojAp-6Vm2uhmew?e=WkBcgR",
    date: "26-12-2024",
    pinned: true,
  },
  {
    name: "Jubilee for the World Day of Communications",
    type: "pdf",
    link: "https://acbcsecure.sharepoint.com/:b:/s/ConferenceExternalSharing/EU3xp63MvldCghkmE9mALcABCuj6g-cZ0GK3N0ZKmDnWgA?e=yDUKvi",
    date: "24-01-2025",
    pinned: false,
  },
  {
    name: "Jubilee of the Armed Forces, Police and Security",
    type: "pdf",
    link: "https://acbcsecure.sharepoint.com/:b:/s/ConferenceExternalSharing/EUNPtT5U0uJNi-wy21KjnEMBI088FdpsV3V9vgBIqRxj4w?e=YBSBev",
    date: "08-02-2025",
    pinned: false,
  },
]

export default downloadables;